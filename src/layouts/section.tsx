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
            <div className="flex items-center justify-center gap-2">
              {section.icon}
              <h2 className="text-2xl font-bold leading-[1.1] sm:text-3xl md:text-4xl">{section.title}</h2>
            </div>
            <p className="max-w-[95%] md:max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7 mb-6">{section.subtitle}</p>
          </div>
        )}
        {children}
      </motion.div>
    </section>
  );
}
