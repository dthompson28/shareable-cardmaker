export interface Position {
  x: number;
  y: number;
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
  social: {
    linkedin: string;
    facebook: string;
    instagram: string;
    youtube: string;
    twitter: string;
    tiktok: string;
    whatsapp: string;
    additionalLinks?: { 
      title: string; 
      url: string;
      groupName?: string; 
      id?: string;
    }[];
    linkGroups?: {
      name: string;
      position: number;
      order: number;
    }[];
  };
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
  };
}