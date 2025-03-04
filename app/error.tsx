'use client';
import { motion } from "framer-motion";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

export default function GlobalError(props: { error: Error & { digest?: string }; params: { } }) {
  return (
    <html lang="es">
      <body>
        <div className="flex min-h-screen flex-col items-center justify-center">
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
              className="inline-flex items-center rounded-full bg-muted px-4 py-1.5 text-sm font-medium"
            >
              ⚠️ <Separator className="mx-2 h-4" orientation="vertical" /> Error
            </motion.div>
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-4xl font-bold tracking-tight sm:text-5xl"
            >
              Algo salió mal
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8"
            >
              Lo sentimos, ha ocurrido un error inesperado. Por favor, intenta nuevamente.
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
            >
              <Button asChild>
                <a href="/">Volver al inicio</a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </body>
    </html>
  );
}
