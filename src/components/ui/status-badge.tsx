import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { Rocket, Clock, AlertCircle, CheckCircle2, XCircle } from "lucide-react"

const statusConfigs = {
  launched: {
    label: "Lanzado",
    icon: Rocket,
    bgColor: "bg-[#162010]",
    textColor: "text-[#8FB865]",
    borderColor: "border-[#3A5020]"
  },
  pending: {
    label: "Pendiente",
    icon: Clock,
    bgColor: "bg-[#2A2518]",
    textColor: "text-[#F2DDB6]",
    borderColor: "border-[#6B5020]"
  },
  inProgress: {
    label: "En Progreso",
    icon: AlertCircle,
    bgColor: "bg-[#0F1F18]",
    textColor: "text-[#6DB88A]",
    borderColor: "border-[#2A5040]"
  },
  completed: {
    label: "Completado",
    icon: CheckCircle2,
    bgColor: "bg-[#1E1A30]",
    textColor: "text-[#A89FD4]",
    borderColor: "border-[#3D3860]"
  },
  cancelled: {
    label: "Cancelado",
    icon: XCircle,
    bgColor: "bg-[var(--destructive)]/20",
    textColor: "text-[var(--destructive-fg)]",
    borderColor: "border-[var(--destructive)]/40"
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
        "flex items-center gap-1 px-2 py-1 font-mono text-[10px] uppercase tracking-[0.12em]",
        config.bgColor,
        config.textColor,
        config.borderColor,
        className
      )}
    >
      {showIcon && <Icon className="h-3 w-3" />}
      <span>{label}</span>
    </Badge>
  )
}
