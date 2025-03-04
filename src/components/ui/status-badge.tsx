import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { Rocket, Clock, AlertCircle, CheckCircle2, XCircle } from "lucide-react"

// Define status configurations
const statusConfigs = {
  launched: {
    label: "Lanzado",
    icon: Rocket,
    bgColor: "bg-green-600",
    textColor: "text-green-50"
  },
  pending: {
    label: "Pendiente",
    icon: Clock,
    bgColor: "bg-amber-500",
    textColor: "text-amber-50"
  },
  inProgress: {
    label: "En Progreso",
    icon: AlertCircle,
    bgColor: "bg-blue-600",
    textColor: "text-blue-50"
  },
  completed: {
    label: "Completado",
    icon: CheckCircle2,
    bgColor: "bg-purple-600",
    textColor: "text-purple-50"
  },
  cancelled: {
    label: "Cancelado",
    icon: XCircle,
    bgColor: "bg-red-600",
    textColor: "text-red-50"
  }
}

type StatusType = keyof typeof statusConfigs

interface StatusBadgeProps {
  status: StatusType
  className?: string
  showIcon?: boolean
  customLabel?: string
}

export function StatusBadge({ 
  status, 
  className, 
  showIcon = true,
  customLabel
}: StatusBadgeProps) {
  const config = statusConfigs[status]
  const Icon = config.icon
  const label = customLabel || config.label

  return (
    <Badge 
      className={cn(
        "flex items-center gap-1 px-2 py-1", 
        config.bgColor, 
        config.textColor,
        className
      )}
    >
      {showIcon && <Icon className="h-3 w-3" />}
      <span>{label}</span>
    </Badge>
  )
} 