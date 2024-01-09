import { Footer } from "~/components/landing/Footer"
import { Hero } from "~/components/landing/Hero"
import MissionVision from "~/components/landing/MissionVision"
import { Team } from "~/components/landing/Team"

export const About = () => {
  return (
    <div id="about" className="space-y-28">
      <Hero aurora={false}>
          <h1 className="text-6xl">About <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-orange-500">Movieverse</span></h1>
          <p className="text-gray-400">Discover the story behind Movieverse and our mission to revolutionize the way you experience movies.</p>
      </Hero>
      <MissionVision/>
      <Team/>
      <Footer/>
    </div>
  )
}
