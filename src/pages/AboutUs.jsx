
import Hero from "../components/Hero";
import Partners from "../components/Partners";
import MissionVision from "../components/MissionVision";

import VideoSection from "../components/VideoSection";



import Testimonials from "../components/Testimonials";
import Consultation from "../components/Consultation";

import Blime from "../components/Blime";
import ValuesAndRecognition from "../components/ValuesAndRecognition";
import TeamMembers from "../components/TeamMembers";

export default function AboutUs() {
  return (
    <div>
      {/* <Navbar /> */}
      <Hero />
      <Partners />
      <MissionVision />
   
      <VideoSection />
      <Blime/>
 
      <ValuesAndRecognition />
      <TeamMembers />
       <Testimonials /> 
       <Consultation />
      
    </div>
  );
}
