"use client";
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import Image from 'next/image';
import { useRef, useState, useEffect } from 'react';

// Mock team images - replace with your actual images
import teamMember1 from '../../public/About/team1.jpg';
import teamMember2 from '../../public/About/team2.jpg';
import teamMember3 from '../../public/About/team3.jpg';
import teamMember4 from '../../public/About/team4.jpg';
import teamMember5 from '../../public/About/team5.jpg';

const TeamSection = () => {
  const [activeCard, setActiveCard] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);
  const scrollRef = useRef(null);
  const x = useMotionValue(0);

  const teamMembers = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "Chief Executive Officer",
      image: teamMember1,
      description: "20+ years of experience in construction management and business development.",
      social: {
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "Head of Construction",
      image: teamMember2,
      description: "Expert in project management and sustainable building practices.",
      social: {
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      position: "Lead Architect",
      image: teamMember3,
      description: "Award-winning architect with focus on innovative and sustainable designs.",
      social: {
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      id: 4,
      name: "David Thompson",
      position: "Senior Project Manager",
      image: teamMember4,
      description: "Specialized in large-scale commercial and residential projects.",
      social: {
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      id: 5,
      name: "Lisa Wang",
      position: "Design Director",
      image: teamMember5,
      description: "Creative visionary with expertise in modern architectural trends.",
      social: {
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      id: 6,
      name: "Robert Martinez",
      position: "Operations Director",
      image: teamMember1,
      description: "Ensuring seamless operations and client satisfaction across all projects.",
      social: {
        linkedin: "#",
        twitter: "#"
      }
    }
  ];

  // Stunning animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 1.5
      }
    }
  };

  const titleVariants = {
    hidden: { 
      opacity: 0,
      y: 100,
      scale: 0.5,
      filter: "blur(20px)"
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 12,
        duration: 1.2
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0,
      y: 150,
      rotateX: -45,
      scale: 0.7,
      filter: "blur(15px)"
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 1
      }
    },
    hover: {
      y: -25,
      scale: 1.08,
      rotateY: 8,
      rotateX: 3,
      z: 50,
      boxShadow: "0 35px 60px -15px rgba(0, 28, 115, 0.4)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 25,
        duration: 0.4
      }
    }
  };

  const imageVariants = {
    hidden: { 
      scale: 1.8,
      opacity: 0,
      rotate: 15,
      filter: "brightness(0.5) blur(10px)"
    },
    visible: {
      scale: 1,
      opacity: 1,
      rotate: 0,
      filter: "brightness(1) blur(0px)",
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 15,
        duration: 1.5
      }
    },
    hover: {
      scale: 1.2,
      rotate: -1,
      filter: "brightness(1.1)",
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const textVariants = {
    hidden: { 
      opacity: 0, 
      x: -80,
      filter: "blur(15px)"
    },
    visible: {
      opacity: 1,
      x: 0,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 15,
        duration: 1
      }
    }
  };

  const floatingElements = {
    animate: {
      y: [0, -40, 0],
      rotate: [0, 10, 0],
      scale: [1, 1.1, 1],
      transition: {
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const glowAnimation = {
    animate: {
      scale: [1, 1.5, 1],
      opacity: [0.1, 0.4, 0.1],
      rotate: [0, 180, 360],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const scrollLeft = () => {
    if (scrollRef.current) {
      const newActive = activeCard > 0 ? activeCard - 1 : teamMembers.length - 1;
      setActiveCard(newActive);
      scrollRef.current.scrollLeft -= 420;
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      const newActive = activeCard < teamMembers.length - 1 ? activeCard + 1 : 0;
      setActiveCard(newActive);
      scrollRef.current.scrollLeft += 420;
    }
  };

  // Handle mouse move for parallax effect
  const handleMouseMove = (e, index) => {
    if (index === activeCard) {
      const card = e.currentTarget;
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = (y - centerY) / 20;
      const rotateY = (centerX - x) / 20;
      
      card.style.transform = `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
    }
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.transform = 'perspective(1200px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
  };

  // Auto-scroll effect
  useEffect(() => {
    const interval = setInterval(() => {
      scrollRight();
    }, 4000);

    return () => clearInterval(interval);
  }, [activeCard]);

  return (
    <section className="relative py-24 bg-white overflow-hidden">
      {/* Enhanced Background Elements */}
      <motion.div 
        className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-[#001C73]/15 to-[#0026A3]/15 rounded-full blur-4xl"
        variants={glowAnimation}
        animate="animate"
      />
      
      <motion.div 
        className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-[#0026A3]/12 to-[#001C73]/12 rounded-full blur-4xl"
        variants={glowAnimation}
        animate="animate"
        transition={{ delay: 3 }}
      />

      {/* Enhanced Floating Geometric Shapes */}
      <motion.div 
        className="absolute top-40 left-40 w-16 h-16 border-3 border-[#001C73]/25 rounded-xl transform rotate-45"
        variants={floatingElements}
        animate="animate"
      />
      
      <motion.div 
        className="absolute bottom-60 right-60 w-10 h-10 bg-[#0026A3]/25 rounded-full"
        animate={{
          y: [0, -50, 0],
          scale: [1, 1.6, 1],
          opacity: [0.4, 0.9, 0.4],
          transition: {
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }
        }}
      />

      <motion.div 
        className="absolute top-1/3 right-32 w-8 h-8 border-2 border-[#001C73]/30 rounded-lg transform -rotate-12"
        animate={{
          y: [0, 40, 0],
          x: [0, -25, 0],
          rotate: [0, -180, -360],
          transition: {
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }
        }}
      />

      <div className="relative z-10 max-w-8xl mx-auto px-6">
        {/* Enhanced Section Header */}
        <motion.div 
          className="text-center mb-20"
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div 
            className="inline-flex items-center gap-4 mb-8"
            variants={titleVariants}
          >
            <div className="w-16 h-1 bg-gradient-to-r from-transparent to-[#001C73] rounded-full"></div>
            <span className="text-sm font-bold text-[#001C73] tracking-widest uppercase bg-[#001C73]/10 px-5 py-3 rounded-2xl backdrop-blur-sm border border-[#001C73]/20">
              Dream Team
            </span>
            <div className="w-16 h-1 bg-gradient-to-l from-transparent to-[#001C73] rounded-full"></div>
          </motion.div>

          <motion.h2 
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-8"
            variants={titleVariants}
          >
            Meet Our <motion.span 
              className="bg-gradient-to-r from-[#001C73] via-[#0026A3] to-[#001C73] bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ["0%", "200%", "0%"],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{
                backgroundSize: "300% 100%",
              }}
            >
              Visionaries
            </motion.span>
          </motion.h2>

          <motion.div 
            className="w-28 h-2 bg-gradient-to-r from-[#001C73] via-[#0026A3] to-[#001C73] rounded-full mx-auto mb-10"
            variants={titleVariants}
            whileHover={{ 
              scaleX: 2.5,
              transition: { duration: 0.4 }
            }}
          />

          <motion.p 
            className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
            variants={textVariants}
          >
            Our elite team of construction professionals combines decades of expertise with 
            innovative thinking to deliver exceptional results that stand the test of time.
          </motion.p>
        </motion.div>

        {/* Horizontal Scrolling Cards Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <motion.button
            onClick={scrollLeft}
            className="absolute -left-6 top-1/2 transform -translate-y-1/2 z-30 bg-white/95 backdrop-blur-md border border-gray-300/50 rounded-full hover:bg-[#001C73] hover:text-white w-14 h-14 flex items-center justify-center shadow-2xl hover:shadow-3xl transition-all duration-400 group"
            whileHover={{ 
              scale: 1.15,
              x: -5,
              backgroundColor: 'rgba(255, 255, 255, 1)'
            }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
          >
            <svg className="w-7 h-7 text-gray-700 group-hover:text-[#001C73] transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
          </motion.button>

          <motion.button
            onClick={scrollRight}
            className="absolute -right-6 top-1/2 transform -translate-y-1/2 z-30 bg-white/95 backdrop-blur-md border border-gray-300/50 rounded-full hover:bg-[#001C73] hover:text-white  w-14 h-14 flex items-center justify-center shadow-2xl hover:shadow-3xl transition-all duration-400 group"
            whileHover={{ 
              scale: 1.15,
              x: 5,
              backgroundColor: 'rgba(255, 255, 255, 1)'
            }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
          >
            <svg className="w-7 h-7 text-gray-700 group-hover:text-[#001C73] transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </motion.button>

          {/* Horizontal Scroll Container */}
          <motion.div
            ref={scrollRef}
            className="flex overflow-x-auto py-10 px-4 snap-x snap-mandatory scrollbar-hide"
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
            
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                className="flex-none w-96 mx-4 snap-center"
                variants={cardVariants}
                whileHover="hover"
                onMouseMove={(e) => handleMouseMove(e, index)}
                onMouseLeave={handleMouseLeave}
                onMouseEnter={() => setHoveredCard(member.id)}
                style={{
                  transformStyle: 'preserve-3d',
                }}
              >
                {/* Enhanced Card Design */}
                <div className={`relative bg-white rounded-3xl overflow-hidden shadow-3xl hover:shadow-4xl shadow-30 transition-all duration-500 border-2 border-gray-200/60 backdrop-blur-sm ${
                  index === activeCard ? 'ring-4 ring-[#001C73]/30' : 'opacity-90'
                }`}>
                  {/* Image Container */}
                  <motion.div 
                    className="relative h-69 overflow-hidden"
                    variants={imageVariants}
                  >
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                      priority
                    />
                    
                    {/* Enhanced Gradient Overlay */}
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"
                      initial={{ opacity: 0.3 }}
                      whileHover={{ opacity: 0.8 }}
                      transition={{ duration: 0.6 }}
                    />
                    
                    {/* Social Links */}
                    <motion.div 
                      className="absolute top-6 right-6 flex gap-3"
                      initial={{ opacity: 0, y: -30, scale: 0.5 }}
                      whileHover={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ staggerChildren: 0.15 }}
                    >
                      <motion.a 
                        href={member.social.linkedin}
                        className="w-12 h-12 bg-white/95 backdrop-blur-md rounded-2xl flex items-center justify-center shadow-2xl hover:bg-[#001C73] hover:text-white transition-all duration-400"
                        whileHover={{ 
                          scale: 1.2,
                          rotate: 360,
                          transition: { duration: 0.5 }
                        }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                        </svg>
                      </motion.a>
                    </motion.div>

                    {/* Enhanced Name Overlay */}
                    <motion.div 
                      className="absolute bottom-6 left-6 text-white"
                      initial={{ opacity: 0, y: 40 }}
                      whileHover={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <h3 className="text-3xl font-bold mb-2 drop-shadow-2xl">{member.name}</h3>
                      <p className="text-white/90 text-lg font-medium drop-shadow-2xl">{member.position}</p>
                    </motion.div>
                  </motion.div>

                  {/* Enhanced Content Section */}
                  <div className="p-8 bg-gradient-to-br from-white to-gray-50/50">
                    <motion.h3 
                      className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#001C73] transition-colors duration-500"
                      variants={textVariants}
                    >
                      {member.name}
                    </motion.h3>
                    
                    <motion.p 
                      className="text-[#001C73] font-bold text-lg mb-6 tracking-wide bg-[#001C73]/10 px-4 py-2 rounded-2xl inline-block"
                      variants={textVariants}
                    >
                      {member.position}
                    </motion.p>
                    
                    <motion.p 
                      className="text-gray-600 text-base leading-relaxed font-medium"
                      variants={textVariants}
                    >
                      {member.description}
                    </motion.p>
                  </div>

                  {/* Enhanced Border Effect */}
                  <motion.div 
                    className="absolute inset-0 rounded-3xl border-3 border-transparent group-hover:border-[#001C73]/40"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.4 }}
                  />
                </div>

                {/* Enhanced Floating Indicator */}
                <motion.div 
                  className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-[#001C73] to-[#0026A3] rounded-full shadow-2xl"
                  animate={hoveredCard === member.id ? { 
                    scale: [1, 1.8, 1],
                    opacity: [1, 0.6, 1],
                    rotate: [0, 180, 360]
                  } : { scale: 1, opacity: 0 }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Enhanced Dots Indicator */}
          <motion.div 
            className="flex justify-center space-x-4 mt-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
          >
            {teamMembers.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setActiveCard(index);
                  if (scrollRef.current) {
                    scrollRef.current.scrollLeft = index * 420;
                  }
                }}
                className={`w-4 h-4 rounded-full transition-all duration-500 ${
                  index === activeCard 
                    ? 'bg-gradient-to-r from-[#001C73] to-[#0026A3] w-12 scale-125' 
                    : 'bg-gray-300 hover:bg-gray-400 hover:scale-110'
                }`}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;