export interface CommunityStartup {
  id: string;
  name: string;
  description: string;
  image_url: string;
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
  image_url: string;
  linkedin: string;
}

export interface StartupCategory {
  id: number;
  label: string;
  emoji: string;
}

