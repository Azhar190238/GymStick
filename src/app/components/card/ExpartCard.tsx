import Image from 'next/image';
import React from 'react';
import { FaFacebook, FaLinkedin, FaShareAlt, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from 'react-icons/fa6';

interface ExpartCardProps {
banner?:any
}

const ExpartCard: React.FC<ExpartCardProps> = ({ banner}) => {
  return (
    <div className='w-[420px] rounded shadow-custom-light border-b-2 border-b-slate-200'>
      <div className="relative w-[420px] h-full image-shape">
        <Image
          src="/images/expertTeam/1.png"
          alt="team"
          width={420}
          height={464}
          className="h-full w-full object-cover transition-all duration-300" 
        />
        <div className="absolute bottom-0 left-0 w-full h-[50%] opacity-0 hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-[#E67529] to-transparent" style={{ zIndex: 1 }} />
      </div>
      <div className="flex flex-col justify-between relative p-6">
        <div className="pt-10 pb-12 px-8">
          <p className="text-xl font-bold font-poppins text-black hover:text-[#E67529] transition-colors duration-300">
            {banner?.title}
          </p>
          <p className="mt-6 text-[16px] font-normal font-poppins text-black transition-colors duration-300">
            {banner?.description}
          </p>
        </div>
        <div className="relative flex items-center justify-center rounded-lg">
          <div className="absolute left-[60px] bottom-[180px] bg-[#333333] rotate-180 rounded-full text-white text-2xl p-5 cursor-pointer opacity-100 hover:opacity-0 transition-all duration-300">
            <FaShareAlt />
          </div>
          <div className="absolute left-[50px] bottom-44 flex flex-col rounded-3xl items-end space-y-7 bg-[#333333] py-5 px-7 text-white opacity-0 hover:opacity-100 transition-opacity duration-300">
            <a href="#" className="hover:text-[#E67529] transition-colors">
              <FaYoutube size={30} />
            </a>
            <a href="#" className="hover:text-[#E67529] transition-colors">
              <FaLinkedin size={30} />
            </a>
            <a href="#" className="hover:text-[#E67529] transition-colors">
              <FaXTwitter size={30} />
            </a>
            <a href="#" className="hover:text-[#E67529] transition-colors">
              <FaFacebook size={30} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpartCard;
