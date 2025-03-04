import { NextResponse } from 'next/server';
import { Member } from '@/types/member';

const members: Member[] = [
  {
    id: '1',
    name: 'Matias Vallejos',
    communityRole: 'founder',
    bio: '💻 Crafting code, building ideas | 🚀 Cloud & Product Engineering | 🌎 Córdoba, Argentina',
    image: '/placeholder.svg',
    links: {
      twitter: 'https://twitter.com/mativallejosdev',
      linkedin: 'https://linkedin.com/in/matiasvallejos',
      github: 'https://github.com/matiasvallejosdev',
      website: 'https://matiasvallejos.com',
    },
  },
  {
    id: '2',
    name: 'Lucas Nasich',
    communityRole: 'founder',
    bio: '🇦🇷 Founder of @CurvalApp & @DoctaValley | Building in Córdoba, Argentina',
    image: '/placeholder.svg',
    links: {
      twitter: 'https://twitter.com/lucasnasich',
      website: 'https://curval.io'
    },
  },
  {
    id: '3',
    name: 'Carla Palmieri',
    communityRole: 'member',
    bio: '🇦🇷 Carla Palmieri is a software engineer with a passion for building products that help people live healthier lives.',
    image: '/placeholder.svg',
    links: {
      twitter: 'https://twitter.com/carlapalmieri',
      linkedin: 'https://linkedin.com/in/carlapalmieri',
      github: 'https://github.com/carlapalmieri',
      website: 'https://carlapalmieri.com',
    },
  },
];

export async function GET() {
  return NextResponse.json({ members });
}
