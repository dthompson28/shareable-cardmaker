import { BusinessCardData } from "@/types/businessCard";

export const sortGroupsAndLinks = (data: BusinessCardData): BusinessCardData => {
  if (!data.social?.additionalLinks?.length) return data;

  // Sort groups by position
  const sortedGroups = data.social.linkGroups
    ? [...data.social.linkGroups].sort((a, b) => a.position - b.position)
    : undefined;

  // Get group positions map for sorting links
  const groupPositions = new Map(
    sortedGroups?.map(group => [group.name, group.position]) || []
  );

  // Sort links by group position and then by ID within groups
  const sortedLinks = [...data.social.additionalLinks].sort((a, b) => {
    // If both links are in groups, sort by group position
    if (a.groupName && b.groupName) {
      const posA = groupPositions.get(a.groupName) ?? Infinity;
      const posB = groupPositions.get(b.groupName) ?? Infinity;
      if (posA !== posB) return posA - posB;
    }
    
    // If only one link is in a group, grouped links come first
    if (a.groupName && !b.groupName) return -1;
    if (!a.groupName && b.groupName) return 1;
    
    // Within the same group or for ungrouped links, sort by ID
    if (a.id && b.id) return a.id.localeCompare(b.id);
    
    return 0;
  });

  return {
    ...data,
    social: {
      ...data.social,
      linkGroups: sortedGroups,
      additionalLinks: sortedLinks,
    },
  };
};

export const updateGroupPositions = (groups: Array<{ name: string; position: number; order: number }>) => {
  return groups.map((group, index) => ({
    ...group,
    position: index,
    order: group.order || index
  }));
};

export const getNextGroupPosition = (groups: Array<{ position: number }>) => {
  return groups.length > 0 
    ? Math.max(...groups.map(g => g.position)) + 1 
    : 0;
};