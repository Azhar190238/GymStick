import Image from 'next/image';
import React from 'react';
import { FaUserTie } from 'react-icons/fa';
import { BsFillCalendarFill } from 'react-icons/bs';
import { LiaLongArrowAltRightSolid } from 'react-icons/lia';

interface newsCardProps {
    heading: string;
}

const NewsCard: React.FC<newsCardProps>  = ({heading}) => {
    return (
       
                      <div
            className="bg-white group p-6 rounded shadow-custom-light" 
          >
            <div className="w-full md:w-[376px]  h-[360px]">
              <Image
                src="/images/News/1.png"
                alt="news"
                width={376}
                height={360}
                className="h-full w-full object-fill"
              />
            </div>
            <div>
              <h5 className="text-xl font-medium max-w-[365px] mt-6 mb-10 w-full group-hover:text-primary text-secondary  capitalize ">
                {heading}
              </h5>
              <div className="flex justify-between">
                <div className="flex gap-[8px] items-center  text-secondary duration-300 transition-all text-[16px]">
                  <FaUserTie />
                  <span className="font-normal font-[Poppins] text-[14px]">
                    admin
                  </span>
                </div>
                <div className="flex gap-[8px] items-center  text-secondary duration-300 transition-all text-[16px]">
                  <BsFillCalendarFill />
                  <span className="font-normal font-[Poppins] text-[14px] ">
                    03 sep, 2024
                  </span>
                </div>
                <button className="flex gap-[9px] items-center group-hover:text-primary text-secondary duration-300 transition-all text-[16px] cursor-pointer">
                  <span>Read More</span>
                  <LiaLongArrowAltRightSolid className="text-xl" />
                </button>
              </div>
            </div>
          </div>
     
    );
};

export default NewsCard;