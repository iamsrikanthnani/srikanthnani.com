import { ContributionYears, GithubUsername } from "@/data/about";
import { OpenInNewWindowIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import GitHubCalendar from "react-github-calendar";

const Contributions = () => {
  return (
    <div className="flex flex-col about-main w-full bg-[#0a0a0a] justify-center items-center px-8 sm:px-8 lg:px-36  mt-[-60px] md:mt-[-120px]">
      <p className="place-self-start pt-16 text-md sm:text-md lg:text-2xl bg-clip-text text-transparent bg-gradient-to-b from-green-400 to-blue-500 pointer-events-none">
        Github Contributions👇
      </p>
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
      </div>
    </div>
  );
};

export default Contributions;
