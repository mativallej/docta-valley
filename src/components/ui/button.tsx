import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-[var(--radius)] font-mono text-[12px] font-semibold uppercase tracking-[0.10em] transition-all duration-150 ease-in-out focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--primary)] disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-[var(--primary)] text-[var(--bg)] border border-[var(--primary)] hover:bg-[var(--primary-muted)]",
        destructive:
          "bg-[var(--destructive)] text-[var(--destructive-fg)] border border-[var(--destructive)] hover:bg-[var(--destructive)]/90",
        outline:
          "border border-[var(--border)] bg-transparent text-[var(--fg-muted)] hover:bg-[var(--surface-elevated)] hover:text-[var(--fg)]",
        secondary:
          "bg-[var(--accent)] text-[var(--primary)] border border-[var(--accent)] hover:bg-[var(--accent-bright)]",
        ghost: "bg-transparent text-[var(--fg-muted)] border border-transparent hover:bg-[var(--surface-elevated)] hover:text-[var(--fg)]",
        link: "text-[var(--primary)] underline-offset-4 hover:underline border-none",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-[var(--radius-sm)] px-3 text-[11px]",
        lg: "h-10 rounded-[var(--radius-md)] px-6 text-[13px]",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
