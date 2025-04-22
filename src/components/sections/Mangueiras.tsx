
import ProductSection from './ProductSection';

const products = [
  {
    image: 'https://images.unsplash.com/photo-1590664216212-62e763768cbb?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&w=600',
    name: 'Mangueiras Industriais',
    description: 'Alta resistência para condução de fluidos em ambientes industriais.'
  },
  {
    image: 'https://images.unsplash.com/photo-1613375772563-af532af5cef9?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&w=600',
    name: 'Mangueiras em PVC',
    description: 'Flexíveis e duráveis para diversas aplicações e condições de trabalho.'
  },
  {
    image: 'https://images.unsplash.com/photo-1557131613-1b3da273e8f6?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&w=600',
    name: 'Mangotes Flexíveis',
    description: 'Ideais para transporte de produtos e fluidos em alta pressão.'
  },
  {
    image: 'https://images.unsplash.com/photo-1596731498067-3e5af7fb2442?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&w=600',
    name: 'Mangotes Especiais',
    description: 'Soluções específicas para necessidades industriais complexas.'
  },
  // Adicionais da lista
  {
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&w=600',
    name: 'Mangueiras hidráulicas trama aço e conexões',
    description: 'Mangueiras reforçadas com trama de aço para alta pressão e conexões robustas.'
  },
  {
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&w=600',
    name: 'Mangueira tipo PVC. PT 250 cristal trancada 250 psi',
    description: 'Mangueira de PVC cristal com reforço para aplicações de até 250 psi.'
  },
  {
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&w=600',
    name: 'Mangueira nylon passagem produtos óleos alta pressão',
    description: 'Indicada para o transporte de óleos e outros produtos sob alta pressão.'
  },
  {
    image: 'https://images.unsplash.com/photo-1590664216212-62e763768cbb?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&w=600',
    name: 'Mangueiras Lisa ou espiraladas uso linha ar comprimido tipo conexões instantânea tubo pu',
    description: 'Mangueiras lisas ou espiraladas para ar comprimido e conexões rápidas.'
  },
  {
    image: 'https://images.unsplash.com/photo-1596731498067-3e5af7fb2442?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&w=600',
    name: 'Mangotes flexíveis montados vapor frigorífico branca água quente, laranja montada, limpeza galerias subterrâneas, borracha preta tarja azul óleos',
    description: 'Mangotes para uso em sistemas frigoríficos e limpeza pesada.'
  },
  {
    image: 'https://images.unsplash.com/photo-1613375772563-af532af5cef9?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&w=600',
    name: 'Mangueira PVC sucao. Azul, tipo média, sucao laranja pesada, verde tipo leve, transparente atoxica para vinhos, cervejeiros, vinagre ou leite',
    description: 'Sucção multiuso: bebidas, alimentícios e industriais.'
  },
  {
    image: 'https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&w=600',
    name: 'Mangueira ar/água preta tarja amarela e preta tarja azul óleos e derivados',
    description: 'Para condução de ar, água e óleos em diferentes pressões.'
  },
  {
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&w=600',
    name: 'Tubo gramianto uso passagem quente descarga pinche de asfalto',
    description: 'Especial para passagem de materiais quentes ou asfalto.'
  },
  {
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&w=600',
    name: 'Mangueira PVC tipo aspirador pó cinza ou azul, tubo silicone diversos seguimentos',
    description: 'Mangueiras para sucção leve e tubo silicone para múltiplas aplicações.'
  },
  {
    image: 'https://images.unsplash.com/photo-1557131613-1b3da273e8f6?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&w=600',
    name: 'Mangueira ar/água Lisa 300 psi uso ar comprimido',
    description: 'Mangueira robusta para ar comprimido de até 300 psi.'
  },
  {
    image: 'https://images.unsplash.com/photo-1596731498067-3e5af7fb2442?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&w=600',
    name: 'Mangueira tipo kts transparente arame atoxica uso vinhos, vinagre, leites, fabrica sorvetes',
    description: 'Mangueira transparente com arame para sucção em indústrias alimentícias.'
  },
  {
    image: 'https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&w=600',
    name: 'Flexível de diversos tamanhos inox já com as conexões soldadas vários seguimentos uso',
    description: 'Mangueiras de inox com conexões para aplicações diversas.'
  },
  {
    image: 'https://images.unsplash.com/photo-1613375772563-af532af5cef9?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&w=600',
    name: 'Mangueira marton petróleo usada passagem óleo diesel ou gasolina',
    description: 'Indicada para passagem de combustíveis.'
  },
  {
    image: 'https://images.unsplash.com/photo-1557131613-1b3da273e8f6?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&w=600',
    name: 'Mangueira alumínio tipo APA usada exaustores e chaminés aquecedores gas',
    description: 'Ideal para exaustão em sistemas de calefação.'
  },
  {
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&w=600',
    name: 'Mangueira Flat Chata',
    description: 'Mangueira de fácil armazenamento para uso temporário.'
  },
  {
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&w=600',
    name: 'A Mangueira de Polietileno',
    description: 'Polietileno resistente para condução segura.'
  },
  {
    image: 'https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&w=600',
    name: 'Mangueiras de ar e água de 500/700 psi usadas em marteletes rompedores',
    description: 'Alta resistência para ferramentas pneumáticas.'
  },
  {
    image: 'https://images.unsplash.com/photo-1590664216212-62e763768cbb?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&w=600',
    name: 'Revestimento proteção mangueiras',
    description: 'Revestimento para aumentar a durabilidade das mangueiras.'
  },
  {
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&w=600',
    name: 'Mangueira tipo duto passagem cabos subterraneos',
    description: 'Para instalação de cabos e fios em ambientes subterrâneos.'
  },
  {
    image: 'https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&w=600',
    name: 'Mangueira lava auto 1/2 ou 3/4 1000 ou 1500 psi',
    description: 'Especiais para sistemas de lavagem pressurizada.'
  },
  {
    image: 'https://images.unsplash.com/photo-1613375772563-af532af5cef9?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&w=600',
    name: 'Mangueira de Ar e Água 150 ou 300 psi preta tarja amarela',
    description: 'Versátil para aplicações diversas em ar e água.'
  },
  {
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&w=600',
    name: 'Mangueira pu com arame tipo kpuc pó ou exaustores',
    description: 'Indicado para pó e exaustão industrial.'
  },
];

const Mangueiras = () => {
  return (
    <ProductSection
      id="mangueiras"
      title="Mangueiras"
      subtitle="Soluções completas para condução de fluidos em diferentes aplicações"
      products={products}
      bgColor="bg-white"
    />
  );
};

export default Mangueiras;
