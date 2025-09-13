
export interface NavLink {
  name: string;
  href: string;
}

export interface EducationItem {
  institution: string;
  degree: string;
  duration: string;
  description: string;
}

export interface Project {
  title: string;
  acronym: string;
  description: string;
}

export interface Certificate {
  id: number;
  title: string;
  institute: string;
  date: string;
  description: string;
  imageUrl: string;
}

export interface Workshop {
  id: number;
  title: string;
  date: string;
  location: string;
  description: string;
  impact: string;
  images: string[];
}

export interface BlogPost {
  id: number;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  imageUrl: string;
}

export interface Skill {
  name: string;
  description: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
}

export interface Testimonial {
  quote: string;
  name: string;
  title: string;
}
