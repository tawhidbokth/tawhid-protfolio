import { motion } from 'framer-motion';
import { useState } from 'react';
import Title from '../Shared/Title/Title';
import { FiX, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const Certificates = () => {
  const certificates = [
    {
      id: 1,
      title: 'MERN Stack Certification',
      image: ' https://i.ibb.co/kgmmstX8/pograming-her-cer.png',
      issuer: 'Programming Hero',
      date: 'June 2024',
    },
    {
      id: 2,
      title: '10 Minute Email Writing',
      image: 'https://i.ibb.co/S4RqHkCK/10-minute-email-writing.png',
      issuer: 'TenMinute School',
      date: 'March 2025',
    },

    {
      id: 3,
      title: 'Mind training',
      image: '   https://i.ibb.co/3m9yKrZD/sabit-rayjan-mind-3.png',
      issuer: 'sabit international',
      date: 'January 2023',
    },
    {
      id: 4,
      title: 'Manid training focus',
      image: 'https://i.ibb.co/Xf3QSfJR/sabit-rayhan-traning-2.png',
      issuer: 'sabit international',
      date: 'Jan 2025',
    },
    {
      id: 5,
      title: 'Start Own business in 10 minutes',
      image: 'https://ik.imagekit.io/enoahxuky/10%20minute%20stratup.png',
      issuer: 'TenMinute School',
      date: 'April 2022',
    },
    {
      id: 6,
      title: '10 Minute Build Business',
      image:
        'https://ik.imagekit.io/enoahxuky/10%20minute%20build%20bussiness.png',
      issuer: 'TenMinute School',
      date: 'April 2022',
    },
  ];

  const [selectedCert, setSelectedCert] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (cert, index) => {
    setSelectedCert(cert);
    setCurrentIndex(index);
  };

  const closeLightbox = () => {
    setSelectedCert(null);
  };

  const navigate = direction => {
    let newIndex;
    if (direction === 'prev') {
      newIndex = (currentIndex - 1 + certificates.length) % certificates.length;
    } else {
      newIndex = (currentIndex + 1) % certificates.length;
    }
    setSelectedCert(certificates[newIndex]);
    setCurrentIndex(newIndex);
  };

  return (
    <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto" id="certificates">
      <div className="text-center mb-16">
        <Title>My Certifications</Title>
        <motion.p
          className="mt-4 text-lg md:text-xl text-gray-400 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Recognized achievements in my learning journey
        </motion.p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {certificates.map((cert, index) => (
          <motion.div
            key={cert.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -5 }}
            className="group relative overflow-hidden rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all"
          >
            <div
              className="aspect-[4/3] overflow-hidden cursor-pointer"
              onClick={() => openLightbox(cert, index)}
            >
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <div>
                  <h3 className="text-white font-medium text-lg">
                    {cert.title}
                  </h3>
                  <p className="text-gray-300 text-sm">
                    {cert.issuer} • {cert.date}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox Gallery */}
      {selectedCert && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-white hover:text-gray-300 transition-colors"
          >
            <FiX className="w-8 h-8" />
          </button>

          <button
            onClick={() => navigate('prev')}
            className="absolute left-6 md:left-12 text-white hover:text-gray-300 transition-colors p-2"
          >
            <FiChevronLeft className="w-8 h-8" />
          </button>

          <div className="max-w-4xl w-full">
            <div className="relative aspect-[4/3] bg-black rounded-lg overflow-hidden">
              <img
                src={selectedCert.image}
                alt={selectedCert.title}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="mt-4 text-center text-white">
              <h3 className="text-xl font-bold">{selectedCert.title}</h3>
              <p className="text-gray-300">
                {selectedCert.issuer} • {selectedCert.date}
              </p>
            </div>
          </div>

          <button
            onClick={() => navigate('next')}
            className="absolute right-6 md:right-12 text-white hover:text-gray-300 transition-colors p-2"
          >
            <FiChevronRight className="w-8 h-8" />
          </button>
        </div>
      )}
    </section>
  );
};

export default Certificates;
