
import ProductSection from './ProductSection';

const products = [
  {
    image: 'https://images.unsplash.com/photo-1633362078392-602f361d5fb4?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&w=600',
    name: 'Correias em V',
    description: 'Ideais para transmissão de potência em equipamentos industriais e agrícolas.'
  },
  {
    image: 'https://images.unsplash.com/photo-1607827448387-a74355252c7c?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&w=600',
    name: 'Correias Sincronizadas',
    description: 'Perfeitas para sistemas que exigem precisão na transmissão de movimento.'
  },
  {
    image: 'https://images.unsplash.com/photo-1582398090980-c768cded9d8c?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&w=600',
    name: 'Correias Planas',
    description: 'Utilizadas em transportadores e sistemas com grandes distâncias entre polias.'
  },
  {
    image: 'https://images.unsplash.com/photo-1620283084556-5a01d3d99f08?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&w=600',
    name: 'Correias Fora de Padrão',
    description: 'Soluções personalizadas para aplicações específicas e não convencionais.'
  },
  // Novos produtos:
  {
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&w=600',
    name: 'Correias metro tipo accu link perfil Z A,B Ou C',
    description: 'Correias montáveis de diversos perfis para aplicações customizadas.'
  },
  {
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&w=600',
    name: 'Polias sincronizadas',
    description: 'Polias para correias sincronizadas, precisão e durabilidade.'
  },
  {
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&w=600',
    name: 'Colas catalisadores vital correias transportadoras (emendas)',
    description: 'Colas e catalisadores para emendas de correias transportadoras.'
  },
  {
    image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&w=600',
    name: 'Correias em V tipo Power band',
    description: 'Correias Power band para aplicações de alta potência.'
  },
  {
    image: 'https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&w=600',
    name: 'Correia transportadora',
    description: 'Correias transportadoras robustas para transporte industrial.'
  },
  {
    image: 'https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&w=600',
    name: 'Correia sincronizada dentes desencontrados especial',
    description: 'Correias sincronizadas especiais para requisitos técnicos diferenciados.'
  },
  {
    image: 'https://images.unsplash.com/photo-1633362078392-602f361d5fb4?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&w=600',
    name: 'Correia em V dupla sextavada',
    description: 'Ideal para sistemas onde a força é transmitida por ambos os lados da correia.'
  },
  {
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&w=600',
    name: 'Correia sincronizada - Duplo dentes',
    description: 'Correia com dupla dentição para sincronismo em dois eixos.'
  },
  {
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&w=600',
    name: 'correias em V lisas ou dentadas',
    description: 'Modelos lisos e dentados para atender diferentes demandas.'
  },
  {
    image: 'https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&w=600',
    name: 'Correia Plana',
    description: 'Correias planas para movimentação e transporte leves ou pesados.'
  },
  {
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&w=600',
    name: 'correia em V marca Elite',
    description: 'Correia V da marca Elite, qualidade garantida para sua transmissão.'
  },
  {
    image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&w=600',
    name: 'Rolos correias: transportadora e borrachas',
    description: 'Rolos ideais para correias transportadoras e borrachas industriais.'
  },
];

const Correias = () => {
  return (
    <ProductSection
      id="correias"
      title="Correias"
      subtitle="Oferecemos uma linha completa de correias para diversas aplicações industriais"
      products={products}
      bgColor="bg-gray-50"
    />
  );
};

export default Correias;

