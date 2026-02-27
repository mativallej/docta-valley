import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { getRoleConfig } from "@/lib/role-config"

interface RoleBadgeProps {
  role: string
  className?: string
  showIcon?: boolean
  isCorner?: boolean
}

export function RoleBadge({ role, className, showIcon = true, isCorner = false }: RoleBadgeProps) {
  const config = getRoleConfig(role)
  const Icon = config.icon

  return (
    <Badge
      className={cn(
        "flex items-center gap-1 font-mono text-[10px] uppercase tracking-[0.12em]",
        isCorner ? "px-2 py-1 border" : "px-2 py-1 border",
        config.bgColor,
        config.textColor,
        config.borderColor,
        isCorner && "shadow-md",
        className
      )}
    >
      {showIcon && <Icon className={cn("h-3 w-3", isCorner && "mr-1")} />}
      <span className={cn(isCorner && "text-[10px] font-bold")}>{role}</span>
    </Badge>
  )
}
