import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import { Footer } from "~/components/landing/Footer";

export const Pricing = () => {
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
  const plans = [
    {
      id: 1,
      name: "Free",
      price: "$0",
      features: [
        "Access to personalized movie recommendations",
        "Limited access to advanced filters",
        "Limited top picks storage",
      ],
      button: (
        <Link
          to={"/auth/login"}
          className="text-center block w-full py-2 px-4 bg-red-500 text-white font-semibold rounded-md hover:bg-red-600"
        >
          Start for free
        </Link>
      ),
    },
    {
      id: 2,
      name: "Premium",
      price: "$9.99/month",
      features: [
        "Unlimited access to personalized movie recommendations",
        "Full access to advanced filters",
        "Expanded top picks storage",
        "Priority support",
      ],
      button: (
        <button className="block w-full py-2 px-4 bg-red-500 text-white font-semibold rounded-md hover:bg-red-600">
          Subscribe
        </button>
      ),
    },
    // Add more plans here with similar structures
  ];
  return (
    <div id="pricing" className="space-y-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <h1 className="lg:text-4xl font-bold mb-8 text-center">Pricing Plans</h1>
        <motion.ul
          ref={ref}
          animate={controls}
          variants={container}
          initial="hidden"
          id="values"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 "
        >
          {plans.map((plan) => (
            <motion.li
              variants={item}
              className="border border-zinc-800 rounded-lg shadow-xl overflow-hidden"
              key={plan.id}
            >
             <div className="bg-zinc-900 w-full py-5 text-center">
                <h2 className="text-xl font-semibold mb-4">{plan.name}</h2>
              </div>
              <div className="p-6">
                <p className="text-3xl font-bold mb-4 text-center">
                  {plan.price}
                </p>
                <ul className="text-sm mb-6">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="mb-2">
                      <svg
                        className="w-4 h-4 inline mr-2 fill-current text-green-500"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M17.707 5.293l-8 8a1 1 0 0 1-1.414 0l-4-4a1 1 0 1 1 1.414-1.414L9 10.586l7.293-7.293a1 1 0 1 1 1.414 1.414z" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                {plan.button}
                </div>
            </motion.li>
          ))}
        </motion.ul>
        <p className="text-center mt-8 text-gray-400 text-xs">
          *Prices and features are subject to change
        </p>
      </div>
      <Footer />
    </div>
  );
};
