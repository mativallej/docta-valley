export interface MemberProps {
  member: Member;
  index: number;
}

export interface Member {
  id: string;
  name: string;
  role: string;
  bio: string;
  image_url: string;
  links: {
    twitter?: string;
    linkedin?: string;
    github?: string;
    website?: string;
  };
}
