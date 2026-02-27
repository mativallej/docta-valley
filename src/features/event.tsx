"use client"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { EventsService } from "@/services/events-service"
import { useState, useEffect } from "react"
import type { Event } from "@/types/events"
import { EventCard } from "@/components/events/event-card"
import { EventCardSkeleton } from "@/components/skeletons/event-card-skeleton"

export function Events() {
  const [communityEvents, setCommunityEvents] = useState<Event[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showAllEvents, setShowAllEvents] = useState(false);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const eventsService = new EventsService();
        const events = await eventsService.getEvents();
        
        // Sort events by ID in descending order
        const sortedEvents = [...events].sort((a, b) => b.id - a.id);

        setCommunityEvents(sortedEvents);
      } catch (error) {
        console.error('Error fetching events:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchEvents();
  }, []);

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(4)].map((_, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <EventCardSkeleton />
          </motion.div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
      {(showAllEvents ? communityEvents : communityEvents.slice(0, 3)).map((event, index) => (
        <EventCard key={event.id} event={event} index={index} />
      ))}
      <div className="col-span-full flex justify-center mt-6">
        <Button 
          variant="ghost" 
          onClick={() => setShowAllEvents(!showAllEvents)} 
          className="group"
        >
          <span className="flex items-center gap-2">
            {showAllEvents ? 'Ver menos eventos' : 'Ver todos los eventos'}
            <span className="transition-transform group-hover:translate-x-1">🎯</span>
          </span>
        </Button>
      </div>
    </div>
  )
}
