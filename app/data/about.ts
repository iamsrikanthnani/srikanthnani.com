export const AboutContent =
  "I'm a Senior Product Engineer. I take products from idea to ship, end to end, across mobile and web. My work spans the full stack: TypeScript, React, Next.js, React Native, Node.js, Express, MongoDB, PostgreSQL and tRPC/GraphQL. I've built open-source tools trusted by thousands of developers worldwide. I engineer for scale, design for clarity, and care about the details that turn good software into products people remember.";
export const AboutQuote =
  "I build where design, engineering and people meet. Every product is a chance to turn a sharp idea into something that feels inevitable - simple, considered and built to last. Let's create something worth remembering.";
export const GithubUsername = "iamsrikanthnani";
export const ContributionStartYear = 2019;
const currentYear = new Date().getFullYear();
export const ContributionYears = Array.from(
  { length: currentYear - ContributionStartYear + 1 },
  (_, i) => currentYear - i,
);
