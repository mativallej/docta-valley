import { NextResponse } from 'next/server';
import { Member } from '@/types/member';

const members: Member[] = [
  {
    id: '1',
    name: 'Matias Vallejos',
    communityRole: 'founder',
    bio: '💻 Crafting code, building ideas | 🚀 Cloud & Product Engineering | 🌎 Córdoba, Argentina',
    image: '/members/member_01.jpg',
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
    bio: '🚀 CEO & Co-Founder at Curval | 🌎 Córdoba, Argentina',
    image: '/members/member_02.jpg',
    links: {
      twitter: 'https://twitter.com/lucasnasich',
      linkedin: 'https://linkedin.com/in/lucasnasich',
      website: 'https://curval.io'
    },
  },
  {
    id: '3',
    name: 'Carla Palmieri',
    communityRole: 'member',
    bio: '🚀 CTO & Co-Founder at Curval | 🌎 Córdoba, Argentina',
    image: '/members/member_03.jpg',
    links: {
      twitter: 'https://twitter.com/Carly23p',
      linkedin: 'https://linkedin.com/in/carla-palmieri',
      website: 'https://curval.io'
    },
  },
  {
    id: '4',
    name: 'Leandro Pisaroni',
    communityRole: 'member',
    bio: '💰 Investor & Partner at Kalei Ventures | 🌎 Córdoba, Argentina',
    image: '/members/member_04.jpg',
    links: {
      twitter: 'https://twitter.com/nanopisaroni',
      linkedin: 'https://www.linkedin.com/in/leandropisaroni/',
      website: 'https://www.kaleiventures.com/'
    },
  },
  {
    id: '5',
    name: 'Sebastián Rinaldi',
    communityRole: 'member',
    bio: '🤖 Founder at Laburen | AI & Data Science | 🌎 Córdoba, Argentina',
    image: '/members/member_05.jpg',
    links: {
      twitter: 'https://twitter.com/ssebita_r',
      linkedin: 'https://www.linkedin.com/in/sebastianrinaldi/',
      website: 'https://laburen.com'
    },
  },
  {
    id: '6',
    name: 'Luciano Juarez',
    communityRole: 'member',
    bio: '🤖 Founder at Botix | 🌎 Córdoba, Argentina',
    image: '/members/member_06.jpg',
    links: {
      twitter: 'https://twitter.com/juarezlucianoa',
      linkedin: 'https://www.linkedin.com/in/juarez-luciano/'
    },
  },
];


export async function GET() {
  return NextResponse.json({ members });
}
