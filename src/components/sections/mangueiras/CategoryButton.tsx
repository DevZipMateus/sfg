
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { CategoriaProps } from './types';

interface CategoryButtonProps {
  categoria: CategoriaProps;
  isActive: boolean;
  onClick: () => void;
  index: number;
  isVisible: boolean;
}

const CategoryButton = ({ categoria, isActive, onClick, index, isVisible }: CategoryButtonProps) => {
  return (
    <motion.button
      className={cn(
        "flex items-center px-4 py-3 rounded-lg border transition-all whitespace-nowrap",
        isActive
          ? "bg-sfg-red text-white border-sfg-red"
          : "bg-white text-gray-700 border-gray-200 hover:bg-gray-50"
      )}
      onClick={onClick}
      initial={{ opacity: 0, y: 10 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
    >
      <span className={cn(
        "mr-2",
        isActive ? "text-white" : "text-sfg-red"
      )}>
        {categoria.icone}
      </span>
      <span className="font-medium">{categoria.titulo}</span>
    </motion.button>
  );
};

export default CategoryButton;
