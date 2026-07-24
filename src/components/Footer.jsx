import { Link } from 'react-router-dom';
import { Mail, MessageCircle } from 'lucide-react';
import { site, socials } from '../data/content';
import Mascot from './ui/Mascot';
import { Behance, Instagram, Linkedin } from './ui/BrandIcons';

const socialIcons = { Instagram, Linkedin, Behance, Mail, MessageCircle };

const links = [
  { label: 'Inicio', to: '/' },
  { label: 'Sobre mí', to: '/#sobre-mi' },
  { label: 'Proyectos', to: '/proyectos' },
  { label: 'Fotografía', to: '/#fotografia' },
  { label: 'Contacto', to: '/#contacto' },
];

// En el footer mostramos solo las redes principales (correo/WhatsApp ya
// están destacados en la sección de Contacto).
const footerSocials = socials.filter((s) => ['Instagram', 'Linkedin', 'Behance'].includes(s.icon));

export default function Footer() {
  return (
    <footer className="bg-night text-cream">
      <div className="container-x py-14">
        <div className="flex flex-col items-center gap-8 border-b border-cream/10 pb-10 text-center md:flex-row md:justify-between md:text-left">
          {/* Marca */}
          <div className="flex items-center gap-3">
            <Mascot size={48} />
            <div>
              <p className="font-serif text-xl font-semibold">{site.fullName}</p>
              <p className="eyebrow mt-1 text-[10px] text-gold">{site.role}</p>
            </div>
          </div>

          {/* Navegación */}
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-sm text-cream/70 transition-colors hover:text-gold"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Redes */}
          <div className="flex gap-3">
            {footerSocials.map((social) => {
              const Icon = socialIcons[social.icon] || Mail;
              return (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.name}
                  className="grid h-10 w-10 place-items-center rounded-full border border-cream/20 text-cream/80 transition-all hover:-translate-y-1 hover:border-gold hover:text-gold"
                >
                  <Icon className="h-4 w-4" />
                </a>
              );
            })}
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 pt-6 text-center text-xs text-cream/50 sm:flex-row sm:text-left">
          <p>© {new Date().getFullYear()} {site.fullName}. Todos los derechos reservados.</p>
          <p className="flex items-center gap-1.5">
            Hecho con <span className="text-ember">♥</span> en Medellín · Diseñado con alma
          </p>
        </div>
      </div>
    </footer>
  );
}
