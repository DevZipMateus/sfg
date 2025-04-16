
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contato = () => {
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

  return (
    <section ref={sectionRef} id="contato" className="py-16 bg-white">
      <div className="container-section">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Entre em Contato</h2>
          <p className="text-lg text-gray-600">
            Estamos à disposição para atender suas necessidades e responder suas dúvidas
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div 
            className="order-1 lg:order-2"
            initial={{ opacity: 0, x: 20 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <div className="space-y-6">
              <div className="card p-6">
                <h3 className="text-xl font-bold mb-4">Informações de Contato</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-sfg-red mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Endereço</p>
                      <p className="text-gray-600">
                        R. Oscár Pedro Kulzer, 1253 - Estância Velha,<br /> 
                        Canoas - RS, 92030-230
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="h-5 w-5 text-sfg-red mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Telefones</p>
                      <p className="text-gray-600">
                        (51) 99721-1681<br />
                        (51) 99872-8425
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail className="h-5 w-5 text-sfg-red mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium">E-mail</p>
                      <p className="text-gray-600">
                        sfgcorreiasmangueiras@gmail.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="h-64 sm:h-80 rounded-lg overflow-hidden shadow-md">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3457.3097107878964!2d-51.17606492424598!3d-29.93217192949739!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95197a4c7bf2cd05%3A0xc2459a511735baa3!2sR.%20Osc%C3%A1r%20Pedro%20Kulzer%2C%201253%20-%20Est%C3%A2ncia%20Velha%2C%20Canoas%20-%20RS%2C%2092030-230!5e0!3m2!1spt-BR!2sbr!4v1718533013523!5m2!1spt-BR!2sbr" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={false} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização SFG Correias e Mangueiras"
                ></iframe>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contato;

