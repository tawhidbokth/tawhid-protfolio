import Title from '../../Shared/Title/Title';
import { motion } from 'framer-motion';
import { AwesomeButton } from 'react-awesome-button';
import {
  RiSendPlaneFill,
  RiMailLine,
  RiPhoneLine,
  RiWhatsappLine,
} from 'react-icons/ri';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import { toast } from 'react-toastify';
import 'react-awesome-button/dist/styles.css';

const ContactUs = () => {
  const form = useRef();
  const sendEmail = e => {
    e.preventDefault();
    emailjs
      .sendForm(
        'service_jkb6g9m',
        'template_yynmrfi',
        form.current,
        'XX_rthWuRlfe41v_b'
      )
      .then(
        result => {
          if (result.text == 'OK') {
            form.current.reset();
            toast.success('Email sent successfully!');
          }
        },
        error => {
          toast.error('Failed to send email. Please try again.');
        }
      );
  };

  return (
    <section className="py-32 mx-auto px-4" id="contactUs">
      <div className="w-fit mx-auto mb-16">
        <Title>Get In Touch</Title>
      </div>

      <div className="flex lg:flex-row gap-12 flex-col justify-center items-center max-w-6xl mx-auto">
        {/* Contact Information Card */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, type: 'spring' }}
          className="text-white w-full lg:flex-1"
        >
          <div className="p-6 sm:p-8 bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl sm:rounded-2xl shadow-xl border border-white/10 backdrop-blur-sm">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Contact Information
            </h2>

            <ul className="space-y-4 sm:space-y-6">
              <motion.li
                whileHover={{ x: 5 }}
                className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-white/5 rounded-md sm:rounded-lg hover:bg-white/10 transition-all"
              >
                <div className="p-2 sm:p-3 bg-blue-500/20 rounded-full">
                  <RiMailLine className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" />
                </div>
                <div className="overflow-hidden">
                  <p className="text-xs sm:text-sm text-gray-400">Email</p>
                  <a
                    href="mailto:yasinbokthtawhid@gmail.com"
                    className="text-sm sm:text-base text-white hover:text-blue-400 transition-colors truncate block"
                    title="yasinbokthtawhid@gmail.com"
                  >
                    yasinbokthtawhid@gmail.com
                  </a>
                </div>
              </motion.li>

              <motion.li
                whileHover={{ x: 5 }}
                className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-white/5 rounded-md sm:rounded-lg hover:bg-white/10 transition-all"
              >
                <div className="p-2 sm:p-3 bg-green-500/20 rounded-full">
                  <RiPhoneLine className="w-5 h-5 sm:w-6 sm:h-6 text-green-400" />
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-gray-400">Phone</p>
                  <a
                    href="tel:+8801307664940"
                    className="text-sm sm:text-base text-white hover:text-green-400 transition-colors"
                  >
                    +8801307664940
                  </a>
                </div>
              </motion.li>

              <motion.li
                whileHover={{ x: 5 }}
                className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-white/5 rounded-md sm:rounded-lg hover:bg-white/10 transition-all"
              >
                <div className="p-2 sm:p-3 bg-emerald-500/20 rounded-full">
                  <RiWhatsappLine className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-400" />
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-gray-400">WhatsApp</p>
                  <a
                    href="https://wa.me/1307664940"
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm sm:text-base text-white hover:text-emerald-400 transition-colors"
                  >
                    +8801307664940
                  </a>
                </div>
              </motion.li>
            </ul>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, type: 'spring' }}
          className="flex-1 w-full"
        >
          <div className="p-8 bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-xl border border-white/10 backdrop-blur-sm">
            <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Send Me a Message
            </h2>

            <form className="space-y-6" ref={form} onSubmit={sendEmail}>
              <motion.div whileHover={{ scale: 1.01 }}>
                <label
                  htmlFor="Name"
                  className="block mb-2 text-sm font-medium text-gray-400"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  name="from_name"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                  placeholder="Enter your name"
                  required
                />
              </motion.div>

              <motion.div whileHover={{ scale: 1.01 }}>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-400"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  name="from_email"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                  placeholder="your.email@example.com"
                  required
                />
              </motion.div>

              <motion.div whileHover={{ scale: 1.01 }}>
                <label
                  htmlFor="message"
                  className="block mb-2 text-sm font-medium text-gray-400"
                >
                  Your Message
                </label>
                <textarea
                  name="message"
                  rows="5"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                  placeholder="Hello, I'd like to talk about..."
                  required
                ></textarea>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="pt-4"
              >
                <AwesomeButton
                  type="primary"
                  size="large"
                  before={<RiSendPlaneFill className="text-xl" />}
                  className="w-full"
                >
                  Send Message
                </AwesomeButton>
              </motion.div>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactUs;
