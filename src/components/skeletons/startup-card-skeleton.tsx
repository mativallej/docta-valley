import { Skeleton } from "@/components/ui/skeleton"
import { motion } from 'framer-motion'

export function StartupCardSkeleton() {
  return (
    <div className="block w-full h-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="group relative overflow-hidden rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--surface)] p-6 h-full w-full"
      >
        <div className="flex flex-col justify-between rounded-[var(--radius)] h-full">
          <div className="absolute top-3 right-3">
            <Skeleton className="h-5 w-20 rounded-[var(--radius-sm)]" />
          </div>

          <div className="text-left flex flex-col justify-start items-start gap-1 w-full">
            <div className="flex gap-4 items-start mb-3">
              <Skeleton className="h-12 w-12 rounded-[var(--radius)] flex-shrink-0" />
              <div className="flex-1">
                <Skeleton className="h-6 w-32 mb-1" />
                <Skeleton className="h-4 w-full" />
              </div>
            </div>

            <div className="mb-2 flex flex-wrap gap-2">
              <Skeleton className="h-5 w-20 rounded-[var(--radius-sm)]" />
            </div>

            <div className="mb-2 flex flex-wrap gap-2">
              <Skeleton className="h-5 w-16 rounded-[var(--radius-sm)]" />
              <Skeleton className="h-5 w-20 rounded-[var(--radius-sm)]" />
              <Skeleton className="h-5 w-24 rounded-[var(--radius-sm)]" />
            </div>

            <div className="grid grid-cols-2 gap-3 w-full">
              <div className="flex items-center gap-2">
                <Skeleton className="h-4 w-4 rounded-full" />
                <Skeleton className="h-3 w-24" />
              </div>
              <div className="flex items-center gap-2">
                <Skeleton className="h-4 w-4 rounded-full" />
                <Skeleton className="h-3 w-24" />
              </div>
              <div className="flex items-center gap-2">
                <Skeleton className="h-4 w-4 rounded-full" />
                <Skeleton className="h-3 w-24" />
              </div>
            </div>
          </div>

          <div className="absolute bottom-3 right-3 flex -space-x-2">
            <Skeleton className="h-10 w-10 rounded-full" />
            <Skeleton className="h-10 w-10 rounded-full" />
          </div>
        </div>
      </motion.div>
    </div>
  )
}
