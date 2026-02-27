'use client';
import { motion } from "framer-motion";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Link } from "lucide-react";

export default function Proximamente() {
  return (
    <section className="flex min-h-[80vh] flex-col items-center justify-center space-y-10 py-24 bg-[var(--bg)]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container flex flex-col items-center justify-center gap-6 text-center"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="inline-flex items-center rounded-[var(--radius-sm)] bg-[var(--primary-faint)] border border-[var(--primary)]/20 px-4 py-1.5 font-mono text-[10px] font-semibold uppercase tracking-[0.12em] text-[var(--primary)]"
        >
          <Separator className="mx-2 h-4" orientation="vertical" /> Proximamente
        </motion.div>
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="font-mono text-4xl font-bold uppercase tracking-[0.03em] text-[var(--primary)] sm:text-5xl"
        >
          Estamos trabajando...
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="max-w-[42rem] font-sans text-[15px] leading-relaxed text-[var(--fg-muted)] sm:text-base"
        >
          Pronto tendremos esta seccion disponible para ti.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          <Button asChild variant="outline" className="mr-4">
            <Link href="/">Volver al inicio</Link>
          </Button>
          <Button asChild>
            <Link href="mailto:doctavalley@gmail.com">Contactar</Link>
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
