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
    <section id={id} className={`container space-y-12 py-12 md:py-24 lg:py-32 ${custom}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center"
      >
        {section && (
          <div className="flex flex-col items-center justify-center gap-4">
            <div className="flex items-center justify-center gap-2">
              {section.icon}
              <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl">{section.title}</h2>
            </div>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7 mb-8">{section.subtitle}</p>
          </div>
        )}
        {children}
      </motion.div>
    </section>
  );
}
