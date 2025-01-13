import { BusinessCardData } from "@/types/businessCard";

export const sortGroupsAndLinks = (data: BusinessCardData): BusinessCardData => {
  if (!data.social) return data;

  const sortedGroups = data.social.linkGroups
    ? [...data.social.linkGroups].sort((a, b) => a.position - b.position)
    : undefined;

  const sortedLinks = data.social.additionalLinks
    ? [...data.social.additionalLinks].sort((a, b) => {
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
      })
    : undefined;

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
