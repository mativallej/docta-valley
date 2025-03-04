import { NextResponse } from 'next/server';
import { CommunityStartup } from '@/types/startup';

const communityStartups: CommunityStartup[] = [
  {
    id: '1',
    name: 'TechCba',
    image: '/placeholder.svg?height=80&width=80',
    location: 'Córdoba, Argentina',
    description: 'Plataforma para conectar talento tech en Córdoba con empresas locales e internacionales.',
    status: 'launched',
    launchDate: '2020-01-01',
    founders: [
      {
        id: '1',
        name: 'Laura Gómez',
        image: '/placeholder.svg',
      },
      {
        id: '2',
        name: 'Martín Rodríguez',
        image: '/placeholder.svg',
      },
    ],
    category: { id: 1, label: 'HR Tech' },
    tags: ['Recruitment', 'Tech Talent', 'Remote Work'],
    links: {
      website: 'https://techcba.com',
      github: 'https://github.com/techcba',
    },
    teamSize: '11-50',
    funding: 'Seed - $50  0K',
  },
  {
    id: '2',
    name: 'DataSur',
    image: '/placeholder.svg?height=80&width=80',
    location: 'Córdoba, Argentina',
    description:
      'Soluciones de análisis de datos para empresas latinoamericanas, enfocadas en optimización de procesos y toma de decisiones.',
    status: 'development',
    launchDate: '2021-01-01',
    founders: [
      {
        id: '3',
        name: 'Carolina Pérez',
        image: '/placeholder.svg',
      },
    ],
    category: { id: 2, label: 'Data Analytics' },
    tags: ['Big Data', 'Business Intelligence', 'AI'],
    links: {
      website: 'https://datasur.io',
      github: 'https://github.com/datasur',
    },
    teamSize: '1-10',
    funding: 'Pre-seed - $150K',
  },
  {
    id: '3',
    name: 'FinTechCba',
    image: '/placeholder.svg?height=80&width=80',
    location: 'Córdoba, Argentina',
    description:
      'Soluciones financieras innovadoras para pequeñas empresas y emprendedores, facilitando el acceso a créditos y gestión financiera.',
    status: 'idea',
    launchDate: '2019-01-01',
    founders: [
      {
        id: '4',
        name: 'Alejandro Suárez',
        image: '/placeholder.svg',
      },
    ],
    category: { id: 3, label: 'Fintech' },
    tags: ['Payments', 'SME Lending', 'Financial Inclusion'],
    links: {
      website: 'https://fintechcba.com',
      github: 'https://github.com/fintechcba',
    },
    teamSize: '11-50',
    funding: 'Series A - $2M',
  },
  {
    id: '4',
    name: 'HealthTech',
    image: '/placeholder.svg?height=80&width=80',
    location: 'Córdoba, Argentina',
    description:
      'Plataforma de telemedicina que conecta pacientes con profesionales de la salud, facilitando consultas remotas y seguimiento de tratamientos.',
    status: 'launched',
    launchDate: '2022-01-01',
    founders: [
      {
        id: '5',
        name: 'Valeria Torres',
        image: '/placeholder.svg',
      },
      {
        id: '6',
        name: 'Diego Fernández',
        image: '/placeholder.svg',
      },
    ],
    category: { id: 4, label: 'Health Tech' },
    tags: ['Telemedicine', 'Healthcare', 'Remote Care'],
    links: {
      website: 'https://healthtech.ar',
      github: 'https://github.com/healthtech',
    },
    teamSize: '1-10',
    funding: 'Bootstrapped',
  },
  {
    id: '5',
    name: 'EduCordoba',
    image: '/placeholder.svg?height=80&width=80',
    location: 'Buenos Aires, Argentina',
    description:
      'Plataforma educativa que democratiza el acceso a educación de calidad, con foco en habilidades digitales y tecnológicas.',
    status: 'development',
    launchDate: '2021-01-01',
    founders: [
      {
        id: '7',
        name: 'Carolina Pérez',
        image: '/placeholder.svg',
      },
    ],
    category: { id: 5, label: 'EdTech' },
    tags: ['Online Learning', 'Tech Skills', 'Education'],
    links: {
      website: 'https://educordoba.com',
      github: 'https://github.com/educordoba',
    },
    teamSize: '1-10',
    funding: 'Angel - $100K',
  },
  {
    id: '6',
    name: 'AgriTechCba',
    image: '/placeholder.svg?height=80&width=80',
    location: 'Catamarca, Argentina',
    description:
      'Soluciones tecnológicas para el sector agrícola, optimizando procesos y aumentando la productividad mediante IoT y análisis de datos.',
    status: 'launched',
    launchDate: '2018-01-01',
    founders: [
      {
        id: '8',
        name: 'Diego Fernández',
        image: '/placeholder.svg',
      },
      {
        id: '9',
        name: 'Alejandro Suárez',
        image: '/placeholder.svg',
      },
    ],
    category: { id: 6, label: 'AgTech' },
    tags: ['IoT', 'Agriculture', 'Sustainability'],
    links: {
      website: 'https://agritechcba.com',
      github: 'https://github.com/agritechcba',
    },
    teamSize: '11-50',
    funding: 'Series A - $1.5M',
  },
  {
    id: '7',
    name: 'EcoTech',
    image: '/placeholder.svg?height=80&width=80',
    location: 'Santa Fe, Argentina',
    description: 'Soluciones sostenibles para la gestión de residuos y energía renovable en empresas.',
    status: 'idea',
    launchDate: '2023-01-01',
    founders: [
      {
        id: '10',
        name: 'María González',
        image: '/placeholder.svg',
      },
    ],
    category: { id: 7, label: 'CleanTech' },
    tags: ['Sustainability', 'Renewable Energy', 'Waste Management'],
    links: {
      website: 'https://ecotech.com',
      github: 'https://github.com/ecotech',
    },
    teamSize: '1-10',
    funding: 'Pre-seed - $50K',
  },
  {
    id: '8',
    name: 'AI Solutions',
    image: '/placeholder.svg?height=80&width=80',
    location: 'Mendoza, Argentina',
    description: 'Plataforma de inteligencia artificial para automatización de procesos empresariales.',
    status: 'development',
    launchDate: '2023-06-01',
    founders: [
      {
        id: '11',
        name: 'Carlos Ruiz',
        image: '/placeholder.svg',
      },
      {
        id: '12',
        name: 'Ana Torres',
        image: '/placeholder.svg',
      },
      {
        id: '13',
        name: 'Juan Pérez',
        image: '/placeholder.svg',
      },
      {
        id: '14',
        name: 'Laura Gómez',
        image: '/placeholder.svg',
      },
    ],
    category: { id: 8, label: 'AI/ML' },
    tags: ['Artificial Intelligence', 'Automation', 'Machine Learning'],
    links: {
      website: 'https://aisolutions.com',
      github: 'https://github.com/aisolutions',
    },
    teamSize: '1-10',
    funding: 'Seed - $300K',
  },
];

export async function GET() {
  return NextResponse.json(communityStartups);
}
