"use client";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import {
  About,
  Contact,
  Hero,
  Preloader,
  Projects,
  Skills,
  SocialLinks,
  Cursor,
  Experience,
} from "@/components";

export default function Home() {
  // // State to track loading status
  // const [isLoading, setIsLoading] = useState(true);

  // // Effect hook to handle loading animation and scroll behavior
  // useEffect(() => {
  //   (async () => {
  //     // Asynchronously load LocomotiveScroll library
  //     const LocomotiveScroll = (await import("locomotive-scroll")).default;
  //     const locomotiveScroll = new LocomotiveScroll();

  //     // Simulate loading for 2 seconds
  //     setTimeout(() => {
  //       // Set loading to false after 2 seconds
  //       setIsLoading(false);
  //       // Set cursor to default after loading
  //       document.body.style.cursor = "default";
  //       // Scroll to the top of the page after loading
  //       window.scrollTo(0, 0);
  //     }, 2000);
  //   })();
  // }, []); // Run only once on component mount

  // Render the component
  return (
    <div className="h-screen w-screen" style={{ backgroundColor: "#0c0c0c" }}>
      {/* Animate presence to manage animations */}
      {/* <AnimatePresence mode="wait"> */}
      {/* Show preloader if loading */}
      {/* {isLoading && <Preloader />} */}
      {/* </AnimatePresence> */}
      {/* Hero section */}
      <Hero />
      {/* About section */}
      <About />
      {/* Experience section */}
      <Experience />
      {/* Skills section */}
      <Skills />
      {/* Projects section */}
      <Projects />
      {/* Social links section */}
      <SocialLinks />
      {/* Contact section */}
      <Contact />
      {/* cursor */}
      <Cursor />
    </div>
  );
}
