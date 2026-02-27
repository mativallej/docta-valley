import { Card, CardContent, CardHeader } from '../ui/card';

export function EventCardSkeleton() {
  return (
    <Card className="group overflow-hidden h-full flex flex-col border border-[var(--border)]">
      <CardHeader className="pb-3 space-y-2">
        <div className="flex justify-between items-start gap-2">
          <div className="h-5 w-2/3 bg-[var(--surface-border)] animate-pulse rounded-[var(--radius)]" />
          <div className="h-5 w-20 bg-[var(--surface-border)] animate-pulse rounded-[var(--radius-sm)]" />
        </div>
        <div className="space-y-2">
          <div className="h-4 w-full bg-[var(--surface-border)] animate-pulse rounded-[var(--radius)]" />
          <div className="h-4 w-4/5 bg-[var(--surface-border)] animate-pulse rounded-[var(--radius)]" />
        </div>
      </CardHeader>
      <CardContent className="pb-4 flex-grow space-y-3">
        <div className="flex items-center gap-2">
          <div className="h-4 w-4 bg-[var(--surface-border)] animate-pulse rounded-[var(--radius)]" />
          <div className="h-4 w-32 bg-[var(--surface-border)] animate-pulse rounded-[var(--radius)]" />
        </div>
        <div className="flex items-center gap-2">
          <div className="h-4 w-4 bg-[var(--surface-border)] animate-pulse rounded-[var(--radius)]" />
          <div className="h-4 w-40 bg-[var(--surface-border)] animate-pulse rounded-[var(--radius)]" />
        </div>
        <div className="flex items-center gap-2">
          <div className="h-4 w-4 bg-[var(--surface-border)] animate-pulse rounded-[var(--radius)]" />
          <div className="h-4 w-36 bg-[var(--surface-border)] animate-pulse rounded-[var(--radius)]" />
        </div>
        <div className="h-9 w-full bg-[var(--surface-border)] animate-pulse rounded-[var(--radius)] mt-4" />
      </CardContent>
    </Card>
  );
}
