import { Event } from '@/types/events';
import { NEXTAUTH_URL } from 'src/env';

export interface EventsServiceInterface {
  base_url: string;
  getEvents(): Promise<Event[]>;
}

export class EventsService implements EventsServiceInterface {
  base_url: string = NEXTAUTH_URL + '/api';

  async getEvents(): Promise<Event[]> {
    const response = await fetch(`${this.base_url}/events`);
    const data = await response.json();
    return data.events;
  }
}
