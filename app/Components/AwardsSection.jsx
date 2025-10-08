"use client";
import { motion } from 'framer-motion';
import { FaTrophy, FaAward, FaMedal, FaStar, FaRibbon, FaShieldAlt } from 'react-icons/fa';

const AwardsSection = () => {
  const awards = [
    {
      id: 1,
      title: "Excellence in Construction",
      year: "2024",
      description: "Recognized for outstanding construction quality and innovation in commercial projects",
      icon: FaTrophy,
      color: "#FFD700"
    },
    {
      id: 2,
      title: "Safety Excellence Award",
      year: "2023",
      description: "Zero incident rate and exceptional safety standards across all sites",
      icon: FaShieldAlt,
      color: "#001C73"
    },
    {
      id: 3,
      title: "Sustainable Builder",
      year: "2024",
      description: "Leadership in sustainable construction practices and green building",
      icon: FaAward,
      color: "#00A86B"
    },
    {
      id: 4,
      title: "Innovation in Design",
      year: "2023",
      description: "Pioneering innovative architectural designs and construction techniques",
      icon: FaMedal,
      color: "#0026A3"
    },
    {
      id: 5,
      title: "Client Satisfaction",
      year: "2024",
      description: "Highest client satisfaction ratings in the construction industry",
      icon: FaStar,
      color: "#FF6B35"
    },
    {
      id: 6,
      title: "Community Impact",
      year: "2023",
      description: "Outstanding contribution to community development projects",
      icon: FaRibbon,
      color: "#8B4513"
    }
  ];

  // Stunning animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        duration: 1
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0,
      y: 80,
      scale: 0.8,
      rotateY: -30
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateY: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
        duration: 0.8
      }
    },
    hover: {
      y: -15,
      scale: 1.05,
      rotateY: 5,
      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 20,
        duration: 0.3
      }
    }
  };

  const iconVariants = {
    hidden: { 
      scale: 0,
      rotate: -180
    },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 15,
        duration: 0.6
      }
    },
    hover: {
      scale: 1.2,
      rotate: 360,
      transition: {
        duration: 0.5,
        ease: "easeInOut"
      }
    }
  };

  const textVariants = {
    hidden: { 
      opacity: 0,
      y: 30,
      filter: "blur(10px)"
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
        duration: 0.6
      }
    }
  };

  const backgroundVariants = {
    animate: {
      scale: [1, 1.3, 1],
      opacity: [0.1, 0.3, 0.1],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const floatingElements = {
    animate: {
      y: [0, -25, 0],
      rotate: [0, 10, 0],
      transition: {
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section className="relative py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 overflow-hidden">
      {/* Background Elements */}
      <motion.div 
        className="absolute top-10 left-10 w-80 h-80 bg-[#001C73]/10 rounded-full blur-3xl"
        variants={backgroundVariants}
        animate="animate"
      />
      
      <motion.div 
        className="absolute bottom-10 right-10 w-96 h-96 bg-[#0026A3]/10 rounded-full blur-3xl"
        variants={backgroundVariants}
        animate="animate"
        transition={{ delay: 3 }}
      />

      {/* Floating Geometric Shapes */}
      <motion.div 
        className="absolute top-20 right-20 w-12 h-12 border-3 border-[#001C73]/20 rounded-xl transform rotate-45"
        variants={floatingElements}
        animate="animate"
      />
      
      <motion.div 
        className="absolute bottom-32 left-32 w-8 h-8 bg-[#0026A3]/20 rounded-full"
        animate={{
          y: [0, -40, 0],
          scale: [1, 1.5, 1],
          opacity: [0.4, 0.8, 0.4],
          transition: {
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div 
            className="inline-flex items-center gap-4 mb-6"
            variants={textVariants}
          >
            <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-[#001C73] rounded-full"></div>
            <span className="text-sm font-bold text-[#001C73] tracking-widest uppercase bg-[#001C73]/10 px-4 py-2 rounded-full">
              Our Achievements
            </span>
            <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-[#001C73] rounded-full"></div>
          </motion.div>

          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
            variants={textVariants}
          >
            Awards & <span className="bg-gradient-to-r from-[#001C73] via-[#0026A3] to-[#001C73] bg-clip-text text-transparent">Recognition</span>
          </motion.h2>

          <motion.div 
            className="w-24 h-1.5 bg-gradient-to-r from-[#001C73] to-[#0026A3] rounded-full mx-auto mb-8"
            variants={textVariants}
            whileHover={{ 
              scaleX: 2,
              transition: { duration: 0.3 }
            }}
          />

          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            variants={textVariants}
          >
            Celebrating excellence and recognition in construction innovation, safety, and client satisfaction
          </motion.p>
        </motion.div>

        {/* Awards Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {awards.map((award, index) => (
            <motion.div
              key={award.id}
              className="group relative"
              variants={cardVariants}
              whileHover="hover"
            >
              {/* Award Card */}
              <div className="relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-200/50 backdrop-blur-sm h-full">
                {/* Icon Container */}
                <motion.div 
                  className="relative p-8 flex justify-center"
                  variants={iconVariants}
                >
                  <div className="relative">
                    <motion.div 
                      className="absolute inset-0 bg-current rounded-full blur-lg opacity-20"
                      style={{ color: award.color }}
                      animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.2, 0.4, 0.2]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                    <award.icon 
                      className="text-5xl relative z-10" 
                      style={{ color: award.color }}
                    />
                  </div>
                </motion.div>

                {/* Content */}
                <div className="p-8 pt-0">
                  {/* Year Badge */}
                  <motion.div 
                    className="inline-block px-4 py-2 bg-gray-100 rounded-full mb-4"
                    variants={textVariants}
                  >
                    <span className="text-sm font-semibold text-gray-700">{award.year}</span>
                  </motion.div>

                  {/* Title */}
                  <motion.h3 
                    className="text-xl font-bold text-gray-900 mb-4 group-hover:text-[#001C73] transition-colors duration-300"
                    variants={textVariants}
                  >
                    {award.title}
                  </motion.h3>

                  {/* Description */}
                  <motion.p 
                    className="text-gray-600 leading-relaxed"
                    variants={textVariants}
                  >
                    {award.description}
                  </motion.p>
                </div>

                {/* Hover Border Effect */}
                <motion.div 
                  className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-[#001C73]/20"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />

                {/* Corner Accents */}
                <motion.div 
                  className="absolute top-4 right-4 w-3 h-3 border-t-2 border-r-2 border-[#001C73]/30 rounded-tr-lg"
                  animate={{
                    opacity: [0.3, 0.7, 0.3]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <motion.div 
                  className="absolute bottom-4 left-4 w-3 h-3 border-b-2 border-l-2 border-[#0026A3]/30 rounded-bl-lg"
                  animate={{
                    opacity: [0.3, 0.7, 0.3]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                />
              </div>

              {/* Floating Indicator */}
              <motion.div 
                className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-[#001C73] to-[#0026A3] rounded-full shadow-lg"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [1, 0.7, 1]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.2
                }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true }}
        >
          {[
            { number: '25+', label: 'Awards Won' },
            { number: '15', label: 'Years Excellence' },
            { number: '98%', label: 'Client Satisfaction' },
            { number: '50+', label: 'Projects Completed' }
          ].map((stat, index) => (
            <motion.div 
              key={stat.label}
              className="text-center p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-gray-200/50 shadow-lg hover:shadow-xl transition-all duration-300"
              variants={textVariants}
              whileHover={{ 
                scale: 1.05,
                y: -5,
                borderColor: '#001C73/30'
              }}
            >
              <motion.div 
                className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-gray-900 to-[#001C73] bg-clip-text text-transparent mb-2"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 200
                }}
                viewport={{ once: true }}
              >
                {stat.number}
              </motion.div>
              <div className="text-sm font-medium text-gray-600">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AwardsSection;