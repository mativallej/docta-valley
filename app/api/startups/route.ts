import { NextResponse } from 'next/server';
import { CommunityStartup } from '@/types/startup';

const communityStartups: CommunityStartup[] = [
  {
    id: '1',
    name: 'Curval',
    image: '/placeholder.svg?height=80&width=80',
    location: 'Córdoba, Argentina',
    description: 'Plataforma de estudio all-in-one con IA que transforma notas y materiales en repasos espaciados, flashcards inteligentes y autoevaluaciones adaptativas.',
    status: 'launched',
    launchDate: '2025-02-05',
    founders: [
      {
        id: '1',
        name: 'Lucas Nasich',
        image: '/placeholder.svg',
      },
      {
        id: '2',
        name: 'Carla Palmieri',
        image: '/placeholder.svg',
      },
    ],
    category: { id: 1, label: 'EdTech' },
    tags: ['AI', 'Productivity', 'Education'],
    links: {
      website: 'https://curval.io/',
      github: 'https://github.com/techcba',
    },
    teamSize: '1-10',
    funding: 'Bootstrapped',
  },
  {
    id: '2',
    name: 'TechCba',
    image: '/placeholder.svg?height=80&width=80',
    location: 'Córdoba, Argentina',
    description: 'Plataforma para conectar talento tech en Córdoba con empresas locales e internacionales.',
    status: 'launched',
    launchDate: '2020-01-01',
    founders: [
      {
        id: '3',
        name: 'Laura Gómez',
        image: '/placeholder.svg',
      },
      {
        id: '4',
        name: 'Martín Rodríguez',
        image: '/placeholder.svg',
      },
    ],
    category: { id: 2, label: 'HR Tech' },
    tags: ['Recruitment', 'Tech Talent', 'Remote Work'],
    links: {
      website: 'https://techcba.com',
      github: 'https://github.com/techcba',
    },
    teamSize: '11-50',
    funding: 'Seed - $500K',
  },
  {
    id: '3',
    name: 'DataSur',
    image: '/placeholder.svg?height=80&width=80',
    location: 'Córdoba, Argentina',
    description: 'Soluciones de análisis de datos para empresas latinoamericanas, enfocadas en optimización de procesos y toma de decisiones.',
    status: 'development',
    launchDate: '2021-01-01',
    founders: [
      {
        id: '5',
        name: 'Carolina Pérez',
        image: '/placeholder.svg',
      },
    ],
    category: { id: 3, label: 'Data Analytics' },
    tags: ['Big Data', 'Business Intelligence', 'AI'],
    links: {
      website: 'https://datasur.io',
      github: 'https://github.com/datasur',
    },
    teamSize: '1-10',
    funding: 'Pre-seed - $150K',
  },
  {
    id: '4',
    name: 'FinTechCba',
    image: '/placeholder.svg?height=80&width=80',
    location: 'Córdoba, Argentina',
    description: 'Soluciones financieras para pequeñas empresas y emprendedores, facilitando acceso a créditos y gestión financiera.',
    status: 'idea',
    launchDate: '2019-01-01',
    founders: [
      {
        id: '6',
        name: 'Alejandro Suárez',
        image: '/placeholder.svg',
      },
    ],
    category: { id: 4, label: 'Fintech' },
    tags: ['Payments', 'SME Lending', 'Financial Inclusion'],
    links: {
      website: 'https://fintechcba.com',
      github: 'https://github.com/fintechcba',
    },
    teamSize: '11-50',
    funding: 'Series A - $2M',
  },
  {
    id: '5',
    name: 'HealthTech',
    image: '/placeholder.svg?height=80&width=80',
    location: 'Córdoba, Argentina',
    description: 'Plataforma de telemedicina que conecta pacientes con profesionales de la salud para consultas remotas.',
    status: 'launched',
    launchDate: '2022-01-01',
    founders: [
      {
        id: '7',
        name: 'Valeria Torres',
        image: '/placeholder.svg',
      },
      {
        id: '8',
        name: 'Diego Fernández',
        image: '/placeholder.svg',
      },
    ],
    category: { id: 5, label: 'Health Tech' },
    tags: ['Telemedicine', 'Healthcare', 'Remote Care'],
    links: {
      website: 'https://healthtech.ar',
      github: 'https://github.com/healthtech',
    },
    teamSize: '1-10',
    funding: 'Bootstrapped',
  },
  {
    id: '6',
    name: 'EduCordoba',
    image: '/placeholder.svg?height=80&width=80',
    location: 'Buenos Aires, Argentina',
    description: 'Plataforma educativa que democratiza el acceso a educación de calidad, con foco en habilidades digitales.',
    status: 'development',
    launchDate: '2021-01-01',
    founders: [
      {
        id: '9',
        name: 'Carolina Pérez',
        image: '/placeholder.svg',
      },
    ],
    category: { id: 6, label: 'EdTech' },
    tags: ['Online Learning', 'Tech Skills', 'Education'],
    links: {
      website: 'https://educordoba.com',
      github: 'https://github.com/educordoba',
    },
    teamSize: '1-10',
    funding: 'Angel - $100K',
  },
  {
    id: '7',
    name: 'AgriTechCba',
    image: '/placeholder.svg?height=80&width=80',
    location: 'Catamarca, Argentina',
    description: 'Soluciones tecnológicas para el sector agrícola, optimizando procesos con IoT y análisis de datos.',
    status: 'launched',
    launchDate: '2018-01-01',
    founders: [
      {
        id: '10',
        name: 'Diego Fernández',
        image: '/placeholder.svg',
      },
      {
        id: '11',
        name: 'Alejandro Suárez',
        image: '/placeholder.svg',
      },
    ],
    category: { id: 7, label: 'AgTech' },
    tags: ['IoT', 'Agriculture', 'Sustainability'],
    links: {
      website: 'https://agritechcba.com',
      github: 'https://github.com/agritechcba',
    },
    teamSize: '11-50',
    funding: 'Series A - $1.5M',
  },
  {
    id: '8',
    name: 'EcoTech',
    image: '/placeholder.svg?height=80&width=80',
    location: 'Santa Fe, Argentina',
    description: 'Soluciones sostenibles para la gestión de residuos y energía renovable en empresas.',
    status: 'idea',
    launchDate: '2023-01-01',
    founders: [
      {
        id: '12',
        name: 'María González',
        image: '/placeholder.svg',
      },
    ],
    category: { id: 8, label: 'CleanTech' },
    tags: ['Sustainability', 'Renewable Energy', 'Waste Management'],
    links: {
      website: 'https://ecotech.com',
      github: 'https://github.com/ecotech',
    },
    teamSize: '1-10',
    funding: 'Pre-seed - $50K',
  },
];

export async function GET() {
  return NextResponse.json(communityStartups);
}
