"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';
import backgroundImage from '../../public/About/1.jpg';

const AboutHeroSection = () => {
  // Fast and stunning animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        duration: 0.8
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 80,
      filter: "blur(15px)",
      scale: 0.8
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
        duration: 0.6
      }
    }
  };

  const imageVariants = {
    hidden: { 
      scale: 1.3,
      opacity: 0,
      rotate: 5
    },
    visible: {
      scale: 1,
      opacity: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 150,
        damping: 20,
        duration: 1
      }
    }
  };

  const floatVariants = {
    animate: {
      y: [0, -25, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const glowAnimation = {
    animate: {
      scale: [1, 1.2, 1],
      opacity: [0.3, 0.7, 0.3],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const textGlow = {
    animate: {
      backgroundPosition: ["0%", "200%", "0%"],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      {/* Animated Background Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/10 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Background Image with Dynamic Overlay */}
      <motion.div 
        className="absolute inset-0 z-0"
        variants={imageVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <Image
          src={backgroundImage}
          alt="RBS Construction - Building Excellence"
          className="w-full h-full object-cover"
          fill
          priority
          quality={100}
        />
        {/* Dynamic Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-blue-900/80 to-slate-800/90"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-slate-900/80"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-slate-900/50 to-slate-900"></div>
      </motion.div>

      {/* Animated Geometric Elements */}
      <motion.div 
        className="absolute top-20 left-20 w-20 h-20 border-2 border-blue-400/30 rounded-xl transform rotate-45"
        variants={floatVariants}
        animate="animate"
      />
      
      <motion.div 
        className="absolute bottom-20 right-20 w-16 h-16 border border-cyan-400/40 rounded-full"
        animate={{
          y: [0, 30, 0],
          rotate: [0, 180, 360],
          scale: [1, 1.3, 1],
          transition: {
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }
        }}
      />

      {/* Glow Effects */}
      <motion.div 
        className="absolute top-1/4 right-1/4 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl"
        animate={glowAnimation}
      />
      
      <motion.div 
        className="absolute bottom-1/3 left-1/3 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl"
        animate={{
          ...glowAnimation,
          transition: { ...glowAnimation.transition, delay: 1 }
        }}
      />

      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <motion.div 
          className="grid lg:grid-cols-1 gap-16 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            {/* Animated Badge */}
            <motion.div 
              className="inline-flex items-center gap-4 px-6 py-3 mt-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20"
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                backgroundColor: 'rgba(255, 255, 255, 0.15)',
                transition: { duration: 0.3 }
              }}
            >
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold text-white tracking-widest uppercase">
                About RBS Construction
              </span>
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
            </motion.div>

            {/* Main Heading */}
            <motion.div 
              className="space-y-6"
              variants={containerVariants}
            >
              <motion.h1 
                className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight"
                variants={itemVariants}
              >
                <span className="block">Building  Tomorrow's</span>
                <span className="block">Landmarks</span>
              </motion.h1>

              {/* Animated Divider */}
              <motion.div 
                className="flex items-center gap-4"
                variants={itemVariants}
              >
                <div className="w-12 h-1 bg-white rounded-full"></div>
                <div className="w-6 h-6 border-2 border-white rounded-full animate-spin"></div>
                <div className="w-12 h-1 bg-white rounded-full"></div>
              </motion.div>
            </motion.div>

            {/* Description */}
            <motion.div 
              className="space-y-6"
              variants={containerVariants}
            >
              <motion.p 
                className="text-xl md:text-2xl text-gray-200 leading-relaxed font-light"
                variants={itemVariants}
                whileHover={{
                  x: 10,
                  transition: { duration: 0.3 }
                }}
              >
                RBS Construction leads the industry with 4,300+ professionals nationwide, transforming visions into iconic structures that define skylines and communities.    Pioneering sustainable construction with cutting-edge technology and decades of expertise, we build legacies that stand the test of time.
              </motion.p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-white/70 flex flex-col items-center cursor-pointer group"
        >
          <span className="text-sm mb-2 tracking-wider group-hover:text-cyan-300 transition-colors duration-300">
            Discover More
          </span>
          <motion.svg 
            className="w-6 h-6 group-hover:text-cyan-300 transition-colors duration-300"
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </motion.svg>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutHeroSection;
