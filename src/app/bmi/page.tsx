import BMI from "../components/BMI";
import Pricing from "../components/home2/Pricing";
import Discount from "../components/Service/Discount";
import BasicHeader from "../components/shared/BasicHeader";

export default function Classes() {
    return (
     <div >
       <BasicHeader heading="BMI" subHeading="home"/>
         <BMI/>
         <Discount/>
         <div className="mt-20"> <Pricing/></div>
        

     </div>
    )}