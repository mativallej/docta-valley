import { cn } from "@/lib/utils"
import { getRoleConfig } from "@/lib/role-config"

interface CornerBadgeProps {
  role: string
  className?: string
  showIcon?: boolean
}

export function CornerBadge({ role, className, showIcon = true }: CornerBadgeProps) {
  const config = getRoleConfig(role)
  const Icon = config.icon

  return (
    <div
      className={cn(
        "absolute top-0 right-0",
        className
      )}
    >
      <div
        className={cn(
          "flex items-center justify-center py-1 px-2 font-mono text-[10px] font-semibold uppercase tracking-[0.10em] border-l border-b",
          config.bgColor,
          config.textColor,
          config.borderColor,
          "shadow-sm rounded-bl-[var(--radius)]"
        )}
      >
        {showIcon && <Icon className="h-3 w-3 mr-1" />}
        <span>{role}</span>
      </div>
    </div>
  )
}
