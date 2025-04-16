
import { Mail, MapPin, Phone, Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="space-y-4">
            <div className="mb-6">
              <img 
                src="/lovable-uploads/f111a145-a104-4307-82de-967555758e14.png" 
                alt="SFG Correias e Mangueiras" 
                className="h-16 w-auto mb-4" 
                width="180"
                height="60"
              />
              <p className="mt-2 text-gray-300">
                Tudo o que procura, num só fornecedor: atendimento, qualidade, preço e compromisso.
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <a 
                href="https://facebook.com/profile" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="h-10 w-10 flex items-center justify-center rounded-full bg-sfg-red hover:bg-red-600 transition-colors duration-200"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a 
                href="https://instagram.com/garighansiomar" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="h-10 w-10 flex items-center justify-center rounded-full bg-sfg-red hover:bg-red-600 transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="https://wa.me/5551997211681" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="h-10 w-10 flex items-center justify-center rounded-full bg-green-500 hover:bg-green-600 transition-colors duration-200"
                aria-label="WhatsApp"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-sfg-red">Links Rápidos</h4>
            <nav className="flex flex-col space-y-2">
              <a href="#home" className="text-gray-300 hover:text-white transition-colors duration-200">Início</a>
              <a href="#correias" className="text-gray-300 hover:text-white transition-colors duration-200">Correias</a>
              <a href="#mangueiras" className="text-gray-300 hover:text-white transition-colors duration-200">Mangueiras</a>
              <a href="#acessorios" className="text-gray-300 hover:text-white transition-colors duration-200">Acessórios</a>
              <a href="#quem-somos" className="text-gray-300 hover:text-white transition-colors duration-200">Quem Somos</a>
              <a href="#contato" className="text-gray-300 hover:text-white transition-colors duration-200">Contato</a>
            </nav>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-sfg-red">Entre em Contato</h4>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 text-sfg-red flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">
                  R. Oscár Pedro Kulzer, 1253<br />
                  Estância Velha, Canoas - RS, 92030-230
                </span>
              </div>
              <div className="flex items-center">
                <Phone className="mr-2 h-5 w-5 text-sfg-red flex-shrink-0" />
                <a href="tel:+5551997211681" className="text-gray-300 hover:text-white transition-colors duration-200">
                  (51) 99721-1681
                </a>
              </div>
              <div className="flex items-center">
                <Phone className="mr-2 h-5 w-5 text-sfg-red flex-shrink-0" />
                <a href="tel:+5551998728425" className="text-gray-300 hover:text-white transition-colors duration-200">
                  (51) 99872-8425
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="mr-2 h-5 w-5 text-sfg-red flex-shrink-0" />
                <a href="mailto:sfgcorreiasmangueiras@gmail.com" className="text-gray-300 hover:text-white transition-colors duration-200">
                  sfgcorreiasmangueiras@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-gray-400 text-sm text-center">
          <p>© {currentYear} SFG Correias e Mangueiras — Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
