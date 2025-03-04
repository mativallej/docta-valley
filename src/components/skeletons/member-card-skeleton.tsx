"use client"

import { motion } from "framer-motion"

// Animation variants for skeleton matching the member card
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
      className="group relative overflow-hidden rounded-lg border bg-background p-2"
    >
      <div className="flex flex-col items-center justify-between rounded-md p-6">
        {/* Avatar skeleton */}
        <div className="relative h-32 w-32 overflow-hidden rounded-full mb-4">
          <div className="absolute inset-0 bg-muted/80 animate-pulse" />
        </div>
        
        {/* Content skeleton */}
        <div className="w-full space-y-3 text-center">
          {/* Name skeleton */}
          <div className="h-6 w-3/4 mx-auto bg-muted/80 animate-pulse rounded" />
          {/* Role/description skeleton */}
          <div className="h-4 w-1/2 mx-auto bg-muted/80 animate-pulse rounded" />
          {/* Social links skeleton */}
          <div className="flex justify-center space-x-2">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="h-8 w-8 bg-muted/80 animate-pulse rounded-md" />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}