import { motion, useAnimation } from "framer-motion";
import { ReactNode, useEffect } from "react";
import { useInView } from "react-intersection-observer";

export const ValuesList: React.FC<{ values: ReactNode[] }> = ({ values }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start("show");
    }
  }, [controls, inView]);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.35, // decrease for faster animation
        delayChildren: 0.2, // delay between each child animation
        staggerDirection: 1, // 1 for forward, -1 for backward
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 }, // add y property for vertical movement
    show: { y: 0, opacity: 1, transition: { duration: 0.5 } }, // control duration of individual item animation
  };

  return (
    <motion.ul
      ref={ref}
      animate={controls}
      variants={container}
      initial="hidden"
      id="values"
      className="lg:grid grid-cols-3 gap-10  sm:flex sm:flex-col justify-between items-center"
    >
      {values.map((value, index) => (
        <motion.li
          variants={item}
          className="col-span-1 text-center space-y-4"
          key={index}
        >
          {value}
        </motion.li>
      ))}
    </motion.ul>
  );
};