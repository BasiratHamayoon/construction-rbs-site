"use client";
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { FaChevronLeft, FaChevronRight, FaTrophy, FaAward, FaMedal, FaStar } from 'react-icons/fa';

// Mock award images - replace with your actual images
import award1 from '../../public/About/1.jpg';
import award2 from '../../public/About/2.jpg';
import award3 from '../../public/About/3.jpg';
import award4 from '../../public/About/4.jpg';
import award5 from '../../public/About/5.jpg';

const AwardWinningSection = () => {
  const [activeCard, setActiveCard] = useState(0);
  const scrollRef = useRef(null);

  const awards = [
    {
      id: 1,
      title: "Excellence in Construction 2024",
      year: "2024",
      description: "Awarded for exceptional construction quality and innovative project delivery in commercial infrastructure.",
      image: award1,
      icon: FaTrophy,
      color: "#FFD700",
      category: "Construction Excellence"
    },
    {
      id: 2,
      title: "Safety Innovation Award",
      year: "2023",
      description: "Recognized for implementing cutting-edge safety protocols and maintaining zero incident records.",
      image: award2,
      icon: FaAward,
      color: "#001C73",
      category: "Safety & Compliance"
    },
    {
      id: 3,
      title: "Sustainable Design Pioneer",
      year: "2024",
      description: "Honored for leadership in sustainable construction practices and eco-friendly building solutions.",
      image: award3,
      icon: FaMedal,
      color: "#00A86B",
      category: "Sustainability"
    },
    {
      id: 4,
      title: "Client Choice Award",
      year: "2023",
      description: "Voted by clients for outstanding service delivery and exceptional project management.",
      image: award4,
      icon: FaStar,
      color: "#FF6B35",
      category: "Client Satisfaction"
    },
    {
      id: 5,
      title: "Innovation in Architecture",
      year: "2024",
      description: "Celebrated for revolutionary architectural designs that redefine urban landscapes.",
      image: award5,
      icon: FaTrophy,
      color: "#0026A3",
      category: "Design Innovation"
    },
    {
      id: 6,
      title: "Community Impact Award",
      year: "2023",
      description: "Recognized for significant contributions to community development and social infrastructure.",
      image: award1,
      icon: FaAward,
      color: "#8B4513",
      category: "Community Service"
    }
  ];

  // New animation variants - cards coming from left and right
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 1
      }
    }
  };

  const cardVariants = {
    hidden: (index) => ({ 
      opacity: 0,
      x: index % 2 === 0 ? -200 : 200,
      y: 50,
      scale: 0.8
    }),
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 15,
        duration: 0.8
      }
    },
    hover: {
      y: -10,
      scale: 1.02,
      boxShadow: "0 20px 40px -10px rgba(0, 28, 115, 0.2)",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
        duration: 0.3
      }
    }
  };

  const titleVariants = {
    hidden: { 
      opacity: 0,
      y: 50
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.8
      }
    }
  };

  const backgroundVariants = {
    animate: {
      scale: [1, 1.2, 1],
      opacity: [0.1, 0.2, 0.1],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const scrollLeft = () => {
    if (scrollRef.current) {
      const newActive = activeCard > 0 ? activeCard - 1 : awards.length - 1;
      setActiveCard(newActive);
      scrollRef.current.scrollLeft -= 420;
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      const newActive = activeCard < awards.length - 1 ? activeCard + 1 : 0;
      setActiveCard(newActive);
      scrollRef.current.scrollLeft += 420;
    }
  };

  // Auto-scroll effect
  useEffect(() => {
    const interval = setInterval(() => {
      scrollRight();
    }, 4000);

    return () => clearInterval(interval);
  }, [activeCard]);

  return (
    <section className="relative py-20 bg-white overflow-hidden">
      {/* Background Elements */}
      <motion.div 
        className="absolute top-10 left-10 w-60 h-60 bg-[#001C73]/5 rounded-full blur-2xl"
        variants={backgroundVariants}
        animate="animate"
      />
      
      <motion.div 
        className="absolute bottom-10 right-10 w-72 h-72 bg-[#0026A3]/5 rounded-full blur-2xl"
        variants={backgroundVariants}
        animate="animate"
        transition={{ delay: 3 }}
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
            variants={titleVariants}
          >
            <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-[#001C73] rounded-full"></div>
            <span className="text-sm font-bold text-[#001C73] tracking-widest uppercase">
              Award Winning Excellence
            </span>
            <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-[#001C73] rounded-full"></div>
          </motion.div>

          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
            variants={titleVariants}
          >
            Our <span className="bg-gradient-to-r from-[#001C73] to-[#0026A3] bg-clip-text text-transparent">Awards</span>
          </motion.h2>

          <motion.div 
            className="w-20 h-1 bg-gradient-to-r from-[#001C73] to-[#0026A3] rounded-full mx-auto mb-8"
            variants={titleVariants}
          />

          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            variants={titleVariants}
          >
            Celebrating excellence and recognition in construction innovation, safety, and client satisfaction
          </motion.p>
        </motion.div>

        {/* Horizontal Scrolling Cards Container */}
        <div className="relative">
          {/* Navigation Buttons - Fully Rounded */}
          <motion.button
            onClick={scrollLeft}
            className="absolute -left-4 top-1/2 transform -translate-y-1/2 z-30 bg-white border border-gray-300 rounded-full w-12 h-12 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 group"
            whileHover={{ 
              scale: 1.1,
              backgroundColor: '#001C73'
            }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
          >
            <FaChevronLeft className="w-5 h-5 text-gray-600 group-hover:text-white transition-all duration-300" />
          </motion.button>

          <motion.button
            onClick={scrollRight}
            className="absolute -right-4 top-1/2 transform -translate-y-1/2 z-30 bg-white border border-gray-300 rounded-full w-12 h-12 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 group"
            whileHover={{ 
              scale: 1.1,
              backgroundColor: '#001C73'
            }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
          >
            <FaChevronRight className="w-5 h-5 text-gray-600 group-hover:text-white transition-all duration-300" />
          </motion.button>

          {/* Horizontal Scroll Container */}
          <motion.div
            ref={scrollRef}
            className="flex overflow-x-auto py-8 px-4 snap-x snap-mandatory scrollbar-hide"
            style={{ 
              scrollBehavior: 'smooth',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none'
            }}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {/* Hide scrollbar for Webkit browsers */}
            <style jsx>{`
              .scrollbar-hide::-webkit-scrollbar {
                display: none;
              }
            `}</style>
            
            {awards.map((award, index) => (
              <motion.div
                key={award.id}
                className="flex-none w-80 mx-4 snap-center"
                variants={cardVariants}
                custom={index}
                whileHover="hover"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {/* Clean Award Card */}
                <div className={`relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 ${
                  index === activeCard ? 'ring-2 ring-[#001C73]' : ''
                }`}>
                  {/* Image Container */}
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={award.image}
                      alt={award.title}
                      fill
                      className="object-cover"
                      priority
                    />
                    
                    {/* Simple Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    
                    {/* Award Icon */}
                    <div className="absolute top-4 left-4">
                      <award.icon 
                        className="text-2xl" 
                        style={{ color: award.color }}
                      />
                    </div>

                    {/* Year Badge */}
                    <div className="absolute top-4 right-4 bg-[#001C73] text-white rounded-lg px-3 py-1">
                      <span className="text-sm font-bold">{award.year}</span>
                    </div>

                    {/* Category */}
                    <div className="absolute bottom-4 left-4">
                      <span className="text-white text-sm font-medium bg-black/30 backdrop-blur-sm px-3 py-1 rounded-lg">
                        {award.category}
                      </span>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                      {award.title}
                    </h3>
                    
                    <p className="text-gray-600 leading-relaxed text-sm">
                      {award.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Dots Indicator */}
          <motion.div 
            className="flex justify-center space-x-3 mt-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
          >
            {awards.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setActiveCard(index);
                  if (scrollRef.current) {
                    scrollRef.current.scrollLeft = index * 420;
                  }
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeCard 
                    ? 'bg-[#001C73] w-8' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AwardWinningSection;