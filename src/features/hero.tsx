import { motion } from "framer-motion";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { FlyingRockets } from "@/components/flying-rockets";
import Link from "next/link";

export default function Hero() {
  return (
    <>
      <section className="flex min-h-[80vh] w-full flex-col items-center justify-center space-y-10 py-24 relative overflow-hidden">
        <FlyingRockets count={6} />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="container px-4 mx-auto flex flex-col items-center justify-center gap-6 text-center"
        >
          <motion.a
            initial={{ opacity: 0 }}    
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            href="#"
            className="inline-flex items-center rounded-full bg-muted px-4 py-1.5 text-sm font-medium"
          >
            🚀 <Separator className="mx-2 h-4" orientation="vertical" /> Web Oficial de Docta Valley
          </motion.a>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-4xl font-bold leading-tight tracking-tighter md:text-6xl lg:text-7xl lg:leading-[1.1] dark:bg-gradient-to-r dark:from-blue-500 dark:to-white bg-gradient-to-r from-blue-500 to-black bg-clip-text text-transparent"
          >
            Conectando Founders
            <br />
            y Builders Tech
          </motion.h1>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="max-w-[750px] text-center text-lg text-muted-foreground sm:text-xl"
          >
            Comunidad que conecta founders y builders tech en Córdoba. Ponemos el espacio para propagar ideas, hacer
            match y generar startups cordobesas. 🇦🇷
          </motion.span>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 px-4 md:px-0 w-full sm:w-auto"
          >
            <Button size="lg" className="h-8 px-4 sm:h-12 sm:px-8 w-full sm:w-auto" asChild>
              <Link href="https://tally.so/r/3ENKPX" target="_blank">
                Unirse a la Comunidad
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="h-8 px-4 sm:h-12 sm:px-8 w-full sm:w-auto" asChild>
              <Link href="/#startups">
                Explorar Startups
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
};
