import { motion } from 'framer-motion';

interface SectionProps {
  children: React.ReactNode;
  custom?: string;
  section?: {
    icon: React.ReactNode;
    title: string;
    subtitle: string,
  };
  id?: string;
}

export function Section({ children, custom = '', section, id }: SectionProps) {
  return (
    <section id={id} className={`container px-4 space-y-8 py-8 md:py-16 lg:py-24 ${custom}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-3 text-center"
      >
        {section && (
          <div className="flex flex-col items-center justify-center gap-3">
            {/* Section label separator */}
            <div className="flex items-center gap-4 w-full mb-4">
              <div className="flex-1 h-px bg-[var(--border)]" />
              <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-[var(--primary)]">
                {section.title}
              </span>
              <div className="flex-1 h-px bg-[var(--border)]" />
            </div>
            <h2 className="font-mono text-2xl font-bold uppercase tracking-[0.03em] leading-[1.2] sm:text-3xl md:text-4xl text-[var(--fg)]">{section.title}</h2>
            <p className="max-w-[95%] md:max-w-[85%] font-sans text-[15px] leading-relaxed text-[var(--fg-muted)] mb-6">{section.subtitle}</p>
          </div>
        )}
        {children}
      </motion.div>
    </section>
  );
}
