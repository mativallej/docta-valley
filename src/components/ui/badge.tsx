import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-[var(--radius-sm)] border px-2 py-[3px] font-mono text-[10px] font-semibold uppercase tracking-[0.12em] transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "bg-[var(--primary-faint)] text-[var(--primary)] border-[var(--primary)]/25",
        secondary:
          "bg-[var(--surface-elevated)] text-[var(--fg-muted)] border-[var(--border)]",
        destructive:
          "bg-[var(--destructive)] text-[var(--destructive-fg)] border-[var(--destructive)]",
        outline: "bg-transparent text-[var(--fg-muted)] border-[var(--border)]",
        accent:
          "bg-[var(--deep)]/50 text-[var(--accent-bright)] border-[var(--accent)]/40",
        muted:
          "bg-[var(--surface-border)] text-[var(--muted-fg)] border-[var(--border)]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
