
import { Droplet, Wrench, Circle, CupSoda } from 'lucide-react';
import { CategoriaProps } from './types';

export const categorias: CategoriaProps[] = [
  {
    titulo: "Mangueiras para Ar e Água",
    icone: <Droplet className="h-6 w-6" strokeWidth={1.5} />,
    descricao: "Usadas em compressores, lava jatos, ferramentas pneumáticas e sistemas de água.",
    mangueiras: [
      {
        nome: "Mangueira Ar/Água Lisa 300 psi",
        imagem: "/images/Mangueira ar_água Lisa 300 psi uso ar conprimido.png",
        aplicacao: "Ar comprimido",
        caracteristica: "Pressão: 300 psi"
      },
      {
        nome: "Mangueira Ar/Água Preta (Tarja Amarela/Azul)",
        imagem: "/images/Mangueira ar_água preta tarja amarelo e preta tarja azul óleos e derivados.jpeg",
        aplicacao: "Ar, água e óleos leves",
        caracteristica: "Cor: Preta com tarjas para identificação"
      },
      {
        nome: "Mangueira Lava Auto (1/2 ou 3/4 - 1000 ou 1500 psi)",
        imagem: "/images/Mangueira lava auto 1_2 ou 3_4 1000 ou. 1500 psi.jpeg",
        aplicacao: "Lavadoras de alta pressão",
        caracteristica: "Pressão: 1000 ou 1500 psi"
      },
      {
        nome: "Mangueiras de Ar e Água (500 a 700 psi)",
        imagem: "/images/Mangueiras de ar e água de 500_700 psi  usadas em marteletes rompedores.jpeg",
        aplicacao: "Marteletes e rompedores",
        caracteristica: "Pressão: 500–700 psi"
      }
    ]
  },
  {
    titulo: "Mangueiras Hidráulicas e Alta Pressão",
    icone: <Wrench className="h-6 w-6" strokeWidth={1.5} />,
    descricao: "Reforçadas para condução de fluídos sob alta pressão.",
    mangueiras: [
      {
        nome: "Mangueiras Hidráulicas com Trama de Aço e Conexões",
        imagem: "/lovable-uploads/f111a145-a104-4307-82de-967555758e14.png",
        aplicacao: "Equipamentos hidráulicos"
      },
      {
        nome: "Mangueira Nylon para Óleos e Alta Pressão",
        imagem: "/lovable-uploads/f111a145-a104-4307-82de-967555758e14.png",
        aplicacao: "Produtos químicos e óleos",
        caracteristica: "Alta resistência"
      },
      {
        nome: "Mangueiras Hidráulicas Diversos Tipos",
        imagem: "/lovable-uploads/f111a145-a104-4307-82de-967555758e14.png",
        aplicacao: "Linhas hidráulicas industriais",
        caracteristica: "Tipos: 1 trama, 2 tramas ou trançadas de aço"
      },
      {
        nome: "Conexões para Mangueiras Hidráulicas",
        imagem: "/lovable-uploads/f111a145-a104-4307-82de-967555758e14.png",
        aplicacao: "Conexão entre linhas hidráulicas",
        caracteristica: "Compatibilidade: Vários diâmetros e pressões"
      }
    ]
  },
  {
    titulo: "Mangueiras para Combustíveis e Óleos",
    icone: <Circle className="h-6 w-6" strokeWidth={1.5} />,
    descricao: "Específicas para líquidos inflamáveis e lubrificantes.",
    mangueiras: [
      {
        nome: "Mangueira Marton Petróleo",
        imagem: "/lovable-uploads/f111a145-a104-4307-82de-967555758e14.png",
        aplicacao: "Óleo diesel e gasolina"
      },
      {
        nome: "Mangueira Ar/Água Preta com Tarja Azul/Amarela",
        imagem: "/lovable-uploads/f111a145-a104-4307-82de-967555758e14.png",
        aplicacao: "Também compatível com derivados de petróleo"
      }
    ]
  },
  {
    titulo: "Mangueiras Alimentícias e Atóxicas",
    icone: <CupSoda className="h-6 w-6" strokeWidth={1.5} />,
    descricao: "Para bebidas, alimentos e produtos sensíveis.",
    mangueiras: [
      {
        nome: "Mangueira Tipo KTS Transparente com Arame (Atóxica)",
        imagem: "/lovable-uploads/f111a145-a104-4307-82de-967555758e14.png",
        aplicacao: "Vinhos, vinagre, leite, sorvetes",
        caracteristica: "Reforço: Espiral aramada"
      },
      {
        nome: "Mangueira PVC Sucção (Transparente Atóxica, Azul, Laranja, Verde)",
        imagem: "/lovable-uploads/f111a145-a104-4307-82de-967555758e14.png",
        aplicacao: "Bebidas e alimentos",
        caracteristica: "Tipos: Leve, média e pesada"
      }
    ]
  },
  {
    titulo: "Mangueiras Flexíveis em PVC ou PU",
    icone: <Wrench className="h-6 w-6" strokeWidth={1.5} />,
    descricao: "Leves, flexíveis, para limpeza, aspiração e uso geral.",
    mangueiras: [
      {
        nome: "Mangueira Flat Chata",
        imagem: "/lovable-uploads/f111a145-a104-4307-82de-967555758e14.png",
        aplicacao: "Irrigação e drenagem",
        caracteristica: "Características: Dobrável e leve"
      },
      {
        nome: "Mangueira PU com Arame Tipo KPUC (Pó ou Exaustores)",
        imagem: "/lovable-uploads/f111a145-a104-4307-82de-967555758e14.png",
        aplicacao: "Exaustão de pó e partículas"
      },
      {
        nome: "Mangueira Alumínio Tipo APA",
        imagem: "/lovable-uploads/f111a145-a104-4307-82de-967555758e14.png",
        aplicacao: "Exaustores e chaminés"
      },
      {
        nome: "Mangueira PVC Aspirador (Cinza ou Azul) e Tubo Silicone",
        imagem: "/lovable-uploads/f111a145-a104-4307-82de-967555758e14.png",
        aplicacao: "Aspiração e diversos segmentos"
      },
      {
        nome: "Mangueiras Lisa ou Espiraladas (PU - Conexões Instantâneas)",
        imagem: "/lovable-uploads/f111a145-a104-4307-82de-967555758e14.png",
        aplicacao: "Linhas pneumáticas e automação industrial"
      }
    ]
  }
];
