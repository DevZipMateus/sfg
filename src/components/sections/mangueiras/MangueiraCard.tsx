
import { motion } from 'framer-motion';
import { MangueiraProps } from './types';

interface MangueiraCardProps {
  mangueira: MangueiraProps;
  index: number;
  isVisible: boolean;
}

const MangueiraCard = ({ mangueira, index, isVisible }: MangueiraCardProps) => {
  return (
    <motion.div
      className="card hover:shadow-lg overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
    >
      <div className="h-64 overflow-hidden">
        <img
          src={mangueira.imagem}
          alt={mangueira.nome}
          className="w-full h-full object-cover rounded-t-lg"
        />
      </div>
      <div className="p-5">
        <h3 className="text-xl font-semibold mb-2">{mangueira.nome}</h3>
        
        <div className="mt-3 space-y-2">
          <div className="bg-gray-50 p-2 rounded">
            <span className="font-medium">Aplicação:</span> {mangueira.aplicacao}
          </div>
          
          {mangueira.caracteristica && (
            <div className="bg-gray-50 p-2 rounded">
              <span className="font-medium">Características:</span> {mangueira.caracteristica}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default MangueiraCard;
