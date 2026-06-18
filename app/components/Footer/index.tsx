/*
Footer Component
- Site footer with brand, social links, location and meta links.

Add/change/delete contact:
==> data/contact.ts

Author: github.com/iamsrikanthnani
*/
import Link from "next/link";
import {
  CodeIcon,
  EnvelopeClosedIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
  VideoIcon,
} from "@radix-ui/react-icons";
import XIcon from "../icons/XIcon";
import HoverAnimContainer from "../HoverAnimContainer";
import { SocialLinks } from "@/data";

const getSocialIcon = (url: string) => {
  const cls = "w-8 h-8";
  switch (true) {
    // Order matters: email + source-repo URLs both contain "srikanthnani.com",
    // so check mailto first, then the site repo, then the github profile.
    case url.startsWith("mailto:"):
      return <EnvelopeClosedIcon color="#fff" className={cls} />;
    case url.includes("srikanthnani.com"):
      return <CodeIcon color="#fff" className={cls} />;
    case url.includes("x.com"):
      return <XIcon color="#fff" className={cls} />;
    case url.includes("github"):
      return <GitHubLogoIcon color="#fff" className={cls} />;
    case url.includes("linkedin"):
      return <LinkedInLogoIcon color="#fff" className={cls} />;
    case url.includes("youtube"):
      return <VideoIcon color="#fff" className={cls} />;
    default:
      return null;
  }
};

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="w-screen bg-[#020202] border-t border-white/[0.08] px-8 sm:px-8 lg:px-36 pt-14 pb-10">
      <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
        {/* Brand */}
        <div className="flex flex-col gap-3 max-w-sm">
          <p className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-green-400 to-blue-500">
            Srikanth Nani
          </p>
          <p className="text-neutral-400 text-sm">
            Program until it programs you.
          </p>
          <p className="text-neutral-500 text-sm">📍 Hyderabad, India</p>
        </div>

        {/* Social links */}
        <div className="flex flex-col gap-3">
          <p className="text-sm text-neutral-400 uppercase tracking-wider">
            Find me online
          </p>
          <div className="flex flex-row flex-wrap gap-5 items-center">
            {SocialLinks.map((link, index) => (
              <Link
                href={link}
                target="_blank"
                key={index}
                aria-label={`Srikanth Nani on ${
                  link.split("/")[2] || "email"
                }`}
              >
                <HoverAnimContainer>{getSocialIcon(link)}</HoverAnimContainer>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mt-10 pt-6 border-t border-white/[0.06] text-sm text-neutral-500">
        <p>© {year} Srikanth Nani. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
