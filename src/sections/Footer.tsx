
import { Facebook, Instagram, Linkedin, Github } from 'lucide-react';
import KonneqtLogo from '../components/KonneqtLogo';
import { useLanguage } from '../contexts/LanguageContext';
import { useState } from 'react';

const Footer = () => {
  const { t, locale } = useLanguage();
  const [email, setEmail] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await fetch('https://automation.cloud.konneqt.io/webhook/8d6e9147-4ed0-4595-9825-9f7390e2910e', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      setEmail('');
      alert(locale === 'pt' ? 'Inscrição enviada com sucesso!' : 'Subscription sent successfully!');
    } catch (error) {
      alert(locale === 'pt' ? 'Erro ao enviar inscrição.' : 'Failed to send subscription.');
    }
  };

  return (
    <footer className="bg-background text-white py-16 px-6">
      <div className="container mx-auto grid md:grid-cols-4 gap-12">
        <div>
          <KonneqtLogo width={140} height={32} className="mb-4" />
          <p className="text-sm text-white/80 mb-4">
            {locale === 'pt'
              ? 'A Konneqt capacita organizações a alcançar integração perfeita e segurança reforçada. Com nossos produtos inovadores, promovemos o progresso e incentivamos a adoção de padrões abertos. Essa abordagem promove flexibilidade e elimina o aprisionamento a fornecedores, permitindo que as organizações personalizem sua infraestrutura tecnológica para atender às suas necessidades específicas.'
              : 'Konneqt empowers organizations to achieve seamless integration and enhanced security. With our innovative products, we promote progress and encourage the adoption of open standards. This approach fosters flexibility and eliminates vendor lock-in, allowing organizations to customize their tech infrastructure to their specific needs.'}
          </p>
          <a href="https://konneqt.io/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
            {locale === 'pt' ? 'Site Oficial' : 'Official Site'}
          </a>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-4">{locale === 'pt' ? 'Locais' : 'Locations'}</h4>
          <ul className="text-sm text-white/80 space-y-2">
            <li><strong>US</strong> 7901 Kingspointe STE 10 – Orlando – Florida, FL 32819, USA</li>
            <li><strong>BR</strong> Av. Brigadeiro Faria Lima, 3200 – 3 Andar – Itaim Bibi, São Paulo - SP 04538-132, Brazil</li>
            <li><strong>AE</strong> Emirates Towers, Floor 42 – Dubai – United Arab Emirates</li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-4">{locale === 'pt' ? 'Termos de Serviço' : 'Terms of Service'}</h4>
          <ul className="text-sm text-white/80 space-y-2">
            <li>
              <a href="https://konneqt.io/terms-conditions/" target="_blank" rel="noopener noreferrer" className="hover:underline">
                {locale === 'pt' ? 'Termos de Serviço' : 'Terms of Service'}
              </a>
            </li>
            <li>
              <a href="https://konneqt.io/privacy-policy-2/" target="_blank" rel="noopener noreferrer" className="hover:underline">
                {locale === 'pt' ? 'Política de Privacidade' : 'Privacy Policy'}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-4">{locale === 'pt' ? 'Siga-nos' : 'Follow us'}</h4>
          <div className="flex space-x-4 mb-6">
            <a href="https://www.facebook.com/profile.php?id=61572554427000#" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <Facebook className="w-5 h-5 text-white hover:text-blue-400" />
            </a>
            <a href="https://www.instagram.com/konneqt.io/profilecard/?igsh=ZHBqcHh5b3Q2ODBz" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <Instagram className="w-5 h-5 text-white hover:text-pink-400" />
            </a>
            <a href="https://www.linkedin.com/company/qriarlabs/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin className="w-5 h-5 text-white hover:text-blue-300" />
            </a>
            <a href="https://github.com/konneqt" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github className="w-5 h-5 text-white hover:text-gray-400" />
            </a>
          </div>

          <form onSubmit={handleSubmit} className="space-y-3">
            <label htmlFor="newsletter" className="block text-sm font-medium">
              Newsletter
            </label>
            <input
              type="email"
              id="newsletter"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full px-4 py-2 rounded bg-white text-black text-sm"
              required
            />
            <button
              type="submit"
              className="w-full py-2 bg-white text-black text-sm font-semibold rounded hover:bg-gray-200 transition-all"
            >
              {locale === 'pt' ? 'Inscreva-se' : 'Subscribe'}
            </button>
          </form>
        </div>
      </div>

      <div className="mt-12 border-t border-white/10 pt-6 text-center text-sm text-white/50">
        © 2025 Konneqt. {locale === 'pt' ? 'Todos os direitos reservados.' : 'All rights reserved.'}
      </div>
    </footer>
  );
};

export default Footer;
