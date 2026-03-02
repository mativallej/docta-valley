import { motion } from "framer-motion";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { FlyingRockets } from "@/components/flying-rockets";
import { WhatsAppIcon } from "@/components/icons/whatsapp";
import { Users, MessageCircle } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <>
      <section className="flex min-h-[80vh] w-full flex-col items-center justify-center space-y-10 py-24 relative overflow-hidden">
        {/* Subtle grid background */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
            opacity: 0.35,
          }}
        />
        <FlyingRockets count={6} />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="container px-4 mx-auto flex flex-col items-center justify-center gap-6 text-center relative z-10"
        >
          <motion.a
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            href="#"
            className="inline-flex items-center rounded-[var(--radius-sm)] bg-[var(--primary-faint)] border border-[var(--primary)]/20 px-3 py-1.5 font-mono text-[10px] font-semibold uppercase tracking-[0.12em] text-[var(--primary)]"
          >
            <Separator className="mx-2 h-4" orientation="vertical" /> Web Oficial de Docta Valley
          </motion.a>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="font-mono text-4xl font-bold uppercase tracking-[0.04em] leading-[1.1] md:text-6xl lg:text-7xl text-[var(--primary)]"
          >
            Conectando Founders
            <br />
            y Builders Tech
          </motion.h1>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="max-w-[750px] text-center font-sans text-[15px] leading-relaxed text-[var(--fg-muted)] sm:text-base"
          >
            Comunidad que conecta founders y builders tech en Cordoba. Ponemos el espacio para propagar ideas, hacer
            match y generar startups cordobesas.
          </motion.span>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 px-4 md:px-0 w-full sm:w-auto"
          >
            <Button size="lg" className="h-10 px-6 sm:h-12 sm:px-8 w-full sm:w-auto" asChild>
              <Link href="https://chat.whatsapp.com/KfBZXVDwrzuIs1HbrvvmSb?mode=gi_t" target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon className="h-4 w-4 mr-2" />
                Unirse a la Comunidad
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="h-10 px-6 sm:h-12 sm:px-8 w-full sm:w-auto" asChild>
              <Link href="/#startups">
                Explorar Startups
              </Link>
            </Button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex items-center gap-2 text-[var(--fg-muted)] font-mono text-xs uppercase tracking-wider"
          >
            <Users className="h-4 w-4 text-[var(--primary)]" />
            <span>+200 personas en la comunidad de WhatsApp</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.0 }}
            className="flex items-center gap-1.5 text-[var(--fg-muted)] font-mono text-xs uppercase tracking-wider"
          >
            <MessageCircle className="h-4 w-4 text-[var(--primary)]" />
            <span>Tenes propuestas, dudas o sugerencias? Hablanos</span>
            <Link href="https://x.com/mativallej_" target="_blank" rel="noopener noreferrer" className="text-[var(--primary)] hover:underline">
              @mativallej_
            </Link>
            <Link href="https://x.com/lucasnasich" target="_blank" rel="noopener noreferrer" className="text-[var(--primary)] hover:underline">
              @lucasnasich
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
};
