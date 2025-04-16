
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { name: 'Início', href: '#home' },
    { name: 'Correias', href: '#correias' },
    { name: 'Mangueiras', href: '#mangueiras' },
    { name: 'Acessórios', href: '#acessorios' },
    { name: 'Quem Somos', href: '#quem-somos' },
    { name: 'Contato', href: '#contato' },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    
    // Handle "Início" link specially to scroll to top
    if (href === '#home') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    } else {
      const element = document.querySelector(href);
      if (element) {
        const offsetTop = element.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
          top: offsetTop - 80, // Ajuste com base no tamanho do header
          behavior: 'smooth',
        });
      }
    }
    
    // Close mobile menu if open
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={cn(
        'fixed w-full z-50 transition-all duration-300 ease-in-out',
        isScrolled
          ? 'bg-white shadow-md py-2'
          : 'bg-white/95 backdrop-blur-sm py-4'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0 flex items-center">
            <a href="#home" className="block" onClick={(e) => scrollToSection(e, '#home')}>
              <img 
                src="/lovable-uploads/f111a145-a104-4307-82de-967555758e14.png" 
                alt="SFG Correias e Mangueiras" 
                className="h-12 md:h-16 w-auto"
                width="180"
                height="60" 
              />
            </a>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex space-x-1 items-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="nav-link text-black hover:text-sfg-red"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contato" 
              className="ml-4 bg-sfg-red text-white px-4 py-2 rounded hover:bg-red-600 transition-colors"
              onClick={(e) => scrollToSection(e, '#contato')}
            >
              Fale Conosco
            </a>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-sfg-red hover:bg-gray-100"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
            >
              {isMobileMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          'md:hidden transition-all duration-300 ease-in-out overflow-hidden bg-white',
          isMobileMenuOpen ? 'max-h-96 opacity-100 border-t border-gray-200' : 'max-h-0 opacity-0'
        )}
      >
        <div className="px-4 py-3 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-sfg-red hover:bg-gray-50"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4 pb-3">
            <a
              href="#contato"
              onClick={(e) => scrollToSection(e, '#contato')}
              className="block w-full text-center px-4 py-2 font-medium rounded-md text-white bg-sfg-red hover:bg-red-600"
            >
              Fale Conosco
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
