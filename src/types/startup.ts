export interface CommunityStartup {
  id: string;
  name: string;
  description: string;
  image: string;
  status: 'idea' | 'development' | 'launched';
  links: {
    website?: string;
    twitter?: string;
    linkedin?: string;
    github?: string;
    instagram?: string;
  };
  founders: Founder[];
  launchDate?: string;
  category?: StartupCategory;
  tags?: string[];
  teamSize?: string;
  funding?: string;
  location?: string;
  longDescription?: string;
  problem?: string;
  solution?: string;
  businessModel?: string;
}

export interface Founder {
  id: string;
  name: string;
  image: string;
  linkedin?: string;
  twitter?: string;
  github?: string;
  instagram?: string;
  role?: string;
}

export interface StartupCategory {
  id: number;
  label: string;
  emoji: string;
}

