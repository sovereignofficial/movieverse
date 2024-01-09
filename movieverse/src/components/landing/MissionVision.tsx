import { LandingSection } from "../LandingSection";

const MissionVision = () => {
  return (
    <>
      <LandingSection name="mission-vision">
        <div
          className={`flex flex-col justify-center items-center gap-10 col-span-2  w-1/2 h-full`}
        >
          <h2 className="text-5xl">Our Mission</h2>
          <p className="text-gray-400">
            At Movieverse, our mission is to revolutionize the movie-watching
            experience by providing personalized recommendations, empowering
            users to discover films they'll love, and fostering a vibrant
            community of movie enthusiasts.
          </p>
        </div>
        <div
          className={`flex flex-col justify-center items-center gap-10 col-span-2 w-1/2 h-full`}
        >
          <h2 className="text-5xl">Our Vision</h2>
          <p className="text-gray-400">
            We envision a world where every individual can easily explore,
            connect with, and enjoy movies that resonate with their unique
            tastes and preferences. Through innovative technology and a passion
            for cinema, we aim to make discovering movies an enriching and
            delightful journey for everyone.
          </p>
        </div>

      </LandingSection>
    </>
  );
};

export default MissionVision;
