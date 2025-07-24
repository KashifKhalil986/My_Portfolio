'use client';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faHouse, faCode, faFolderOpen, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/navigation';
const Navbar = () => {
  const router = useRouter();
  const navItems = [
    { name: 'Home', icon: faHouse,path:'/' },
    { name: 'Experience', icon: faCode ,path:'/experience' },
    { name: 'Projects', icon: faFolderOpen,path:'/projects' },
    { name: 'Contact', icon: faEnvelope,path:'/contact' },
  ];

  return (
    <nav className="w-full flex flex-col px-6 md:px-24 py-6 dark:bg-gray-900 transition duration-300">
      <div className="flex items-center justify-between">
        <h1 className="text-4xl font-semibold bg-gradient-to-r from-[#FF9C1A] to-[#ED250A] bg-clip-text text-transparent">
          M Kashif Khalil
        </h1>
        {/* <FontAwesomeIcon
          icon={faMoon}
          className="text-gray-700 dark:text-white text-xl cursor-pointer rounded-full border p-2 border-gray-200"
        /> */}
      </div>

  <div className="w-full flex justify-end mt-4">
  <div className="w-1/3 border-2 p-2 px-7 rounded-xl border-gray-200 shadow-2xl">
    <ul className="flex space-x-8 justify-between">
      {navItems.map((item) => (
        <li
          key={item.name}
          className="flex flex-col items-center gap-1.5 text-lg font-semibold bg-gray-300 p-3 rounded-lg text-gray-700 dark:text-white hover:bg-gradient-to-r from-[#FF9C1A] to-[#ED250A] hover:text-white cursor-pointer transition"
      onClick={() => {
  console.log("Navigating to:", item.path);
  router.push(item.path);
}}
        >
          <FontAwesomeIcon icon={item.icon} />
          {item.name}
        </li>
      ))}
    </ul>
  </div>
</div>


    </nav>
  );
};

export default Navbar;
