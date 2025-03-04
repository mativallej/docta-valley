import { NextResponse } from 'next/server';
import { Event } from '@/types/events';

const communityEvents: Event[] = [
  {
    id: 1,
    title: 'Docta Valley Meetup',
    description: 'Reunión de la comunidad Docta Valley para discutir los últimos avances en la tecnología médica.',
    date: '2023-07-15',
    time: '19:00',
    location: 'Córdoba Tech Hub',
    modalidad: 'Presencial',
    lumaLink: 'https://lu.ma/event/evt-1234',
    completed: true,
    capacity: 10,
  },
  {
    id: 2,
    title: 'Workshop: Intro a AI',
    description: 'Aprende los fundamentos de la inteligencia artificial con un workshop práctico.',
    date: '2023-07-22',
    time: '15:00',
    location: 'Online (Zoom)',
    modalidad: 'Virtual',
    lumaLink: 'https://lu.ma/event/evt-5678',
    completed: true,
    capacity: 10,
  },
  {
    id: 3,
    title: 'Docta Valley Meetup',
    description: 'Reunión de la comunidad Docta Valley para discutir los últimos avances en la tecnología médica.',
    date: '2023-07-15',
    time: '19:00',
    location: 'Córdoba Tech Hub',
    modalidad: 'Presencial',
    lumaLink: 'https://lu.ma/event/evt-1234',
    completed: true,
    capacity: 45,
  },
  {
    id: 4,
    title: 'Workshop: Intro a AI',
    description: 'Aprende los fundamentos de la inteligencia artificial con un workshop práctico.',
    date: '2023-07-22',
    time: '15:00',
    location: 'Online (Zoom)',
    modalidad: 'Virtual',
    lumaLink: 'https://lu.ma/event/evt-5678',
    completed: false,
    capacity: 30,
  },
];

export async function GET() {
  return NextResponse.json({ events: communityEvents });
}
