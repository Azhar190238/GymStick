import BasicHeader from "@/app/components/shared/BasicHeader";
import TrainerDetails from "@/app/components/Trainer/TrainerDetails";

export default function Details() {
    return (
        <div>
            <BasicHeader heading="Dainne Russell" subHeading="Home" />
            <TrainerDetails/>
        </div>
    );
}