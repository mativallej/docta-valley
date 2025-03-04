import { Badge } from '@/components/ui/badge';
import { StartupCategory } from '@/types/startup';

export default function StartupCategories({ categories }: { categories: StartupCategory[] }) {
  return(
    <div className="mb-2 flex flex-wrap gap-2">
      {categories.map((category) => (
        <Badge key={category.id}>{category.label}</Badge>
      ))}
    </div>
  )
}
