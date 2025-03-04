import { Crown, User, Rocket, Star, Code, Briefcase, Lightbulb } from "lucide-react"

// Define all possible role configurations
export const roleConfigs = {
  // Leadership roles
  founder: {
    icon: Crown,
    variant: "default",
    bgColor: "bg-amber-500",
    textColor: "text-amber-950",
    priority: 1
  },
  cofounder: {
    icon: Crown,
    variant: "default",
    bgColor: "bg-amber-400",
    textColor: "text-amber-950",
    priority: 2
  },
  
  // Core team roles
  lead: {
    icon: Star,
    variant: "secondary",
    bgColor: "bg-purple-500",
    textColor: "text-purple-950",
    priority: 3
  },
  developer: {
    icon: Code,
    variant: "secondary",
    bgColor: "bg-blue-500",
    textColor: "text-blue-950",
    priority: 4
  },
  designer: {
    icon: Lightbulb,
    variant: "secondary",
    bgColor: "bg-green-500",
    textColor: "text-green-950",
    priority: 5
  },
  manager: {
    icon: Briefcase,
    variant: "secondary",
    bgColor: "bg-indigo-500",
    textColor: "text-indigo-950",
    priority: 6
  },
  
  // General member
  member: {
    icon: User,
    variant: "secondary",
    bgColor: "bg-blue-400",
    textColor: "text-blue-950",
    priority: 10
  },
  
  // Default for any other role
  default: {
    icon: Rocket,
    variant: "outline",
    bgColor: "bg-slate-200",
    textColor: "text-slate-800",
    priority: 100
  }
}

// Function to get the appropriate role configuration
export function getRoleConfig(role: string) {
  const normalizedRole = role.toLowerCase()
  
  // Check for exact matches first
  if (normalizedRole in roleConfigs) {
    return roleConfigs[normalizedRole as keyof typeof roleConfigs]
  }
  
  // Check for partial matches
  if (normalizedRole.includes('founder')) {
    return normalizedRole === 'founder' ? roleConfigs.founder : roleConfigs.cofounder
  }
  
  if (normalizedRole.includes('lead')) {
    return roleConfigs.lead
  }
  
  if (normalizedRole.includes('dev')) {
    return roleConfigs.developer
  }
  
  if (normalizedRole.includes('design')) {
    return roleConfigs.designer
  }
  
  if (normalizedRole.includes('manag')) {
    return roleConfigs.manager
  }
  
  if (normalizedRole.includes('member')) {
    return roleConfigs.member
  }
  
  // Default fallback
  return roleConfigs.default
} 