
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import {
  Settings, Wrench, Plug, SquareStack, SquareCheck, SquareEqual
} from 'lucide-react';

const produtos = [
  {
    name: 'Conexões instantâneas',
    descricao: 'Agilidade e segurança na montagem de sistemas com conexões de alta performance.',
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&w=600',
    Icon: Settings,
  },
  {
    name: 'Catalisador para cola vipal secagem 30 min ou 60 min',
    descricao: 'Catalisador eficiente para colagem rápida e eficaz.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&w=600',
    Icon: Plug,
  },
  {
    name: 'Rodízios codas especial cereron haste e trava',
    descricao: 'Rodízios especiais para movimentação de cargas com trava de segurança.',
    image: 'https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&w=600',
    Icon: SquareStack,
  },
  {
    name: 'Rodízios tipo pesado para andaimes',
    descricao: 'Rodas robustas para uso em estruturas móveis pesadas.',
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&w=600',
    Icon: SquareCheck,
  },
  {
    name: 'Rodízios travas tipo leves',
    descricao: 'Rodízios leves ideais para móveis e equipamentos menores.',
    image: 'https://images.unsplash.com/photo-1613375772563-af532af5cef9?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&w=600',
    Icon: SquareEqual,
  },
  {
    name: 'Engates rápidos tipo puck look',
    descricao: 'Soluções rápidas para conexão e desconexão de fluidos.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&w=600',
    Icon: Plug,
  },
  {
    name: 'Válvulas esferas de diversos tipos ou tri partidas',
    descricao: 'Válvulas esferas industriais para uma variedade de aplicações.',
    image: 'https://images.unsplash.com/photo-1590664216212-62e763768cbb?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&w=600',
    Icon: Settings,
  },
  {
    name: 'Abraçadeiras tipo rosca sem fim leve, tipo mangotinho ou mangote',
    descricao: 'Abraçadeiras para apertos precisos e fácil manutenção.',
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&w=600',
    Icon: Wrench,
  },
  {
    name: 'Tudo pu. Para conexões instantânea rolos. 50 ou 100 metros',
    descricao: 'Tubo PU em rolos para sistemas pneumáticos.',
    image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&w=600',
    Icon: Plug,
  },
  {
    name: 'Valvula Rosca 1/4 Npt Para Engate Rapido Mangueira 1/4',
    descricao: 'Válvula compacta para sistemas de engate rápido.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&w=600',
    Icon: Settings,
  },
  {
    name: 'Engate rápido ar comprimido tipo ER 1 e pino macho',
    descricao: 'Engate rápido confiável para linhas de ar comprimido.',
    image: 'https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&w=600',
    Icon: Plug,
  },
];

const AcessoriosConexoes = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target);
      }
    }, { threshold: 0.1 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section ref={sectionRef} id="acessorios-conexoes" className="bg-gray-50 py-16">
      <div className="container-section">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Acessórios e Conexões</h2>
          <p className="text-lg text-gray-600">
            Ampla linha de acessórios para manutenção e montagem de sistemas industriais.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {produtos.map((produto, idx) => (
            <motion.div
              key={produto.name}
              className="card p-6 text-center group hover:bg-sfg-red hover:text-white transition-all duration-300"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, delay: 0.05 * idx }}
            >
              <div className="flex justify-center mb-3">
                <produto.Icon className="h-8 w-8 text-sfg-red group-hover:text-white transition-colors duration-300" />
              </div>
              <img src={produto.image} alt={produto.name} className="mx-auto h-32 object-contain mb-3 rounded" />
              <h3 className="text-lg font-medium">{produto.name}</h3>
              <p className="text-gray-600 group-hover:text-white text-sm">{produto.descricao}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AcessoriosConexoes;
