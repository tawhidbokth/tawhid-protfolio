import { useParams } from 'react-router-dom';
const projectData = {
  'career-counseling': {
    name: 'Career Counseling',
    image: 'https://i.ibb.co.com/86KSV5Q/career-counsiling.png',
    technologies: 'React, Node.js, MongoDB, Tailwind CSS',
    description:
      'A modern platform designed for seamless career guidance and counseling.',
    liveLink: 'https://career-counseling.com',
    github: 'https://github.com/yourusername/career-counseling-client',
    challenges:
      'Integrating real-time chat for counseling, ensuring scalability.',
    futurePlans: 'Adding AI-based career suggestions and more interactive UI.',
  },
  'sports-equipment': {
    name: 'Sports Equipment',
    image: 'https://i.ibb.co.com/0y6syKQ/sports-equipment.png',
    technologies: 'React, Firebase, Tailwind CSS',
    description:
      'A platform for equipment sharing and surplus reduction among users. You are tasked with developing a Sports Equipment Online Store. The goal is to create a responsive e-commerce platform where customers can browse, purchase, and review various sports accessories ranging from gear to apparel. The website caters to different sports disciplines and will support user authentication and product management.',
    liveLink: 'https://sports-equipment.com',
    github: 'https://github.com/yourusername/sports-equipment-client',
    challenges: 'Managing real-time inventory and user-to-user transactions.',
    futurePlans: 'Implementing blockchain-based ownership tracking.',
  },
  'restaurant-management': {
    name: 'Restaurant Management',
    image: 'https://i.ibb.co.com/MRGrqsX/restrurant.png',
    technologies: 'React, Express.js, MongoDB, Tailwind CSS',
    description:
      'A project for managing a wide array of foods and orders This  is a full-stack Restaurant Management website built using the MERN stack (MongoDB, Express.js, React.js, and Node.js). The platform enhances the restaurants online presence, improves customer interaction, and streamlines internal management processes. ',

    liveLink: 'https://restaurant-management.com',
    github: 'https://github.com/yourusername/restaurant-management-client',
    challenges: 'Optimizing order processing speed and database queries.',
    futurePlans: 'Adding AI-based order recommendations and analytics.',
  },
};

const ProjectDetails = () => {
  const { projectId } = useParams();
  const project = projectData[projectId];

 <p>home </p>
  if (!project) {
    return (
      <div className="text-center text-red-500 py-20">Project not found</div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 px-6">
      <div className="max-w-3xl w-full bg-gray-800 shadow-lg rounded-2xl overflow-hidden text-white p-8">
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-64 object-cover rounded-lg mb-6 shadow-md"
        />
        <h1 className="text-4xl font-bold mb-4 text-blue-400">
          {project.name}
        </h1>
        <p className="text-lg mb-4">{project.description}</p>

        <div className="bg-gray-700 p-4 rounded-lg mb-4 shadow-md">
          <h3 className="text-xl font-semibold text-blue-300">Technologies</h3>
          <p className="text-gray-300">{project.technologies}</p>
        </div>

        <div className="bg-gray-700 p-4 rounded-lg mb-4 shadow-md">
          <h3 className="text-xl font-semibold text-red-300">
            Challenges Faced
          </h3>
          <p className="text-gray-300">{project.challenges}</p>
        </div>

        <div className="bg-gray-700 p-4 rounded-lg mb-6 shadow-md">
          <h3 className="text-xl font-semibold text-green-300">Future Plans</h3>
          <p className="text-gray-300">{project.futurePlans}</p>
        </div>

        <div className="flex gap-4">
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 px-5 py-2 rounded-lg hover:bg-blue-600 transition duration-300 shadow-md"
          >
            Live Project
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-500 px-5 py-2 rounded-lg hover:bg-gray-600 transition duration-300 shadow-md"
          >
            GitHub Repo
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
