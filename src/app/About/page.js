import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
const About = () => {
  // Education data as array of objects
  const education = [
    {
      degree: "Bachelor of Computer Software Engineering",
      institution: "UET Mardan",
      duration: "2020 – 2024",
    
    },
    {
      degree: "Intermediate in Pre-Engineering",
      institution: "PGC Risalpur",
      duration: "2018 – 2020",
    },
    {
      degree: "Matriculation in Science",
      institution: "APS Risalpur Cantt",
      duration: "2016 – 2018",
    },
  ];

  return (
    <div className="bg-white w-full h-full px-10 pt-5 shadow-md rounded">
      {/* ABOUT ME Section */}
      <div className="flex gap-12">
        <h3 className="text-3xl font-semibold text-gray-800">ABOUT ME</h3>
        <div className="mt-4 bg-gradient-to-r from-[#FF9C1A] to-[#ED250A] w-96 h-0.5"></div>
      </div>

      <p className="p-2 text-gray-600 text-xl">
        Frontend Developer with 1.5 years of experience in JavaScript, TypeScript, React.js, Next.js, and Redux.
        Skilled in building responsive user interfaces, optimizing performance, and collaborating in agile teams
        to deliver high-quality web applications. A quick learner with a strong focus on writing clean code and
        enhancing user experience.
      </p>

      {/* EDUCATION Section */}
      <div className="pt-8">
<h3 className="text-2xl font-semibold text-gray-800 flex items-center gap-2">
  Education
  <FontAwesomeIcon icon={faGraduationCap} className="text-[#FF9C1A]" />
</h3>
        <div className="flex flex-wrap gap-6 mt-8 xl:mb-20">
          {education.map((edu, index) => (
            <div
              key={index}
              className="flex-1 min-w-[280px] max-w-sm bg-gray-50 p-4 rounded-lg shadow border border-gray-200 hover:shadow-md transition"
            >
              <h4 className="text-lg font-semibold text-gray-800">{edu.degree}</h4>
              <p className="text-gray-600">{edu.institution}</p>
              <span className="text-sm text-gray-500">{edu.duration}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
