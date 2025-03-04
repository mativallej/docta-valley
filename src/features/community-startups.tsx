'use client';
import { useState, useEffect } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { CommunityStartup } from '@/types/startup';
import { StartupCardSkeleton } from '@/components/skeletons/startup-card-skeleton';
import { StartupService } from '@/services/startups-service';
import { StartupCard } from '@/components/startup/startup-card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { startupCategories } from '@/data/layout';

function ShowMoreButton() {
  return (
    <Link href="/startups">
      <Button variant="ghost">
        Ver todas 🚀
      </Button>
    </Link>
  );
}

export function CommunityStartups() {
  const [filter, setFilter] = useState('all');
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

  const filteredStartups =
    filter === 'all'
      ? startups.slice(0, showAll ? undefined : 6)
      : startups
          .filter(
            (startup) =>
              startup.category?.id.toString() === filter ||
              startup.tags?.some((tag) => tag.toLowerCase().includes(filter.toLowerCase())),
          )
          .slice(0, showAll ? undefined : 6);

  return (
    <div className="space-y-8 w-full px-4">
      <Tabs defaultValue="all" className="w-full">
        <div className="flex justify-center mb-8">
          <TabsList>
            <TabsTrigger value="all" onClick={() => setFilter('all')}>
              Todas
            </TabsTrigger>
            {startupCategories.map((category) => (
              <TabsTrigger 
                key={category.id} 
                value={category.id.toString()} 
                onClick={() => setFilter(category.id.toString())}
              >
                {category.label}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>

        <TabsContent value="all" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            {loading
              ? [...Array(6)].map((_, index) => <StartupCardSkeleton key={index} />)
              : filteredStartups.map((startup, index) => (
                  <StartupCard key={startup.id} startup={startup} index={index} />
                ))}
          </div>
          {!loading && startups.length > 6 && (
            <div className="flex justify-center mt-8">
              <ShowMoreButton />
            </div>
          )}
        </TabsContent>

        {startupCategories.map((category) => (
          <TabsContent key={category.id} value={category.id.toString()} className="mt-0 w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
              {loading
                ? [...Array(6)].map((_, index) => <StartupCardSkeleton key={index} />)
                : filteredStartups.map((startup, index) => (
                    <StartupCard key={startup.id} startup={startup} index={index} />
                  ))}
            </div>
            {!loading && startups.length > 6 && (
              <div className="flex justify-center mt-8">
                <ShowMoreButton />
              </div>
            )}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
