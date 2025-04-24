import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Wrench, Link, Paperclip, Eye, 
  Disc, CupSoda, SquareStack, Grid2X2, Settings, Plug 
} from 'lucide-react';

const Acessorios = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target);
      }
    }, { threshold: 0.1 });
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const accessories = [
    { name: 'Grampos', icon: <Paperclip className="h-8 w-8" />, image: '/images/grampos.jpeg' },
    { name: 'Conexões Hidráulicas', icon: <Link className="h-8 w-8" />, image: '/images/Conexões para mangueiras hidrailicas.jpeg' },
    { name: 'Conexões Instantâneas', icon: <Settings className="h-8 w-8" />, image: '/images/Conexões instantaneas.jpeg' },
    { name: 'Abraçadeiras', icon: <Disc className="h-8 w-8" />, image: '/images/Abraçadeiras tipo rosca sem fim leve, tipo mangotinho ou mangote.jpeg' },
    { name: 'Espigões', icon: <Plug className="h-8 w-8" />, image: '/images/Espigoes aço laminado ou aço inox ou latao.jpeg' },
    { name: 'Parafusos', icon: <Wrench className="h-8 w-8" />, image: '/images/Parafusos para caçambas.jpeg' },
    { name: 'Canecas para Elevadores', icon: <CupSoda className="h-8 w-8" />, image: '/images/Canecas elevadores cereais.jpeg' },
    { name: 'Lençóis de Borracha', icon: <SquareStack className="h-8 w-8" />, image: '/images/Lençol borracha com ou sem lona.jpeg' },
    { name: 'Pisos 50x50', icon: <Grid2X2 className="h-8 w-8" />, image: '/images/Piso borracha 50x50.jpeg' },
  ];

  return (
    <section ref={sectionRef} id="acessorios" className="bg-gray-50 py-16">
      <div className="container-section">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Acessórios</h2>
          <p className="text-lg text-gray-600">
            Complementos essenciais para instalações e manutenções completas
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {accessories.map((item, index) => (
            <motion.div 
              key={index}
              className="card p-6 text-center hover:bg-sfg-red hover:text-white group transition-all duration-300"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, delay: 0.05 * index }}
            >
              <div className="flex justify-center mb-3">
                <div className="text-sfg-red group-hover:text-white transition-colors duration-300">
                  {item.icon}
                </div>
              </div>
              <h3 className="text-lg font-medium">{item.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Acessorios;
