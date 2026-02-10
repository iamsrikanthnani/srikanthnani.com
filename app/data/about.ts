export const AboutContent =
  "I`m a Senior Product Engineer, I specialize in crafting immersive Mobile and Web Solutions. My expertise extends to technologies like TypeScript/JavaScript, ReactJS, NextJs, React Native, NodeJS, Express, MongoDB, PostgreSQL, MySQL, and tRPC/GraphQL. With each line of code, I strive to bring innovation and excellence to every project I undertake.";
export const AboutQuote =
  "In the realm where design, code, and user interaction converge, I find my home. Each project is a canvas where passion and precision meet, weaving unforgettable digital experiences. Let`s bring your ideas to life and create something extraordinary together.";
export const GithubUsername = "iamsrikanthnani";
export const ContributionStartYear = 2019;
const currentYear = new Date().getFullYear();
export const ContributionYears = Array.from(
  { length: currentYear - ContributionStartYear + 1 },
  (_, i) => currentYear - i
);
