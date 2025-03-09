"use client"
import { motion } from "framer-motion"
import Image from "next/image"
import { MemberProps } from "@/types/member"
import { MemberDetails } from "./member-details"
import { CornerBadge } from "./corner-badge"

// Animation variants for reusability
const cardAnimationVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: index * 0.1 }
  })
}

export default function MemberCard({ member, index }: MemberProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      custom={index}
      variants={cardAnimationVariants}
      className="group relative overflow-hidden rounded-lg border bg-background p-2"
    >
      {/* Role badge positioned in the corner */}
      <CornerBadge role={member.role} />
      
      <div className="flex flex-col items-center justify-between rounded-md p-6">
        <div className="relative h-32 w-32 overflow-hidden rounded-full mb-4">
          <Image 
            src={member.image || "/placeholder.svg"} 
            alt={member.name} 
            fill 
            sizes="(max-width: 128px) 100vw, 128px"
            className="object-cover" 
          />
        </div>
        
        <MemberDetails 
          member={member} 
          showRoleBadge={false} // Hide the role badge in the details since we're showing it in the corner
        />
      </div>
    </motion.div>
  )
}
  