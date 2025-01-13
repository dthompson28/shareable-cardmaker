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
      }
    } else {
      updatedData[field] = value;
    }

    // Sort groups and links after each update
    onChange(sortGroupsAndLinks(updatedData));
  };

  return { handleChange };
};