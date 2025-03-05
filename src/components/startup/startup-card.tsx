import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Users, Calendar, TrendingUp, Lightbulb, Code, Rocket, MapPin } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { CommunityStartup } from '@/types/startup';
import StartupFounders from './startup-founders';
import { StartupCardCategories } from './startup-card-categories';
import StartupTags from './startup-tags';
import { useState, useRef } from 'react';

export function StartupCard({ startup, index }: { startup: CommunityStartup; index: number }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);
  const [focused, setFocused] = useState(false);
  const divRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current || focused) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  const handleFocus = () => {
    setFocused(true);
    setOpacity(1);
  };

  const handleBlur = () => {
    setFocused(false);
    setOpacity(0);
  };

  const handleMouseEnter = () => setOpacity(1);
  const handleMouseLeave = () => setOpacity(0);

  const statusIcons = {
    idea: Lightbulb,
    development: Code,
    launched: Rocket,
  };

  const statusColors = {
    idea: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
    development: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
    launched: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
  };

  const statusLabels = {
    idea: 'Idea',
    development: 'En Desarrollo',
    launched: 'Lanzado',
  };

  const StatusIcon = startup.status ? statusIcons[startup.status] : null;

  return (
    <Link href={`${startup.links.website}`} className="block w-full h-full" target="_blank">
      <motion.div
        ref={divRef}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        onMouseMove={handleMouseMove}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="group relative rounded-lg border bg-background p-6 h-full w-full"
      >
        <input
          aria-hidden="true"
          className="pointer-events-none absolute left-0 top-0 z-10 h-full w-full cursor-default rounded-lg border border-black/50 dark:border-white/50 transition-opacity duration-500 placeholder:select-none"
          style={{
            opacity: opacity,
            WebkitMaskImage: `radial-gradient(30% 30px at ${position.x}px ${position.y}px, black 45%, transparent)`,
            backgroundColor: 'transparent'
          }}
        />
        <div
          className="pointer-events-none absolute -inset-px rounded-lg opacity-0 transition duration-300"
          style={{
            opacity: opacity,
            background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(97, 97, 97, 0.1), transparent 60%)`
          }}
        />
        <div className="flex flex-col justify-between rounded-md h-full">
          {startup.status && (
            <div className="absolute top-3 right-3">
              <Badge variant="outline" className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full border-none ${statusColors[startup.status]}`}>
                {StatusIcon && <StatusIcon className="h-3.5 w-3.5" />}
                <span className="text-xs font-medium">{statusLabels[startup.status]}</span>
              </Badge>
            </div>
          )}
          <div className="text-left flex flex-col justify-start items-start gap-1">
            <div className="flex gap-4 mb-3 w-full">
              <div className="relative w-16 h-16 flex-shrink-0 rounded-lg overflow-hidden">
                <Image 
                  src={startup.image || '/placeholder.svg'} 
                  alt={startup.name} 
                  fill
                  className="object-cover" 
                />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold mb-1">{startup.name}</h3>
                <p className="text-sm text-muted-foreground line-clamp-2">{startup.description}</p>
              </div>
            </div>

            {startup.category && (
              <StartupCardCategories categories={[startup.category]} />
            )}

            {startup.tags && startup.tags.length > 0 && (
              <StartupTags tags={startup.tags} />
            )}

            <div className="grid grid-cols-2 gap-3">
              {startup.location && (
                <div className="flex items-center gap-2 col-span-2">
                  <MapPin className="h-4 w-4 text-zinc-400" />
                  <span className="text-xs text-zinc-400">{startup.location}</span>
                </div>
              )}
              {startup.launchDate && (
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-zinc-400" />
                  <span className="text-xs text-zinc-400">{startup.launchDate}</span>
                </div>
              )}
              {startup.teamSize && (
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-zinc-400" />
                  <span className="text-xs text-zinc-400">{startup.teamSize}</span>
                </div>
              )}
              {startup.funding && (
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-4 w-4 text-zinc-400" />
                  <span className="text-xs text-zinc-400">{startup.funding}</span>
                </div>
              )}
            </div>
          </div>
          
          {/* Founders in absolute position at bottom right */}
          {startup.founders && startup.founders.length > 0 && (
            <StartupFounders founders={startup.founders} />
          )}
        </div>
      </motion.div>
    </Link>
  );
}
