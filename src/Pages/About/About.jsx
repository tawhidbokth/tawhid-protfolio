import Title from '../Shared/Title/Title';
import { FiMail, FiMapPin, FiHeart, FiCalendar } from 'react-icons/fi';
import { FaReact, FaNodeJs } from 'react-icons/fa';
import { SiMongodb, SiExpress } from 'react-icons/si';
import { motion } from 'framer-motion';
import AboutImage from './AboutImage';

const About = () => {
  const aboutInfo = [
    {
      icon: <FiMail className="w-5 h-5" />,
      title: 'Email',
      value: 'yasinbokthtawhid@gmail.com',
      highlight: 'text-blue-400 hover:text-blue-300',
    },
    {
      icon: <FiMapPin className="w-5 h-5" />,
      title: 'Location',
      value: 'Sylhet, Bangladesh',
      highlight: 'text-green-400 hover:text-green-300',
    },
    {
      icon: <FiHeart className="w-5 h-5" />,
      title: 'Passion',
      value: 'Traveling & Reading',
      highlight: 'text-red-400 hover:text-red-300',
    },
    {
      icon: <FiCalendar className="w-5 h-5" />,
      title: 'Age',
      value: '19 years',
      highlight: 'text-purple-400 hover:text-purple-300',
    },
  ];

  const techStack = [
    { icon: <FaReact className="w-6 h-6 text-cyan-400" />, name: 'React' },
    { icon: <FaNodeJs className="w-6 h-6 text-green-500" />, name: 'Node.js' },
    { icon: <SiExpress className="w-6 h-6 text-gray-100" />, name: 'Express' },
    { icon: <SiMongodb className="w-6 h-6 text-green-400" />, name: 'MongoDB' },
  ];

  return (
    <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto" id="about">
      <div className="text-center mb-16">
        <Title>About Me</Title>
        <motion.p
          className="mt-4 text-lg md:text-xl text-gray-400 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Crafting digital experiences with clean code and creative solutions
        </motion.p>
      </div>

      <div className="flex flex-col lg:flex-row items-center gap-12 xl:gap-16">
        {/* Profile Image */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, type: 'spring' }}
          className="w-full lg:w-1/2 flex justify-center"
        >
          <div className="relative w-full max-w-md">
            <div className="absolute -inset-3 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-3xl blur-lg opacity-30 group-hover:opacity-50 transition-all duration-500"></div>
            <div className="relative rounded-2xl overflow-hidden border-4 border-white/10 hover:border-white/20 transition-all duration-300">
              <AboutImage className="w-full h-auto" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
            </div>
          </div>
        </motion.div>

        {/* About Content */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, type: 'spring' }}
          className="w-full lg:w-1/2 text-white"
        >
          <div className="mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white via-gray-300 to-gray-400 bg-clip-text text-transparent">
              Full Stack Developer
            </h2>

            <div className="space-y-4 text-gray-300">
              <p className="text-lg leading-relaxed">
                I'm a passionate developer specializing in the{' '}
                <span className="text-blue-400 font-medium">MERN stack</span>,
                dedicated to building performant, accessible, and responsive web
                applications.
              </p>
              <p className="text-lg leading-relaxed">
                My journey began with Programming Hero's intensive bootcamp,
                where I developed a strong foundation in modern web technologies
                and problem-solving skills.
              </p>
              <p className="text-lg leading-relaxed">
                When I'm not coding, you'll find me exploring new destinations
                or diving into tech books to expand my knowledge.
              </p>
            </div>
          </div>

          {/* Personal Info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {aboutInfo.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -3 }}
                className="p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all"
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`p-3 rounded-lg bg-white/5 ${item.highlight}`}
                  >
                    {item.icon}
                  </div>
                  <div className="overflow-hidden">
                    <h3 className="text-sm font-medium text-gray-400">
                      {item.title}
                    </h3>
                    <p className="text-sm sm:text-base text-white hover:text-blue-400 transition-colors truncate block">
                      {item.value}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Tech Stack */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4 text-white">
              Tech Stack
            </h3>
            <div className="flex flex-wrap gap-4">
              {techStack.map((tech, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10"
                >
                  {tech.icon}
                  <span className="text-white">{tech.name}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <a
              href="#contactUs"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-lg hover:opacity-90 transition-opacity font-medium"
            >
              Get In Touch
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
