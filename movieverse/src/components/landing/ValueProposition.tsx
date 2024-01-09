import { LandingSection } from "../LandingSection";
import { ValueImg } from "./ValueImg";
import { ValuesList } from "./ValuesList";

export const ValueProposition = () => {
  return (
    <LandingSection name="value-proposition">
      <div className=" space-y-7 flex flex-col justify-center items-center  w-full h-full">
        <h2 className="lg:text-4xl">What Makes Movieverse Unique?</h2>
        <ValuesList
          values={[
            <>
              <h3 className="text-indigo-200">Recommendation Algorithm</h3>
              <ValueImg src="/landing/discover.png" alt="recommend-movies" />
            </>,
            <>
              <h3 className="text-indigo-200">Infinite Scroll for Any Genre</h3>
              <ValueImg src="/landing/moviepool.png" alt="infinite-scroll" />
            </>,
            <>
              <h3 className="text-indigo-200">Explore</h3>
              <ValueImg src="/landing/explore.png" alt="explore-movies" />
            </>,
          ]}
        />
      </div>
    </LandingSection>
  );
};
