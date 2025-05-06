import { motion } from 'framer-motion';
import { useState } from 'react';
import Title from '../../Shared/Title/Title';
import { HiOutlineExternalLink } from 'react-icons/hi';
import { FiGithub } from 'react-icons/fi';
import { IoClose } from 'react-icons/io5';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      name: 'Employee Portal',
      description:
        'Modern HR platform for career guidance and employee management',
      details: [
        'Comprehensive employee management system for HR and Admin',
        'Streamlines employee data handling and task monitoring',
        'Includes payroll processing and authentication systems',
      ],
      challenges:
        'Managing JWT tokens and implementing high security standards',
      technologies: [
        'React',
        'Firebase',
        'Tailwind CSS',
        'Node.js',
        'Express.js',
      ],
      futurePlans: 'Implementing payment gateway system',
      liveSite: 'https://employeemanagement01.netlify.app/',
      github: 'https://github.com/tawhidbokth/-Employee-management-client.git',
      image: 'https://i.ibb.co.com/zhNqbkHP/Untitled-design.png',
    },
    {
      id: 2,
      name: 'Sports Equipment',
      description:
        'Community platform for equipment sharing and surplus reduction',
      details: [
        'User-friendly interface for equipment management',
        'Request history tracking and profile management',
        'Real-time inventory status updates',
      ],
      technologies: [
        'React',
        'Firebase',
        'Tailwind CSS',
        'Node.js',
        'Express.js',
      ],
      challenges: 'Managing real-time inventory and user-to-user transactions',
      futurePlans: 'Blockchain-based ownership tracking',
      liveSite: 'https://sprots-enquipment.web.app/',
      github: 'https://github.com/tawhidbokth/sports-equipment-clint.git',
      image: 'https://i.ibb.co.com/0y6syKQ/sports-equipment.png',
    },
    {
      id: 3,
      name: 'Restaurant Management',
      description: 'System for managing diverse food menus and orders',
      details: [
        'Showcases global food brands and diverse selections',
        'Easy browsing and exploration interface',
        'Order processing and management system',
      ],
      technologies: [
        'React',
        'Firebase',
        'Tailwind CSS',
        'Node.js',
        'Express.js',
      ],
      challenges: 'Optimizing order processing speed and database queries',
      futurePlans: 'AI-based order recommendations and analytics',
      liveSite: 'https://restaurant-management-we-d57a4.web.app/',
      github: 'https://github.com/tawhidbokth/restaurant-management-clint.git',
      image: 'https://i.ibb.co.com/MRGrqsX/restrurant.png',
    },
    {
      id: 4,
      name: 'Food Delivery Platform',
      description: 'Full-stack food delivery service with multiple roles',
      details: [
        'Restaurant owners can manage food items',
        'Customers can place orders and leave reviews',
        'Riders can track and deliver orders',
        'Secure payment integration (SSLCommerz)',
      ],
      technologies: [
        'React.js',
        'Tailwind CSS',
        'Node.js',
        'Express.js',
        'MongoDB',
        'Firebase Auth',
        'SSLCommerz',
      ],
      challenges:
        'Real-time order status updates and responsive UI consistency',
      futurePlans: 'Production deployment with enhanced features',
      liveSite: 'https://tastyride-cd1a3.web.app/',
      client: 'https://github.com/safin33221/TastyRide-Client-Side',
      server: 'https://github.com/safin33221/TastyRide-Server-Side#',
      image:
        'https://i.ibb.co.com/zTqB6z8d/Chat-GPT-Image-May-5-2025-10-47-22-PM.png',
    },
  ];

  const handleViewDetails = project => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section className="py-20 px-4 max-w-7xl mx-auto" id="projects">
      <div className="text-center mb-16">
        <Title>My Projects</Title>
        <motion.p
          className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          A showcase of my recent work and development projects
        </motion.p>
      </div>

      <div className="grid lg:grid-cols-2 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
        {projects.map(project => (
          <motion.div
            key={project.id}
            className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 hover:border-blue-400 transition-all duration-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -5 }}
          >
            <div className="h-60 overflow-hidden">
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  {project.name}
                </h3>
              </div>
              <p className="text-gray-400 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.slice(0, 3).map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 3 && (
                  <span className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded">
                    +{project.technologies.length - 3} more
                  </span>
                )}
              </div>
              <button
                onClick={() => handleViewDetails(project)}
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-lg hover:opacity-90 transition-opacity"
              >
                View Details
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {selectedProject && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-gray-900 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-gray-700 relative"
            initial={{ scale: 0.9, y: 50 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 50 }}
          >
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 text-gray-400 hover:text-white p-1 rounded-full bg-gray-800"
            >
              <IoClose className="w-6 h-6" />
            </button>

            <div className="h-64 md:h-80 w-full overflow-hidden">
              <img
                src={selectedProject.image}
                alt={selectedProject.name}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                {selectedProject.name}
              </h2>
              <p className="text-gray-400 mb-6">
                {selectedProject.description}
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-blue-400">
                    Project Details
                  </h3>
                  <ul className="list-disc pl-5 space-y-2 text-gray-300">
                    {selectedProject.details.map((detail, i) => (
                      <li key={i}>{detail}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3 text-purple-400">
                    Technologies Used
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3 text-red-400">
                    Challenges Faced
                  </h3>
                  <p className="text-gray-300">{selectedProject.challenges}</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3 text-green-400">
                    Future Plans
                  </h3>
                  <p className="text-gray-300">{selectedProject.futurePlans}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 mt-8">
                <a
                  href={selectedProject.liveSite}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
                >
                  <HiOutlineExternalLink /> Live Demo
                </a>
                <a
                  href={selectedProject.github || selectedProject.client}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-lg transition-colors"
                >
                  <FiGithub /> Client Code
                </a>
                {selectedProject.server && (
                  <a
                    href={selectedProject.server}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-lg transition-colors"
                  >
                    <FiGithub /> Server Code
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default Projects;
