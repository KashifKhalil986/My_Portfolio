'use client';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolderOpen } from '@fortawesome/free-solid-svg-icons';

const projects = [
  {
    name: 'SaaS Admin Dashboard',
    image: '/saasadmin.png',
    link: 'https://saas-admin-dashboard-seven.vercel.app/',
  },
  {
    name: 'SaaS User',
    image: '/saasuser.png',
    link: 'https://saas-user-frontend.vercel.app/',
  },
  {
    name: 'Budjeti',
    image: '/budjeti.png',
    link: 'https://budjeti.com/',
  },
];

const Project = () => {
  return (
    <div className="bg-white w-full h-full px-10 pt-5 pb-10 shadow-md rounded">
      <div className="flex items-center gap-2 mb-6">
        <h2 className="text-3xl font-semibold text-gray-800">Projects</h2>
        <FontAwesomeIcon icon={faFolderOpen} className="text-[#FF9C1A] text-2xl" />
      </div>

      <div className="w-4/5 flex flex-wrap justify-between gap-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className="w-full md:w-2/5  bg-gray-50 rounded-lg shadow border border-gray-200 overflow-hidden transition hover:shadow-lg"
          >
            <img
              src={project.image}
              alt={project.name}
              className=" "
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800">{project.name}</h3>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline text-sm mt-1 inline-block hover:text-blue-800"
              >
                View Live
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
