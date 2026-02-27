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
    idea: 'bg-[#2A2518] text-[#F2DDB6] border-[#6B5020]',
    development: 'bg-[#0F1F18] text-[#6DB88A] border-[#2A5040]',
    launched: 'bg-[#162010] text-[#8FB865] border-[#3A5020]',
  };

  const statusLabels = {
    idea: 'Idea',
    development: 'En Desarrollo',
    launched: 'Lanzado',
  };

  const StatusIcon = startup.status ? statusIcons[startup.status] : null;

  return (
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
      className="group relative rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--surface)] p-6 h-full w-full transition-all duration-200 hover:border-[var(--primary)]/20 hover:-translate-y-px"
    >
      <Link href={`${startup.links.website}`} className="block w-full h-full" target="_blank">
        <input
          aria-hidden="true"
          className="pointer-events-none absolute left-0 top-0 z-10 h-full w-full cursor-default rounded-[var(--radius-md)] border border-[var(--primary)]/30 transition-opacity duration-500 placeholder:select-none"
          style={{
            opacity: opacity,
            WebkitMaskImage: `radial-gradient(30% 30px at ${position.x}px ${position.y}px, black 45%, transparent)`,
            backgroundColor: 'transparent'
          }}
        />
        <div
          className="pointer-events-none absolute -inset-px rounded-[var(--radius-md)] opacity-0 transition duration-300"
          style={{
            opacity: opacity,
            background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(242, 221, 182, 0.04), transparent 60%)`
          }}
        />
        <div className="flex flex-col justify-between rounded-[var(--radius)] h-full">
          {startup.status && (
            <div className="absolute top-3 right-3">
              <Badge variant="outline" className={`flex items-center gap-1.5 px-2.5 py-1 rounded-[var(--radius-sm)] border font-mono text-[10px] uppercase tracking-[0.10em] ${statusColors[startup.status]}`}>
                {StatusIcon && <StatusIcon className="h-3.5 w-3.5" />}
                <span className="font-medium">{statusLabels[startup.status]}</span>
              </Badge>
            </div>
          )}
          <div className="text-left flex flex-col justify-start items-start gap-1">
            <div className="flex gap-4 mb-3 w-full">
              <div className="relative w-16 h-16 flex-shrink-0 rounded-[var(--radius)] overflow-hidden border border-[var(--border)]">
                <Image
                  src={startup.image_url || '/placeholder.svg'}
                  alt={startup.name}
                  fill
                  className="object-cover"
                  unoptimized={startup.image_url.startsWith('http')}
                />
              </div>
              <div className="flex-1">
                <h3 className="font-mono text-[14px] font-semibold uppercase tracking-[0.03em] text-[var(--fg)] mb-1">{startup.name}</h3>
                <p className="font-sans text-[13px] text-[var(--fg-muted)] line-clamp-2">{startup.description}</p>
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
                  <MapPin className="h-4 w-4 text-[var(--muted-fg)]" />
                  <span className="font-sans text-[12px] text-[var(--muted-fg)]">{startup.location}</span>
                </div>
              )}
              {startup.launchDate && (
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-[var(--muted-fg)]" />
                  <span className="font-sans text-[12px] text-[var(--muted-fg)]">{startup.launchDate}</span>
                </div>
              )}
              {startup.teamSize && (
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-[var(--muted-fg)]" />
                  <span className="font-sans text-[12px] text-[var(--muted-fg)]">{startup.teamSize}</span>
                </div>
              )}
              {startup.funding && (
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-4 w-4 text-[var(--muted-fg)]" />
                  <span className="font-sans text-[12px] text-[var(--muted-fg)]">{startup.funding}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </Link>

      {startup.founders && startup.founders.length > 0 && (
        <StartupFounders founders={startup.founders} />
      )}
    </motion.div>
  );
}
