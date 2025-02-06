import Title from '../../Shared/Title/Title';
import { motion } from 'framer-motion';
import contactlottie from '../../../assets/contactlottie.json';
import Lottie from 'lottie-react';
import { AwesomeButton } from 'react-awesome-button';
import { RiSendPlaneFill } from 'react-icons/ri';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import { toast } from 'react-toastify';

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
            return toast.success('Email sent successfully!');
          }
        },
        error => {
          toast.error('ERROR:', error.text);
        }
      );
  };

  return (
    <section class="pt-52 mx-auto" id="contactUs">
      <div className="w-fit mx-auto mb-16">
        <Title>Contact Me</Title>
      </div>
      <div className="flex lg:flex-row gap-16 flex-col justify-center items-center max-w-6xl mx-auto">
        <motion.div
          initial={{ x: -150, opacity: 0 }}
          whileInView={{ x: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-white flex-1"
        >
          <section class="contact-info p-6 bg-gray-900 rounded-lg shadow-lg">
            <h2 class="text-2xl font-bold mb-4 text-center text-white">
              Contact Information
            </h2>
            <ul class="space-y-4">
              <li class="contact-item text-lg hover:scale-105 transform transition duration-300 ease-in-out">
                <strong>Email: </strong>
                <a
                  href="mailto:yasinbokthtawhid@gmail.com"
                  class="text-blue-500 hover:text-blue-700"
                >
                  yasinbokthtawhid@gmail.com
                </a>
              </li>
              <li class="contact-item text-lg hover:scale-105 transform transition duration-300 ease-in-out">
                <strong>Phone: </strong>
                <a
                  href="tel:+8801307664940"
                  class="text-blue-500 hover:text-blue-700"
                >
                  +8801307664940
                </a>
              </li>
              <li class="contact-item text-lg hover:scale-105 transform transition duration-300 ease-in-out">
                <strong>WhatsApp: </strong>
                <a
                  href="https://wa.me/1307664940"
                  target="_blank"
                  class="text-blue-500 hover:text-blue-700"
                >
                  +8801307664940
                </a>
              </li>
            </ul>
          </section>
        </motion.div>
        <motion.div
          initial={{ x: 150, opacity: 0 }}
          whileInView={{ x: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex-1 md:w-3/4 w-full"
        >
          <form class="space-y-8" ref={form} onSubmit={sendEmail}>
            <div className="">
              <label
                for="Name"
                class="block mb-2 text-lg mt-10 font-medium text-white px-1"
              >
                Name
              </label>
              <input
                type="text"
                name="from_name"
                class="border-b text-white/80 border-white/90 bg-transparent text-sm focus:ring-primary-500 focus:border-primary-500 block w-full py-2.5 px-1"
                placeholder="Name"
                required
              />
            </div>
            <div className="text-white/80">
              <label
                for="email"
                class="block mb-2 text-lg mt-10 font-medium text-white px-1"
              >
                Your email
              </label>
              <input
                type="email"
                name="from_email"
                class="border-b  border-white/90 bg-transparent text-sm block w-full py-2.5 px-1"
                placeholder="name@gmail.com"
                required
              />
            </div>

            <div class="sm:col-span-2">
              <label
                for="message"
                class="block mb-2 text-lg mt-10 font-medium text-white px-1"
              >
                Your message
              </label>
              <textarea
                name="message"
                rows="6"
                class="border-b border-white/90 bg-transparent text-sm focus:ring-primary-500 text-white/80 focus:border-primary-500 block w-full py-2.5 px-1"
                placeholder="Leave a comment..."
                required
              ></textarea>
            </div>
            <AwesomeButton
              type="primary"
              before={<RiSendPlaneFill className=" text-xl" />}
            >
              <input type="submit" value="Send" />
            </AwesomeButton>
          </form>
        </motion.div>
      </div>
    </section>
  );
};
export default ContactUs;
