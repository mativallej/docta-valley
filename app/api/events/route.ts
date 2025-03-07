import { NextResponse } from 'next/server';
import { Event } from '@/types/events';

const communityEvents: Event[] = [
  {
    id: 1,
    title: 'Inauguración de Docta Valley',
    description: 'Evento inaugural en el que la primera generación de builders y founders se reunió para definir la estructura y visión de la comunidad.',
    date: '2024-12-03',
    time: '18:30',
    location: 'Lupulus Patio Cervecero, Córdoba, Argentina',
    modalidad: 'Presencial',
    lumaLink: 'https://lu.ma/e2s1hyi4',
    completed: true,
    capacity: 11,
  },
  {
    id: 2,
    title: 'Primera gran convocatoria',
    description: 'Una convocatoria con amplia participación que permitió conocer en profundidad a representantes de startups cordobesas y debatir sobre nuevas ideas y proyectos.',
    date: '2025-01-31',
    time: '19:00',
    location: 'Matias apartment, Córdoba, Argentina',
    modalidad: 'Presencial',
    lumaLink: 'https://lu.ma/e4xbc2ec',
    completed: true,
    capacity: 35,
  },
  {
    id: 3,
    title: 'Founders Dinner',
    description: 'Cena exclusiva para fundadores y emprendedores, orientada a fomentar el networking y la generación de ideas disruptivas, pendiente de confirmar detalles.',
    date: '',
    time: '',
    location: '',
    modalidad: 'Presencial',
    lumaLink: '',
    completed: false,
    capacity: 30,
  },
];

export async function GET() {
  return NextResponse.json({ events: communityEvents });
}
