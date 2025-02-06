import Title from '../../Shared/Title/Title';
import { SiExpress } from 'react-icons/si';
import { motion } from 'framer-motion';
import html5 from '../../../assets/html.png';
import css from '../../../assets/css.png';
import tailwind from '../../../assets/tailwind-css.svg';
import javascript from '../../../assets/js.png';
import react from '../../../assets/react.png';
import nodejs from '../../../assets/nodejs.png';
import mongodb from '../../../assets/mongodb.png';

const skills = [
  {
    name: 'HTML',
    img: html5,
    desc: 'Mastering HTML to structure web content.',
  },
  { name: 'CSS', img: css, desc: 'Enhancing web pages with CSS styling.' },
  {
    name: 'Tailwind CSS',
    img: tailwind,
    desc: 'Using Tailwind CSS for efficient styling.',
  },
  {
    name: 'JavaScript',
    img: javascript,
    desc: 'Adding interactivity with JavaScript.',
  },
  { name: 'React', img: react, desc: 'Building dynamic UI with React.' },
  {
    name: 'Node.js',
    img: nodejs,
    desc: 'Understanding server-side with Node.js.',
  },
  {
    name: 'Express.js',
    icon: <SiExpress className="w-10 h-10 text-white" />,
    desc: 'Developing backends with Express.js.',
  },
];

const MySkills = () => {
  return (
    <div className="">
      <div className="mx-auto w-fit pb-16">
        <Title>SkillSet</Title>
      </div>

      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 mx-auto max-w-4xl">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="p-6 bg-white/10 rounded-xl shadow-lg flex flex-col items-center text-white backdrop-blur-lg"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-16 h-16 flex items-center justify-center">
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
            <h3 className="mt-4 text-lg font-semibold">{skill.name}</h3>
            <p className="text-sm mt-2 text-gray-300 text-center">
              {skill.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default MySkills;
