
export enum ProjectCategory {
  COMPANY = 'Company Projects',
  PERSONAL = 'Personal Projects',
}

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  imageUrl: string;
  description: string;
  technologies: string[];
  role?: string;
  projectUrl?: string;
  companyName?: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  duration: string;
  responsibilities: string[];
  companyUrl?: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  year: string;
}

export interface SkillsData {
  technical: string[];
  software: string[];
  toolsAndPlatforms: string[];
}

export interface ResumeData {
  summary: string;
  experience: ExperienceItem[];
  education: EducationItem[];
  skills: SkillsData;
  resumePdfUrl: string;
}

export interface NavLink {
  href: string;
  label: string;
}

export interface AboutData {
  greeting: string;
  introduction: string;
  bioParagraphs: string[];
  profileImageUrl: string;
}

export interface ContactLink {
  name: string;
  url: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
}

export interface ContactData {
  title: string;
  email: string;
  links: ContactLink[];
}

export interface HeroData {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
}
