import { motion } from 'framer-motion';
import { ArrowUpRight, Mail, MapPin, MessageCircle } from 'lucide-react';
import { contact, site, socials } from '../data/content';
import { Item, Reveal, Stagger } from './ui/Reveal';
import Mascot from './ui/Mascot';
import { Behance, Instagram, Linkedin } from './ui/BrandIcons';

const socialIcons = { Instagram, Linkedin, Behance, Mail, MessageCircle };

export default function Contact() {
  return (
    <section id="contacto" className="relative overflow-hidden py-24 sm:py-32">
      <div className="container-x">
        <Reveal direction="up">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-wine px-7 py-16 text-center shadow-card sm:px-12 dark:bg-wine-800">
            {/* Resplandores */}
            <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-gold/20 blur-[90px]" />
            <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-ember/25 blur-[90px]" />

            <div className="relative z-10 mx-auto max-w-3xl">
              <div className="mb-6 flex justify-center">
                <Mascot size={72} float />
              </div>

              <p className="font-script text-4xl text-rose sm:text-5xl">{contact.script}</p>
              <h2 className="mt-2 text-balance text-4xl font-semibold text-cream sm:text-6xl">
                {contact.title}
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-pretty text-lg leading-relaxed text-cream/80">
                {contact.subtitle}
              </p>

              {/* Redes sociales — protagonistas, directamente visibles */}
              <Stagger
                className="mt-11 grid grid-cols-1 gap-4 sm:grid-cols-2"
                stagger={0.07}
                amount={0.3}
              >
                {socials.map((social) => {
                  const Icon = socialIcons[social.icon] || Mail;
                  return (
                    <Item key={social.name}>
                      <motion.a
                        href={social.url}
                        target={social.url.startsWith('http') ? '_blank' : undefined}
                        rel={social.url.startsWith('http') ? 'noreferrer' : undefined}
                        whileHover={{ scale: 1.03, y: -2 }}
                        whileTap={{ scale: 0.97 }}
                        transition={{ type: 'spring', stiffness: 380, damping: 22 }}
                        className="group flex items-center gap-4 rounded-2xl border border-cream/20 bg-cream/5 p-4 text-left backdrop-blur-sm transition-colors hover:border-gold/50 hover:bg-cream/10"
                      >
                        <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-gold text-night">
                          <Icon className="h-5 w-5" />
                        </span>
                        <span className="min-w-0 flex-1">
                          <span className="block font-serif text-lg text-cream">
                            {social.name}
                          </span>
                          <span className="block truncate text-sm text-cream/60">
                            {social.handle}
                          </span>
                        </span>
                        <ArrowUpRight className="h-4 w-4 shrink-0 text-cream/40 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-gold" />
                      </motion.a>
                    </Item>
                  );
                })}
              </Stagger>

              {/* Ubicación */}
              <p className="mt-10 flex items-center justify-center gap-2 text-sm text-cream/60">
                <MapPin className="h-4 w-4" />
                {site.location}
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
