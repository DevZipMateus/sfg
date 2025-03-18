
import { useEffect } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Services from '@/components/sections/Services';
import Blog from '@/components/sections/Blog';
import Contact from '@/components/sections/Contact';
import FloatingButton from '@/components/ui/FloatingButton';
import { motion } from 'framer-motion';

const Index = () => {
  useEffect(() => {
    // Smooth scroll function for anchor links
    const handleAnchorLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const href = target.getAttribute('href');
        if (href) {
          const element = document.querySelector(href);
          if (element) {
            window.scrollTo({
              top: element.getBoundingClientRect().top + window.scrollY - 80,
              behavior: 'smooth',
            });
          }
        }
      }
    };

    document.addEventListener('click', handleAnchorLinkClick);
    return () => {
      document.removeEventListener('click', handleAnchorLinkClick);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="overflow-hidden"
    >
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Blog />
        <Contact />
      </main>
      <FloatingButton />
      <Footer />
    </motion.div>
  );
};

export default Index;
