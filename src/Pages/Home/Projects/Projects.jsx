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
      name: 'Career Counseling',
      description:
        'A modern platform designed for seamless career guidance and counseling.',
      details: `Career Counseling is a modern matrimony platform designed for seamless connections.
        With a user-friendly interface and advanced features, Career Counseling simplifies the search for the perfect life partner.`,
      features: [
        'Users can add and find Counseling for a perfect match, and request contact information by paying a fee by Stripe.',
        'Created different user-friendly interfaces based on their roles, like admins and regular users.',
        'Allow users to filter counseling based on location, age, and gender.',
      ],
      liveSite: 'https://carrer-counsiling.web.app/',
      image: 'https://i.ibb.co.com/86KSV5Q/career-counsiling.png',
    },
    {
      id: 2,
      name: 'Sports Equipment',
      description:
        'A platform for equipment sharing and surplus reduction among users.',
      details: `Sports Equipment is a Community Equipment Sharing and Surplus Reduction Platform.
        It offers a user-friendly interface where users can view their sports equipment and request history, manage their profile, and track ongoing requests.`,
      features: [
        'Empower users to add surplus sports equipment for add, edit, or delete their listings as needed.',
        'Allow users to request sports equipment, view all equipment, and cancel their request if the status is pending.',
        'Donors can view and mark all sports equipment as delivered on the platform.',
      ],
      liveSite: 'https://sprots-enquipment.web.app/',
      image: 'https://i.ibb.co.com/0y6syKQ/sports-equipment.png',
    },
    {
      id: 3,
      name: 'Restaurant Management',
      description: 'A project for managing a wide array of foods and orders.',
      details: `Restaurant Management is a project where users can see a wide array of foods from leading global brands. Visitors can easily browse and explore a diverse selection of foods.`,
      features: [
        'Users can add foods with specific details and explore foods based on their brand names.',
        'View food details, add to cart, and easily manage added foods in cart.',
        'Responsive design across various devices.',
      ],
      liveSite: 'https://restaurant-management-we-d57a4.web.app/',
      image: 'https://i.ibb.co.com/MRGrqsX/restrurant.png',
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
              {selectedProject.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
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
                href={selectedProject.liveSite}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-md text-sm"
              >
                Github
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
