import { NextResponse } from 'next/server';
import { Member } from '@/types/member';

const members: Member[] = [
  {
    id: '1',
    name: 'Matias Vallejos',
    role: 'founder',
    bio: 'Product Engineer | tegu.ar',
    image_url: 'https://pbs.twimg.com/profile_images/1903198685108047872/yD3dWg7d_400x400.jpg',
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
    image_url: '/members/lucas-nasich.jpeg',
    links: {
      twitter: 'https://twitter.com/lucasnasich',
      linkedin: 'https://linkedin.com/in/lucasnasich',
      website: 'https://curval.io'
    },
  },
  {
    id: '3',
    name: 'Leandro Pisaroni',
    role: 'member',
    bio: '💰 Investor & Partner at Kalei Ventures | 🌎 Córdoba, Argentina',
    image_url: '/members/leandro-pisaroni.jpeg',
    links: {
      twitter: 'https://twitter.com/nanopisaroni',
      linkedin: 'https://www.linkedin.com/in/leandropisaroni/',
      website: 'https://www.kaleiventures.com/'
    },
  },
  {
    id: '4',
    name: 'Sebastián Rinaldi',
    role: 'member',
    bio: '🤖 Founder at Laburen | AI & Data Science | 🌎 Córdoba, Argentina',
    image_url: '/members/seba-rinaldi.jpeg',
    links: {
      twitter: 'https://twitter.com/ssebita_r',
      linkedin: 'https://www.linkedin.com/in/sebastianrinaldi/',
      website: 'https://laburen.com'
    },
  },
  {
    id: "5",
    name: "Luciano Joaquín Alfonso",
    role: "member",
    bio: "CEO & Founder at Jobly | Córdoba, Argentina",
    image_url: '/members/luciano-joaquin-alfonso.jpeg',
    links: {
      linkedin:
        "https://www.linkedin.com/in/ljalfonso?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
  },
  {
    id: "6",
    name: "Matias Sidler",
    role: "member",
    bio: "CTO & Co-Founder at Chatsell | AI Enthusiast",
    image_url: '/members/matias-sidler.jpeg',
    links: {
      linkedin: "https://www.linkedin.com/in/matias-sidler-chatsell",
      github: "https://github.com/matisidler",
      twitter: "https://x.com/tias0x",
    },
  },
  {
    id: '7',
    name: 'Carla Palmieri',
    role: 'member',
    bio: '🚀 CTO & Co-Founder at Curval | 🌎 Córdoba, Argentina',
    image_url: '/members/carla-palmieri.jpeg',
    links: {
      twitter: 'https://twitter.com/Carly23p',
      linkedin: 'https://linkedin.com/in/carla-palmieri',
      website: 'https://curval.io'
    },
  },
  {
    id: "8",
    name: "Ivan Hadrowa",
    role: "member",
    bio: "CEO & Co-Founder at Chatsell | Córdoba, Argentina",
    image_url: '/members/ivan-hadrowa.jpeg',
    links: {
      linkedin: "https://www.linkedin.com/in/ivanhadrowa/",
      website: "https://chatsell.net",
    },
  },
  {
    id: '9',
    name: 'Luciano Juarez',
    role: 'member',
    bio: '🤖 Founder at Botix | 🌎 Córdoba, Argentina',
    image_url: '/members/luciano-juarez.jpeg',
    links: {
      twitter: 'https://twitter.com/juarezlucianoa',
      linkedin: 'https://www.linkedin.com/in/juarez-luciano/'
    },
  },
  {
    id: "10",
    name: "Juan Rios",
    role: "member",
    bio: "Software Engineer - COO Phorus Group",
    image_url: '/members/juan-rios.jpeg',
    links: {
      linkedin: "https://www.linkedin.com/in/jir125/",
      twitter: "https://x.com/jirios125",
    },
  }
];


export async function GET() {
  return NextResponse.json({ members });
}
