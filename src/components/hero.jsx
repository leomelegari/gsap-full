import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";

const Hero = () => {
  useGSAP(() => {
    const heroSplit = new SplitText(".title", {
      type: "words, chars", // Split by words and characters
    });
    const paragraphSplit = new SplitText(".subtitle", {
      type: "lines", // Split by lines
    });

    heroSplit.chars.forEach((char) => char.classList.add("text-gradient"));

    gsap.from(heroSplit.chars, {
      yPercent: 100,
      duration: 1.8,
      ease: "expo.out",
      stagger: 0.06,
    });

    gsap.from(paragraphSplit.lines, {
      opacity: 0,
      yPercent: 100,
      duration: 1.8,
      ease: "expo.out",
      stagger: 0.06,
      delay: 1, // Delay to start after the title animation
    });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#hero",
          start: "top top", // Start when the top of the hero section hits the top of the viewport
          end: "bottom top", // End when the bottom of the hero section hits the top of the viewport
          scrub: true, // Allow scrubbing for smooth animation
        },
      })
      .to(".right-leaf", { y: 200 }, 0)
      .to(".left-leaf", { y: -200 }, 0);
  }, []);
  return (
    <>
      <section id="hero" className="noisy">
        <h1 className="title">MOJITO</h1>
        <img
          src="/images/hero-left-leaf.png"
          alt="Hero Left Leaf"
          className="left-leaf"
        />
        <img
          src="/images/hero-right-leaf.png"
          alt="Hero Right Leaf"
          className="right-leaf"
        />

        <div className="body">
          <div className="content">
            <div className="space-y-5 hidden md:block">
              <p className="">Cool. Crips. Classic.</p>
              <p className="subtitle">
                Sip the Spirit <br />
                of Summer
              </p>
            </div>
            <div className="view-cocktails">
              <p className="subtitle">
                Experience the perfect blend of fresh mint, zesty lime, and
                premium rum. Our signature mojito captures the essence of
                tropical paradise in every refreshing sip.
              </p>
              <a href="#cocktails">View cocktails</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
