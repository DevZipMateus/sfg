
import ProductSection from './ProductSection';

const Correias = () => {
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
    }
  ];

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
