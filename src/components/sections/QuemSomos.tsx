
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Clock, Tool, Truck } from 'lucide-react';

const QuemSomos = () => {
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

  const diferenciais = [
    {
      icon: <Tool className="h-10 w-10" />,
      title: 'Atendimento Técnico',
      description: 'Equipe treinada para oferecer o melhor suporte e soluções técnicas.',
    },
    {
      icon: <Truck className="h-10 w-10" />,
      title: 'Entrega Rápida',
      description: 'Disponibilizamos seus produtos com agilidade quando você mais precisa.',
    },
    {
      icon: <Clock className="h-10 w-10" />,
      title: 'Emergencial 24h',
      description: 'Atendimento especial para casos de urgência, quando cada minuto conta.',
    },
  ];

  return (
    <section ref={sectionRef} id="quem-somos" className="py-16 bg-white">
      <div className="container-section">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Quem Somos</h2>
          <div className="w-20 h-1 bg-sfg-red mx-auto mb-6"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <motion.div 
            className="flex flex-col justify-center"
            initial={{ opacity: 0, x: -20 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-4">SFG Correias e Mangueiras</h3>
            <p className="text-gray-600 mb-4">
              Somos uma empresa especializada em fornecer soluções completas em correias, mangueiras e acessórios 
              industriais. Atendemos com excelência diversos segmentos, desde a indústria até o comércio em geral.
            </p>
            <p className="text-gray-600 mb-4">
              Nosso compromisso é oferecer produtos de qualidade, com atendimento personalizado e preços justos, 
              contribuindo para o sucesso e a eficiência das operações de nossos clientes.
            </p>
            <p className="text-gray-600">
              Contamos com uma equipe qualificada e um amplo estoque para atender às suas necessidades com agilidade 
              e precisão.
            </p>
          </motion.div>

          <motion.div
            className="relative h-64 md:h-auto min-h-[300px] bg-gray-100 rounded-lg overflow-hidden"
            initial={{ opacity: 0, x: 20 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <img 
                src="/lovable-uploads/f111a145-a104-4307-82de-967555758e14.png" 
                alt="SFG Correias e Mangueiras" 
                className="max-w-full max-h-full p-8"
                width="300"
                height="200" 
              />
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="bg-gray-100 p-6 rounded-lg mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          <div className="text-center mb-6">
            <h3 className="text-xl font-bold text-sfg-red">Horário de Atendimento</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-center">
            <div>
              <p className="font-semibold">Segunda a Sexta</p>
              <p className="text-gray-600">08h às 18h</p>
            </div>
            <div>
              <p className="font-semibold">Emergências</p>
              <p className="text-gray-600">Atendimento 24h para casos urgentes</p>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {diferenciais.map((item, index) => (
            <motion.div 
              key={index} 
              className="card p-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.7, delay: 0.2 + index * 0.2 }}
            >
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-red-100 text-sfg-red">
                  {item.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuemSomos;
