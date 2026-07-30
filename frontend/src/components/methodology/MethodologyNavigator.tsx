import { motion } from "framer-motion";
import { useEffect, useLayoutEffect, useRef, useState } from "react";

const sections = [
  { id: "architecture", label: "Architecture" },
  { id: "opportunity-analysis", label: "Evaluation" },
  { id: "search-discovery", label: "Discovery" },
];

export default function MethodologyNavigator() {
  const [activeSection, setActiveSection] = useState("architecture");

  const navRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  const [indicator, setIndicator] = useState({
    left: 0,
    width: 0,
  });

  const scrollToSection = (id: string) => {
    setActiveSection(id);

    const element = document.getElementById(id);
    if (!element) return;

    const y =
      element.getBoundingClientRect().top +
      window.scrollY -
      100;

    window.scrollTo({
      top: y,
      behavior: "smooth",
    });
  };

  useLayoutEffect(() => {
  const nav = navRef.current;
  const button = itemRefs.current[activeSection];

  if (!nav || !button) return;

  const navRect = nav.getBoundingClientRect();
  const buttonRect = button.getBoundingClientRect();

  console.log({
    activeSection,
    left: buttonRect.left - navRect.left,
    width: buttonRect.width,
  });

  setIndicator({
    left: buttonRect.left - navRect.left,
    width: buttonRect.width,
  });
}, [activeSection]);

  useEffect(() => {
    const observedSections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        let visibleSection: string | null = null;

        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            visibleSection = entry.target.id;
          }
        });

        if (visibleSection !== null) {
          setActiveSection(visibleSection);
        }
      },
      {
        threshold: 0.45,
        rootMargin: "-20% 0px -40% 0px",
      }
    );

    observedSections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="
        sticky
        top-16
        z-40
        bg-slate-900/70
        border
        border-slate-800
        backdrop-blur-xl
        rounded-2xl
        ">
        <div className="container mx-auto px-5 py-2">
          <div
            ref={navRef}
            className="
                relative
                mx-auto
                flex
                w-fit
                items-center
                gap-2
                after:absolute
                after:bottom-0
                after:left-0
                after:h-px
                after:w-full
                after:bg-border/40
                "
          >
            <motion.div
            className="
                absolute
                bottom-0
                left-0
                z-20
                h-1
                rounded-full
                bg-linear-to-r
                from-blue-500
                via-cyan-400
                to-violet-500
                shadow-lg
                shadow-blue-500/30
            "
            animate={{
                left: indicator.left,
                width: indicator.width,
            }}
            transition={{
                type: "spring",
                stiffness: 420,
                damping: 34,
            }}
            />

            {sections.map((section) => (
              <button
                key={section.id}
                ref={(el) => {
                  itemRefs.current[section.id] = el;
                }}
                onClick={() => scrollToSection(section.id)}
                className={`
                  relative
                  z-10
                  py-3
                  px-4
                  rounded-xl
                  text-sm
                  font-medium
                  transition-all
                  duration-300
                  hover:bg-slate-800/60
                  hover:-translate-y-0.5
                  ${
                    activeSection === section.id
                      ? "text-white"
                      : "text-slate-400 hover:text-white"
                  }
                `}
              >
                {section.label}
              </button>
            ))}
          </div>
        </div>
    </section>
  );
}