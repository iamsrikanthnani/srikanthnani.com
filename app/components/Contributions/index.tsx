import { ContributionYears, GithubUsername } from "@/data/about";
import type { GithubStats } from "@/lib/github";
import { OpenInNewWindowIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import GitHubCalendar from "react-github-calendar";
import HoverAnimContainer from "../HoverAnimContainer";

const formatCount = (n: number) =>
  n >= 1000 ? `${(n / 1000).toFixed(1).replace(/\.0$/, "")}k` : `${n}`;

const Contributions = ({ stats }: { stats?: GithubStats }) => {
  const statItems = stats
    ? [
        { label: "GitHub Stars", value: formatCount(stats.totalStars) },
        { label: "Followers", value: formatCount(stats.followers) },
        { label: "Public Repos", value: formatCount(stats.publicRepos) },
      ]
    : [];

  return (
    <div className="flex flex-col about-main w-full bg-[#0a0a0a] justify-center items-center px-8 sm:px-8 lg:px-36 pt-16 mt-[-60px] md:mt-[-120px]">
      <h2 className="place-self-start text-md sm:text-md lg:text-2xl bg-clip-text text-transparent bg-gradient-to-b from-green-400 to-blue-500 pointer-events-none">
        Github Contributions👇
      </h2>

      {/* Stats */}
      {statItems.length > 0 && (
        <div className="mt-10 flex w-full flex-wrap items-start justify-center gap-x-12 gap-y-8 sm:gap-x-20 lg:gap-x-28">
          {statItems.map((stat) => (
            <HoverAnimContainer
              key={stat.label}
              className="flex flex-col items-center text-center cursor-default"
            >
              <span className="text-5xl sm:text-6xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-green-400 to-blue-500">
                {stat.value}
              </span>
              <span className="mt-3 text-[11px] sm:text-xs uppercase tracking-[0.25em] text-neutral-400">
                {stat.label}
              </span>
            </HoverAnimContainer>
          ))}
        </div>
      )}

      <div className="flex w-full flex-col items-center gap-5 my-8">
        {ContributionYears.map((year) => (
          <GitHubCalendar
            transformTotalCount={true}
            key={`${year}-contributions`}
            year={year}
            username={GithubUsername}
            colorScheme="dark"
            labels={{
              totalCount:
                year === new Date().getFullYear()
                  ? "{{count}} contributions in {{year}}, and counting..."
                  : "{{count}} contributions in {{year}}",
            }}
          />
        ))}
      </div>
      <div className="flex w-full flex-col items-center gap-5 my-8">
        <HoverAnimContainer className="w-fit">
          <Link
            href="https://github.com/iamsrikanthnani"
            target="_blank"
            className="flex flex-row items-center text-md sm:text-md lg:text-2xl bg-clip-text text-transparent bg-gradient-to-b from-green-400 to-blue-500"
          >
            view on github
            <OpenInNewWindowIcon
              color="currentColor"
              className="w-4 h-4 ml-2 text-green-400"
            />
          </Link>
        </HoverAnimContainer>
      </div>
    </div>
  );
};

export default Contributions;
