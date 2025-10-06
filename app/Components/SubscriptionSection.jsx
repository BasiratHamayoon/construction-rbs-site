"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { LuInstagram } from "react-icons/lu";
import { CgFacebook } from "react-icons/cg";
import { FaTiktok } from "react-icons/fa6";
import { BsWhatsapp } from "react-icons/bs";
import Image from 'next/image';
import image1 from '../../public/Home/img1.jpg';
import image2 from '../../public/Home/img2.jpg';

function SubscriptionSection() {
  const [sectionRef, sectionInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Faster container animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Reduced from 0.4
        duration: 0.6, // Reduced from 1.2
        ease: "easeOut",
      },
    },
  };

  // Faster social icons animation
  const socialIconVariants = {
    hidden: { 
      opacity: 0, 
      y: -30, // Reduced from -60
      scale: 0.8, // Reduced from 0.3
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 200, // Increased stiffness
        damping: 15, // Adjusted damping
        duration: 0.4, // Reduced from 0.8
      },
    },
    hover: {
      scale: 1.2, // Reduced from 1.3
      y: -5, // Reduced from -10
      rotate: 8, // Reduced from 15
      backgroundColor: "#FF6B35",
      boxShadow: "0 10px 20px rgba(255, 107, 53, 0.4)", // Reduced shadow
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
        duration: 0.2, // Reduced from 0.3
      },
    },
    tap: {
      scale: 0.9, // Reduced from 0.8
      rotate: -5, // Reduced from -15
      transition: {
        duration: 0.1, // Reduced from 0.2
      },
    },
  };

  // Faster card animation
  const cardVariants = {
    hidden: { 
      opacity: 0, 
      x: index => index % 2 === 0 ? -50 : 50, // Reduced from ±100
      y: 30, // Reduced from 50
      scale: 0.9, // Increased from 0.8
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 120, // Increased from 80
        damping: 12, // Reduced from 15
        duration: 0.6, // Reduced from 1
      },
    },
    hover: {
      y: -15, // Reduced from -20
      scale: 1.02, // Reduced from 1.03
      boxShadow: "0 25px 40px -10px rgba(0, 0, 0, 0.4)", // Reduced shadow
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 15,
        duration: 0.3, // Reduced from 0.4
      },
    },
  };

  // Faster image animation
  const imageVariants = {
    hidden: { 
      opacity: 0, 
      scale: 1.1, // Reduced from 1.4
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5, // Reduced from 1
        ease: "easeOut",
        delay: 0.1, // Reduced from 0.3
      },
    },
    hover: {
      scale: 1.05, // Reduced from 1.08
      transition: {
        duration: 0.3, // Reduced from 0.5
        ease: "easeInOut",
      },
    },
  };

  // Faster button animation
  const buttonVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8, // Increased from 0.5
      y: 20 // Reduced from 30
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { 
        delay: 0.4, // Reduced from 0.8
        duration: 0.4, // Reduced from 0.6
        type: "spring",
        stiffness: 300 // Increased from 200
      }
    },
    hover: {
      scale: 1.05, // Reduced from 1.1
      backgroundColor: "#ffffff",
      color: "#000000",
      borderColor: "#ffffff",
      boxShadow: [
        "0 0 0 0 rgba(255, 255, 255, 0.4)",
        "0 0 0 10px rgba(255, 255, 255, 0)", // Reduced from 15px
        "0 0 0 0 rgba(255, 255, 255, 0)"
      ],
      transition: {
        scale: {
          duration: 0.2, // Reduced from 0.3
        },
        backgroundColor: {
          duration: 0.2, // Reduced from 0.3
        },
        boxShadow: {
          duration: 0.6, // Reduced from 1
          ease: "easeOut",
        },
      },
    },
    tap: {
      scale: 0.95,
    },
  };

  // Faster text animation
  const textVariants = {
    hidden: { 
      opacity: 0, 
      y: 20, // Reduced from 40
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5, // Reduced from 0.8
        ease: "easeOut",
        delay: 0.1, // Reduced from 0.2
      },
    },
  };

  // Faster title animation
  const titleVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.9, // Increased from 0.8
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6, // Reduced from 1.2
        ease: "easeOut",
      },
    },
  };

  const socialLinks = [
    {
      icon: <LuInstagram className="text-3xl lg:text-[45px]" />,
      href: "https://instagram.com/yourprofile",
      label: "Instagram"
    },
    {
      icon: <CgFacebook className="text-3xl lg:text-[45px]" />,
      href: "https://facebook.com/yourprofile",
      label: "Facebook"
    },
    {
      icon: <FaTiktok className="text-3xl lg:text-[45px]" />,
      href: "https://tiktok.com/yourprofile",
      label: "TikTok"
    },
    {
      icon: <BsWhatsapp className="text-3xl lg:text-[45px]" />,
      href: "https://wa.me/yournumber",
      label: "WhatsApp"
    },
  ];

  const cards = [
    {
      type: "Residential",
      title: "Residential Construction",
      image: image1,
      description: "Residential construction projects such as the building of Houses, flats, bungalow, cottage, and other residential facilities.",
      bgColor: "bg-gradient-to-br from-gray-700 to-gray-900",
    },
    {
      type: "Commercial",
      title: "Commercial Construction",
      image: image2,
      description: "Commercial construction projects such as the building of Offices, industrial facilities and other business establishments.",
      bgColor: "bg-gradient-to-br from-black to-gray-800",
    },
  ];

  return (
    <motion.section
      ref={sectionRef}
      initial="hidden"
      animate={sectionInView ? "visible" : "hidden"}
      variants={containerVariants}
      className="flex flex-col justify-center items-center lg:gap-16 gap-12 bg-gradient-to-b from-white to-gray-100 lg:px-20 px-6 py-14 lg:py-20 overflow-hidden"
    >
      {/* Social Icons */}
      <motion.div
        variants={containerVariants}
        className="flex justify-center items-center gap-5 lg:gap-7 flex-wrap"
      >
        {socialLinks.map((social, index) => (
          <motion.a
            key={index}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.label}
            className="bg-gradient-to-br from-[#001C73] via-[#0038a8] to-[#0055ff] p-3 lg:p-4 rounded-xl text-white cursor-pointer relative overflow-hidden group"
            variants={socialIconVariants}
            whileHover="hover"
            whileTap="tap"
            custom={index}
          >
            {social.icon}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform"
              initial={{ x: "-100%" }}
              whileHover={{ x: "200%" }}
              transition={{ duration: 0.5 }} // Reduced from 0.8
            />
          </motion.a>
        ))}
      </motion.div>

      {/* Cards Grid */}
      <motion.div
        variants={containerVariants}
        className="grid lg:grid-cols-2 grid-cols-1 justify-center items-stretch gap-8 lg:gap-12 w-full max-w-7xl"
      >
        {cards.map((card, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover="hover"
            custom={index}
            className={`${card.bgColor} px-6 py-8 flex flex-col gap-6 justify-between text-white rounded-2xl shadow-xl relative overflow-hidden group h-full`}
          >
            <motion.div
              className="absolute inset-0 opacity-10"
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.05 }} // Reduced from 1.1
              transition={{ duration: 0.3 }} // Reduced from 0.5
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
            </motion.div>

            {/* Header */}
            <motion.div
              variants={textVariants}
              className="text-center relative z-10"
            >
              <motion.h3
                variants={textVariants}
                className="text-xl lg:text-2xl font-light mb-2 text-gray-200"
              >
                We Provide
              </motion.h3>
              <motion.span
                variants={titleVariants}
                className="block font-bold text-2xl lg:text-3xl mb-2 text-white"
              >
                {card.title}
              </motion.span>
              <motion.p
                variants={textVariants}
                className="text-lg font-medium text-gray-300"
              >
                Solutions & Services
              </motion.p>
            </motion.div>

            {/* Image */}
            <motion.div
              variants={imageVariants}
              whileHover="hover"
              className="w-full overflow-hidden rounded-xl flex-1 min-h-[200px] max-h-[240px] relative"
            >
              <Image 
                src={card.image} 
                alt={`${card.type} Construction`}
                className="w-full h-full object-cover"
                placeholder="blur"
              />
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"
                initial={{ opacity: 0.5 }}
                whileHover={{ opacity: 0.2 }}
                transition={{ duration: 0.2 }} // Reduced from 0.3
              />
            </motion.div>

            {/* Description */}
            <motion.p
              variants={textVariants}
              className="text-center text-gray-300 leading-relaxed text-base lg:text-lg flex-1 px-2"
            >
              {card.description}
            </motion.p>

            {/* Button */}
            <motion.button
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              className="border-2 border-white px-4 py-2 font-bold rounded-lg cursor-pointer text-base lg:text-lg relative overflow-hidden group/btn mt-2"
            >
              <span className="relative z-10">REQUEST A QUOTE</span>
              
              <motion.div
                className="absolute inset-0 bg-white"
                initial={{ scale: 0, opacity: 0 }}
                whileHover={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.2 }} // Reduced from 0.3
              />
            </motion.button>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}

export default SubscriptionSection;