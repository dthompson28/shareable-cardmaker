export const getSafeId = (id: string | { value: string } | null | undefined): string | undefined => {
  if (!id) return undefined;
  return typeof id === 'object' ? id.value : id;
};