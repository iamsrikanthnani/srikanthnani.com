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
  Contributions,
} from "@/components";
import Products from "./components/Products";

export default function Home() {
  // Render the component
  return (
    <div className="h-screen w-screen">
      <Preloader />
      {/* Hero section */}
      <Hero />
      {/* About section */}
      <About />
      {/* Products section */}
      <Products />
      {/* Skills section */}
      <Skills />
      {/* Contributions section */}
      <Contributions />

      {/* Experience section */}
      <Experience />

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
