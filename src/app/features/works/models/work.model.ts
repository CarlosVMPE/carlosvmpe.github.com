export interface Work {
  id: string;
  companyName: string;
  project: string;
  description: string;
  images: string[];
  date: string;
  type: string;
  link?: string;
  navigationLeft: string;
  navigationRight: string;

  brandColor?: string;
  tags?: string[];
  sections?: WorkSection[];
}

export interface WorkSection {
  title: string;
  items: string[];
}

export interface WorkTranslation {
  project?: string;
  description: string;
  date: string;
  type: string;
  tags?: string[];
  sections?: WorkSection[];
}

export type WorkNotFound = {
  codeError: string;
  title: string;
  description: string;
}
