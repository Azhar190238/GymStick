// pages/404.tsx
import Image from "next/image";
import BasicHeader from "../components/shared/BasicHeader";

const Custom404:React.FC = () => {
  return (
    <div>
      <BasicHeader heading="Page not found" subHeading="Home" />
      <h1 className="text-[28px] -mt-10 font-semibold text-secondary flex justify-center">
        Whoops! That page doesn’t exist.
      </h1>
      <div className="flex flex-col items-center relative">
        <Image
          src="/images/error/1.png"
          width={740}
          height={400}
          alt="Error Page"
          className="mt-32"
        />
        <Image
          src="/images/error/3.png"
          width={550}
          height={600}
          alt="Error Page"
          className="absolute top-8"
        />
      </div>
    </div>
  );
};

export default Custom404;
