
import React from 'react'; // Added import for React.ElementType

export enum ProjectCategory {
  COMPANY = 'Company Projects',
  PERSONAL = 'Personal Projects',
}

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  imageUrl: string;
  description: string; // Will store the "Summary (Main Page)"
  roleAndContributions: string[]; // Will store "My Role & Contributions" as a list
  platform: string; // e.g., "Android / iOS"
  technologies: string[]; // Kept for data completeness, but will be omitted from detail view as requested
  role?: string; // Will be unused, but kept optional for now
  projectUrl?: string; // General project link, e.g., for personal projects
  playStoreUrl?: string; // Link to Google Play Store
  appStoreUrl?: string; // Link to Apple App Store
  companyName?: string;
  releaseDate?: string; // Format 'YYYY-MM' or 'YYYY' for sorting
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
  targetId?: string; // Optional: for specific scroll targets
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
  icon: React.ElementType; // Changed from React.FC<React.SVGProps<SVGSVGElement>>
}

export interface ContactData {
  title: string;
  email: string;
  links: ContactLink[];
}

// ProjectDetailModalProps is removed as the modal component is being deleted.
// export interface ProjectDetailModalProps {
//   project: Project | null;
//   onClose: () => void;
// }