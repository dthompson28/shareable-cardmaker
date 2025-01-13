export const getSafeId = (id: string | undefined | null): string | null => {
  if (!id) return null;
  return typeof id === 'string' ? id : null;
};