import { Badge } from '@/components/ui/badge';
import { StartupCategory } from '@/types/startup';

export function StartupCardCategories({ categories }: { categories: StartupCategory[] }) {
  return (
    <div className="mb-2 flex flex-wrap gap-2">
      {categories.map((category) => (
        <Badge key={category.id} variant="accent">{category.label}</Badge>
      ))}
    </div>
  );
}
