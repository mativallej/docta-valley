import { NextResponse } from 'next/server';
import { Member } from '@/types/member';

const members: Member[] = [
  {
    id: '1',
    name: 'Matias Vallejos',
    role: 'founder',
    bio: 'Founder @DoctaValley | Full Stack Dev @ megatone.net | 🚀 Cloud & Product',
    image_url: 'https://pbs.twimg.com/profile_images/1886073142549848064/3u1mDvK3_400x400.jpg',
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
    role: 'founder',
    bio: '🚀 CEO & Co-Founder at Curval | 🌎 Córdoba, Argentina',
    image_url: 'https://pbs.twimg.com/profile_images/1877539774996627456/fQ-wIWfP_400x400.jpg',
    links: {
      twitter: 'https://twitter.com/lucasnasich',
      linkedin: 'https://linkedin.com/in/lucasnasich',
      website: 'https://curval.io'
    },
  },
  {
    id: '3',
    name: 'Carla Palmieri',
    role: 'member',
    bio: '🚀 CTO & Co-Founder at Curval | 🌎 Córdoba, Argentina',
    image_url: 'https://pbs.twimg.com/profile_images/1762579024558034944/pALCXx8V_400x400.jpg',
    links: {
      twitter: 'https://twitter.com/Carly23p',
      linkedin: 'https://linkedin.com/in/carla-palmieri',
      website: 'https://curval.io'
    },
  },
  {
    id: '4',
    name: 'Leandro Pisaroni',
    role: 'member',
    bio: '💰 Investor & Partner at Kalei Ventures | 🌎 Córdoba, Argentina',
    image_url: 'https://pbs.twimg.com/profile_images/1620429154410717187/s5kBAYq0_400x400.jpg',
    links: {
      twitter: 'https://twitter.com/nanopisaroni',
      linkedin: 'https://www.linkedin.com/in/leandropisaroni/',
      website: 'https://www.kaleiventures.com/'
    },
  },
  {
    id: '5',
    name: 'Sebastián Rinaldi',
    role: 'member',
    bio: '🤖 Founder at Laburen | AI & Data Science | 🌎 Córdoba, Argentina',
    image_url: 'https://pbs.twimg.com/profile_images/1892247373759291392/ApU-tKxw_400x400.jpg',
    links: {
      twitter: 'https://twitter.com/ssebita_r',
      linkedin: 'https://www.linkedin.com/in/sebastianrinaldi/',
      website: 'https://laburen.com'
    },
  },
  {
    id: '6',
    name: 'Luciano Juarez',
    role: 'member',
    bio: '🤖 Founder at Botix | 🌎 Córdoba, Argentina',
    image_url: 'https://pbs.twimg.com/profile_images/1617758779935694848/8QRvDkGH_400x400.jpg',
    links: {
      twitter: 'https://twitter.com/juarezlucianoa',
      linkedin: 'https://www.linkedin.com/in/juarez-luciano/'
    },
  },
];


export async function GET() {
  return NextResponse.json({ members });
}
