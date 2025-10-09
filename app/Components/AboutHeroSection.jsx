"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';
import backgroundImage from '../../public/About/1.jpg';

const AboutHeroSection = () => {
  // Enhanced animation variants with left/right entrance
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

  const itemVariants = {
    hidden: (direction) => ({ 
      opacity: 0, 
      x: direction === 'left' ? -150 : 150,
      y: 50,
      filter: "blur(15px)",
      scale: 0.8
    }),
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      filter: "blur(0px)",
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 15,
        duration: 0.8
      }
    }
  };

  const wordVariants = {
    hidden: (direction) => ({ 
      opacity: 0,
      x: direction === 'left' ? -100 : 100,
      y: 30,
      scale: 0.7
    }),
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
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
    },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        duration: 1.2
      }
    }
  };

  const floatVariants = {
    animate: {
      y: [0, -25, 0],
      rotate: [0, 10, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const glowAnimation = {
    animate: {
      scale: [1, 1.3, 1],
      opacity: [0.2, 0.5, 0.2],
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
      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
        <motion.div 
          className="text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Animated Badge - Comes from Left */}
          <motion.div 
            className="inline-flex items-center  mt-6 gap-4 px-6 py-3 mb-12 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20"
            variants={itemVariants}
            custom="left"
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

          {/* Main Heading with Alternating Directions */}
          <motion.div 
            className="mb-12"
            variants={containerVariants}
          >
            {/* First Line - Comes from Right */}
            <motion.h1 
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
              variants={itemVariants}
              custom="right"
            >
              Building Tomorrow's
            </motion.h1>
            
            {/* Second Line - Comes from Left */}
            <motion.h1 
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight"
              variants={itemVariants}
              custom="left"
            >
              Landmarks
            </motion.h1>
          </motion.div>

          {/* Description - Comes from Left */}
          <motion.div 
            className="max-w-4xl mx-auto mb-2"
            variants={itemVariants}
            custom="left"
          >
            <motion.p 
              className="text-xl md:text-2xl text-gray-200 leading-relaxed font-light bg-white/5 backdrop-blur-lg p-8 rounded-3xl border border-white/10"
              whileHover={{
                scale: 1.02,
                borderColor: 'rgba(255, 255, 255, 0.3)',
                transition: { duration: 0.3 }
              }}
            >
              RBS Construction leads the industry with 4,300+ professionals nationwide, transforming visions into iconic structures that define skylines and communities. Pioneering sustainable construction with cutting-edge technology and decades of expertise, we build legacies that stand the test of time.
            </motion.p>
          </motion.div>
        </motion.div>
      </div>

    </section>
  );
};

export default AboutHeroSection;