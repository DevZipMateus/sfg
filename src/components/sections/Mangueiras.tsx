import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Droplet, Wrench, Circle, CupSoda, PipeIcon } from 'lucide-react';

interface MangueiraProps {
  nome: string;
  imagem: string;
  aplicacao: string;
  caracteristica?: string;
}

interface CategoriaProps {
  titulo: string;
  icone: JSX.Element;
  descricao: string;
  mangueiras: MangueiraProps[];
}

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

  const categorias: CategoriaProps[] = [
    {
      titulo: "Mangueiras para Ar e Água",
      icone: <Droplet className="h-6 w-6" strokeWidth={1.5} />,
      descricao: "Usadas em compressores, lava jatos, ferramentas pneumáticas e sistemas de água.",
      mangueiras: [
        {
          nome: "Mangueira Ar/Água Lisa 300 psi",
          imagem: "/images/Mangueira ar_água Lisa 300 psi uso ar conprimido.png",
          aplicacao: "Ar comprimido",
          caracteristica: "Pressão: 300 psi"
        },
        {
          nome: "Mangueira Ar/Água Preta (Tarja Amarela/Azul)",
          imagem: "/images/Mangueira ar_água preta tarja amarelo e preta tarja azul óleos e derivados.jpeg",
          aplicacao: "Ar, água e óleos leves",
          caracteristica: "Cor: Preta com tarjas para identificação"
        },
        {
          nome: "Mangueira Lava Auto (1/2 ou 3/4 - 1000 ou 1500 psi)",
          imagem: "/images/Mangueira lava auto 1_2 ou 3_4 1000 ou. 1500 psi.jpeg",
          aplicacao: "Lavadoras de alta pressão",
          caracteristica: "Pressão: 1000 ou 1500 psi"
        },
        {
          nome: "Mangueiras de Ar e Água (500 a 700 psi)",
          imagem: "/images/Mangueiras de ar e água de 500_700 psi  usadas em marteletes rompedores.jpeg",
          aplicacao: "Marteletes e rompedores",
          caracteristica: "Pressão: 500–700 psi"
        }
      ]
    },
    {
      titulo: "Mangueiras Hidráulicas e Alta Pressão",
      icone: <Wrench className="h-6 w-6" strokeWidth={1.5} />,
      descricao: "Reforçadas para condução de fluídos sob alta pressão.",
      mangueiras: [
        {
          nome: "Mangueiras Hidráulicas com Trama de Aço e Conexões",
          imagem: "/images/Mangueiras hidráulicas trama aço e conexões.jpeg",
          aplicacao: "Equipamentos hidráulicos"
        },
        {
          nome: "Mangueira Nylon para Óleos e Alta Pressão",
          imagem: "/images/Mangueira nylon passagem produtos óleos alta pressão.jpeg",
          aplicacao: "Produtos químicos e óleos",
          caracteristica: "Alta resistência"
        }
      ]
    },
    {
      titulo: "Mangueiras para Combustíveis e Óleos",
      icone: <Circle className="h-6 w-6" strokeWidth={1.5} />,
      descricao: "Específicas para líquidos inflamáveis e lubrificantes.",
      mangueiras: [
        {
          nome: "Mangueira Marton Petróleo",
          imagem: "/images/Mangueira marton petróleo usada passagem óleo diesel ou gasolina.jpeg",
          aplicacao: "Óleo diesel e gasolina"
        },
        {
          nome: "Mangueira Ar/Água Preta com Tarja Azul/Amarela",
          imagem: "/images/Mangueira ar_água preta tarja amarelo e preta tarja azul óleos e derivados.jpeg",
          aplicacao: "Também compatível com derivados de petróleo"
        }
      ]
    },
    {
      titulo: "Mangueiras Alimentícias e Atóxicas",
      icone: <CupSoda className="h-6 w-6" strokeWidth={1.5} />,
      descricao: "Para bebidas, alimentos e produtos sensíveis.",
      mangueiras: [
        {
          nome: "Mangueira Tipo KTS Transparente com Arame (Atóxica)",
          imagem: "/images/Mangueira tipo kts transparente arame atoxica uso vinhos,vinagre,leites,fabrica sorvetes.jpeg",
          aplicacao: "Vinhos, vinagre, leite, sorvetes",
          caracteristica: "Reforço: Espiral aramada"
        },
        {
          nome: "Mangueira PVC Sucção (Transparente Atóxica, Azul, Laranja, Verde)",
          imagem: "/images/Mangueira PVC sucao. Azul, tipo média, sucao laranja pesada,verde tipo leve ,transparente atoxica para vinhos,cervejeiros,vinagre ou leite.jpeg",
          aplicacao: "Bebidas e alimentos",
          caracteristica: "Tipos: Leve, média e pesada"
        }
      ]
    },
    {
      titulo: "Mangueiras Flexíveis em PVC ou PU",
      icone: <PipeIcon className="h-6 w-6" strokeWidth={1.5} />,
      descricao: "Leves, flexíveis, para limpeza, aspiração e uso geral.",
      mangueiras: [
        {
          nome: "Mangueira Flat Chata",
          imagem: "/images/Mangueira Flat Chata.jpeg",
          aplicacao: "Irrigação e drenagem",
          caracteristica: "Características: Dobrável e leve"
        },
        {
          nome: "Mangueira PU com Arame Tipo KPUC (Pó ou Exaustores)",
          imagem: "/images/Mangueira pu com arame tipo kpuc pó ou exaustores.png",
          aplicacao: "Exaustão de pó e partículas"
        },
        {
          nome: "Mangueira Alumínio Tipo APA",
          imagem: "/images/Mangueira alumínio tipo APA usada exaustores e chaminés aquecedores gas.jpeg",
          aplicacao: "Exaustores e chaminés"
        },
        {
          nome: "Mangueira PVC Aspirador (Cinza ou Azul) e Tubo Silicone",
          imagem: "/images/Mangueira PVC tipo aspirador pó cinza ou azul ,tubo silicone diversos seguimentos.jpeg",
          aplicacao: "Aspiração e diversos segmentos"
        },
        {
          nome: "Mangueiras Lisa ou Espiraladas (PU - Conexões Instantâneas)",
          imagem: "/images/Mangueiras Lisa ou espiraladas uso linha arcomprimidos tipo conexões instantânea tubo pu.jpeg",
          aplicacao: "Linhas pneumáticas e automação industrial"
        }
      ]
    },
    {
      titulo: "Mangueiras Reforçadas em PVC",
      icone: <PipeIcon className="h-6 w-6" strokeWidth={1.5} />,
      descricao: "Duráveis, com malha interna para maior resistência.",
      mangueiras: [
        {
          nome: "Mangueira Tipo PVC PT 250 (Cristal Trançada – 250 psi)",
          imagem: "/images/Mangueira tipo PVC. PT 250 cristal trancada 250 psi.jpeg",
          aplicacao: "Uso geral",
          caracteristica: "Pressão: Até 250 psi, Reforço: Malha trançada"
        }
      ]
    }
  ];

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
              <motion.button
                key={index}
                className={cn(
                  "flex items-center px-4 py-3 rounded-lg border transition-all whitespace-nowrap",
                  activeCategory === categoria.titulo
                    ? "bg-sfg-red text-white border-sfg-red"
                    : "bg-white text-gray-700 border-gray-200 hover:bg-gray-50"
                )}
                onClick={() => setActiveCategory(categoria.titulo)}
                initial={{ opacity: 0, y: 10 }}
                animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <span className={cn(
                  "mr-2",
                  activeCategory === categoria.titulo ? "text-white" : "text-sfg-red"
                )}>
                  {categoria.icone}
                </span>
                <span className="font-medium">{categoria.titulo}</span>
              </motion.button>
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
            <motion.div
              key={index}
              className="card hover:shadow-lg overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <div className="h-64 overflow-hidden">
                <img
                  src={mangueira.imagem}
                  alt={mangueira.nome}
                  className="w-full h-full object-cover rounded-t-lg"
                />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-semibold mb-2">{mangueira.nome}</h3>
                
                <div className="mt-3 space-y-2">
                  <div className="bg-gray-50 p-2 rounded">
                    <span className="font-medium">Aplicação:</span> {mangueira.aplicacao}
                  </div>
                  
                  {mangueira.caracteristica && (
                    <div className="bg-gray-50 p-2 rounded">
                      <span className="font-medium">Características:</span> {mangueira.caracteristica}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mangueiras;
