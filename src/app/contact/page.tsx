import BasicGoogleMap from "../components/About/BasicGoogleMap";
import Contact from "../components/Contact/Contact";
import BasicHeader from "../components/shared/BasicHeader";

export default function Classes() {
    return (
     <div >
       <BasicHeader heading="Contact" subHeading="home"/>
       <Contact></Contact>
      <BasicGoogleMap></BasicGoogleMap>

     </div>
    )}