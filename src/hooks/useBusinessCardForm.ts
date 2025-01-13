import { useEffect } from "react";
import { BusinessCardData } from "@/components/BusinessCardForm";
import { STORAGE_KEY } from "@/constants/businessCard";
import { sortGroupsAndLinks } from "@/utils/sortGroupsAndLinks";

export const useBusinessCardForm = (
  data: BusinessCardData,
  onChange: (data: BusinessCardData) => void
) => {
  useEffect(() => {
    try {
      const savedData = localStorage.getItem(STORAGE_KEY);
      if (savedData) {
        const parsedData = JSON.parse(savedData);
        onChange(sortGroupsAndLinks(parsedData));
      }
    } catch (error) {
      console.error("Error loading data from localStorage:", error);
    }
  }, []);

  const handleChange = (field: string, value: any) => {
    let updatedData = { ...data };

    if (field.includes(".")) {
      const [parent, child] = field.split(".");
      const parentValue = updatedData[parent as keyof BusinessCardData];

      if (parentValue && typeof parentValue === "object") {
        updatedData = {
          ...updatedData,
          [parent]: {
            ...parentValue,
            [child]: value,
          },
        };

        // Apply sorting if we're updating linkGroups or additionalLinks
        if (child === "linkGroups" || child === "additionalLinks") {
          updatedData = sortGroupsAndLinks(updatedData);
        }
      }
    } else {
      updatedData[field] = value;
    }

    onChange(updatedData);
  };

  return { handleChange };
};