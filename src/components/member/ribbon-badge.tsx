import { cn } from "@/lib/utils"
import { getRoleConfig } from "@/lib/role-config"

interface RibbonBadgeProps {
  role: string
  className?: string
  showIcon?: boolean
}

export function RibbonBadge({ role, className, showIcon = true }: RibbonBadgeProps) {
  const config = getRoleConfig(role)
  const Icon = config.icon

  return (
    <div className={cn("absolute top-0 right-0", className)}>
      <div 
        className={cn(
          "flex items-center justify-center py-1 px-3 text-xs font-bold",
          config.bgColor, 
          config.textColor,
          "shadow-md"
        )}
        style={{
          clipPath: "polygon(100% 0%, 100% 100%, 0% 100%)",
          width: "80px",
          height: "80px",
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "flex-end",
          paddingBottom: "8px",
          paddingRight: "8px"
        }}
      >
        {showIcon && <Icon className="h-3 w-3 mr-1" />}
        <span>{role}</span>
      </div>
    </div>
  )
} 