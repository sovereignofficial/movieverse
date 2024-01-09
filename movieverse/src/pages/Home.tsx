import { Search } from "~/components/forms/SearchInput";
import { CallToAction } from "~/components/landing/CallToAction";
import { Footer } from "~/components/landing/Footer";
import { Hero } from "~/components/landing/Hero";
import { ValueProposition } from "~/components/landing/ValueProposition";

export const Home = () => {
  return (
    <div id="home" className="space-y-28">
      <Hero aurora>
        <h1 className="lg:text-5xl mb-3">
          Discover Your Next <span className="text-red-500 ">Favorite</span>{" "}
          Movie
        </h1>
        <p className="text-gray-300 text-center font-medium mb-10 lg:text-xl">
          Personalized movie recommendations based on your taste
        </p>
        <Search />
      </Hero>
      <ValueProposition />
      <CallToAction />
      <Footer />
    </div>
  );
};
