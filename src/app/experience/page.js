import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';
const Experience = () => {
  return (
    <div className="bg-white w-full h-full px-10 pt-5 shadow-md rounded">
      <div className="flex gap-12">
        <h3 className="text-3xl font-semibold text-gray-800">Skills And Experience</h3>
        <div className="mt-4 bg-gradient-to-r from-[#FF9C1A] to-[#ED250A] w-96 h-0.5"></div>
      </div>
<div className="pt-8 text-2xl font-semibold text-gray-800 flex items-center gap-2">
    Skills
      <FontAwesomeIcon icon={faLaptopCode} className="text-[#FF9C1A]" />
    
    </div>
     

   
    </div>
  )
}

export default Experience
