import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const {
    toast
  } = useToast();
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target);
      }
    }, {
      threshold: 0.1
    });
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
      toast({
        title: "Mensagem enviada com sucesso!",
        description: "Entraremos em contato em breve."
      });
    }, 1000);
  };
  const contactInfo = [{
    icon: <Phone className="h-6 w-6 text-blue-500" />,
    title: 'Telefone',
    details: '(21) 99999-9999',
    action: 'tel:+5521999999999'
  }, {
    icon: <Mail className="h-6 w-6 text-blue-500" />,
    title: 'Email',
    details: 'contato@contabilidade.com',
    action: 'mailto:contato@contabilidade.com'
  }, {
    icon: <MapPin className="h-6 w-6 text-blue-500" />,
    title: 'Endereço',
    details: 'Av. Presidente Vargas, 123, Centro, Rio de Janeiro - RJ',
    action: 'https://maps.google.com'
  }];
  return <section ref={sectionRef} id="contact" className="bg-white py-0">
      <div className="section-container">
        <motion.div className="text-center max-w-3xl mx-auto mb-16" initial={{
        opacity: 0,
        y: 20
      }} animate={isVisible ? {
        opacity: 1,
        y: 0
      } : {
        opacity: 0,
        y: 20
      }} transition={{
        duration: 0.7
      }}>
          <div className="inline-block px-3 py-1 mb-4 text-sm font-medium text-blue-600 bg-blue-100 rounded-full">
            Contato
          </div>
          <h2 className="section-title">Entre em Contato Conosco</h2>
          <p className="section-subtitle">
            Estamos prontos para atender às suas necessidades contábeis. Preencha o formulário abaixo ou utilize nossos
            canais de atendimento para entrar em contato.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <motion.div className="lg:col-span-3 bg-white rounded-xl shadow-subtle p-6 sm:p-8" initial={{
          opacity: 0,
          x: -20
        }} animate={isVisible ? {
          opacity: 1,
          x: 0
        } : {
          opacity: 0,
          x: -20
        }} transition={{
          duration: 0.7,
          delay: 0.2
        }}>
            <h3 className="text-2xl font-semibold mb-6">Envie uma Mensagem</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-slate-700">
                    Nome Completo *
                  </label>
                  <Input id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full" placeholder="Seu nome" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-slate-700">
                    Email *
                  </label>
                  <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required className="w-full" placeholder="seu@email.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-medium text-slate-700">
                  Telefone
                </label>
                <Input id="phone" name="phone" value={formData.phone} onChange={handleChange} className="w-full" placeholder="(00) 00000-0000" />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-slate-700">
                  Mensagem *
                </label>
                <Textarea id="message" name="message" value={formData.message} onChange={handleChange} required className="min-h-32" placeholder="Como podemos ajudar?" />
              </div>
              <Button type="submit" disabled={isSubmitting} className="w-full sm:w-auto btn-primary">
                {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
              </Button>
            </form>
          </motion.div>

          <motion.div className="lg:col-span-2" initial={{
          opacity: 0,
          x: 20
        }} animate={isVisible ? {
          opacity: 1,
          x: 0
        } : {
          opacity: 0,
          x: 20
        }} transition={{
          duration: 0.7,
          delay: 0.4
        }}>
            <div className="space-y-8">
              {contactInfo.map((item, index) => <div key={index} className="flex">
                  <div className="mr-4 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-blue-50">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-slate-900">{item.title}</h4>
                    <p className="mt-1 text-slate-600">{item.details}</p>
                    <a href={item.action} className="mt-2 inline-block text-sm font-medium text-blue-600 hover:text-blue-700">
                      {item.title === 'Endereço' ? 'Ver no Mapa' : `Contato via ${item.title}`}
                    </a>
                  </div>
                </div>)}
            </div>

            <div className="mt-10 overflow-hidden rounded-xl bg-slate-200 h-64">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.2960758544593!2d-43.19234492359807!3d-22.903458836872207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997f5fd24e0bff%3A0x99447fc2399718e9!2sAv.%20Pres.%20Vargas%2C%20Rio%20de%20Janeiro%20-%20RJ!5e0!3m2!1spt-BR!2sbr!4v1718121266831!5m2!1spt-BR!2sbr" width="100%" height="100%" style={{
              border: 0
            }} allowFullScreen={false} loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Mapa de localização"></iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </section>;
};
export default Contact;