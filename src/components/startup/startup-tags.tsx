import { Badge } from '@/components/ui/badge';

export default function StartupTags({ tags }: { tags: string[] }) {
  return (
    <div className="mb-2 flex flex-wrap gap-2">
      {tags.map((tag) => (
        <Badge key={tag} variant="muted">{tag}</Badge>
      ))}
    </div>
  );
}
