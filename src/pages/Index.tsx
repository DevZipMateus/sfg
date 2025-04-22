import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import Correias from '@/components/sections/Correias';
import Mangueiras from '@/components/sections/Mangueiras';
import Acessorios from '@/components/sections/Acessorios';
import AcessoriosConexoes from '@/components/sections/AcessoriosConexoes';
import QuemSomos from '@/components/sections/QuemSomos';
import Depoimentos from '@/components/sections/Depoimentos';
import Contato from '@/components/sections/Contato';
import FloatingButton from '@/components/ui/FloatingButton';
import { Toaster } from "@/components/ui/sonner";

const Index = () => {
  useEffect(() => {
    // Definindo título e descrição para SEO
    document.title = "SFG Correias e Mangueiras | Tudo o que procura, num só fornecedor";
    
    // Smooth scroll function for anchor links
    const handleAnchorLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const href = target.getAttribute('href');
        if (href) {
          if (href === '#home') {
            window.scrollTo({
              top: 0,
              behavior: 'smooth',
            });
          } else {
            const element = document.querySelector(href);
            if (element) {
              const offset = 80; // Ajuste conforme o tamanho do header
              window.scrollTo({
                top: element.getBoundingClientRect().top + window.scrollY - offset,
                behavior: 'smooth',
              });
            }
          }
        }
      }
    };

    document.addEventListener('click', handleAnchorLinkClick);
    return () => {
      document.removeEventListener('click', handleAnchorLinkClick);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="overflow-hidden"
    >
      <Toaster position="top-center" />
      <Header />
      <main>
        <Hero />
        <Correias />
        <Mangueiras />
        <AcessoriosConexoes />
        <Acessorios />
        <QuemSomos />
        <Depoimentos />
        <Contato />
      </main>
      <FloatingButton />
      <Footer />
    </motion.div>
  );
};

export default Index;
