import React from 'react';
import { motion } from 'framer-motion';
import { SiGooglemarketingplatform, SiCanva } from 'react-icons/si';
import { FaChartLine } from 'react-icons/fa';

const skills = [
  {
    name: 'Digital Marketing',
    icon: <SiGooglemarketingplatform className="w-10 h-10 text-white" />,
    desc: 'Strategic online campaigns and brand growth strategies.',
  },
  {
    name: 'Canva Design',
    icon: <SiCanva className="w-10 h-10 text-white" />,
    desc: 'Creating visually appealing designs and social media content.',
  },
  {
    name: 'Smart Conversion',
    icon: <FaChartLine className="w-10 h-10 text-white" />,
    desc: 'Optimizing user journeys and maximizing conversion rates.',
  },
];

const OtherSkills = () => {
  return (
    <div className="mt-16 px-4">
      <div className="mx-auto w-fit pb-16 text-center">
        <motion.h1
          className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Beyond Coding: Additional Skills
        </motion.h1>
        <motion.p
          className="mt-2 text-gray-400"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Skills that complement my technical expertise
        </motion.p>
      </div>

      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 mx-auto max-w-6xl">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="p-8 bg-gradient-to-br from-white/5 to-white/15 rounded-2xl shadow-lg flex flex-col items-center text-white backdrop-blur-lg border border-white/10 hover:border-white/20 transition-all"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.15 }}
            whileHover={{
              scale: 1.05,
              boxShadow: '0 10px 25px -5px rgba(255, 255, 255, 0.1)',
            }}
          >
            <div className="w-20 h-20 flex items-center justify-center bg-white/10 rounded-full mb-4">
              {skill.img ? (
                <img
                  src={skill.img}
                  className="w-full h-full"
                  alt={skill.name}
                />
              ) : (
                skill.icon
              )}
            </div>
            <h3 className="mt-2 text-xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              {skill.name}
            </h3>
            <p className="text-sm mt-3 text-gray-300 text-center leading-relaxed">
              {skill.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default OtherSkills;
