import React from "react";
import { openingHours, socials } from "../../constants";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import gsap from "gsap";

const Contact = () => {
  useGSAP(() => {
    const titleSplit = SplitText.create("#contact h2", {
      type: "words",
    });

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#contact",
        start: "top center",
      },
      ease: "power1.inOut",
    });

    timeline
      .from(titleSplit.words, {
        opacity: 0,
        yPercent: 100,
        stagger: 0.02,
      })
      .from("#contact h3, #contact p", {
        opacity: 0,
        yPercent: 100,
        stagger: 0.02,
      })
      .to("#f-right-leaf", { y: 50 }, 0)
      .to("#f-left-leaf", { y: -50 }, "<");
  });

  return (
    <footer id="contact">
      <img
        src="/images/footer-right-leaf.png"
        alt="Right Leaf Decoration"
        id="f-right-leaf"
      />
      <img
        src="/images/footer-left-leaf.png"
        alt="Left Leaf Decoration"
        id="f-left-leaf"
      />
      <div className="content">
        <h2>Where to Find Us</h2>

        <div className="">
          <h3> Visit Our Bar</h3>
          <p>123 Mixology Lane, Cocktail City</p>
        </div>

        <div className="">
          <h3>Contact Us</h3>
          <p>Phone: (123) 456-7890</p>
          <p>Email: info@cocktailbar.com</p>
        </div>

        <div className="">
          <h3>Open Every Day</h3>
          {openingHours.map((time) => (
            <p key={time.day}>
              {time.day} : {time.time}
            </p>
          ))}
        </div>
        <div>
          <h3>Socials</h3>
          <div className="flex-center gap-5">
            {socials.map((social) => (
              <a
                href={social.url}
                key={social.name}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
              >
                <img src={social.icon} alt={social.name} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
