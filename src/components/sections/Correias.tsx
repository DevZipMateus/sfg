
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
    image: correiaEmVImages[0],
    name: 'Correias em V',
    description: 'Ideais para transmissão de potência em equipamentos industriais e agrícolas.',
    hasCarousel: true
  },
  {
    image: '/images/Correia sincronizada - Duplo dentes.jpeg',
    name: 'Correias Sincronizadas',
    description: 'Perfeitas para sistemas que exigem precisão na transmissão de movimento.'
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
    image: '/images/Correia transportadora.jpg',
    name: 'Correia transportadora',
    description: 'Correias transportadoras robustas para transporte industrial.'
  }
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
