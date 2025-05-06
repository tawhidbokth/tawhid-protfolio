import Title from '../../Shared/Title/Title';
import { SiExpress, SiFirebase, SiMongodb } from 'react-icons/si';
import { motion } from 'framer-motion';
import html5 from '../../../assets/html.png';
import css from '../../../assets/css.png';
import tailwind from '../../../assets/tailwind-css.svg';
import javascript from '../../../assets/js.png';
import react from '../../../assets/react.png';
import nodejs from '../../../assets/nodejs.png';

const skills = [
  {
    name: 'HTML5',
    img: html5,
    desc: 'Semantic markup and modern web structure',
    color: 'from-orange-500 to-orange-600',
  },
  {
    name: 'CSS3',
    img: css,
    desc: 'Responsive designs and animations',
    color: 'from-blue-500 to-blue-600',
  },
  {
    name: 'Tailwind CSS',
    img: tailwind,
    desc: 'Utility-first CSS framework',
    color: 'from-cyan-400 to-blue-500',
  },
  {
    name: 'JavaScript',
    img: javascript,
    desc: 'ES6+ and modern JS features',
    color: 'from-yellow-400 to-yellow-500',
  },
  {
    name: 'React',
    img: react,
    desc: 'Hooks, Context, and performance',
    color: 'from-blue-400 to-cyan-400',
  },
  {
    name: 'Node.js',
    img: nodejs,
    desc: 'Server-side JavaScript runtime',
    color: 'from-green-500 to-green-600',
  },
  {
    name: 'Express.js',
    icon: <SiExpress className="w-8 h-8" />,
    desc: 'Minimalist web framework',
    color: 'from-gray-400 to-gray-600',
  },
  {
    name: 'MongoDB',
    icon: <SiMongodb className="w-8 h-8" />,
    desc: 'NoSQL database solutions',
    color: 'from-green-400 to-green-600',
  },
  {
    name: 'Firebase',
    icon: <SiFirebase className="w-8 h-8" />,
    desc: 'Authentication and realtime DB',
    color: 'from-yellow-500 to-orange-500',
  },
];

const MySkills = () => {
  return (
    <section className="py-20 px-4 max-w-7xl mx-auto" id="skills">
      <div className="text-center mb-16">
        <Title>My Technical Skills</Title>
        <motion.p
          className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Technologies I work with to build exceptional digital experiences
        </motion.p>
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="group relative overflow-hidden rounded-2xl bg-gradient-to-br p-[1px]"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ y: -5 }}
            style={{
              background: `linear-gradient(to bottom right, var(--tw-gradient-stops))`,
            }}
          >
            <div
              className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
            />
            <div className="relative h-full bg-gray-900/90 backdrop-blur-sm p-6 rounded-[calc(1rem-1px)]">
              <div className="flex flex-col items-center text-center">
                <div
                  className={`w-20 h-20 rounded-xl mb-4 flex items-center justify-center bg-white/5 group-hover:bg-white/10 transition-all ${
                    skill.img ? 'p-2' : 'p-4'
                  }`}
                >
                  {skill.img ? (
                    <img
                      src={skill.img}
                      className="w-full h-full object-contain"
                      alt={skill.name}
                      loading="lazy"
                    />
                  ) : (
                    <div
                      className={`text-3xl ${skill.color
                        .replace('from-', 'text-')
                        .replace(' to-', '-')}`}
                    >
                      {skill.icon}
                    </div>
                  )}
                </div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-2">
                  {skill.name}
                </h3>
                <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                  {skill.desc}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default MySkills;
