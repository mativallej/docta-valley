import { NextResponse } from 'next/server';
import { CommunityStartup } from '@/types/startup';

const communityStartups: CommunityStartup[] = [
  // 1. Curval
  {
    id: '1',
    name: 'Curval',
    image_url: 'https://pbs.twimg.com/profile_images/1836483810772299777/mAbELLGa_400x400.jpg',
    location: 'Córdoba, Argentina',
    description: 'Copiloto de estudio universitario con IA.',
    status: 'launched',
    launchDate: '2025-02-05',
    founders: [
      {
        id: '1',
        name: 'Lucas Nasich',
        image_url: '/members/lucas-nasich.jpeg',
        linkedin: 'https://www.linkedin.com/in/lucasnasich/',
      },
      {
        id: '2',
        name: 'Carla Palmieri',
        image_url: '/members/carla-palmieri.jpeg',
        linkedin: 'https://www.linkedin.com/in/carla-palmieri/',
      },
    ],
    category: { id: 1, label: 'EdTech', emoji: '📚' },
    tags: ['AI', 'Productivity', 'Education'],
    links: {
      website: 'https://curval.io/',
      github: 'https://github.com/techcba',
    },
    teamSize: '2-10',
    funding: 'Bootstrapped',
  },
  // 2. Laburen
  {
    id: '6',
    name: 'Laburen',
    image_url: '/logos/laburen.jpeg',
    location: 'Córdoba, Argentina',
    description: 'SaaS que crea empleados de IA para optimizar procesos empresariales.',
    status: 'launched',
    launchDate: '2024-01-01',
    founders: [
      {
        id: '7',
        name: 'Sebastian Rinaldi',
        image_url: '/members/seba-rinaldi.jpeg',
        linkedin: 'https://www.linkedin.com/in/sebastianrinaldi/',
      },
    ],
    category: { id: 8, label: 'AI/ML', emoji: '🤖' },
    tags: ['AI', 'Automation', 'SaaS'],
    links: {
      website: 'https://laburen.com/',
    },
    teamSize: '2-10',
    funding: 'Bootstrapped',
  },
  // 3. Retrip
  {
    id: '2',
    name: 'Retrip',
    image_url: 'https://pbs.twimg.com/profile_images/1892011204291289088/nUAfNjBN_400x400.jpg',
    location: 'Córdoba, Argentina',
    description: 'Agente conversacional con IA para el sector turístico.',
    status: 'development',
    launchDate: '2024-01-01',
    founders: [
      {
        id: '3',
        name: 'Ata Sanchez',
        image_url: '/members/ata-sanchez.jpg',
        linkedin: 'https://www.linkedin.com/in/ataschz/',
      },
    ],
    category: { id: 8, label: 'AI/ML', emoji: '🤖' },
    tags: ['Travel', 'Automation', 'AI'],
    links: {
      website: 'https://retrip.io/',
    },
    teamSize: '2-10',
    funding: 'Pre-seed',
  },
  // 4. SyncedBits
  {
    id: '3',
    name: 'SyncedBits',
    image_url: '/logos/syncedbit_logo.jpeg',
    location: 'Córdoba, Argentina',
    description: 'Marketplace modular para gestionar infraestructura IT.',
    status: 'development',
    launchDate: '2024-01-01',
    founders: [
      {
        id: '4',
        name: 'Juan Ignacio Rios',
        image_url: '/members/juan-rios.jpeg',
        linkedin: 'https://www.linkedin.com/in/jir125/',
      },
    ],
    category: { id: 9, label: 'Other', emoji: '🧩' },
    tags: ['Cloud', 'Automation', 'DevOps'],
    links: {
      website: 'https://syncedbits.com/',
    },
    teamSize: '2-10',
    funding: 'Pre-seed',
  },
  // 5. Rocbird
  {
    id: '7',
    name: 'Rocbird',
    image_url: '/logos/rocbird_logo.jpeg',
    location: 'Córdoba, Argentina',
    description: 'Software para la transformación digital de empresas.',
    status: 'launched',
    launchDate: '2019-08-08',
    founders: [
      {
        id: '8',
        name: 'Gaston Di Giuseppe',
        image_url: '/members/gasto-giuscuped.jpeg',
        linkedin: 'https://www.linkedin.com/in/gaston-dg/',
      },
    ],
    category: { id: 9, label: 'Other', emoji: '🧩' },
    tags: ['Software', 'Innovation', 'DigitalTransformation'],
    links: {
      website: 'https://www.rocbird.io/',
    },
    teamSize: '11-50',
    funding: 'Bootstrapped',
  },
  // 6. Casa Click
  {
    id: '5',
    name: 'Casa Click',
    image_url: '/logos/clickie.jpeg',
    location: 'Córdoba, Argentina',
    description: 'Plataforma que conecta usuarios con profesionales para soluciones del hogar.',
    status: 'launched',
    launchDate: '2024-01-01',
    founders: [
      {
        id: '6',
        name: 'Tomas Dascola',
        image_url: '/members/tomas-dascola.jpeg',
        linkedin: 'https://www.linkedin.com/in/tomas-dascola-622008187/',
      },
    ],
    category: { id: 9, label: 'Other', emoji: '🧩' },
    tags: ['Marketplace', 'HomeServices', 'RealEstate'],
    links: {
      website: 'https://casaclick.ar/',
    },
    teamSize: '2-10',
    funding: 'Bootstrapped',
  },
  {
    id: '9',
    name: 'Chatsell',
    image_url: '/logos/chatsell.png',
    location: 'Cordoba, Argentina',
    description: 'Automatización de ventas y atención al cliente a través de Inteligencia Artificial.',
    status: 'launched',
    launchDate: '2024-01-01',
    founders: [
      {
        id: '1',
        name: 'Matias Sidler',
        image_url: '/members/matias-sidler.jpeg',
        linkedin: 'https://www.linkedin.com/in/matias-sidler-chatsell',
      },
      {
        id: '2',
        name: 'Ivan Hadrowa',
        image_url: '/members/ivan-hadrowa.jpeg',
        linkedin: 'https://www.linkedin.com/in/ivanhadrowa/',
      },
    ],
    category: { id: 11, label: 'AI/SaaS', emoji: '' },
    tags: ['AI', 'SaaS', 'sales'],
    links: {
      website: 'https://chatsell.net',
    },
    teamSize: '1-10',
    funding: 'bootstrapped',
  },
  {
    id: '10',
    name: 'Phorus Group',
    image_url: 'https://storage.googleapis.com/phorus-group-utils/logo-10.png',
    location: 'Estonia',
    description:
      'Phorus Group ofrece desarrollo de software a medida, consultoría y auditorías tecnológicas para empresas. Optimizamos procesos, implementamos soluciones seguras y escalables, y evaluamos sus sistemas actuales para identificar mejoras. Nuestro enfoque práctico garantiza resultados concretos: mayor eficiencia operativa, reducción de riesgos técnicos y preparación para el crecimiento con infraestructura robusta.',
    status: 'launched',
    launchDate: '2022-10-11',
    founders: [
      {
        id: '1',
        name: 'Juan Ignacio Rios',
        image_url: '/members/juan-rios.jpeg',
        linkedin: 'https://www.linkedin.com/in/jir125/',
      },
    ],
    category: { id: 12, label: 'Software Consulting', emoji: '' },
    tags: [],
    links: {
      website: 'https://phorus.group',
    },
    teamSize: '11-50',
    funding: 'bootstrapped',
  },
  {
    id: '11',
    name: 'INNO Prospect',
    image_url: '/logos/inno.jpeg',
    location: 'Villa María, Córdoba, Argentina',
    description:
      'Ayudamos a empresas B2B a conectarse con su cliente ideal, comunicando eficientemente su propuesta de valor a través de campañas de cold email, generando conexiones y oportunidades de venta.',
    status: 'launched',
    launchDate: '2024-03-01',
    founders: [],
    category: { id: 13, label: 'B2B Marketing', emoji: '📧' },
    tags: ['B2B', 'Marketing', 'Sales', 'Email'],
    links: {
      website: '',
    },
    teamSize: '1-10',
    funding: 'Bootstrapped',
  },
  {
    id: '12',
    name: 'Botix',
    image_url: '/logos/botix.jpeg',
    location: 'Córdoba, Argentina',
    description:
      'Plataforma en desarrollo que utiliza RPA e Inteligencia Artificial para automatizar tareas y procesos repetitivos, optimizando recursos y mejorando la eficiencia operativa de las empresas.',
    status: 'development',
    launchDate: '2024-11-01',
    founders: [],
    category: { id: 8, label: 'AI/ML', emoji: '🤖' },
    tags: ['RPA', 'AI', 'SaaS', 'Automation'],
    links: {
      website: '',
      linkedin: 'https://www.linkedin.com/company/botix-hq',
    },
    teamSize: '1-10',
    funding: 'Bootstrapped',
  },
];

export async function GET() {
  return NextResponse.json(communityStartups);
}
