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
  Footer,
} from "@/components";
import Products from "./components/Products";
import { getGithubStats } from "@/lib/github";

export default async function Home() {
  const stats = await getGithubStats();

  // Render the component
  return (
    <main className="min-h-screen w-full">
      <Preloader />
      {/* Hero section */}
      <Hero />
      {/* About section */}
      <About />
      {/* Products section */}
      <Products starsByRepo={stats.starsByRepo} />
      {/* Skills section */}
      <Skills />
      {/* Contributions section */}
      <Contributions stats={stats} />

      {/* Experience section */}
      <Experience />

      {/* Projects section */}
      <Projects starsByRepo={stats.starsByRepo} />
      {/* Social links section */}
      <SocialLinks />
      {/* Contact section */}
      <Contact />
      {/* Footer */}
      <Footer />
      {/* cursor */}
      <Cursor />
    </main>
  );
}
