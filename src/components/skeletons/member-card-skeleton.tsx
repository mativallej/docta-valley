"use client"

import { motion } from "framer-motion"

const cardAnimationVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: index * 0.1 }
  }),
  hover: {
    y: -5,
    transition: { duration: 0.2 },
  }
}

interface MemberCardSkeletonProps {
  index?: number
}

export function MemberCardSkeleton({ index = 0 }: MemberCardSkeletonProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      custom={index}
      variants={cardAnimationVariants}
      whileHover="hover"
      className="group relative overflow-hidden rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--surface)] p-2 h-full"
    >
      <div className="flex flex-col items-center justify-between rounded-[var(--radius)] p-6 h-full space-y-4">
        <div className="relative h-32 w-32 overflow-hidden rounded-full">
          <div className="absolute inset-0 bg-[var(--surface-border)] animate-pulse" />
        </div>

        <div className="flex-1 flex flex-col items-center justify-center w-full space-y-3">
          <div className="h-6 w-3/4 bg-[var(--surface-border)] animate-pulse rounded-[var(--radius)]" />
          <div className="h-4 w-1/2 bg-[var(--surface-border)] animate-pulse rounded-[var(--radius)]" />
          <div className="flex justify-center space-x-2">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="h-8 w-8 bg-[var(--surface-border)] animate-pulse rounded-[var(--radius)]" />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}
