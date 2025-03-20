
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

const FloatingButton = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 300) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Add attention-grabbing animation interval
    const animationInterval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => setIsAnimating(false), 1000);
    }, 5000);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(animationInterval);
    };
  }, [lastScrollY]);

  return (
    <a
      href="https://wa.me/5521999999999?text=Olá!%20Gostaria%20de%20mais%20informações%20sobre%20os%20serviços%20de%20contabilidade."
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        'fixed bottom-6 right-6 z-40 flex items-center justify-center w-16 h-16 rounded-full shadow-elevation transition-all duration-300 hover:scale-110',
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0',
        isAnimating ? 'animate-bounce' : ''
      )}
      aria-label="Contato via WhatsApp"
    >
      <img 
        src="/lovable-uploads/097a7f34-6632-412c-b133-978b260d795b.png" 
        alt="WhatsApp" 
        className="w-full h-full"
      />
      <span className="absolute top-0 right-0 flex h-3 w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-300 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-green-400"></span>
      </span>
    </a>
  );
};

export default FloatingButton;
