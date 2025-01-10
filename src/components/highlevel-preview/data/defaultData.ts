import { BusinessCardColors, Position } from '@/types/businessCard';

export interface CardData {
  photo: string;
  photoPosition: Position;
  colors: BusinessCardColors;
}

export const defaultData: CardData = {
  photo: '/placeholder.svg',
  photoPosition: {
    x: 50,
    y: 50
  },
  colors: {
    primary: '#000000',
    secondary: '#666666',
    accent: '#ffffff',
    background: '#cecabe'
  }
};