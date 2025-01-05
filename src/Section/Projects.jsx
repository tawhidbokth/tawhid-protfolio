import { AwesomeButton } from 'react-awesome-button';
import { HiOutlineExternalLink } from 'react-icons/hi';
import { motion } from 'framer-motion';
import Title from '../shared/titel';

const Projects = () => {
  const variants = {
    initial: { opacity: 0, scale: 0 },
    transition: { duration: 1 },
    whileInView: { opacity: 1, scale: 1 },
  };

  return (
    <div className="py-28" id="projects">
      <div className="mx-auto w-fit">
        <Title>Projects</Title>
      </div>
      <div className="grid lg:grid-cols-2 grid-cols-1 mx-auto place-items-center gap-6">
        <motion.img
          initial={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1, scale: 1 }}
          src="https://i.ibb.co.com/86KSV5Q/career-counsiling.png"
          alt=""
          className=" rounded-2xl lg:mt-28 mt-10 w-full"
        />
        <motion.div
          className="text-white lg:mt-28"
          initial={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1, scale: 1 }}
        >
          <h1 className="mb-2 text-5xl font-bold">Career Counsiling</h1>
          <p className="2xl:text-base text-white/90 text-sm font-thin">
            Career Counsiling is a modern matrimony platform designed for
            seamless connections. With a user-friendly interface and advanced
            features, Career Counsiling simplifies the search for the perfect
            life partner.
          </p>
          <h3 className="mt-4 font-bold">Core Features:</h3>
          <ul className="mb-7 list-inside list-disc 2xl:text-base text-white/90 text-sm font-thin">
            <li>
              Users can add and find Counsiling for a perfect match, and request
              contact information by paying a fee by Stripe.
            </li>
            <li>
              Created different user frandly based on their roles, like admins
              and regular users.
            </li>
            <li>
              Allow users to filter counsiling based on location, age, and
              gender
            </li>
          </ul>
          <a href="https://carrer-counsiling.web.app/" target="_blank">
            <AwesomeButton
              className="w-36 text-3xl"
              type="primary"
              before={<HiOutlineExternalLink className="text-lg font-bold" />}
            >
              Live Site
            </AwesomeButton>
          </a>
        </motion.div>
        <motion.div
          className="text-white lg:mt-28 mt-10"
          initial={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1, scale: 1 }}
        >
          <h1 className=" mb-2 text-5xl font-bold">Sprots Enquipment</h1>
          <p className="2xl:text-base text-white/90 text-sm font-thin">
            Sprots Enquipment is a Community Enquipment Sharing and Surplus
            Reduction Platform,it offers a user-friendly interface where users
            can view their Sprots Enquipment and request history, manage their
            profile, and track ongoing .
          </p>
          <h3 className="mt-4 font-bold">Core Features:</h3>
          <ul className="mb-7 list-inside list-disc 2xl:text-base text-white/90 text-sm font-thin">
            <li>
              Empower users to add surplus Sprots Enquipment for add, edit or
              delete their listings as needed
            </li>
            <li>
              Allow users to request Sprots Enquipment view all Enquipment, and
              cancel their request if the status is pending.
            </li>
            <li>
              Donors can view and mark all Sprots Enquipmentas delivered on the
              platform.
            </li>
          </ul>
          <a href="https://sprots-enquipment.web.app/" target="_blank">
            <AwesomeButton
              className="w-36 text-3xl"
              type="primary"
              before={<HiOutlineExternalLink className="text-lg font-bold" />}
            >
              Live Site
            </AwesomeButton>
          </a>
        </motion.div>
        <motion.img
          initial={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1, scale: 1 }}
          src="https://i.ibb.co.com/0y6syKQ/sports-equipment.png"
          alt=""
          className=" rounded-2xl lg:mt-28 w-full"
        />
        <motion.img
          initial={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1, scale: 1 }}
          src="https://i.ibb.co.com/MRGrqsX/restrurant.png"
          alt=""
          className=" rounded-2xl lg:mt-28 mt-10 w-full"
        />
        <motion.div
          className="text-white lg:mt-28 "
          initial={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1, scale: 1 }}
        >
          <h1 className="mb-2 text-5xl font-bold">Rastrurant Manegment</h1>
          <p className="2xl:text-base text-white/90 text-sm font-thin">
            Rastrurant Manegment is a project where user can see a Wide Array of
            foods from Leading Global Brands: Visitors can easily browse and
            explore a diverse selection of foods from renowned automobile
            manufacturers worldwide.
          </p>
          <h3 className="mt-4 font-bold">Core Features:</h3>
          <ul className="mb-7 list-inside list-disc 2xl:text-base text-white/90 text-sm font-thin">
            <li>
              Users can add foods with specific details and explore foods based
              on their brand names.
            </li>
            <li>
              View food details, add to cart, and easily manage added foods in
              cart.
            </li>
            <li>
              Users will experience responsive design across various devices
            </li>
          </ul>
          <a
            href="https://restaurant-management-we-d57a4.web.app/"
            target="_blank"
          >
            <AwesomeButton
              className="w-36 text-3xl"
              type="primary"
              before={<HiOutlineExternalLink className="text-lg font-bold" />}
            >
              Live Site
            </AwesomeButton>
          </a>
        </motion.div>
      </div>
    </div>
  );
};
export default Projects;
