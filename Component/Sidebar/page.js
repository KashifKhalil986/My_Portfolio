'use client';
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faLocationDot, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
    const socialLinks = [
        {
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/in/m-kashif-khalil-406786284/',
            icon: faLinkedin,
        },
        {
            name: 'GitHub',
            url: 'https://github.com/KashifKhalil986',
            icon: faGithub,
        },
        {
            name: 'WhatsApp',
            url: 'https://wa.me/923495262735',
            icon: faWhatsapp,
        },
    ];

    const contactInfo = [
        {
            type: 'Location',
            value: 'IT Park Peshawar, Khyber Pakhtunkhwa, Pakistan',
            icon: faLocationDot,
        },
        {
            type: 'Phone',
            value: '+92 349 5262735',
            icon: faPhone,
        },
        {
            type: 'Email',
            value: 'kashifkhalil720@gmail.com',
            icon: faEnvelope,
        },
    ];
    return (
        <>
            <div className="relative w-full flex items-start justify-center rounded-xl border-2 border-gray-200 shadow-2xl ">
                <div className="absolute -top-24 left-1/2 transform -translate-x-1/2 z-10">
                    <img src="/picture.jpg" alt="Logo" className="w-44 h-44 rounded-lg shadow-lg" />
                </div>
                <div className="w-full absolute shadow-md bg-white text-center py-4">
                    <div className="mt-20">
                        <h1 className="text-2xl font-bold text-gray-800">M Kashif Khalil</h1>
                        <p className="text-sm text-gray-400 mt-1">Frontend Developer</p>
                    </div>
                    <div className="flex justify-center space-x-4 pt-6">
                        {socialLinks.map((item) => (
                            <div key={item.name} className="bg-gray-100 p-3.5 rounded">
                                <a
                                    href={item.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={` text-xl hover:opacity-80 ${item.name === 'LinkedIn' ? 'text-blue-600' : item.name === 'WhatsApp' ? 'text-green-500' : 'text-black'}`}
                                >
                                    <FontAwesomeIcon className="text-3xl" icon={item.icon} />
                                </a>
                            </div>
                        ))}
                    </div>

                    <div className="bg-gray-100 mx-4 mt-8 rounded-lg space-y-2">
                        {contactInfo.map((item) => (
                            <div key={item.type} className="bg-gray-100 p-2">
                                <div className="flex items-center space-x-4 border-b border-gray-300 mx-4 pb-1">
                                    <FontAwesomeIcon icon={item.icon} className="text-gray-600" />
                                    <span className="text-gray-800  text-lg">{item.value}</span>
                                </div>
                            </div>

                        ))}
                        <div className="mt-4">
                            <a
                                href="/Kashif_Frontend_developer_Cv.pdf"
                                download
                                className="inline-block bg-gradient-to-r from-[#FF9C1A] to-[#ED250A] text-white font-semibold px-6 py-2 mb-3 rounded-full shadow hover:opacity-90 transition"
                            >
                                Download Resume
                            </a>
                        </div>
                    </div>


                </div>

            </div>
        </>
    )
}

export default Sidebar
