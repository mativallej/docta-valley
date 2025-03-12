import { NextResponse } from 'next/server';
import { Member } from '@/types/member';

const members: Member[] = [
  {
    id: '1',
    name: 'Matias Vallejos',
    role: 'founder',
    bio: '🚀 Full Stack Dev at Megatone | 🌎 Córdoba, Argentina',
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
    name: 'Leandro Pisaroni',
    role: 'member',
    bio: '💰 Investor & Partner at Kalei Ventures | 🌎 Córdoba, Argentina',
    image_url: 'https://media.licdn.com/dms/image/v2/C5603AQFwQrDHqxhU-g/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1580151660843?e=1747267200&v=beta&t=vPsD8RhxabeK0nFVTkWrt2VIz0HRO5lIHqZVbf3bTUY',
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
    image_url: 'https://pbs.twimg.com/profile_images/1892247373759291392/ApU-tKxw_400x400.jpg',
    links: {
      twitter: 'https://twitter.com/ssebita_r',
      linkedin: 'https://www.linkedin.com/in/sebastianrinaldi/',
      website: 'https://laburen.com'
    },
  },
  {
    id: "5",
    name: "Luciano Joaquín Alfonso",
    role: "founder",
    bio: "CEO & Founder at Jobly | Córdoba, Argentina",
    image_url:
      "https://media.licdn.com/dms/image/v2/D4D03AQEbYXpYftHB2Q/profile-displayphoto-shrink_400_400/B4DZU9V2QpHYAk-/0/1740490893049?e=1747267200&v=beta&t=qA0Avf2XxbquO3gMN84lWr6i0_dKvF7vvpg1CTstSgs",
    links: {
      linkedin:
        "https://www.linkedin.com/in/ljalfonso?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
  },
  {
    id: "6",
    name: "Matias Sidler",
    role: "founder",
    bio: "CTO & Co-Founder at Chatsell | AI Enthusiast",
    image_url:
      "https://drive.google.com/file/d/19wuSegXMYxgKgM2sNyD3dg7CD6817UUg/view?usp=sharing",
    links: {
      linkedin: "https://linkedin.com/in/matias-sidler",
      github: "https://github.com/matisidler",
      twitter: "https://x.com/tias0x",
    },
  },
  {
    id: '7',
    name: 'Carla Palmieri',
    role: 'member',
    bio: '🚀 CTO & Co-Founder at Curval | 🌎 Córdoba, Argentina',
    image_url: 'https://media.licdn.com/dms/image/v2/D4D03AQG5Yr50NOunEw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1690337728846?e=1747267200&v=beta&t=COrLhm1CfbN3ifp7OzhE7-6OuU-MU4NoaEN7NMkPAmY',
    links: {
      twitter: 'https://twitter.com/Carly23p',
      linkedin: 'https://linkedin.com/in/carla-palmieri',
      website: 'https://curval.io'
    },
  },
  {
    id: "9",
    name: "Ivan Hadrowa",
    role: "founder",
    bio: "CEO & Co-Founder at Chatsell | Córdoba, Argentina",
    image_url:
      "https://drive.google.com/file/d/1lixy_EwBBkFxuy6lSbeaN0ib1cu1bPw8/view?usp=sharing",
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
    image_url: 'https://pbs.twimg.com/profile_images/1617758779935694848/8QRvDkGH_400x400.jpg',
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
    image_url:
      "https://media.licdn.com/dms/image/v2/D4D03AQFN8uzhCmoTFg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1675778796326?e=1747267200&v=beta&t=qQZiSoWuhZQcc86PuyKHhYqAHl4PH9FN-X9ga5xgXUk",
    links: {
      linkedin: "https://www.linkedin.com/in/jir125/",
      twitter: "https://x.com/jirios125",
    },
  }
];


export async function GET() {
  return NextResponse.json({ members });
}
