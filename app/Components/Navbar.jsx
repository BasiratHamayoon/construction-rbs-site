"use client"
import Link from 'next/link';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('/');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll function
  const scrollToSection = (sectionId) => {
    if (window.location.pathname === '/') {
      // If we're on home page, scroll to section
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    } else {
      // If we're on another page, navigate to home with hash
      window.location.href = `/#${sectionId}`;
    }
    setIsMobileMenuOpen(false);
  };

  // Handle hash links on page load
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash) {
        const sectionId = hash.replace('#', '');
        setTimeout(() => {
          const element = document.getElementById(sectionId);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-lg shadow-lg py-2' 
          : 'py-4 bg-white/95'
      }`}>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex justify-between items-center'>
            {/* Logo Section */}
            <Link href="/" className='flex items-center space-x-3 group cursor-pointer'>
              <div className={`relative transition-all duration-300 group-hover:scale-110 ${
                isScrolled ? 'w-10 h-10' : 'w-12 h-12'
              }`}>
                <div className='absolute inset-0 bg-gradient-to-br from-[#001C73] to-[#00072D] rounded-xl transform rotate-3 group-hover:rotate-6 transition-transform duration-300 shadow-lg'></div>
                <div className='absolute inset-1 bg-white rounded-lg flex items-center justify-center shadow-inner'>
                  <span className='text-[#001C73] font-bold text-lg'>
                    N
                  </span>
                </div>
              </div>
              <div>
                <h1 className={`font-bold text-[#001C73] transition-all duration-300 ${
                  isScrolled ? 'text-2xl' : 'text-3xl'
                } group-hover:scale-105`}>
                  NovaWave
                </h1>
                <p className='text-xs text-gray-500 -mt-1 hidden sm:block'>
                  Innovations
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className='hidden md:flex items-center space-x-1'>
              <ul className='flex items-center space-x-1'>
                {[
                  { href: "/", label: "Home", section: null },
                  { href: "/Pages/about", label: "About", section: null },
                  { href: "/Pages/why-us", label: "Why Us", section: null },
                  { href: "#gallery", label: "Gallery", section: "gallery" },
                  { href: "/Pages/contact", label: "Contact", section: null },
                ].map((item) => (
                  <li key={item.href}>
                    {item.section ? (
                      <button
                        onClick={() => scrollToSection(item.section)}
                        className={`relative flex items-center px-4 py-2 transition-all duration-300 font-medium group ${
                          isScrolled 
                            ? 'text-gray-700 hover:text-[#001C73]' 
                            : 'text-[#001C73] hover:text-[#001C73]'
                        } cursor-pointer`}
                        onMouseEnter={() => setActiveLink(item.href)}
                        onMouseLeave={() => setActiveLink('/')}
                      >
                        <span className='relative'>
                          {item.label}
                          <span className={`absolute bottom-0 left-0 w-0 h-0.5 bg-[#001C73] transition-all duration-300 group-hover:w-full ${
                            activeLink === item.href ? 'w-full' : ''
                          }`}></span>
                        </span>
                      </button>
                    ) : (
                      <Link href={item.href}>
                        <span 
                          className={`relative flex items-center px-4 py-2 transition-all duration-300 font-medium group ${
                            isScrolled 
                              ? 'text-gray-700 hover:text-[#001C73]' 
                              : 'text-[#001C73] hover:text-[#001C73]'
                          }`}
                          onMouseEnter={() => setActiveLink(item.href)}
                          onMouseLeave={() => setActiveLink('/')}
                        >
                          <span className='relative'>
                            {item.label}
                            <span className={`absolute bottom-0 left-0 w-0 h-0.5 bg-[#001C73] transition-all duration-300 group-hover:w-full ${
                              activeLink === item.href ? 'w-full' : ''
                            }`}></span>
                          </span>
                        </span>
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
              
              {/* CTA Button - Changed to Outline */}
              <div className='ml-4 pl-4 border-l border-gray-300'>
                <button className='border-2 border-[#001C73] text-[#001C73] px-6 py-2 rounded-full font-semibold hover:bg-[#001C73] hover:text-white transition-all duration-300 hover:shadow-lg transform hover:scale-105'>
                  Search
                </button>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className='md:hidden'>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`p-2 rounded-lg transition-all duration-300 ${
                  isScrolled 
                    ? 'text-gray-700 hover:bg-gray-100' 
                    : 'text-[#001C73] hover:bg-gray-100'
                }`}
              >
                <div className='w-6 h-6 flex flex-col justify-center space-y-1'>
                  <span className={`block h-0.5 w-full bg-current transition-all duration-300 ${
                    isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''
                  }`}></span>
                  <span className={`block h-0.5 w-full bg-current transition-all duration-300 ${
                    isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
                  }`}></span>
                  <span className={`block h-0.5 w-full bg-current transition-all duration-300 ${
                    isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
                  }`}></span>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-500 overflow-hidden ${
          isMobileMenuOpen 
            ? 'max-h-96 opacity-100 bg-white/95 backdrop-blur-lg border-t border-gray-200' 
            : 'max-h-0 opacity-0'
        }`}>
          <div className='px-4 py-6 space-y-4'>
            {[
              { href: "/", label: "Home", section: null },
              { href: "/Pages/about", label: "About", section: null },
              { href: "/Pages/why-us", label: "Why Us", section: null },
              { href: "#gallery", label: "Gallery", section: "gallery" },
              { href: "/Pages/contact", label: "Contact", section: null },
            ].map((item) => (
              item.section ? (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.section)}
                  className='relative flex items-center px-4 py-3 rounded-lg text-[#001C73] hover:bg-blue-50 transition-all duration-300 font-medium group w-full text-left'
                >
                  <span className='relative'>
                    {item.label}
                    <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-[#001C73] transition-all duration-300 group-hover:w-full'></span>
                  </span>
                </button>
              ) : (
                <Link key={item.href} href={item.href}>
                  <span 
                    onClick={() => setIsMobileMenuOpen(false)}
                    className='relative flex items-center px-4 py-3 rounded-lg text-[#001C73] hover:bg-blue-50 transition-all duration-300 font-medium group'
                  >
                    <span className='relative'>
                      {item.label}
                      <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-[#001C73] transition-all duration-300 group-hover:w-full'></span>
                    </span>
                  </span>
                </Link>
              )
            ))}
            <div className='pt-4 border-t border-gray-200'>
              <button className='w-full border-2 border-[#001C73] text-[#001C73] px-6 py-3 rounded-full font-semibold hover:bg-[#001C73] hover:text-white transition-all duration-300'>
                Search
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Spacer for fixed navbar */}
      <div className='h-20'></div>
    </>
  );
};

export default Navbar;