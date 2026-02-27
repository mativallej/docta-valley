"use client"
import { motion } from "framer-motion"
import { StartupCard } from "@/components/startup/startup-card"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { useStartups } from "@/context/startups-context"

export function StartupList() {
  const [visibleCount, setVisibleCount] = useState(9)
  const { state } = useStartups()

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 9)
  }

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  return (
    <div className="space-y-8">
      {state.filteredStartups.length === 0 ? (
        <div className="text-center py-12">
          <h3 className="font-mono text-[16px] font-semibold uppercase tracking-[0.06em] text-[var(--fg)] mb-2">No se encontraron startups</h3>
          <p className="font-sans text-[14px] text-[var(--fg-muted)]">Intenta ajustar los filtros para ver mas resultados.</p>
        </div>
      ) : (
        <>
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {state.filteredStartups.slice(0, visibleCount).map((startup, index) => (
              <StartupCard key={startup.id} startup={startup} index={index} />
            ))}
          </motion.div>

          {visibleCount < state.filteredStartups.length && (
            <div className="flex justify-center mt-8">
              <Button onClick={handleLoadMore} variant="outline">
                Cargar mas startups
              </Button>
            </div>
          )}
        </>
      )}
    </div>
  )
}
