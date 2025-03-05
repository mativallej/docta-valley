import { useState, useEffect } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { startupCategories } from '@/data/layout';

interface StartupCategoriesProps {
  onFilterChange: (value: string) => void;
  children: React.ReactNode;
}

export function StartupCategories({ onFilterChange, children }: StartupCategoriesProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  if (isMobile) {
    return (
      <div className="w-full space-y-6">
        <Select onValueChange={onFilterChange} defaultValue="all">
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Seleccionar categoría" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todas</SelectItem>
            {startupCategories.map((category) => (
              <SelectItem key={category.id} value={category.id.toString()}>
                {category.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {children}
      </div>
    );
  }

  return (
    <Tabs defaultValue="all" className="w-full">
      <div className="flex justify-center mb-8">
        <TabsList>
          <TabsTrigger value="all" onClick={() => onFilterChange('all')}>
            Todas
          </TabsTrigger>
          {startupCategories.map((category) => (
            <TabsTrigger
              key={category.id}
              value={category.id.toString()}
              onClick={() => onFilterChange(category.id.toString())}
            >
              {category.label}
            </TabsTrigger>
          ))}
        </TabsList>
      </div>
      {children}
    </Tabs>
  );
}
