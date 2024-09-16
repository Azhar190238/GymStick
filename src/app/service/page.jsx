

// import Feature from "../components/Feature";
import Pricing from "../components/home2/Pricing";
import Discount from "../components/Service/Discount";
import Services from "../components/Service/Services";
import BasicHeader from "../components/shared/BasicHeader";
export default function About() {
    return (
     <div>
      <BasicHeader heading="Service" subHeading="home"/>
        <Services></Services>
        <Discount></Discount>
        <Pricing></Pricing>
      
     </div>
    )}