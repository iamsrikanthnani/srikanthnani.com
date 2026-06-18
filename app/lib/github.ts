import { GithubUsername } from "@/data/about";

export type GithubStats = {
  totalStars: number;
  followers: number;
  publicRepos: number;
  starsByRepo: Record<string, number>;
};

const FALLBACK: GithubStats = {
  totalStars: 0,
  followers: 0,
  publicRepos: 0,
  starsByRepo: {},
};

// Extract "owner/repo" from a github URL (returns null for non-github links)
export const repoSlugFromUrl = (url?: string): string | null => {
  if (!url) return null;
  const match = url.match(/github\.com\/([^/]+\/[^/?#]+)/i);
  return match ? match[1].replace(/\.git$/, "").toLowerCase() : null;
};

// Look up stars for a project card given its links
export const starsForCard = (
  stats: GithubStats,
  card: { git?: string; link?: string },
): number => {
  const slug = repoSlugFromUrl(card.git) ?? repoSlugFromUrl(card.link);
  return slug ? (stats.starsByRepo[slug] ?? 0) : 0;
};

// Fetch public profile + repo stars. Revalidated hourly so the numbers stay
export const getGithubStats = async (): Promise<GithubStats> => {
  try {
    const headers: HeadersInit = { Accept: "application/vnd.github+json" };

    const [userRes, reposRes] = await Promise.all([
      fetch(`https://api.github.com/users/${GithubUsername}`, {
        headers,
        next: { revalidate: 3600 },
      }),
      fetch(
        `https://api.github.com/users/${GithubUsername}/repos?per_page=100&type=owner`,
        { headers, next: { revalidate: 3600 } },
      ),
    ]);

    if (!userRes.ok || !reposRes.ok) return FALLBACK;

    const user = await userRes.json();
    const repos: any[] = await reposRes.json();

    const starsByRepo: Record<string, number> = {};
    let totalStars = 0;
    for (const repo of repos) {
      if (repo.fork) continue;
      const stars = repo.stargazers_count ?? 0;
      totalStars += stars;
      if (repo.full_name) starsByRepo[repo.full_name.toLowerCase()] = stars;
    }

    return {
      totalStars,
      followers: user.followers ?? 0,
      publicRepos: user.public_repos ?? 0,
      starsByRepo,
    };
  } catch {
    return FALLBACK;
  }
};
