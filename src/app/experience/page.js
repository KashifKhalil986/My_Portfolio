import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode, faBriefcase } from '@fortawesome/free-solid-svg-icons';

const Experience = () => {
  const skills = [
    'React.js', 'Next.js', 'Redux',
    'JavaScript', 'TypeScript', 'Tailwind CSS',
    'Bootstrap', 'HTML5', 'CSS3',
  ];

  const experiences = [
    {
      title: 'Frontend Developer',
      company: 'Encoder Bytes',
      duration: 'Dec 2024 – Present',
      location: 'IT Park Peshawar, Pakistan',
      responsibilities: 'Transformed UI/UX designs into responsive websites using Tailwind CSS, JavaScript, TypeScript, and React. Collaborated in agile teams to integrate APIs, build pixel-perfect layouts, and optimize performance for scalable web applications',
    },
    {
      title: 'Frontend Developer Intern',
      company: 'Encoder Bytes',
      duration: 'Sep 2024 – Nov 2024',
      location: 'IT Park Peshawar, Pakistan',
      responsibilities: 'Transformed UI/UX designs into fully responsive websites using Tailwind CSS, JavaScript, TypeScript, and React. Implemented pixel-perfect layouts, optimized performance, integrated APIs, and collaborated with agile teams to build scalable web applications.',
    },
    {
      title: 'Frontend Developer Intern',
      company: 'Tritech Soft Solutions',
      duration: 'Jun 2024 – Aug 2024',
      location: 'Mardan, Pakistan',
      responsibilities: 'Contributed to multiple frontend projects using JavaScript, React, HTML, and CSS by developing dynamic and responsive interfaces. Collaborated with the development team to enhance user experience and optimize performance.',
    },
  ];

  return (
    <div className="bg-white w-full h-full px-10 pt-5 shadow-md rounded">
      <div className="flex gap-12 items-center">
        <h3 className="text-3xl font-semibold text-gray-800">
          Skills And Experience
        </h3>
        <div className="mt-2 bg-gradient-to-r from-[#FF9C1A] to-[#ED250A] w-96 h-0.5"></div>
      </div>

      <div className="pt-8 text-2xl font-semibold text-gray-800 flex items-center gap-2">
        Skills
        <FontAwesomeIcon icon={faLaptopCode} className="text-[#FF9C1A]" />
      </div>
      <div className="pt-3 flex flex-wrap gap-x-4 gap-y-2 text-lg text-gray-700">
        {skills.map((skill, index) => (
          <div key={index} className="w-[30%] flex items-center gap-2 font-semibold">
            <span className="text-[#FF9C1A]">•</span>
            {skill}
          </div>
        ))}
      </div>

      <div className="pt-10 text-2xl font-semibold text-gray-800 flex items-center gap-2">
        Experience
        <FontAwesomeIcon icon={faBriefcase} className="text-[#FF9C1A]" />
      </div>

      <div className="mt-3 flex flex-wrap gap-6">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="bg-gray-50 border border-gray-200 rounded-lg shadow p-4 w-full md:w-3/5 flex-1"
          >
          
            <h4 className="text-xl font-bold text-gray-800">{exp.title}</h4>
                          <span className="text-sm  text-gray-500">{exp.duration}</span>
            <p className="text-md text-gray-600 font-medium">{exp.company} — {exp.location}</p>
            <ul className="list-disc list-inside mt-2 space-y-1 text-gray-700 text-[15px]">
              {exp.responsibilities}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
