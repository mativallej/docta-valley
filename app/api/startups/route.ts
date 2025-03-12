import { NextResponse } from 'next/server';
import { CommunityStartup } from '@/types/startup';

const communityStartups: CommunityStartup[] = [
  // 1. Curval
  {
    id: '1',
    name: 'Curval',
    image_url:
      'https://pbs.twimg.com/profile_images/1836483810772299777/mAbELLGa_400x400.jpg',
    location: 'Córdoba, Argentina',
    description:
      'Plataforma que transforma tus notas en repasos inteligentes con IA.',
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
          'https://media.licdn.com/dms/image/v2/D4D03AQG5Yr50NOunEw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1690337728846?e=1747267200&v=beta&t=COrLhm1CfbN3ifp7OzhE7-6OuU-MU4NoaEN7NMkPAmY',
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
    image_url:
      'https://media.licdn.com/dms/image/v2/D4D0BAQEcMsDtwofE1g/company-logo_200_200/company-logo_200_200/0/1734071686497/chatsappai_com_logo?e=1749686400&v=beta&t=e7_JtRLp-DjrBdB_mK7OHxVJiBv4aGqIWBc2CTqw73w',
    location: 'Córdoba, Argentina',
    description:
      'SaaS que crea empleados de IA para optimizar procesos empresariales.',
    status: 'launched',
    launchDate: '2024-01-01',
    founders: [
      {
        id: '7',
        name: 'Sebastian Rinaldi',
        image_url:
          'https://pbs.twimg.com/profile_images/1892247373759291392/ApU-tKxw_400x400.jpg',
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
    image_url:
      'https://pbs.twimg.com/profile_images/1892011204291289088/nUAfNjBN_400x400.jpg',
    location: 'Córdoba, Argentina',
    description:
      'Agente conversacional con IA para el sector turístico.',
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
      website: 'https://retrip.io/',
    },
    teamSize: '2-10',
    funding: 'Pre-seed',
  },
  // 4. SyncedBits
  {
    id: '3',
    name: 'SyncedBits',
    image_url:
      'https://media.licdn.com/dms/image/v2/D4D0BAQHuaVdpKSCIIQ/company-logo_200_200/company-logo_200_200/0/1738106323272/syncedbit_logo?e=1749686400&v=beta&t=m9qUn19HIUJJIiBMqMHIUgsA-LpJr51QGYOzfcT0dIY',
    location: 'Córdoba, Argentina',
    description:
      'Marketplace modular para gestionar infraestructura IT.',
    status: 'development',
    launchDate: '2024-01-01',
    founders: [
      {
        id: '4',
        name: 'Juan Ignacio Rios',
        image_url:
          'https://media.licdn.com/dms/image/v2/D4D03AQFN8uzhCmoTFg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1675778796326?e=1747267200&v=beta&t=zXvuADsbbGa_bpibGrmqbQNUEo1aXYMY9WPwTws8YLI',
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
    image_url:
      'https://media.licdn.com/dms/image/v2/D4D0BAQGZ97zQaSu16w/company-logo_200_200/company-logo_200_200/0/1685981452529/rocbird_logo?e=1749686400&v=beta&t=Q4eXGMeWmWCBbZpzNUhX8txjgQr2dDz_i0xWqnLsOwQ',
    location: 'Córdoba, Argentina',
    description:
      'Software para la transformación digital de empresas.',
    status: 'launched',
    launchDate: '2019-08-08',
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
  // 6. Casa Click
  {
    id: '5',
    name: 'Casa Click',
    image_url: 'https://casaclick.ar/casaclickfoto.jpg',
    location: 'Córdoba, Argentina',
    description:
      'Plataforma que conecta usuarios con profesionales para soluciones del hogar.',
    status: 'launched',
    launchDate: '2024-01-01',
    founders: [
      {
        id: '6',
        name: 'Tomas Dascola',
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
  id: "8",
  name: "Jobly",
  image_url: "https://media.licdn.com/dms/image/v2/D4D0BAQGFevsKAl7Nbw/company-logo_200_200/company-logo_200_200/0/1683173476396/joblyapp_logo?e=1749686400&v=beta&t=alWvFRuhLOADRAWtijvBKYYJAC4n_tMM7JG_U_MieP4",
  location: "Córdoba, Argentina",
  description: "Conectamos talento tech on demand validado con startups y Pymes",
  status: "launched",
  launchDate: "2024-01-01",
  founders: [
    {
      id: "1",
      name: "Luciano Joaquín Alfonso",
      image_url: "https://media.licdn.com/dms/image/v2/D4D03AQEbYXpYftHB2Q/profile-displayphoto-shrink_400_400/B4DZU9V2QpHYAk-/0/1740490893049?e=1747267200&v=beta&t=qA0Avf2XxbquO3gMN84lWr6i0_dKvF7vvpg1CTstSgs",
      linkedin:
        "https://www.linkedin.com/in/ljalfonso?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
  ],
  category: { id: 10, label: "HR Tech", emoji: "" },
  tags: ["Jobs", "AI", "HR", "SAAS"],
  links: {
    website: "https://www.wearejobly.com",
  },
  teamSize: "1-10",
  funding: "Bootstrapped",
},
{
  id: "9",
  name: "Chatsell",
  image_url:
    "https://media.licdn.com/dms/image/v2/D4D0BAQF7TvocBbPdTw/company-logo_200_200/company-logo_200_200/0/1719949490822/chatsell_logo?e=1749686400&v=beta&t=QPY8KcdH1R76n0oJg1HPA28YiKl7ZKjAxj631UG-XKo",
  location: "Cordoba, Argentina",
  description:
    "Automatización de ventas y atención al cliente a través de Inteligencia Artificial.",
  status: "launched",
  launchDate: "2024-01-01",
  founders: [
    {
      id: "1",
      name: "Matias Sidler",
      image_url:
        "https://media.licdn.com/dms/image/v2/D4D03AQGt1K9EOvm9dA/profile-displayphoto-shrink_400_400/B4DZWK6VTXHAAk-/0/1741792304150?e=1747267200&v=beta&t=xXbEPZsioUQD_YH-BR25wQ3GY1sx7PI69FFHw2n8yp0",
      linkedin: "https://linkedin.com/in/matias-sidler",
    },
    {
      id: "2",
      name: "Ivan Hadrowa",
      image_url:
        "https://media.licdn.com/dms/image/v2/D4E03AQHVZOGStFlQtA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1709224757468?e=1747267200&v=beta&t=RsY2gV9w9I5AgfosgWaaZ1wnoiny0nhMWyn5IoWp8Ho",
      linkedin: "https://www.linkedin.com/in/ivanhadrowa/",
    },
  ],
  category: { id: 11, label: "AI/SaaS", emoji: "" },
  tags: ["AI", "SaaS", "sales"],
  links: {
    website: "https://chatsell.net",
  },
  teamSize: "1-10",
  funding: "bootstrapped",
},
{
  id: "10",
  name: "Phorus Group",
  image_url: "https://storage.googleapis.com/phorus-group-utils/logo-10.png",
  location: "Estonia",
  description:
    "Phorus Group ofrece desarrollo de software a medida, consultoría y auditorías tecnológicas para empresas. Optimizamos procesos, implementamos soluciones seguras y escalables, y evaluamos sus sistemas actuales para identificar mejoras. Nuestro enfoque práctico garantiza resultados concretos: mayor eficiencia operativa, reducción de riesgos técnicos y preparación para el crecimiento con infraestructura robusta.",
  status: "launched",
  launchDate: "2022-10-11",
  founders: [
    {
      id: "1",
      name: "Juan Ignacio Rios",
      image_url:
        "https://media.licdn.com/dms/image/v2/D4D03AQFN8uzhCmoTFg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1675778796326?e=1747267200&v=beta&t=zXvuADsbbGa_bpibGrmqbQNUEo1aXYMY9WPwTws8YLI",
      linkedin: "https://www.linkedin.com/in/jir125/",
    }
  ],
  category: { id: 12, label: "Software Consulting", emoji: "" },
  tags: [],
  links: {
    website: "https://phorus.group",
  },
  teamSize: "11-50",
  funding: "bootstrapped",
}
];

export async function GET() {
  return NextResponse.json(communityStartups);
}
