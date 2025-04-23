
import ProductSection from './ProductSection';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const correiaEmVImages = [
  '/images/Correia em V dupla sextavada.jpeg',
  '/images/correias em V lisas ou dentadas.jpeg'
];

const products = [
  {
    image: correiaEmVImages[0], // Default image for type compliance
    name: 'Correias em V',
    description: 'Ideais para transmissão de potência em equipamentos industriais e agrícolas.',
    hasCarousel: true // Custom property to identify carousel items
  },
  {
    image: '/images/Correia sincronizada - Duplo dentes.jpeg',
    name: 'Correias Sincronizadas',
    description: 'Perfeitas para sistemas que exigem precisão na transmissão de movimento.'
  },
  {
    image: '/images/Correia Plana.jpeg',
    name: 'Correias Planas',
    description: 'Utilizadas em transportadores e sistemas com grandes distâncias entre polias.'
  },
  {
    image: 'https://images.unsplash.com/photo-1620283084556-5a01d3d99f08?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&w=600',
    name: 'Correias Fora de Padrão',
    description: 'Soluções personalizadas para aplicações específicas e não convencionais.'
  },
  {
    image: '/images/Correias metro tipo accu link perfil Z A,B Ou C.jpeg',
    name: 'Correias metro tipo accu link perfil Z A,B Ou C',
    description: 'Correias montáveis de diversos perfis para aplicações customizadas.'
  },
  {
    image: '/images/Polias sincronizadas.jpg',
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
    image: '/images/Correia transportadora.jpg',
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
      renderImage={(product) => {
        if (product.hasCarousel) {
          return (
            <Carousel className="w-full">
              <CarouselContent>
                {correiaEmVImages.map((image, index) => (
                  <CarouselItem key={index}>
                    <img
                      src={image}
                      alt={`${product.name} - Imagem ${index + 1}`}
                      className="w-full h-64 object-cover rounded-t-lg"
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          );
        }
        return (
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-64 object-cover rounded-t-lg"
          />
        );
      }}
    />
  );
};

export default Correias;
