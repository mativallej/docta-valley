'use client';
import { motion } from "framer-motion";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Link } from "lucide-react";

export default function Proximamente() {
  return (
    <section className="flex min-h-[80vh] flex-col items-center justify-center space-y-10 py-24">
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
          className="inline-flex items-center rounded-full px-4 py-1.5 text-sm font-medium"
        >
          🚧 <Separator className="mx-2 h-4" orientation="vertical" /> Proximamente
        </motion.div>
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-4xl font-bold tracking-tight sm:text-5xl"
        >
          Estamos trabajando...
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8"
        >
          Pronto tendremos esta sección disponible para ti.
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