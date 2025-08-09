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
    <div className="h-screen w-screen">
      {/* Animate presence to manage animations */}
      {/* <AnimatePresence mode="wait"> */}
      {/* Show preloader if loading */}
      {/* {isLoading && <Preloader />} */}
      {/* </AnimatePresence> */}
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
