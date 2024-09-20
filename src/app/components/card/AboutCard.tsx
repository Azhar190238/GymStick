import React from 'react';
import { FiArrowUpRight } from 'react-icons/fi';
interface BannerProps {
    banner: {
        _id: number;
        title: string;
        image: string;
    };
}

const AboutCard: React.FC<BannerProps> = ({ banner }) => {
    return (
        <div
            style={{
                backgroundImage: `linear-gradient(45deg, rgba(7, 25, 82, 0.7), rgba(0, 0, 0, 0.3)), url('${banner.image}')`,
            }}
            className="rounded-[4px] lg:w-[31.6%] md:w-[48%] w-[100%] flex items-center h-80 bg-top bg-no-repeat bg-cover flex-shrink-0"
        >
            <div className="w-full mx-[20px] rounded-[4px] bg-gradient-to-b relative top-28 duration-300 border-[1px] border-[#E67529] backdrop-blur-[5px] ease-in-out bg-[#FFFFFF1A] hover:bg-[#E67529] group">
                <h1 className="text-white text-5xl flex uppercase justify-center py-1 pl-2 font-extrabold lato group-hover:text-white">
                    {banner.title}
                    <FiArrowUpRight className="text-[#E67529] ml-4 text-5xl font-extrabold transition-transform duration-300 group-hover:rotate-45 group-hover:text-white" />
                </h1>
            </div>
        </div>
    );
};

export default AboutCard;