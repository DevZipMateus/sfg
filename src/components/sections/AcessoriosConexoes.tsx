import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import {
  Settings, Wrench, Circle, CircleDot, Package,
  Filter, Package2, PackageOpen, Database 
} from 'lucide-react';

const produtos = [
  {
    name: 'Abraçadeiras tipo rosca sem fim (Leve, Mangotinho ou Mangote)',
    descricao: 'Aplicação: Fixação de mangueiras em bocais ou conexões\nVariedades: Leve, para mangotinho ou mangote',
    image: '/images/Abraçadeiras tipo rosca sem fim leve, tipo mangotinho ou mangote.jpeg',
    Icon: Wrench,
  },
  {
    name: 'Catalisador para Cola Vipal (30 min ou 60 min)',
    descricao: 'Aplicação: Acelerador para secagem de colas industriais\nTempo de secagem: 30 min ou 60 min',
    image: '/images/Catalisador para cola vipal secagem 30 mim ou 60 min.jpeg',
    Icon: Circle,
  },
  {
    name: 'Conexões Instantâneas',
    descricao: 'Aplicação: Linhas pneumáticas, conexões rápidas para PU ou Nylon\nVantagem: Praticidade e vedação segura',
    image: '/images/Conexões instantaneas.jpeg',
    Icon: Settings,
  },
  {
    name: 'Engate Rápido Ar Comprimido Tipo ER-1 e Pino Macho',
    descricao: 'Aplicação: Conexão/desconexão rápida em sistemas pneumáticos\nTipos: ER-1, Pino Macho',
    image: '/images/Engate rápido ar comprimido tipo ER 1 e pino macho.jpg',
    Icon: Package,
  },
  {
    name: 'Engates Rápidos Tipo Puck Lock',
    descricao: 'Aplicação: Sistemas hidráulicos ou pneumáticos com travamento seguro\nCaracterísticas: Alta vedação e trava rápida',
    image: '/images/Engates rápidos tipo puck look.jpeg',
    Icon: CircleDot,
  },
  {
    name: 'Flexíveis Inox com Conexões Soldadas',
    descricao: 'Aplicação: Diversos segmentos industriais\nMaterial: Aço inox\nExtras: Já montados com conexões soldadas',
    image: '/images/Flexível de diversos tamanhos inox já com as conexões soldadas vários seguimentos uso.jpeg',
    Icon: Filter,
  },
  {
    name: 'Mangotes Flexíveis Montados',
    descricao: 'Aplicação: Vapor, água quente, limpeza subterrânea, óleos\nCores: Branco, Laranja, Preto com tarja azul\nComprimento: Até 120 metros',
    image: '/images/Mangotes flexíveis montados vapor frigorífico branca água quente,laranja montada 120 mts limpeza galerias subterrâneas borracha preta tarja azul oleos.jpeg',
    Icon: Package2,
  },
  {
    name: 'Polias Sincronizadas',
    descricao: 'Aplicação: Transmissão mecânica com correias sincronizadas\nUtilização: Indústria, manutenção e reposição',
    image: '/images/Polias sincronizadas.jpg',
    Icon: Settings,
  },
  {
    name: 'Revestimento de Proteção para Mangueiras',
    descricao: 'Função: Proteger mangueiras contra abrasão, calor ou impactos\nUso: Externo em instalações industriais ou móveis',
    image: '/images/Revestimento proteção mangueiras.jpg',
    Icon: PackageOpen,
  },
  {
    name: 'Tubo Gramianto para Descarga Quente (Piche/Asfalto)',
    descricao: 'Aplicação: Descarga de piche, betume, asfalto quente\nMaterial: Resistente a altas temperaturas',
    image: '/images/Tubo gramianto uso passagem quente descarga pinche de asfalto.jpeg',
    Icon: Database,
  },
  {
    name: 'Tubo PU para Conexões Instantâneas (50 ou 100 metros)',
    descricao: 'Aplicação: Automação, pneumática\nRolos: 50m ou 100m',
    image: '/images/Tudo pu. Para conexões instantânea rolos. 50 ou 100 metros.jpeg',
    Icon: Filter,
  },
  {
    name: 'Válvula Rosca 1/4 NPT para Engate Rápido e Mangueira 1/4',
    descricao: 'Aplicação: Válvula de passagem para sistemas com engate rápido\nRosca: 1/4 NPT',
    image: '/images/Valvula Rosca 1 4 Npt Para Engate Rapido Mangueira 1 4 .jpg',
    Icon: Wrench,
  },
  {
    name: 'Válvulas Esferas Diversas / Tri-Partidas',
    descricao: 'Aplicação: Controle de fluxo em sistemas hidráulicos e pneumáticos\nTipos: Esfera padrão ou tri-partidas',
    image: '/images/Válvulas esferas de diversos tipos ou tri partidas.jpeg',
    Icon: Settings,
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
