import { useGSAP } from "@gsap/react";
import { navLinks } from "../../constants";
import gsap from "gsap";

const Navbar = () => {
  useGSAP(() => {
    const navTween = gsap.timeline({
      scrollTrigger: {
        trigger: "nav", // The element to trigger the animation
        start: "bottom top", // Start when the bottom of the nav hits the top of the viewport
        end: "bottom top", // End when the top of the nav hits the top of the viewport
        scrub: true, // Allow scrubbing for smooth animation
      },
    });

    navTween.fromTo(
      "nav",
      { backgroundColor: "transparent" },
      {
        backgroundColor: "#00000050", // Change to a semi-transparent black
        backdropFilter: "blur(5px)",
        duration: 1,
        ease: "power1.inOut",
      },
    );
  }, []);

  return (
    <nav className="">
      <div>
        <a href="#home" className="flex items-center gap-2">
          <img src="/images/logo.png" alt="Velvet Pour" />
          <p>Velvet Pour</p>
        </a>

        <ul>
          {navLinks.map((link) => (
            <li key={link.id}>
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
