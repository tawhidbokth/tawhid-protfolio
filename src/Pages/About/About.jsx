import Title from '../Shared/Title/Title';
import { HiCheckBadge } from 'react-icons/hi2';
import { motion } from 'framer-motion';
import AboutImage from './AboutImage';

const About = () => {
  return (
    <div className="max-w-7xl mx-auto mt-10" id="aboutUs">
      <section className="flex items-center xl:h-screen">
        <div className="justify-center flex-1 ">
          <div className="px-4 mb-10 md:text-center">
            <div className="w-fit mx-auto">
              <Title>About Me</Title>
            </div>
          </div>
          <div className="flex lg:flex-row flex-col justify-center gap-10 ">
            <motion.div
              initial={{ x: -150, opacity: 0 }}
              whileInView={{ x: 1, opacity: 1 }}
              transition={{ duration: 1 }}
              className="h-fit mx-auto"
            >
              <AboutImage></AboutImage>
            </motion.div>
            <motion.div
              className="w-full mb-10 lg:w-11/12 lg:mb-0 text-white"
              initial={{ x: 150, opacity: 0 }}
              whileInView={{ x: 1, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <h2 className="py-3 mb-4 text-2xl font-bold">So,Who Am I?</h2>
              <p className="mb-4/90 font-thin mb-10">
                I’m a passionate Frontend Developer with a strong interest in
                mastering the MERN stack. I enjoy building dynamic and engaging
                user experiences, solving complex problems, and exploring modern
                web technologies. My journey in web development started with
                Programming Hero, where I completed an extensive training
                program that fueled my passion for coding.
              </p>
              <div className="grid grid-cols-2 gap-10">
                <div>
                  <h6 className="font-bold">Email</h6>
                  <p className="md:text-sm text-xs font-thin text-white/80">
                    yasinbokthtawhid@gmail.com
                  </p>
                </div>
                <div>
                  <h6 className="font-bold">Location</h6>
                  <p className="md:text-sm text-xs font-thin text-white/80">
                    Sylhet,Bangladesh.
                  </p>
                </div>
                <div>
                  <h6 className="font-bold">Passion</h6>
                  <p className="md:text-sm text-xs font-thin text-white/80">
                    Traveling & Reading Books
                  </p>
                </div>
                <div>
                  <h6 className="font-bold">Age</h6>
                  <p className="md:text-sm text-xs font-thin text-white/80">
                    19 years
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default About;
