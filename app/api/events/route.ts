import { NextResponse } from 'next/server';
import { Event } from '@/types/events';

const communityEvents: Event[] = [
  {
    id: 1,
    title: 'Docta Valley AfterOffice',
    description: '¡Llega el primer encuentro de Docta Valley! Un after office tech donde la comunidad cordobesa se reúne para compartir experiencias, conectar y crecer juntos en el ecosistema tecnológico. Networking en un ambiente relajado, intercambio de experiencias con otros profesionales del sector y oportunidades de colaboración.',
    date: '2023-12-20',
    time: '19:00', 
    location: 'Córdoba Capital',
    modalidad: 'Presencial',
    lumaLink: 'https://lu.ma/dv-afteroffice-1',
    completed: true,
    capacity: 15,
  },
  {
    id: 2,
    title: 'Docta Valley AfterOffice',
    description: '¡Llega el segundo encuentro de Docta Valley! Un after office tech donde la comunidad cordobesa se reúne para compartir experiencias, conectar y crecer juntos en el ecosistema tecnológico. Networking en un ambiente relajado, intercambio de experiencias con otros profesionales del sector y oportunidades de colaboración.',
    date: '2024-01-31',
    time: '19:00',
    location: 'Córdoba Capital',
    modalidad: 'Presencial',
    lumaLink: 'https://lu.ma/e4xbc2ec?tk=xVGCDA',
    completed: true,
    capacity: 35,
  },
];

export async function GET() {
  return NextResponse.json({ events: communityEvents });
}
