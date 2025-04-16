
import ProductSection from './ProductSection';

const Mangueiras = () => {
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
    }
  ];

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
