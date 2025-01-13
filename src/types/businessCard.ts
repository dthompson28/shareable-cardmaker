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
  additionalLinks?: Array<{ title: string; url: string; }>;
}

export interface BusinessCardColors {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
}