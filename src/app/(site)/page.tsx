
import AboutUs from "../components/AboutUs";
import AllNews from "../components/AllNews";
import BMI from "../components/BMI";
import ExpertTeam from "../components/ExpertTeam";
import Feature from "../components/Feature";
import ForCards from "../components/ForCards";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Team from "../components/Team";
import Testimonial from "../components/Testimonial";

export default function Home() {
  return (
    <div>
      <Hero></Hero>
     <Feature></Feature>
     <ExpertTeam></ExpertTeam>
     <AboutUs></AboutUs>
     <Services></Services>
     <BMI></BMI>
     <Team></Team>
     <AllNews></AllNews>
     <Testimonial></Testimonial>
     <ForCards></ForCards>
    </div>
  );
}
