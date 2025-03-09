import { Founder } from '@/types/startup';
import { AvatarImage, AvatarFallback, Avatar } from '@radix-ui/react-avatar';
import { useState } from 'react';
import Link from 'next/link';
export default function StartupFounders({ founders }: { founders: Founder[] }) {
  const [activeFounder, setActiveFounder] = useState<string | null>(null);
  
  return (
    <div className="absolute bottom-3 right-3 flex -space-x-2">
      {founders.slice(0, 6).map((founder) => (
        <div
          key={founder.id}
          className="relative"
          onMouseEnter={() => setActiveFounder(founder.id)}
          onMouseLeave={() => setActiveFounder(null)}
        >
          {founder.linkedin ? (
            <Link
              href={founder.linkedin}
              target="_blank"
              className="block rounded-full border-2 border-background hover:scale-110 transition-transform z-10"
            >
              <div className="h-12 w-12 rounded-full overflow-hidden">
                <Avatar className="h-full w-full">
                  <AvatarImage 
                    src={founder.image_url} 
                    alt={founder.name} 
                    className="h-full w-full object-cover"
                  />
                  <AvatarFallback className="text-[8px] bg-primary/10 text-primary">
                    {founder.name.substring(0, 2).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
              </div>
            </Link>
          ) : (
            <div className="rounded-full border-2 border-background hover:scale-110 transition-transform z-10">
              <div className="h-12 w-12 rounded-full overflow-hidden">
                <Avatar className="h-full w-full">
                  <AvatarImage 
                    src={founder.image_url} 
                    alt={founder.name} 
                    className="h-full w-full object-cover"
                  />
                  <AvatarFallback className="text-[8px] bg-primary/10 text-primary">
                    {founder.name.substring(0, 2).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
              </div>
            </div>
          )}
          {activeFounder === founder.id && (
            <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-black/80 text-white text-xs py-1 px-2 rounded whitespace-nowrap z-20">
              {founder.name}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
