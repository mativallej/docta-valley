import { NextResponse } from 'next/server';
import { Event } from '@/types/events';

const communityEvents: Event[] = [
  {
    id: 1,
    title: 'Docta Valley Inauguration',
    description: 'Evento inaugural para definir la comunidad.',
    date: '2024-12-03',
    time: '18:30',
    location: 'Lupulus Patio, Córdoba',
    modalidad: 'Presencial',
    lumaLink: 'https://lu.ma/e2s1hyi4',
    completed: true,
    capacity: 11,
  },
  {
    id: 2,
    title: 'First Major Meetup',
    description: 'Convocatoria con representantes de startups.',
    date: '2025-01-31',
    time: '19:00',
    location: 'Matias Apt, Córdoba',
    modalidad: 'Presencial',
    lumaLink: 'https://lu.ma/e4xbc2ec',
    completed: true,
    capacity: 35,
  },
  {
    id: 3,
    title: 'Founders Roast',
    description: 'Asado casual entre fundadores.',
    date: '2025-03-15', // este viernes
    time: '18:30',
    location: 'Docto House, Córdoba',
    modalidad: 'Presencial',
    lumaLink: '',
    completed: false,
    capacity: 30,
  },
];

export async function GET() {
  return NextResponse.json({ events: communityEvents });
}
