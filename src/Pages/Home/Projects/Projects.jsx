import { Link } from 'react-router-dom';
import Title from '../../Shared/Title/Title';
import { AwesomeButton } from 'react-awesome-button';
import { HiOutlineExternalLink } from 'react-icons/hi';
import { motion } from 'framer-motion';
import { useState } from 'react';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      name: 'Employee Portal',
      description:
        'A modern platform designed for seamless career guidance and counseling.',
      details: `A comprehensive employee management system for HR and Admin to streamline employee data handling, task monitoring, payroll, and authentication. Built with React, Firebase, and Node.js.`,
      challenges: 'Managing jwt token and higest security.',
      technologies:
        'React, Firebase, Tailwind CSS Backend: Node.js, Express.js',
      futurePlans: 'Implementing payment getway system.',
      liveSite: 'https://employeemanagement01.netlify.app/',
      github: 'https://github.com/tawhidbokth/-Employee-management-client.git',
      image: 'https://i.ibb.co.com/zhNqbkHP/Untitled-design.png',
    },
    {
      id: 2,
      name: 'Sports Equipment',
      description:
        'A platform for equipment sharing and surplus reduction among users.',
      details: `Sports Equipment is a Community Equipment Sharing and Surplus Reduction Platform.
        It offers a user-friendly interface where users can view their sports equipment and request history, manage their profile, and track ongoing requests.`,
      technologies:
        'React, Firebase, Tailwind CSS Backend: Node.js, Express.js',
      challenges: 'Managing real-time inventory and user-to-user transactions.',
      futurePlans: 'Implementing blockchain-based ownership tracking.',
      liveSite: 'https://sprots-enquipment.web.app/',
      github: 'https://github.com/tawhidbokth/sports-equipment-clint.git ',
      image: 'https://i.ibb.co.com/0y6syKQ/sports-equipment.png',
    },
    {
      id: 3,
      name: 'Restaurant Management',
      description: 'A project for managing a wide array of foods and orders.',
      details: `Restaurant Management is a project where users can see a wide array of foods from leading global brands. Visitors can easily browse and explore a diverse selection of foods.`,
      technologies:
        'React, Firebase, Tailwind CSS Backend: Node.js, Express.js',
      challenges: 'Optimizing order processing speed and database queries.',
      futurePlans: 'Adding AI-based order recommendations and analytics.',
      liveSite: 'https://restaurant-management-we-d57a4.web.app/',
      github: 'https://github.com/tawhidbokth/restaurant-management-clint.git ',
      image: 'https://i.ibb.co.com/MRGrqsX/restrurant.png',
    },

    {
      id: 4,
      name: '🛠 Team Project: Food Delivery Website',
      description: 'A project for managing a wide array of foods and orders.',
      details:
        'A full-stack food delivery platform where restaurant owners can manage food items, customers can place orders and leave reviews, and riders can deliver orders. The project includes secure payment integration (SSLCommerz), role-based access, and responsive UI built with React and Tailwind CSS.',
      technologies:
        'React.js, Tailwind CSS, Node.js, Express.js, MongoDB (Mongoose), Firebase Auth, SSLCommerz',
      challenges:
        'Handling dynamic food management and order status updates in real-time Ensuring responsive UI and consistent user experience across all pages ',
      futurePlans: 'real world deployment and adding more features.',
      liveSite: 'https://tastyride-cd1a3.web.app/',
      client: 'https://github.com/safin33221/TastyRide-Client-Side',
      server: 'https://github.com/safin33221/TastyRide-Server-Side#',
      image:
        'https://i.ibb.co.com/zTqB6z8d/Chat-GPT-Image-May-5-2025-10-47-22-PM.png',
    },
  ];

  const handleViewDetails = project => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className="py-28" id="projects">
      <div className="mx-auto w-full">
        <Title>Projects</Title>
      </div>
      <div className="grid w-full lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 mt-10">
        {projects.map(project => (
          <motion.div
            key={project.id}
            className="bg-gray-800 p-6 rounded-xl shadow-lg text-white"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-72 object-cover rounded-lg mb-4"
            />
            <h2 className="text-2xl font-bold mb-2">{project.name}</h2>
            <p className="text-sm text-gray-300 mb-4">{project.description}</p>
            <button
              onClick={() => handleViewDetails(project)}
              className="text-sm bg-blue-500 px-4 py-2 rounded-md hover:bg-blue-600"
            >
              View Details
            </button>
          </motion.div>
        ))}
      </div>

      {selectedProject && (
        <div className="fixed w[400px] inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-[90%] max-w-2xl md:w-[50%] overflow-y-auto max-h-[90vh]">
            <h2 className="text-2xl font-bold mb-4">{selectedProject.name}</h2>
            <p className="mb-4">{selectedProject.details}</p>
            <h3 className="font-bold mb-2">Core Features:</h3>
            <ul className="list-disc pl-5 mb-4">
              <div className="bg-gray-700 p-4 rounded-lg mb-4 shadow-md">
                <h3 className="text-xl font-semibold text-blue-300">
                  Technologies
                </h3>
                <p className="text-gray-300">{selectedProject.technologies}</p>
              </div>

              <div className="bg-gray-700 p-4 rounded-lg mb-4 shadow-md">
                <h3 className="text-xl font-semibold text-red-300">
                  Challenges Faced
                </h3>
                <p className="text-gray-300">{selectedProject.challenges}</p>
              </div>

              <div className="bg-gray-700 p-4 rounded-lg mb-6 shadow-md">
                <h3 className="text-xl font-semibold text-green-300">
                  Future Plans
                </h3>
                <p className="text-gray-300">{selectedProject.futurePlans}</p>
              </div>
            </ul>
            <div className="flex flex-wrap gap-4">
              <a
                href={selectedProject.liveSite}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md text-sm"
              >
                Live Site
              </a>
              <a
                href={selectedProject.client}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-md text-sm"
              >
                Client-side
              </a>

              <a
                href={selectedProject.server}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-md text-sm"
              >
                Server-side
              </a>
              <button
                onClick={handleCloseModal}
                className="bg-red-500 hover:bg-red-600 text-black px-4 py-2 rounded-md text-sm"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default Projects;
