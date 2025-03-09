import { NextResponse } from 'next/server';
import { CommunityStartup } from '@/types/startup';

const communityStartups: CommunityStartup[] = [
  {
    id: '1',
    name: 'Curval',
    image_url: 'https://framerusercontent.com/assets/ytMvGLMkCKxXHA4T4cpl5IYi4.png',
    location: 'Córdoba, Argentina',
    description: 'Plataforma de estudio all-in-one con IA que transforma notas y materiales en repasos espaciados, flashcards inteligentes y autoevaluaciones adaptativas.',
    status: 'launched',
    launchDate: '2025-02-05',
    founders: [
      {
        id: '1',
        name: 'Lucas Nasich',
        image_url: 'https://pbs.twimg.com/profile_images/1877539774996627456/fQ-wIWfP_400x400.jpg',
        linkedin: 'https://www.linkedin.com/in/lucasnasich/',
      },
      {
        id: '2',
        name: 'Carla Palmieri',
        image_url: 'https://pbs.twimg.com/profile_images/1762579024558034944/pALCXx8V_400x400.jpg',
        linkedin: 'https://www.linkedin.com/in/carla-palmieri/',
      },
    ],
    category: { id: 1, label: 'EdTech', emoji: '📚' },
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
    name: 'HealthTrack',
    image_url: 'https://placehold.co/400x400',
    location: 'Córdoba, Argentina',
    description: 'Sistema de gestión integral para clínicas y consultorios médicos que optimiza la agenda, historias clínicas y facturación.',
    status: 'launched',
    launchDate: '2023-08-15',
    founders: [
      {
        id: '3',
        name: 'María González',
        image_url: 'https://placehold.co/400x400',
        linkedin: 'https://www.linkedin.com/',
      }
    ],
    category: { id: 2, label: 'HealthTech', emoji: '⚕️' },
    tags: ['Healthcare', 'SaaS', 'Management'],
    links: {
      website: 'https://healthtrack.ar',
    },
    teamSize: '11-50',
    funding: 'Seed',
  },
  {
    id: '3',
    name: 'EcoMove',
    image_url: 'https://placehold.co/400x400',
    location: 'Córdoba, Argentina',
    description: 'Plataforma de movilidad sustentable que conecta usuarios con vehículos eléctricos compartidos.',
    status: 'launched',
    launchDate: '2024-01-10',
    founders: [
      {
        id: '4',
        name: 'Juan Pérez',
        image_url: 'https://placehold.co/400x400',
        linkedin: 'https://www.linkedin.com/',
      }
    ],
    category: { id: 3, label: 'Mobility', emoji: '🚲' },
    tags: ['Sustainability', 'Transportation', 'Sharing Economy'],
    links: {
      website: 'https://ecomove.com.ar',
    },
    teamSize: '1-10',
    funding: 'Pre-seed',
  },
  {
    id: '4',
    name: 'DataSense',
    image_url: 'https://placehold.co/400x400',
    location: 'Córdoba, Argentina',
    description: 'Solución de analytics e inteligencia artificial para PyMEs que automatiza el análisis de datos y genera insights accionables.',
    status: 'launched',
    launchDate: '2023-05-20',
    founders: [
      {
        id: '5',
        name: 'Ana Silva',
        image_url: 'https://placehold.co/400x400',
        linkedin: 'https://www.linkedin.com/',
      }
    ],
    category: { id: 4, label: 'Analytics', emoji: '📊' },
    tags: ['AI', 'Business Intelligence', 'SaaS'],
    links: {
      website: 'https://datasense.ai',
    },
    teamSize: '11-50',
    funding: 'Series A',
  },
  {
    id: '5',
    name: 'LocalFood',
    image_url: 'https://placehold.co/400x400',
    location: 'Córdoba, Argentina',
    description: 'Marketplace que conecta productores locales con restaurantes y consumidores finales, promoviendo el consumo local y sustentable.',
    status: 'launched',
    launchDate: '2024-03-01',
    founders: [
      {
        id: '6',
        name: 'Pedro Martínez',
        image_url: 'https://placehold.co/400x400',
        linkedin: 'https://www.linkedin.com/',
      }
    ],
    category: { id: 5, label: 'FoodTech', emoji: '🥗' },
    tags: ['Marketplace', 'Sustainability', 'Local Commerce'],
    links: {
      website: 'https://localfood.com.ar',
    },
    teamSize: '1-10',
    funding: 'Bootstrapped',
  },
  {
    id: '6',
    name: 'SkillHub',
    image_url: 'https://placehold.co/400x400',
    location: 'Córdoba, Argentina',
    description: 'Plataforma de microlearning para empresas que facilita la capacitación continua de empleados mediante contenido personalizado.',
    status: 'launched',
    launchDate: '2023-11-15',
    founders: [
      {
        id: '7',
        name: 'Laura Rodríguez',
        image_url: 'https://placehold.co/400x400',
        linkedin: 'https://www.linkedin.com/',
      }
    ],
    category: { id: 1, label: 'EdTech', emoji: '📚' },
    tags: ['Corporate Training', 'E-learning', 'HR Tech'],
    links: {
      website: 'https://skillhub.edu.ar',
    },
    teamSize: '11-50',
    funding: 'Seed',
  },
  {
    id: '7',
    name: 'SecureChain',
    image_url: 'https://placehold.co/400x400',
    location: 'Córdoba, Argentina',
    description: 'Solución blockchain para trazabilidad y autenticación de documentos legales y académicos.',
    status: 'launched',
    launchDate: '2024-02-20',
    founders: [
      {
        id: '8',
        name: 'Carlos Sánchez',
        image_url: 'https://placehold.co/400x400',
        linkedin: 'https://www.linkedin.com/',
      }
    ],
    category: { id: 6, label: 'Blockchain', emoji: '🔗' },
    tags: ['Security', 'Legal Tech', 'Document Management'],
    links: {
      website: 'https://securechain.tech',
    },
    teamSize: '1-10',
    funding: 'Pre-seed',
  },
  {
    id: '8',
    name: 'PetCare',
    image_url: 'https://placehold.co/400x400',
    location: 'Córdoba, Argentina',
    description: 'App que conecta dueños de mascotas con veterinarios y cuidadores, incluyendo seguimiento de salud y recordatorios.',
    status: 'idea',
    launchDate: '2023-09-10',
    founders: [
      {
        id: '9',
        name: 'Valentina López',
        image_url: 'https://placehold.co/400x400',
        linkedin: 'https://www.linkedin.com/',
      }
    ],
    category: { id: 7, label: 'PetTech', emoji: '🐾' },
    tags: ['Marketplace', 'Healthcare', 'Mobile App'],
    links: {
      website: 'https://petcare.app',
    },
    teamSize: '1-10',
    funding: 'Bootstrapped',
  },
  {
    id: '9',
    name: 'SmartAgro',
    image_url: 'https://placehold.co/400x400',
    location: 'Córdoba, Argentina',
    description: 'Sistema IoT para monitoreo y optimización de cultivos mediante sensores y análisis predictivo.',
    status: 'idea',
    launchDate: '2023-07-01',
    founders: [
      {
        id: '10',
        name: 'Diego Fernández',
        image_url: 'https://placehold.co/400x400',
        linkedin: 'https://www.linkedin.com/',
      }
    ],
    category: { id: 8, label: 'AgTech', emoji: '🌾' },
    tags: ['IoT', 'Agriculture', 'AI'],
    links: {
      website: 'https://smartagro.tech',
    },
    teamSize: '11-50',
    funding: 'Series A',
  },
  {
    id: '10',
    name: 'FinFlow',
    image_url: 'https://placehold.co/400x400',
    location: 'Córdoba, Argentina',
    description: 'Plataforma de gestión financiera para autónomos y freelancers que automatiza facturación, impuestos y contabilidad.',
    status: 'development',
    launchDate: '2024-01-15',
    founders: [
      {
        id: '11',
        name: 'Martín Torres',
        image_url: 'https://placehold.co/400x400',
        linkedin: 'https://www.linkedin.com/',
      }
    ],
    category: { id: 9, label: 'FinTech', emoji: '💰' },
    tags: ['Finance', 'Automation', 'SaaS'],
    links: {
      website: 'https://finflow.app',
    },
    teamSize: '1-10',
    funding: 'Seed',
  },
  {
    id: '11',
    name: 'EcoStore',
    image_url: 'https://placehold.co/400x400',
    location: 'Córdoba, Argentina',
    description: 'Marketplace de productos sustentables y zero waste con sistema de logística inversa para envases reutilizables.',
    status: 'development',
    launchDate: '2024-03-15',
    founders: [
      {
        id: '12',
        name: 'Sofia Ramírez',
        image_url: 'https://placehold.co/400x400',
        linkedin: 'https://www.linkedin.com/',
      }
    ],
    category: { id: 10, label: 'GreenTech', emoji: '🌱' },
    tags: ['E-commerce', 'Sustainability', 'Circular Economy'],
    links: {
      website: 'https://ecostore.com.ar',
    },
    teamSize: '1-10',
    funding: 'Pre-seed',
  }
];

export async function GET() {
  return NextResponse.json(communityStartups);
}
