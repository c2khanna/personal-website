export interface WorkExYearEntry {
  isYear: true;
  year: string | number;
}

export interface WorkExJobEntry {
  isYear: false;
  jobTitle: string;
  company: string;
  technologies: string[];
  startDate: string;
  endDate: string;
  description: string[];
}

export type WorkExEntry = WorkExYearEntry | WorkExJobEntry;

export interface ProjectLink {
  type: 'GitHub' | 'Demo' | string;
  display: string;
  ref: string;
}

export interface Project {
  name: string;
  technologies: string[];
  img: string;
  startDate: string;
  endDate: string;
  links: ProjectLink[];
  description: string[];
}
