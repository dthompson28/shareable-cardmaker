import { BusinessCardData } from "@/components/BusinessCardForm";

export const sortGroupsAndLinks = (data: BusinessCardData): BusinessCardData => {
  if (!data.social) return data;

  return {
    ...data,
    social: {
      ...data.social,
      linkGroups: data.social.linkGroups
        ?.sort((a, b) => a.order - b.order)
        .map((group, index) => ({
          ...group,
          order: index, // Normalize order
        })),
      additionalLinks: data.social.additionalLinks
        ?.sort((a, b) => {
          if (a.groupName !== b.groupName) {
            return (a.groupName || "").localeCompare(b.groupName || "");
          }
          return (a.id || "").localeCompare(b.id || "");
        })
        .map(link => ({
          ...link,
          id: link.id || crypto.randomUUID(),
        })),
    },
  };
};