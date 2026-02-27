import { Crown, User, Rocket, Star, Code, Briefcase, Lightbulb } from "lucide-react"

// Define all possible role configurations — dark terminal palette
export const roleConfigs = {
  // Leadership roles
  founder: {
    icon: Crown,
    variant: "default",
    bgColor: "bg-[#3D2E0A]",
    textColor: "text-[#F2DDB6]",
    borderColor: "border-[#6B5020]",
    priority: 1
  },
  cofounder: {
    icon: Crown,
    variant: "default",
    bgColor: "bg-[#2E2A0A]",
    textColor: "text-[#D4C285]",
    borderColor: "border-[#5A5020]",
    priority: 2
  },

  // Core team roles
  lead: {
    icon: Star,
    variant: "secondary",
    bgColor: "bg-[#1E1A30]",
    textColor: "text-[#A89FD4]",
    borderColor: "border-[#3D3860]",
    priority: 3
  },
  developer: {
    icon: Code,
    variant: "secondary",
    bgColor: "bg-[#0F1F18]",
    textColor: "text-[#6DB88A]",
    borderColor: "border-[#2A5040]",
    priority: 4
  },
  designer: {
    icon: Lightbulb,
    variant: "secondary",
    bgColor: "bg-[#1A2410]",
    textColor: "text-[#8FB865]",
    borderColor: "border-[#3A5020]",
    priority: 5
  },
  manager: {
    icon: Briefcase,
    variant: "secondary",
    bgColor: "bg-[#1A1C28]",
    textColor: "text-[#7A8FD4]",
    borderColor: "border-[#2A3060]",
    priority: 6
  },

  // General member
  member: {
    icon: User,
    variant: "secondary",
    bgColor: "bg-[var(--surface-border)]",
    textColor: "text-[var(--muted-fg)]",
    borderColor: "border-[var(--border)]",
    priority: 10
  },

  // Default for any other role
  default: {
    icon: Rocket,
    variant: "outline",
    bgColor: "bg-[var(--surface-elevated)]",
    textColor: "text-[var(--fg-muted)]",
    borderColor: "border-[var(--border)]",
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
