export interface CommunityStartup {
  id: string;
  name: string;
  description: string;
  image: string;
  status: 'idea' | 'development' | 'launched';
  links: {
    website?: string;
    github?: string;
  };
  founders: {
    id: string;
    name: string;
    image: string;
  }[];
  launchDate?: string;
  category?: StartupCategory;
  tags?: string[];
  teamSize?: string;
  funding?: string;
  location?: string;
}

export interface Founder {
  id: string;
  name: string;
  image: string;
}

export interface StartupCategory {
  id: number;
  label: string;
}

