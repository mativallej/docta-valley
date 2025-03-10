import { NextResponse } from 'next/server';
import { CommunityStartup } from '@/types/startup';

const communityStartups: CommunityStartup[] = [
  {
    id: '1',
    name: 'Curval',
    image_url: 'https://framerusercontent.com/assets/ytMvGLMkCKxXHA4T4cpl5IYi4.png',
    location: 'Córdoba, Argentina',
    description:
      'Plataforma de estudio all-in-one con IA que transforma notas y materiales en repasos espaciados, flashcards inteligentes y autoevaluaciones adaptativas.',
    status: 'launched',
    launchDate: '2025-02-05',
    founders: [
      {
        id: '1',
        name: 'Lucas Nasich',
        image_url:
          'https://pbs.twimg.com/profile_images/1877539774996627456/fQ-wIWfP_400x400.jpg',
        linkedin: 'https://www.linkedin.com/in/lucasnasich/',
      },
      {
        id: '2',
        name: 'Carla Palmieri',
        image_url:
          'https://pbs.twimg.com/profile_images/1762579024558034944/pALCXx8V_400x400.jpg',
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
    name: 'Retrip',
    image_url: 'https://pbs.twimg.com/profile_images/1892011204291289088/nUAfNjBN_400x400.jpg',
    location: 'Córdoba, Argentina',
    description:
      'En Retrip, transformamos la industria turística con soluciones impulsadas por IA. Nuestro agente conversacional optimiza y automatiza procesos clave (cotizaciones, reservas, seguimiento de servicios) para agencias y empresas del sector. Próximamente: Retrip.app (B2C) y Retrip.io (B2B). Nuestro objetivo es ayudar a las empresas turísticas a ser más rápidas y competitivas, brindando experiencias únicas y memorables.',
    status: 'development',
    launchDate: '2024-01-01',
    founders: [
      {
        id: '3',
        name: 'Ata Sanchez',
        image_url:
          'https://media.licdn.com/dms/image/v2/D4D03AQHuJ0BVkkcGrQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1718214067849?e=1747267200&v=beta&t=Oo3uqp4CXqrMQSj8CkOcmhrgQ5OmvXvO32zmaKyS0F4',
        linkedin: 'https://www.linkedin.com/in/ataschz/',
      },
    ],
    category: { id: 8, label: 'AI/ML', emoji: '🤖' },
    tags: ['Travel', 'Automation', 'AI'],
    links: {
      website: 'https://retrip.app',
    },
    teamSize: '2-10',
    funding: 'Pre-seed',
  },
  {
    id: '3',
    name: 'SyncedBits',
    image_url:
      'https://media.licdn.com/dms/image/v2/D4D0BAQHuaVdpKSCIIQ/company-logo_200_200/company-logo_200_200/0/1738106323272/syncedbit_logo?e=1749686400&v=beta&t=m9qUn19HIUJJIiBMqMHIUgsA-LpJr51QGYOzfcT0dIY',
    location: 'Córdoba, Argentina',
    description:
      'En SyncedBits, transformamos cómo las startups y PyMEs gestionan su infraestructura IT. Nuestro marketplace modular ofrece soluciones listas para instalar, agilizando desde la gestión segura de dominios hasta despliegues en la nube sin necesidad de DevOps especializados. Automatizamos tareas complejas para que los equipos se enfoquen en la innovación, manteniendo altos estándares de seguridad y cumplimiento.',
    status: 'development',
    launchDate: '2024-01-01',
    founders: [
      {
        id: '4',
        name: 'Juan Ignacio Rios',
        image_url:
          'https://media.licdn.com/dms/image/v2/D4D03AQFN8uzhCmoTFg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1675778796326?e=1747267200&v=beta&t=zXvuADsbbGa_bpibGrmqbQNUEo1aXYMY9WPwTws8YLI',
        linkedin: 'https://www.linkedin.com/in/jir125/overlay/photo/',
      },
    ],
    category: { id: 9, label: 'Other', emoji: '🧩' },
    tags: ['Cloud', 'Automation', 'DevOps'],
    links: {
      website: 'https://syncedbits.com/',
    },
    teamSize: '2-10',
    funding: 'Pre-seed (private investment)',
  },
  {
    id: '4',
    name: 'Phoris Group',
    image_url:
      'https://media.licdn.com/dms/image/v2/D4D0BAQGmaQgSxItD4A/company-logo_200_200/B4DZU9QomkHAAI-/0/1740489526751/phorus_group_logo?e=1749686400&v=beta&t=kCLHJ5mZkoXWfTum_TPWtdZneTLHBg68CnSFRwnSVTc',
    location: 'Helsinki, Finlandia',
    description:
      'En Phoris Group, creamos soluciones de software a medida para acelerar procesos con automatización y escalabilidad, eliminar riesgos con seguridad avanzada y arquitectura moderna, y preparar a tu negocio para crecer sin limitaciones tecnológicas. Ofrecemos alta disponibilidad, actualizaciones automatizadas y flujos de trabajo ágiles para mantenerte competitivo.',
    status: 'launched',
    launchDate: '2022-01-01',
    founders: [
      {
        id: '5',
        name: 'Juan Ignacio Rios',
        image_url:
          'https://media.licdn.com/dms/image/v2/D4D03AQFN8uzhCmoTFg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1675778796326?e=1747267200&v=beta&t=zXvuADsbbGa_bpibGrmqbQNUEo1aXYMY9WPwTws8YLI',
        linkedin: 'https://www.linkedin.com/in/jir125/overlay/photo/',
      },
    ],
    category: { id: 9, label: 'Other', emoji: '🧩' },
    tags: ['Software', 'Automation', 'Security'],
    links: {
      website: 'https://phorus.group',
    },
    teamSize: '11-50',
    funding: 'Angel',
  },
  {
    id: '5',
    name: 'Casa Click',
    image_url: 'https://casaclick.ar/casaclickfoto.jpg',
    location: 'Córdoba, Argentina',
    description:
      'En Casa Click, conectamos a personas con problemas en el hogar con profesionales calificados. Además, estamos expandiendo nuestras funcionalidades para la venta de materiales y soluciones para inmobiliarias.',
    status: 'development',
    launchDate: '2024-01-01',
    founders: [
      {
        id: '6',
        name: 'Tomas Dacola',
        image_url:
          'https://media.licdn.com/dms/image/v2/D4D03AQHy5CFwxHxKxw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1730748643735?e=1747267200&v=beta&t=_SWjP8-WSlXMjRmzXZvIJEJo6GMawtkcEVY_tqO3Nlo',
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
    id: '6',
    name: 'Laburen',
    image_url:
      'https://media.licdn.com/dms/image/v2/D4D0BAQEcMsDtwofE1g/company-logo_200_200/company-logo_200_200/0/1734071686497/chatsappai_com_logo?e=1749686400&v=beta&t=e7_JtRLp-DjrBdB_mK7OHxVJiBv4aGqIWBc2CTqw73w',
    location: 'Córdoba, Argentina',
    description:
      'Laburen es un ecosistema SaaS de creación de Empleados de IA, donde cientos de empresas optimizan la atención al cliente, soporte, operaciones, RR.HH., ventas y marketing con un rendimiento de nivel humano.',
    status: 'development',
    launchDate: '2024-01-01',
    founders: [
      {
        id: '7',
        name: 'Sebastian Rinaldi',
        image_url: 'https://pbs.twimg.com/profile_images/1892247373759291392/ApU-tKxw_400x400.jpg',
        linkedin: 'https://www.linkedin.com/in/sebastianrinaldi/',
      },
    ],
    category: { id: 8, label: 'AI/ML', emoji: '🤖' },
    tags: ['AI', 'CustomerService', 'Automation'],
    links: {
      website: 'https://laburen.com/',
    },
    teamSize: '2-10',
    funding: 'Bootstrapped',
  },
  {
    id: '7',
    name: 'Rocbird',
    image_url:
      'https://media.licdn.com/dms/image/v2/D4D0BAQGZ97zQaSu16w/company-logo_200_200/company-logo_200_200/0/1685981452529/rocbird_logo?e=1749686400&v=beta&t=Q4eXGMeWmWCBbZpzNUhX8txjgQr2dDz_i0xWqnLsOwQ',
    location: 'Córdoba, Argentina',
    description:
      'En Rocbird, brindamos soluciones de tecnología, innovación y desarrollo de software para la transformación digital de los procesos de tu empresa, proporcionando herramientas y recursos calificados para obtener una ventaja competitiva.',
    status: 'launched',
    launchDate: '2021-01-01',
    founders: [
      {
        id: '8',
        name: 'Gaston Di Giuseppe',
        image_url:
          'https://media.licdn.com/dms/image/v2/D4D03AQFrv_Ha3-vzyQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1722351269941?e=1747267200&v=beta&t=mMi9wCsXJgbk3zmiHboTOrk24_kP-p53_IiT7ChGizs',
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
];

export async function GET() {
  return NextResponse.json(communityStartups);
}
