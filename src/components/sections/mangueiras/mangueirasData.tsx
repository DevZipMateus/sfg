
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
        imagem: "/images/Mangueiras hidráulicas trama aço e conexões.jpeg",
        aplicacao: "Equipamentos hidráulicos"
      },
      {
        nome: "Mangueira Nylon para Óleos e Alta Pressão",
        imagem: "/images/Mangueira nylon passagem produtos óleos alta pressão.jpeg",
        aplicacao: "Produtos químicos e óleos",
        caracteristica: "Alta resistência"
      },
      {
        nome: "Mangueiras Hidráulicas Diversos Tipos",
        imagem: "/images/Mangueiras hidráulicas diversos tipos 1,2 tramas ou outros tipo.jpeg",
        aplicacao: "Linhas hidráulicas industriais",
        caracteristica: "Tipos: 1 trama, 2 tramas ou trançadas de aço"
      },
      {
        nome: "Conexões para Mangueiras Hidráulicas",
        imagem: "/images/Conexões para mangueiras hidrailicas.jpeg",
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
        imagem: "/images/Mangueira marton petróleo usada passagem óleo diesel ou gasolina.jpeg",
        aplicacao: "Óleo diesel e gasolina"
      },
      {
        nome: "Mangueira Ar/Água Preta com Tarja Azul/Amarela",
        imagem: "/images/Mangueira ar_água preta tarja amarelo e preta tarja azul óleos e derivados.jpeg",
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
        imagem: "/images/Mangueira tipo kts transparente arame atoxica uso vinhos,vinagre,leites,fabrica sorvetes.jpeg",
        aplicacao: "Vinhos, vinagre, leite, sorvetes",
        caracteristica: "Reforço: Espiral aramada"
      },
      {
        nome: "Mangueira PVC Sucção (Transparente Atóxica, Azul, Laranja, Verde)",
        imagem: "/images/Mangueira PVC sucao. Azul, tipo média, sucao laranja pesada,verde tipo leve ,transparente atoxica para vinhos,cervejeiros,vinagre ou leite.jpeg",
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
        imagem: "/images/Mangueira Flat Chata.jpeg",
        aplicacao: "Irrigação e drenagem",
        caracteristica: "Características: Dobrável e leve"
      },
      {
        nome: "Mangueira PU com Arame Tipo KPUC (Pó ou Exaustores)",
        imagem: "/images/Mangueira pu com arame tipo kpuc pó ou exaustores.png",
        aplicacao: "Exaustão de pó e partículas"
      },
      {
        nome: "Mangueira Alumínio Tipo APA",
        imagem: "/images/Mangueira alumínio tipo APA usada exaustores e chaminés aquecedores gas.jpeg",
        aplicacao: "Exaustores e chaminés"
      },
      {
        nome: "Mangueira PVC Aspirador (Cinza ou Azul) e Tubo Silicone",
        imagem: "/images/Mangueira PVC tipo aspirador pó cinza ou azul ,tubo silicone diversos seguimentos.jpeg",
        aplicacao: "Aspiração e diversos segmentos"
      },
      {
        nome: "Mangueiras Lisa ou Espiraladas (PU - Conexões Instantâneas)",
        imagem: "/images/Mangueiras Lisa ou espiraladas uso linha arcomprimidos tipo conexões instantânea tubo pu.jpeg",
        aplicacao: "Linhas pneumáticas e automação industrial"
      }
    ]
  }
];
