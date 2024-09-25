// import BasicHeader from "../components/About/BasicHeader";
import Brand from "../components/About/Brand";
import BasicGoogleMap from "../components/About/BasicGoogleMap";
import Welcome from "../components/About/Welcome";
import ExpertTeam from "../components/ExpertTeam";
import Pricing from "../components/home2/Pricing";
import BasicHeader from "../components/shared/BasicHeader";
import Marquee from "../components/About/Marquee";


export default function About() {
    return (
     <div>
       <BasicHeader heading="About" subHeading="home"/>
       <Welcome/>
       <Brand/>
       <Marquee></Marquee>
       <ExpertTeam/>
       <Pricing></Pricing>
       <BasicGoogleMap/>
     </div>
    )}