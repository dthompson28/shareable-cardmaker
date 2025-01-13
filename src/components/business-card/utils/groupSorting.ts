interface Group {
  name: string;
  position: number;
  order: number;
}

export const sortGroups = (
  groupNames: string[],
  groupPositions: Map<string, number>
): string[] => {
  return [...groupNames].sort((a, b) => {
    const posA = groupPositions.get(a);
    const posB = groupPositions.get(b);
    
    if (posA !== undefined && posB !== undefined) {
      return posA - posB;
    }
    
    if (posA !== undefined) return -1;
    if (posB !== undefined) return 1;
    
    return groupNames.indexOf(a) - groupNames.indexOf(b);
  });
};

export const updateGroupPositions = (groups: Group[]): Group[] => {
  return groups.map((group, index) => ({
    ...group,
    position: index,
    order: group.order || index // Preserve existing order or fallback to index
  }));
};