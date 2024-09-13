import Image from 'next/image';
import React, { useState } from 'react';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { GoArrowRight } from 'react-icons/go';

interface TeamCardProps {
    name: string;
    role: string;
}

const TeamCard: React.FC<TeamCardProps> = ({ name, role }) => {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <div>
            <div
                className="relative shadow-md flex flex-col justify-between w-full mb-20 max-w-[312px] rounded overflow-hidden transition-shadow duration-300"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >

                <div className="">
                    <Image src="/images/Team/1.png" width={312} height={290} alt="Trainer" className="object-cover h-[290px]"
                    />
                </div>


                <div
                    className={`flex p-6 flex-col justify-between transition-colors duration-300 ${isHovered ? 'bg-[#E67529] text-white' : 'bg-white text-black'
                        }`}
                >
                    <div className="flex items-center justify-between">

                        <div className="text-lg">
                            <p> {name}</p>
                            <p className="mt-3 text-[16px]">{role}</p>
                        </div>


                        <button className="text-2xl rounded-lg">
                            <GoArrowRight />
                        </button>
                    </div>
                </div>


                {isHovered && (
                    <div className="transition-colors duration-300 absolute bottom-[115px] flex items-center justify-center rounded-lg">
                        <div className="flex flex-col items-end ml-6 space-y-7 bg-[#E6752933] py-5 px-4 text-white rounded">
                            <a href="#" className="hover:text-blue-600 transition-colors">
                                <FaXTwitter size={24} />
                            </a>
                            <a href="#" className="hover:text-blue-600 transition-colors">
                                <FaFacebook size={24} />
                            </a>
                            <a href="#" className="hover:text-blue-500 transition-colors">
                                <FaLinkedin size={24} />
                            </a>
                            <a href="#" className="hover:text-blue-500 transition-colors">
                                <FaInstagram size={24} />
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default TeamCard;