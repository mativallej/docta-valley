import { cn } from "@/lib/utils";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { Calendar, MapPin, Users, ExternalLink, XCircle, Tag } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
import type { Event } from "@/types/events";
import { motion } from "framer-motion";

export function EventCard({ event, index }: { event: Event, index: number }) {
    const formatDate = (dateStr: string) => {
      const date = new Date(dateStr);
      const month = date.toLocaleDateString("es-AR", { month: "long" });
      const day = date.getDate();
      return `${day} de ${month}`;
    };

    // Helper function to determine event category based on title/description
    const getEventCategory = () => {
      const title = event.title.toLowerCase();
      const description = event.description?.toLowerCase() || "";
      
      if (title.includes("workshop") || title.includes("taller")) return "Workshop";
      if (title.includes("meetup") || description.includes("networking")) return "Meetup";
      if (title.includes("conference") || title.includes("conferencia")) return "Conferencia";
      return "Evento";
    };
  
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
      >
        {!event.completed ? (
          <Link
            href={event.lumaLink}
            target="_blank"
            rel="noopener noreferrer"
            className="block group/link"
          >
            <Card className={cn(
              "group overflow-hidden h-full flex flex-col transition-all duration-300 hover:shadow-lg border text-left shadow-none hover:scale-[1.02] rounded-lg bg-background p-1 relative",
              "border-muted hover:border-primary/20"
            )}>
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover/link:opacity-100 transition-opacity duration-300" />
              <CardHeader className="pb-3 space-y-2 relative">
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-2">
                    <Badge 
                      variant="outline" 
                      className={cn(
                        "text-[10px] px-2 py-0 font-normal",
                        event.completed ? "opacity-50" : "opacity-70"
                      )}
                    >
                      <Tag className="h-3 w-3 mr-1" />
                      {getEventCategory()}
                    </Badge>
                    <Badge 
                      variant={event.modalidad === "Presencial" ? "default" : "secondary"} 
                      className={cn(
                        "text-[10px] px-2 py-0 font-normal",
                        event.modalidad === "Presencial" 
                          ? "bg-primary/10 text-primary hover:bg-primary/20" 
                          : "bg-secondary/80 text-secondary-foreground",
                        event.completed && "opacity-70"
                      )}
                    >
                      {event.modalidad}
                    </Badge>
                  </div>
                  <div className="flex justify-between items-start gap-2">
                    <CardTitle className="text-base font-semibold leading-tight">
                      {event.title}
                    </CardTitle>
                  </div>
                </div>
                <CardDescription className="text-sm line-clamp-2 text-left text-muted-foreground">
                  {event.description || "Únete a este evento de la comunidad Docta Valley"}
                </CardDescription>
              </CardHeader>
              <CardContent className="pb-4 flex-grow space-y-4 relative">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Calendar className="h-3.5 w-3.5" />
                    <span className="capitalize">
                      {formatDate(event.date)} • {event.time}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <MapPin className="h-3.5 w-3.5" />
                    <span className="line-clamp-1">{event.location}</span>
                  </div>
                  {event.capacity && (
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Users className="h-3.5 w-3.5" />
                      <span>Capacidad: {event.capacity} personas</span>
                    </div>
                  )}
                </div>
                <Button 
                  asChild 
                  size="sm" 
                  className="w-full mt-auto transition-all duration-300 hover:shadow-md group-hover/link:bg-primary/90 relative z-20"
                >
                  <span className="flex items-center justify-center gap-2">
                    <span>Registrarse</span>
                    <ExternalLink className="h-4 w-4 transition-transform group-hover/link:translate-x-0.5" />
                  </span>
                </Button>
              </CardContent>
            </Card>
          </Link>
        ) : (
          <Card className={cn(
            "group overflow-hidden h-full flex flex-col transition-all duration-300 hover:shadow-lg border text-left shadow-none hover:scale-[1.02] rounded-lg bg-background p-1",
            "border-border/40"
          )}>
            <CardHeader className="pb-3 space-y-2">
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <Badge 
                    variant="outline" 
                    className={cn(
                      "text-[10px] px-2 py-0 font-normal opacity-50"
                    )}
                  >
                    <Tag className="h-3 w-3 mr-1" />
                    {getEventCategory()}
                  </Badge>
                  <Badge 
                    variant={event.modalidad === "Presencial" ? "default" : "secondary"} 
                    className={cn(
                      "text-[10px] px-2 py-0 font-normal opacity-70",
                      event.modalidad === "Presencial" 
                        ? "bg-primary/10 text-primary hover:bg-primary/20" 
                        : "bg-secondary/80 text-secondary-foreground"
                    )}
                  >
                    {event.modalidad}
                  </Badge>
                </div>
                <div className="flex justify-between items-start gap-2">
                  <CardTitle className="text-base font-semibold leading-tight text-muted-foreground">
                    {event.title}
                  </CardTitle>
                </div>
              </div>
              <CardDescription className="text-sm line-clamp-2 text-left text-muted-foreground/70">
                {event.description || "Únete a este evento de la comunidad Docta Valley"}
              </CardDescription>
            </CardHeader>
            <CardContent className="pb-4 flex-grow space-y-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs text-muted-foreground/70">
                  <Calendar className="h-3.5 w-3.5" />
                  <span className="capitalize">
                    {formatDate(event.date)} • {event.time}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground/70">
                  <MapPin className="h-3.5 w-3.5" />
                  <span className="line-clamp-1">{event.location}</span>
                </div>
                {event.capacity && (
                  <div className="flex items-center gap-2 text-xs text-muted-foreground/70">
                    <Users className="h-3.5 w-3.5" />
                    <span>Capacidad: {event.capacity} personas</span>
                  </div>
                )}
              </div>
              <Button 
                disabled
                size="sm" 
                variant="secondary"
                className="w-full mt-auto opacity-50 cursor-not-allowed"
              >
                <XCircle className="h-4 w-4 mr-2" />
                Evento finalizado
              </Button>
            </CardContent>
          </Card>
        )}
      </motion.div>
    )
  }
  