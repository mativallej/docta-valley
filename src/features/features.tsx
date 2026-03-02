
import { motion } from "framer-motion";
import { features } from "@/data/data";

export default function Features() {
  return (
    <div className="mx-auto grid w-full gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {features.map((feature, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          whileHover={{
            translateY: -1,
            transition: { duration: 0.2 },
          }}
          className="relative overflow-hidden rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--surface)] p-2 transition-all duration-200 hover:border-[var(--primary)]/20"
        >
          <div className="flex h-[180px] flex-col justify-between rounded-[var(--radius)] p-6 items-center gap-3">
            <div className="text-[var(--accent-bright)]">
              {feature.icon}
            </div>
            <div className="space-y-2 text-center">
              <h3 className="font-mono text-[12px] font-semibold uppercase tracking-[0.08em] text-[var(--fg)]">{feature.name}</h3>
              <p className="font-sans text-[13px] text-[var(--fg-muted)]">{feature.description}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
