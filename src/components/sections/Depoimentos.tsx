
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const Depoimentos = () => {
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

  const depoimentos = [
    {
      name: "Marco Cardoso",
      stars: 5,
      content: "Excelente atendimento. Esse pessoal sabe o que vende e o atendimento é de primeira qualidade. Show!"
    },
    {
      name: "Andre Martin",
      stars: 5,
      content: "Material de qualidade, vendedor atencioso!"
    },
    {
      name: "Siomar Garighan",
      stars: 5,
      content: "Excelente empresa para se orçar produtos e comprar."
    }
  ];

  return (
    <section ref={sectionRef} className="py-16 bg-gray-50">
      <div className="container-section">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">O que nossos clientes dizem</h2>
          <p className="text-lg text-gray-600">
            Avaliações do Google
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {depoimentos.map((depoimento, index) => (
            <motion.div 
              key={index} 
              className="card p-6 bg-white"
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <div className="flex items-center mb-4">
                <div className="flex space-x-1">
                  {[...Array(depoimento.stars)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-4 italic">&ldquo;{depoimento.content}&rdquo;</p>
              <div className="mt-4 font-medium">{depoimento.name}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Depoimentos;
