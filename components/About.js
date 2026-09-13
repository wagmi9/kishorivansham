import { Gem, Heart, Gift } from 'lucide-react';
import FadeInSection from './FadeInSection';

const VALUES = [
  {
    icon: Gem,
    title: 'Handpicked materials',
    text: 'Silk, sheesham wood and brass, chosen piece by piece.',
  },
  {
    icon: Heart,
    title: 'Made with intention',
    text: 'Each shringar set is finished for daily seva, not display alone.',
  },
  {
    icon: Gift,
    title: 'Ready to gift',
    text: 'Hampers arrive packaged for the festival, no extra wrapping needed.',
  },
];

export default function About() {
  return (
    <section id="about" className="bg-white px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-2 lg:items-center">
        <FadeInSection>
          <h2 className="font-serif text-2xl font-semibold text-royal sm:text-3xl">
            Devotion, dressed with care
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-royal/70 sm:text-base">
            Kishorivansham began with a simple belief: the objects we keep for worship and
            for gifting deserve the same craftsmanship as anything we wear or display in
            our homes. Every shringar set, wall piece and hamper is sourced from artisans
            working in silk, wood and brass the traditional way, then finished for a
            modern home.
          </p>
        </FadeInSection>
        <div className="space-y-5">
          {VALUES.map(({ icon: Icon, title, text }, i) => (
            <FadeInSection key={title} delay={i * 100}>
              <div className="flex gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold/15">
                  <Icon size={18} className="text-gold-dark" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-royal">{title}</p>
                  <p className="text-sm text-royal/60">{text}</p>
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
}
