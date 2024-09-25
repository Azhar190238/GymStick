import Image from 'next/image';
import React from 'react';
import { FiMapPin, FiPhoneCall } from 'react-icons/fi';
import { LuMailCheck } from 'react-icons/lu';

const Contact: React.FC = () => {
    return (
      
           
            <div className='max-w-[1320px] mx-auto '>
                 <div className='flex flex-col lg:flex-row w-full gap-10 lg:gap-28'>
                <div className='w-full lg:w-1/2  py-12 px-6'>
                    <h3 className="text-[48px] font-montserrat font-bold">
                        Contact
                    </h3>
                    <ul className="mt-8 text-secondary font-medium">
                        <div className='space-y-8'>
                            <p className='flex'>
                                <span><FiPhoneCall className='text-xl mr-2 mt-1' /> </span>
                                +8801404049797
                            </p>
                            <p className='flex'>
                                <span><LuMailCheck className='text-xl mr-2 mt-1' /> </span>
                                info@gymstick.com.bd
                            </p>
                            <p className='flex'>
                                <span><FiMapPin className='text-xl mr-2 mt-1' /> </span>
                                4th floor ds building <br /> road : #kDA 83 sonadanga, khulna <br /> bangladesh
                            </p>
                        </div>
                    </ul>
                    <div className='flex flex-col md:flex-row gap-6 mt-16'>
                        <Image className='rounded max-w-[312px] max-h-[419px]' src='/images/contact/1.png' width={312} height={419} alt='image' />
                        <Image className='rounded max-w-[254px] max-h-[367px] mt-20' src='/images/contact/2.png' width={254} height={367} alt='image' />
                    </div>
                </div>
                <div className='w-full lg:w-1/2 text-white px-6 '>
                    <p className='font-bold text-[20px] capitalize'>Get In Touch</p>
                    <p className='mt-6 font-bold text-[32px] md:text-[48px] text-primary capitalize'>Join Today!</p>
                    <form className='max-w-[630px] mt-12'>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 text-secondary font-medium'>
                            <div className="">
                                <label className="input-label font-montserrat ">First Name</label>
                                <input placeholder='Enter Your First Name' type="text" id="fName" name="fName" className=" block w-full px-4 py-5 mt-3  input-placeholder border border-secondary rounded" required />
                            </div>
                            <div className="">
                                <label className="input-label ont-montserrat">Last Name</label>
                                <input placeholder='Enter Your Last Name' type="text" id="lName" name="lName" className=" block w-full px-4 py-5  mt-3 input-placeholder border border-secondary rounded" required />
                            </div>
                            <div className="">
                                <label className="input-label ont-montserrat">Email</label>
                                <input placeholder='Enter Your Email' type="email" id="email" name="email" className=" block w-full px-4 py-5 mt-3 input-placeholder border border-secondary rounded" required />
                            </div>
                            <div className="">
                                <label className="input-label ont-montserrat">Phone Number</label>
                                <input placeholder='Enter Your Phone Number' type="text" id="phone" name="phone" className=" block w-full px-4 py-5 mt-3  input-placeholder border border-secondary rounded" required />
                            </div>
                        </div>
                        <div className='mt-6'>
                            <label className="input-label ont-montserrat text-secondary font-medium">Message</label>
                            <textarea placeholder='Write Your Message' id="lName" name="lName" className="h-[150px] w-full px-4 py-5 mt-3  input-placeholder border border-secondary rounded" required></textarea>
                        </div>
                        <button type="submit" className="button mt-12"> Submit </button>
                    </form>
                </div>
                </div>
            </div>
    );
};

export default Contact;
