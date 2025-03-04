export interface MemberProps {
  member: Member;
  index: number;
}

export interface Member {
  id: string;
  name: string;
  communityRole: string;
  bio: string;
  image: string;
  links: {
    twitter?: string;
    linkedin?: string;
    github?: string;
    website?: string;
  };
}
