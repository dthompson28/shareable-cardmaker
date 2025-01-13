export interface Position {
  x: number;
  y: number;
}

export interface SocialLinks {
  linkedin?: string;
  facebook?: string;
  instagram?: string;
  youtube?: string;
  twitter?: string;
  tiktok?: string;
  whatsapp?: string;
  additionalLinks?: Array<{ 
    title: string; 
    url: string;
    groupName?: string; 
    id?: string;
  }>;
  linkGroups?: Array<{
    name: string;
    position: number;
    order: number;
  }>;
}

export interface BusinessCardColors {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
}

export interface BusinessCardData {
  id?: string;
  name: string;
  company: string;
  jobTitle: string;
  phone: string;
  email: string;
  website: string;
  photo: string;
  photoStyle: 'full' | 'compact';
  photoPosition: Position;
  logo: string;
  address: string;
  fonts: {
    heading: string;
    body: string;
  };
  social: SocialLinks;
  colors: BusinessCardColors;
}