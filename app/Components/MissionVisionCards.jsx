"use client";
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';

// Mock construction images - replace with your actual images
import construction1 from '../../public/About/1.jpg';
import construction2 from '../../public/About/2.jpg';
import construction3 from '../../public/About/3.jpg';
import construction4 from '../../public/About/4.jpg';
import construction5 from '../../public/About/5.jpg';

const MissionVisionCards = () => {
  const [activeCard, setActiveCard] = useState(0);
  const scrollRef = useRef(null);
  const x = useMotionValue(0);
  
  const cards = [
    {
      type: 'mission',
      title: 'Our Mission',
      description: 'To deliver exceptional construction solutions that exceed client expectations through innovative design, superior craftsmanship, and unwavering commitment to quality and safety.',
      image: construction1,
      stats: ['Quality First', 'Client Focused', 'Safety Driven']
    },
    {
      type: 'vision',
      title: 'Our Vision',
      description: 'To be the most trusted construction partner, transforming skylines and communities through sustainable practices and cutting-edge technology while maintaining the highest standards of excellence.',
      image: construction2,
      stats: ['Industry Leader', 'Sustainable Future', 'Community Focus']
    },
    {
      type: 'values',
      title: 'Our Values',
      description: 'Integrity, innovation, and excellence form the foundation of everything we do. We believe in building not just structures, but lasting relationships and sustainable communities.',
      image: construction3,
      stats: ['Integrity', 'Innovation', 'Excellence']
    },
    {
      type: 'approach',
      title: 'Our Approach',
      description: 'Combining traditional craftsmanship with modern technology to create spaces that are both beautiful and functional, while ensuring timely delivery and budget adherence.',
      image: construction4,
      stats: ['Traditional Craft', 'Modern Tech', 'Timely Delivery']
    },
    {
      type: 'commitment',
      title: 'Our Commitment',
      description: 'Dedicated to sustainable construction practices that minimize environmental impact while maximizing efficiency and creating spaces that stand the test of time.',
      image: construction5,
      stats: ['Sustainability', 'Efficiency', 'Durability']
    }
  ];

  // Animation variants
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
    hidden: { 
      opacity: 0,
      y: 100,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    },
    hover: {
      y: -10,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  const imageVariants = {
    hidden: { scale: 1.2, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const scrollLeft = () => {
    if (scrollRef.current) {
      const newActive = activeCard > 0 ? activeCard - 1 : cards.length - 1;
      setActiveCard(newActive);
      scrollRef.current.scrollLeft -= 400;
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      const newActive = activeCard < cards.length - 1 ? activeCard + 1 : 0;
      setActiveCard(newActive);
      scrollRef.current.scrollLeft += 400;
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
      
      const rotateX = (y - centerY) / 25;
      const rotateY = (centerX - x) / 25;
      
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    }
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
  };

  // Auto-scroll effect
  useEffect(() => {
    const interval = setInterval(() => {
      scrollRight();
    }, 5000);

    return () => clearInterval(interval);
  }, [activeCard]);

  return (
    <section className="relative py-20 bg-white overflow-hidden">
      {/* Background Elements */}
      <motion.div 
        className="absolute top-10 left-10 w-32 h-32 bg-[#001C73]/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div 
        className="absolute bottom-10 right-10 w-40 h-40 bg-[#0026A3]/5 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-[#001C73] bg-clip-text text-transparent mb-6"
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Our Guiding Principles
          </motion.h2>
          <motion.div 
            className="w-20 h-1 bg-gradient-to-r from-[#001C73] to-[#0026A3] rounded-full mx-auto mb-8"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          />
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            Building the future with purpose, passion, and precision
          </motion.p>
        </motion.div>

        {/* Cards Container with Navigation */}
        <div className="relative">
          {/* Navigation Buttons */}
          <motion.button
            onClick={scrollLeft}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/90 hover:bg-white border border-gray-200 rounded-full w-12 h-12 flex items-center justify-center shadow-2xl hover:shadow-3xl transition-all duration-300 group"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <svg className="w-6 h-6 text-gray-700 group-hover:text-[#001C73] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </motion.button>

          <motion.button
            onClick={scrollRight}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/90 hover:bg-white border border-gray-200 rounded-full w-12 h-12 flex items-center justify-center shadow-2xl hover:shadow-3xl transition-all duration-300 group"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <svg className="w-6 h-6 text-gray-700 group-hover:text-[#001C73] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </motion.button>

          {/* Cards Scroll Container - Hidden Scrollbar */}
          <motion.div
            ref={scrollRef}
            className="flex overflow-x-auto space-x-8 py-8 px-4 snap-x snap-mandatory"
            style={{ 
              scrollBehavior: 'smooth',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none'
            }}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Hide scrollbar for Webkit browsers */}
            <style jsx>{`
              .hide-scrollbar::-webkit-scrollbar {
                display: none;
              }
            `}</style>
            
            {cards.map((card, index) => (
              <motion.div
                key={card.title}
                className={`flex-none w-80 md:w-96 snap-center rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 hide-scrollbar ${
                  index === activeCard ? 'ring-2 ring-[#001C73] ring-opacity-50' : 'opacity-70'
                }`}
                variants={cardVariants}
                whileHover="hover"
                onMouseMove={(e) => handleMouseMove(e, index)}
                onMouseLeave={handleMouseLeave}
                style={{
                  transformStyle: 'preserve-3d',
                }}
              >
                {/* Card Image */}
                <motion.div 
                  className="relative h-48 overflow-hidden"
                  variants={imageVariants}
                >
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  
                  {/* Card Type Badge */}
                  <motion.div 
                    className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold text-white capitalize"
                    style={{
                      backgroundColor: card.type === 'mission' ? '#001C73' : 
                                      card.type === 'vision' ? '#0026A3' : 
                                      card.type === 'values' ? '#001C73' :
                                      card.type === 'approach' ? '#0026A3' : '#001C73'
                    }}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: index * 0.1 + 0.5 }}
                    viewport={{ once: true }}
                  >
                    {card.type}
                  </motion.div>
                </motion.div>

                {/* Card Content */}
                <div className="bg-white p-6">
                  <motion.h3 
                    className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-[#001C73] bg-clip-text text-transparent mb-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                    viewport={{ once: true }}
                  >
                    {card.title}
                  </motion.h3>

                  <motion.p 
                    className="text-gray-600 leading-relaxed mb-6"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 + 0.5 }}
                    viewport={{ once: true }}
                  >
                    {card.description}
                  </motion.p>

                  {/* Stats */}
                  <motion.div 
                    className="flex flex-wrap gap-2"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.7 }}
                    viewport={{ once: true }}
                  >
                    {card.stats.map((stat, statIndex) => (
                      <motion.span
                        key={stat}
                        className="px-3 py-1 bg-gradient-to-r from-[#001C73]/10 to-[#0026A3]/10 text-[#001C73] rounded-full text-sm font-medium border border-[#001C73]/20"
                        whileHover={{ 
                          scale: 1.05,
                          backgroundColor: 'rgba(0, 28, 115, 0.2)'
                        }}
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ 
                          delay: index * 0.1 + statIndex * 0.1 + 0.8,
                          type: "spring",
                          stiffness: 200
                        }}
                        viewport={{ once: true }}
                      >
                        {stat}
                      </motion.span>
                    ))}
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Dots Indicator */}
          <motion.div 
            className="flex justify-center space-x-3 mt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            viewport={{ once: true }}
          >
            {cards.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setActiveCard(index);
                  if (scrollRef.current) {
                    scrollRef.current.scrollLeft = index * 400;
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

export default MissionVisionCards;