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
];

export async function GET() {
  return NextResponse.json(communityStartups);
}
