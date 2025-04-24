
import { ReactElement } from 'react';

export interface MangueiraProps {
  nome: string;
  imagem: string;
  aplicacao: string;
  caracteristica?: string;
}

export interface CategoriaProps {
  titulo: string;
  icone: ReactElement;
  descricao: string;
  mangueiras: MangueiraProps[];
}
