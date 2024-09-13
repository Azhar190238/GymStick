/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Dropdown, Space } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { IoMdCloseCircle } from 'react-icons/io';
const links = [
  { name: 'Home', dropdownItems: [{ name: 'Home 1', href: '/home1' }, { name: 'Home 2', href: '/home2' }] },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Shop', path: '/shop' },
  { name: 'Blogs', path: '/blogs' },
  { name: 'More', dropdownItems: [{ name: 'More 1', href: '/home1' }, { name: 'More 2', href: '/home2' }] },
];
const Navbar: React.FC = () => {
  const [activeLink, setActiveLink] = useState('Home');
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const handleLinkClick = (linkName: string, path?: string) => {
    setActiveLink(linkName);
    setIsOpen(false);
    if (path) {
      router.push(path);
    }
  };

  const toggleMenu = () => setIsOpen(!isOpen);

  const renderLinks = (isMobile: boolean = false) =>
    links.map((link, index) => (
      <div key={index}>
        {link.dropdownItems ? (
          <Dropdown
            menu={{ items: link.dropdownItems.map(({ name, href }) => ({ label: <a href={href}>{name}</a>, key: name })) }}
          >
            <a
              onClick={(e) => e.preventDefault()}
              className={`flex items-center space-x-1 ${activeLink === link.name ? 'text-[#E67529]' : 'text-white'}`}
            >
              <Space>{link.name}<DownOutlined /></Space>
            </a>
          </Dropdown>
        ) : (
          <a
            href={link.path}
            className={`font-noto text-[18px] font-medium ${activeLink === link.name ? 'text-[#E67529]' : 'text-white'}`}
            onClick={() => handleLinkClick(link.name, link.path)}
          >
            {link.name}
          </a>
        )}
      </div>
    ));

  return (
    <nav className="relative  z-10 pt-8 dark:bg-[#2B2B2B] ">
      <div className="max-w-[1320px] mx-auto px-4 pb-8 flex items-center justify-between">
        <a href="/" className="lg:mr-80">
          <Image src="/images/Logo.png" height={77} width={218} alt="logoImage" className='w-56 h-12' />
        </a>

        <div className="lg:hidden relative left-10">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {isOpen ? <IoMdCloseCircle className="text-3xl" /> : <GiHamburgerMenu className="text-3xl" />}
          </button>
        </div>

        <div className="hidden lg:flex items-center  text-[18px] font-medium text-white space-x-10">
          {renderLinks()}
        </div>
        <div className="ml-16">
          <button className="border-2 border-[#E67529] px-4 md:px-8 py-4 rounded-[4px] hover:bg-[#E67529] hover:text-white text-primary transition">
            Join Us
          </button>
        </div>
      </div>
      <div className='h-[1px] w-full relative bottom-[10px] bg-[#D9D9D933] '></div>
      {isOpen && (
        <div className="lg:hidden absolute top-28 left-0 w-full  z-50 flex flex-col text-[18px] font-medium px-4 space-y-4 text-white">
          {renderLinks(true)}
        </div>
      )}

    </nav>
  );
};

export default Navbar;
