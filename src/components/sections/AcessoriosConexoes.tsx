import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Settings, Wrench, Box, Hammer, Square, Circle, 
  Package, CircleDot, Filter, Package2, PackageOpen, 
  Database 
} from 'lucide-react';

const produtos = [{
  name: 'Abraçadeiras tipo rosca sem fim (Leve, Mangotinho ou Mangote)',
  descricao: 'Aplicação: Fixação de mangueiras em bocais ou conexões\nVariedades: Leve, para mangotinho ou mangote',
  image: '/lovable-uploads/f111a145-a104-4307-82de-967555758e14.png',
  Icon: Wrench
}, {
  name: 'Catalisador para Cola Vipal (30 min ou 60 min)',
  descricao: 'Aplicação: Acelerador para secagem de colas industriais\nTempo de secagem: 30 min ou 60 min',
  image: '/lovable-uploads/f111a145-a104-4307-82de-967555758e14.png',
  Icon: Circle
}, {
  name: 'Conexões Instantâneas',
  descricao: 'Aplicação: Linhas pneumáticas, conexões rápidas para PU ou Nylon\nVantagem: Praticidade e vedação segura',
  image: '/lovable-uploads/f111a145-a104-4307-82de-967555758e14.png',
  Icon: Settings
}, {
  name: 'Engate Rápido Ar Comprimido Tipo ER-1 Rosca Macho',
  descricao: 'Aplicação: Conexão/desconexão rápida em sistemas pneumáticos\nTipos: ER-1, Rosca Macho',
  image: '/lovable-uploads/f111a145-a104-4307-82de-967555758e14.png',
  Icon: Package
}, {
  name: 'Engates Rápidos Tipo Puck Lock',
  descricao: 'Aplicação: Sistemas hidráulicos ou pneumáticos com travamento seguro\nCaracterísticas: Alta vedação e trava rápida',
  image: '/lovable-uploads/f111a145-a104-4307-82de-967555758e14.png',
  Icon: CircleDot
}, {
  name: 'Flexíveis Inox com Conexões Soldadas',
  descricao: 'Aplicação: Diversos segmentos industriais\nMaterial: Aço inox\nExtras: Já montados com conexões soldadas',
  image: '/lovable-uploads/f111a145-a104-4307-82de-967555758e14.png',
  Icon: Filter
}, {
  name: 'Mangotes Flexíveis Montados',
  descricao: 'Aplicação: Vapor, água quente, limpeza subterrânea, óleos\nCores: Branco, Laranja, Preto com tarja azul\nComprimento: Até 120 metros',
  image: '/lovable-uploads/f111a145-a104-4307-82de-967555758e14.png',
  Icon: Package2
}, {
  name: 'Polias Sincronizadas',
  descricao: 'Aplicação: Transmissão mecânica com correias sincronizadas\nUtilização: Indústria, manutenção e reposição',
  image: '/lovable-uploads/f111a145-a104-4307-82de-967555758e14.png',
  Icon: Settings
}, {
  name: 'Revestimento de Proteção para Mangueiras',
  descricao: 'Função: Proteger mangueiras contra abrasão, calor ou impactos\nUso: Externo em instalações industriais ou móveis',
  image: '/lovable-uploads/f111a145-a104-4307-82de-967555758e14.png',
  Icon: PackageOpen
}, {
  name: 'Tubo Gramianto para Descarga Quente (Piche/Asfalto)',
  descricao: 'Aplicação: Descarga de piche, betume, asfalto quente\nMaterial: Resistente a altas temperaturas',
  image: '/lovable-uploads/f111a145-a104-4307-82de-967555758e14.png',
  Icon: Database
}, {
  name: 'Tubo PU para Conexões Instantâneas (50 ou 100 metros)',
  descricao: 'Aplicação: Automação, pneumática\nRolos: 50m ou 100m',
  image: '/lovable-uploads/f111a145-a104-4307-82de-967555758e14.png',
  Icon: Filter
}, {
  name: 'Válvula Rosca fêmea ER 1 para Engate Rápido',
  descricao: 'Aplicação: Válvula de passagem para sistemas com engate rápido\nRosca: Rosca Fêmea ER 1 ',
  image: '/lovable-uploads/f111a145-a104-4307-82de-967555758e14.png',
  Icon: Wrench
}, {
  name: 'Válvulas Esferas Diversas / Tri-Partidas',
  descricao: 'Aplicação: Controle de fluxo em sistemas hidráulicos e pneumáticos\nTipos: Esfera padrão ou tri-partidas',
  image: '/lovable-uploads/f111a145-a104-4307-82de-967555758e14.png',
  Icon: Settings
}, {
  name: 'Espigões (Aço Laminado, Inox ou Latão)',
  descricao: 'Aplicação: Conexões para mangueiras e tubos\nMaterial: Aço inox, laminado ou latão',
  image: '/lovable-uploads/f111a145-a104-4307-82de-967555758e14.png',
  Icon: Wrench
}, {
  name: 'Grampos',
  descricao: 'Aplicação: Fixação de correias transportadoras\nMaterial: Aço zincado ou galvanizado',
  image: '/lovable-uploads/f111a145-a104-4307-82de-967555758e14.png',
  Icon: Hammer
}, {
  name: 'Parafusos para Caçambas',
  descricao: 'Aplicação: Fixação de caçambas em elevadores ou esteiras\nTipo: Cabeça abaulada ou especial para chapas metálicas',
  image: '/lovable-uploads/f111a145-a104-4307-82de-967555758e14.png',
  Icon: Settings
}, {
  name: 'Canecas para Elevadores de Cereais',
  descricao: 'Aplicação: Transporte vertical de grãos e produtos a granel\nMaterial: Plástico ou metálico',
  image: '/lovable-uploads/f111a145-a104-4307-82de-967555758e14.png',
  Icon: Box
}, {
  name: 'Lençol de Borracha com ou sem Lona',
  descricao: 'Aplicação: Vedação, proteção e pisos industriais\nVariações: Com reforço (lona) ou sem',
  image: '/lovable-uploads/f111a145-a104-4307-82de-967555758e14.png',
  Icon: Square
}, {
  name: 'Piso de Borracha 50x50',
  descricao: 'Aplicação: Revestimento de áreas industriais ou comerciais\nFormato: Placas 50cm x 50cm – Antiderrapante',
  image: '/lovable-uploads/f111a145-a104-4307-82de-967555758e14.png',
  Icon: Square
}];

