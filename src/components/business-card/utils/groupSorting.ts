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
    order: group.order || index
  }));
};

export const getNextGroupPosition = (groups: Group[]): number => {
  return groups.length > 0 
    ? Math.max(...groups.map(g => g.position)) + 1 
    : 0;
};

export const sortLinkGroups = (groups: Group[]): Group[] => {
  return [...groups].sort((a, b) => {
    if (a.order !== b.order) {
      return a.order - b.order;
    }
    return a.position - b.position;
  });
};

export const sortAdditionalLinks = (links: Array<{ 
  title: string; 
  url: string; 
  groupName?: string; 
  id?: string;
}>): typeof links => {
  return [...links].sort((a, b) => {
    // First sort by groupName
    if (a.groupName !== b.groupName) {
      if (!a.groupName) return 1;
      if (!b.groupName) return -1;
      return a.groupName.localeCompare(b.groupName);
    }
    // Then by id if they're in the same group
    if (a.id && b.id) {
      return a.id.localeCompare(b.id);
    }
    return 0;
  });
};