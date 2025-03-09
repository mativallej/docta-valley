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
      className="group relative overflow-hidden rounded-lg border bg-background p-2 h-full"
    >
      {/* Role badge positioned in the corner */}
      <CornerBadge role={member.role} />
      
      <div className="flex flex-col items-center justify-between rounded-md p-6 h-full space-y-4">
        <div className="relative h-32 w-32 overflow-hidden rounded-full">
          {member.image_url.startsWith('http') ? (
            <div className="relative h-full w-full">
              <Image 
                src="/placeholder.svg" 
                alt={member.name} 
                fill 
                sizes="(max-width: 128px) 100vw, 128px"
                className="object-cover"
              />
              <div 
                className="absolute inset-0 bg-cover bg-center" 
                style={{ backgroundImage: `url(${member.image_url})` }}
              />
            </div>
          ) : (
            <Image 
              src={member.image_url || "/placeholder.svg"} 
              alt={member.name} 
              fill 
              sizes="(max-width: 128px) 100vw, 128px"
              className="object-cover" 
            />
          )}
        </div>
        
        <div className="flex-1 flex flex-col items-center justify-center">
          <MemberDetails 
            member={member} 
            showRoleBadge={false}
          />
        </div>
      </div>
    </motion.div>
  )
}
  