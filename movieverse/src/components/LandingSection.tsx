import { LazyMotion, domAnimation, m, useAnimation } from "framer-motion";
import { ReactNode, useEffect } from "react";
import { useInView } from "react-intersection-observer";

export const LandingSection: React.FC<{
  children: ReactNode;
  name: string;
}> = ({ children, name }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const container = {
    hidden: { opacity: 0, y: 50 }, // add y for vertical movement
    visible: {
      opacity: 1,
      y: 0, // reset y
      transition: {
        staggerChildren: 0.5, // decrease for faster animation
        delayChildren: 0.2, // delay between each child animation
        staggerDirection: 1, // 1 for forward, -1 for backward
      },
    },
    hover: {
      scale: 1, // add scale for a slight zoom effect on hover
      transition: {
        duration: 0.3, // decrease for faster hover effect
      },
    },
  };

  return (
    <LazyMotion features={domAnimation}>
      <m.section
        ref={ref}
        animate={controls}
        variants={container}
        initial="hidden"
        whileHover="hover"
        id={name}
        className="w-full h-[1000px] grid place-items-center"
      >
        {children}
      </m.section>
    </LazyMotion>
  );
};