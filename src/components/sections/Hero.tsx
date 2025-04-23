
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const contactSection = document.querySelector('#contato');
    if (contactSection) {
      const offsetTop = contactSection.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: offsetTop - 80,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative min-h-[90vh] flex items-center bg-black overflow-hidden pt-16"
    >
      <div className="absolute inset-0 bg-black/60 z-10"></div>
      
      {/* Background Image */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1624507484738-3fd65cb73d7b?q=80&auto=format&fit=crop')] bg-cover bg-center"></div>
      
      <div className="container-section relative z-20 text-white">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 max-w-6xl mx-auto">
          <motion.div
            className="text-center md:text-left max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              SFG Correias e Mangueiras
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8">
              Tudo o que procura, num só fornecedor: atendimento, qualidade, preço e compromisso.
            </p>
            <motion.div
              className="flex justify-center md:justify-start gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <a 
                href="#contato" 
                onClick={scrollToContact}
                className="bg-sfg-red hover:bg-red-600 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 shadow-lg"
              >
                Fale Conosco
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            className="w-full max-w-md"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <img
              src="/lovable-uploads/252cce41-5887-487c-bef2-b36068b27908.png"
              alt="SFG Correias e Mangueiras Logo"
              className="w-full h-auto"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
