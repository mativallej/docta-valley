'use client';
import { useState, useEffect } from 'react';
import { CommunityStartup } from '@/types/startup';
import { StartupCardSkeleton } from '@/components/skeletons/startup-card-skeleton';
import { StartupService } from '@/services/startups-service';
import { StartupCard } from '@/components/startup/startup-card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { StartupCategories } from '@/components/startup/startup-categories';

function ShowMoreButton({ showAll, setShowAll }: { showAll: boolean; setShowAll: (showAll: boolean) => void }) {
  return (
    <Link href="/startups">
      <Button variant="ghost">
        {showAll ? 'Ver menos 🔍' : 'Ver todas las startups 🚀'}
      </Button>
    </Link>
  );
}

export function CommunityStartups() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [startups, setStartups] = useState<CommunityStartup[]>([]);
  const [loading, setLoading] = useState(true);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const fetchStartups = async () => {
      try {
        const startupService = new StartupService();
        const startups = await startupService.getStartups();
        setStartups(startups);
      } catch (error) {
        console.error('Error fetching startups:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchStartups();
  }, []);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  const sortedStartups = [...startups].sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));

  const filteredStartups =
    selectedCategory === 'all'
      ? sortedStartups.slice(0, showAll ? undefined : 6)
      : sortedStartups
          .filter(
            (startup) =>
              startup.category?.id.toString() === selectedCategory ||
              startup.tags?.some((tag) => tag.toLowerCase().includes(selectedCategory.toLowerCase())),
          )
          .slice(0, showAll ? undefined : 6);

  return (
    <div className="space-y-8 w-full">
      <StartupCategories 
        onFilterChange={handleCategoryChange}
        selectedCategory={selectedCategory}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          {loading
            ? [...Array(6)].map((_, index) => <StartupCardSkeleton key={index} />)
            : filteredStartups.map((startup, index) => (
                <StartupCard key={startup.id} startup={startup} index={index} />
              ))}
        </div>
        {!loading && startups.length > 6 && (
          <div className="flex justify-center mt-8">
            <ShowMoreButton showAll={showAll} setShowAll={setShowAll} />
          </div>
        )}
      </StartupCategories>
    </div>
  );
}