const AcessoriosConexoes = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target);
      }
    }, {
      threshold: 0.1
    });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);
  return <section ref={sectionRef} id="acessorios-conexoes" className="bg-gray-50 py-0">
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Acessórios e Conexões</h2>
          <p className="text-lg text-gray-600">
            Ampla linha de acessórios para manutenção e montagem de sistemas industriais.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {produtos.map((produto, idx) => <motion.div key={produto.name} className="card p-6 text-center group hover:bg-sfg-red hover:text-white transition-all duration-300" initial={{
          opacity: 0,
          scale: 0.9
        }} animate={isVisible ? {
          opacity: 1,
          scale: 1
        } : {
          opacity: 0,
          scale: 0.9
        }} transition={{
          duration: 0.5,
          delay: 0.05 * idx
        }}>
              <div className="flex justify-center mb-3">
                <produto.Icon className="h-8 w-8 text-sfg-red group-hover:text-white transition-colors duration-300" />
              </div>
              <img src={produto.image} alt={produto.name} className="mx-auto h-32 object-contain mb-3 rounded" />
              <h3 className="text-lg font-medium">{produto.name}</h3>
              <p className="text-gray-600 group-hover:text-white text-sm">{produto.descricao}</p>
            </motion.div>)}
        </div>
      </div>
    </section>;
};

export default AcessoriosConexoes;
