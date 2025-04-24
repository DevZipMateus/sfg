
import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import CategoryButton from './mangueiras/CategoryButton';
import MangueiraCard from './mangueiras/MangueiraCard';
import { categorias } from './mangueiras/mangueirasData';

const Mangueiras = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (categorias.length > 0 && !activeCategory) {
      setActiveCategory(categorias[0].titulo);
    }
  }, []);

  const getActiveMangueiras = () => {
    if (!activeCategory) return [];
    const categoria = categorias.find(cat => cat.titulo === activeCategory);
    return categoria ? categoria.mangueiras : [];
  };

  return (
    <section id="mangueiras" ref={sectionRef} className="py-16 bg-white">
      <div className="container-section">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Mangueiras</h2>
          <p className="text-lg text-gray-600">
            Soluções completas para condução de fluidos em diferentes aplicações
          </p>
        </motion.div>

        <div className="mb-12 overflow-x-auto">
          <div className="flex space-x-2 min-w-max">
            {categorias.map((categoria, index) => (
              <CategoryButton
                key={index}
                categoria={categoria}
                isActive={activeCategory === categoria.titulo}
                onClick={() => setActiveCategory(categoria.titulo)}
                index={index}
                isVisible={isVisible}
              />
            ))}
          </div>
        </div>

        {activeCategory && (
          <motion.div
            className="bg-gray-50 p-4 rounded-lg mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <p className="text-gray-700">
              {categorias.find(cat => cat.titulo === activeCategory)?.descricao}
            </p>
          </motion.div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {getActiveMangueiras().map((mangueira, index) => (
            <MangueiraCard
              key={index}
              mangueira={mangueira}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mangueiras;
