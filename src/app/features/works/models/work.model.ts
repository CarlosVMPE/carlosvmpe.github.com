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
}

export type WorkNotFound = {
  codeError: string;
  title: string;
  description: string;
}
