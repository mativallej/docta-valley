import { cn } from "@/lib/utils"

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("animate-pulse rounded-[var(--radius)] bg-[var(--surface-border)]", className)}
      {...props}
    />
  )
}

export { Skeleton }
