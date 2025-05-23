
import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Wrench, Package, Link } from 'lucide-react';

interface CorreiaProps {
  nome: string;
  imagem: string;
  aplicacao: string;
  caracteristicas?: string;
  variedades?: string;
  formato?: string;
  perfis?: string;
  diferencial?: string;
  uso?: string;
  vantagem?: string;
  marca?: string;
  reforco?: string;
  passos?: string;
}

interface CategoriaProps {
  titulo: string;
  icone: JSX.Element;
  descricao: string;
  correias: CorreiaProps[];
}

const Correias = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target);
      }
    }, {
      threshold: 0.1
    });
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

  const categorias: CategoriaProps[] = [
    {
      titulo: "Correias de Transmissão de Potência",
      icone: <Wrench className="h-6 w-6" strokeWidth={1.5} />,
      descricao: "Correias especializadas para transmissão de força e movimento em equipamentos industriais.",
      correias: [{
        nome: "Correia em V - Marca Elite",
        imagem: "/images/correia em V marca Elite.jpeg",
        aplicacao: "Transmissão em motores e polias",
        formato: "V clássico",
        marca: "Elite"
      }, {
        nome: "Correia em V Dupla Sextavada",
        imagem: "/images/Correia em V dupla sextavada.jpeg",
        aplicacao: "Transmissões com polias em ambos os lados",
        formato: "Sextavado – dupla face de tração"
      }, {
        nome: "Correias em V Torque team ou Power band vários canais",
        imagem: "/images/Correias em V tipo Power band.jpeg",
        aplicacao: "Equipamentos de alta potência e vibração",
        caracteristicas: "Correias múltiplas unificadas em banda"
      }, {
        nome: "Correias em V Lisas ou Dentadas",
        imagem: "/images/correias em V lisas ou dentadas.jpeg",
        aplicacao: "Diversas máquinas industriais",
        variedades: "Lisa (maior aderência), dentada (flexibilidade e ventilação)"
      }, {
        nome: "Correias Metro Tipo Accu Link",
        imagem: "/images/Correias metro tipo accu link perfil Z A,B Ou C.jpeg",
        aplicacao: "Substituição rápida de correias tradicionais",
        vantagem: "Ajustável conforme necessidade",
        perfis: "Z, A, B, C"
      }]
    },
    {
      titulo: "Correias Sincronizadas e Sincronismo Especial",
      icone: <Link className="h-6 w-6" strokeWidth={1.5} />,
      descricao: "Correias com design especial para aplicações que exigem sincronismo preciso.",
      correias: [{
        nome: "Correia Sincronizada - Duplo Dentes",
        imagem: "/images/Correia sincronizada - Duplo dentes.jpeg",
        aplicacao: "Sincronismo de motores e máquinas",
        formato: "Denteado dos dois lados"
      }, {
        nome: "Correia Sincronizada - Dentes Desencontrados",
        imagem: "/images/Correia sincronizada dentes desencontrados especial.jpeg",
        aplicacao: "Equipamentos com sincronismo específico",
        diferencial: "Engrenamento de dentes alternado para redução de ruído ou tranco"
      }, {
        nome: "Correias Sincronizadas de diversos passos",
        imagem: "/lovable-uploads/e3baf38a-7a4b-4d60-989f-2729608ccc4e.png",
        aplicacao: "Aplicações de sincronismo preciso",
        passos: "MXL-XL-L-H-XH-XXH-3M-8M-14M-T5-AT5-T10-AT10",
        caracteristicas: "Disponíveis em borracha ou PU aço"
      }]
    },
    {
      titulo: "Correias Planas e de Transporte",
      icone: <Package className="h-6 w-6" strokeWidth={1.5} />,
      descricao: "Soluções para transporte de materiais e aplicações industriais específicas.",
      correias: [
        {
          nome: "Correias Laminadas para Elevador de Canecas (2 a 6 Lonas)",
          imagem: "/images/Correia Plana.jpeg",
          aplicacao: "Sistemas de elevação de grãos e minerais",
          caracteristicas: "Com ou sem película, 2 a 6 lonas"
        },
        {
          nome: "Correia transportadora com talisca",
          imagem: "/images/Correia transportadora.jpg",
          aplicacao: "Movimentação de sacarias, serragem  e caixas",
          caracteristicas: "Alta resistência e durabilidade"
        },
        {
          nome: "Rolos de Correias",
          imagem: "/images/Rolos correias:transportadora e borrachas.jpeg",
          aplicacao: "Venda por metro ou montagem personalizada",
          caracteristicas: "Correias transportadoras e borrachas industriais"
        },
        {
          nome: "Correias Transportadoras de Borracha (2 e 3 Lonas)",
          imagem: "/images/Correias transportadoras borrachas 2 e 3 lonas.jpeg",
          aplicacao: "Transporte contínuo de materiais",
          reforco: "Alta resistência com múltiplas lonas"
        },
        {
          nome: "Correia Transportadora Plana de PVC Verde",
          imagem: "/images/CorreiaTranspplana.jpeg",
          aplicacao: "Ideal para o transporte de materiais leves e médios",
          reforco: "Camadas de tecido sintético (Poliéster/Nylon)"
        },
        {
          nome: "Correia Transportadora Plana de PVC verde claro",
          imagem: "/images/CorreiaTranspplana2.jpeg",
          aplicacao: "A superfície antiderrapante é usada para garantir aderência ao material transportado, principalmente em esteiras inclinadas ou quando os produtos são escorregadios ou leves.",
          reforco: "Alta resistência à tração e desgaste"
        }
      ]
    }
  ];

  const getActiveCorreias = () => {
    if (!activeCategory) return [];
    const categoria = categorias.find(cat => cat.titulo === activeCategory);
    return categoria ? categoria.correias : [];
  };

  return <section id="correias" ref={sectionRef} className="bg-gray-50 py-0">
      <div className="container-section">
        <motion.div className="text-center max-w-3xl mx-auto mb-12" initial={{
        opacity: 0,
        y: 20
      }} animate={isVisible ? {
        opacity: 1,
        y: 0
      } : {
        opacity: 0,
        y: 20
      }} transition={{
        duration: 0.7
      }}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Correias</h2>
          <p className="text-lg text-gray-600">
            Soluções completas em correias para diversas aplicações industriais
          </p>
        </motion.div>

        <div className="mb-12 overflow-x-auto">
          <div className="flex space-x-2 min-w-max">
            {categorias.map((categoria, index) => <motion.button key={index} className={cn("flex items-center px-4 py-3 rounded-lg border transition-all whitespace-nowrap", activeCategory === categoria.titulo ? "bg-sfg-red text-white border-sfg-red" : "bg-white text-gray-700 border-gray-200 hover:bg-gray-50")} onClick={() => setActiveCategory(categoria.titulo)} initial={{
            opacity: 0,
            y: 10
          }} animate={isVisible ? {
            opacity: 1,
            y: 0
          } : {
            opacity: 0,
            y: 10
          }} transition={{
            duration: 0.5,
            delay: 0.1 * index
          }}>
                <span className={cn("mr-2", activeCategory === categoria.titulo ? "text-white" : "text-sfg-red")}>
                  {categoria.icone}
                </span>
                <span className="font-medium">{categoria.titulo}</span>
              </motion.button>)}
          </div>
        </div>

        {activeCategory && <motion.div className="bg-gray-50 p-4 rounded-lg mb-8" initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        duration: 0.3
      }}>
            <p className="text-gray-700">
              {categorias.find(cat => cat.titulo === activeCategory)?.descricao}
            </p>
          </motion.div>}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {getActiveCorreias().map((correia, index) => <motion.div key={index} className="card hover:shadow-lg overflow-hidden" initial={{
          opacity: 0,
          y: 20
        }} animate={isVisible ? {
          opacity: 1,
          y: 0
        } : {
          opacity: 0,
          y: 20
        }} transition={{
          duration: 0.5,
          delay: 0.1 * index
        }}>
              <div className="h-64 overflow-hidden">
                <img src={correia.imagem} alt={correia.nome} className="w-full h-full object-cover rounded-t-lg" />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-semibold mb-2">{correia.nome}</h3>
                
                <div className="mt-3 space-y-2">
                  <div className="bg-gray-50 p-2 rounded">
                    <span className="font-medium">Aplicação:</span> {correia.aplicacao}
                  </div>
                  
                  {Object.entries(correia).map(([key, value]) => {
                if (key !== 'nome' && key !== 'imagem' && key !== 'aplicacao' && value) {
                  return <div key={key} className="bg-gray-50 p-2 rounded">
                          <span className="font-medium">{key.charAt(0).toUpperCase() + key.slice(1)}:</span> {value}
                        </div>;
                }
                return null;
              })}
                </div>
              </div>
            </motion.div>)}
        </div>
      </div>
    </section>;
};

export default Correias;
