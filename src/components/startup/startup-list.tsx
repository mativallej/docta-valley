"use client"
import { motion } from "framer-motion"
import { StartupCard } from "@/components/startup/startup-card"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { useStartups } from "@/context/startups-context"
import { useStartupsActions } from "@/hooks/use-startups-actions"

export function StartupList() {
  const [visibleCount, setVisibleCount] = useState(9)
  const { state } = useStartups()
  const { selectStartup } = useStartupsActions()

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
          <h3 className="text-xl font-medium mb-2">No se encontraron startups</h3>
          <p className="text-muted-foreground">Intenta ajustar los filtros para ver más resultados.</p>
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
                Cargar más startups
              </Button>
            </div>
          )}
        </>
      )}
    </div>
  )
}

