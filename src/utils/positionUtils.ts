import { LOGO_POSITIONS } from "@/constants/businessCard";
import { Position } from "@/types/businessCard";

export const getLogoPosition = (position: Position) => {
  const { x = 50, y = 50 } = position || {};
  if (x === 0 && y === 0) return 'top-4 left-4';
  if (x === 100 && y === 0) return 'top-4 right-4';
  if (x === 0 && y === 100) return 'bottom-32 left-4';
  if (x === 100 && y === 100) return 'bottom-4 right-4';
  return 'top-4 right-4';
};

export const isLogoBottomLeft = (position: Position) => {
  const { x = 50, y = 50 } = position || {};
  return x === 0 && y === 100;
};

export const getCurrentLogoPosition = (position: Position) => {
  const { x = 50, y = 50 } = position || {};
  if (x === 0 && y === 0) return 'top-left';
  if (x === 100 && y === 0) return 'top-right';
  if (x === 0 && y === 100) return 'bottom-left';
  if (x === 100 && y === 100) return 'bottom-right';
  return 'top-right';
};