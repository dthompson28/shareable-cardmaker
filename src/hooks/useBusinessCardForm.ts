import { useEffect } from "react";
import { BusinessCardData } from "@/components/BusinessCardForm";
import { STORAGE_KEY } from "@/constants/businessCard";
import { sortLinkGroups, sortAdditionalLinks } from "@/components/business-card/utils/groupSorting";

export const useBusinessCardForm = (
  data: BusinessCardData,
  onChange: (data: BusinessCardData) => void
) => {
  useEffect(() => {
    try {
      const savedData = localStorage.getItem(STORAGE_KEY);
      if (savedData) {
        const parsedData = JSON.parse(savedData);
        
        // Apply sorting on initial load
        const sortedData = {
          ...parsedData,
          social: {
            ...parsedData.social,
            linkGroups: sortLinkGroups(parsedData.social.linkGroups || []),
            additionalLinks: sortAdditionalLinks(parsedData.social.additionalLinks || [])
          }
        };

        onChange(sortedData);
      }
    } catch (error) {
      console.error('Error loading data from localStorage:', error);
    }
  }, []);

  const handleChange = (field: string, value: string | any) => {
    if (field.includes(".")) {
      const [parent, child] = field.split(".");
      const parentKey = parent as keyof BusinessCardData;
      const parentValue = data[parentKey];
      
      if (parentValue && typeof parentValue === 'object') {
        let updatedValue = value;

        // Apply sorting when updating linkGroups or additionalLinks
        if (field === "social.linkGroups") {
          updatedValue = sortLinkGroups(value);
        } else if (field === "social.additionalLinks") {
          updatedValue = sortAdditionalLinks(value);
        }

        onChange({
          ...data,
          [parent]: {
            ...parentValue,
            [child]: updatedValue,
          },
        });
      }
    } else {
      onChange({
        ...data,
        [field]: value,
      });
    }
  };

  return { handleChange };
};