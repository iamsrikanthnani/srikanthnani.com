import Link from "next/link";

const Navigation = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-black text-white">
      <div className="text-lg font-bold">My Portfolio</div>
      <div className="flex gap-4">
        <Link href="#about" className="hover:underline">
          About
        </Link>
        <Link href="#experience" className="hover:underline">
          Experience
        </Link>
        <Link href="#skills" className="hover:underline">
          Skills
        </Link>
        <Link href="#projects" className="hover:underline">
          Projects
        </Link>
        <Link href="#products" className="hover:underline">
          Products
        </Link>
        <Link href="#contact" className="hover:underline">
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;
