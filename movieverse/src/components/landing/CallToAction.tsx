import { motion, useAnimation } from "framer-motion";
import {useInView} from 'react-intersection-observer';

import { LandingSection } from "../LandingSection";
import { useEffect } from "react";

const TypingText:React.FC<{text:string}> = ({ text }) => {
    const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
 const letters = Array.from(text);

 const container = {
   hidden: { opacity: 0 },
   visible: {
     opacity: 1,
     transition: {
       staggerChildren: 0.05,
     },
   },
 };

 const child = {
   hidden: { opacity: 0, y: 20 },
   visible: {
     opacity: 1,
     y: 0,
     transition: {
       type: 'spring',
       damping: 10,
       stiffness: 100,
     },
   },
 };

 return (
   <motion.div
     ref={ref}
     animate={controls}
     variants={container}
     initial="hidden"
   >
     {letters.map((letter, index) => (
       <motion.span className="sm:text-xl lg:text-6xl font-medium" variants={child} key={index}>
         {letter === ' ' ? '\u00A0' : letter}
       </motion.span>
     ))}
   </motion.div>
 );
};


export const CallToAction = () => {
  const title = "You can start and discover for free";

  return (
    <LandingSection name="call-to-action">
      <div className="w-full h-full lg:grid grid-cols-4 aurora-bg-cta sm:flex sm:flex-col items-center justify-center gap-10">
        <div className="flex-col flex justify-center items-center gap-7 col-span-3">
          <TypingText text={title}/>

          <motion.a
           href="/auth/login"
            className="text-lg font-medium px-10 py-3 rounded-full bg-red-500 "
            whileTap={{ scale: 0.9 }}
          >
            Try Movieverse Now
          </motion.a>
        </div>
        <div className="col-span-1 sm:h-60 sm:w-60 lg:w-full lg:h-full rounded-xl relative overflow-hidden grid place-items-center">
          <img
            className="w-full h-full object-cover brightness-50"
            src="/landing/mostlyliked.png"
            alt="cta"
            loading="lazy"
          />
        </div>
      </div>
    </LandingSection>
  );
};
