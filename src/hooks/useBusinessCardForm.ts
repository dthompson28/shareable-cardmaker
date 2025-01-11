import { useEffect } from "react";
import { BusinessCardData } from "@/components/BusinessCardForm";
import { STORAGE_KEY } from "@/constants/businessCard";

export const useBusinessCardForm = (
  data: BusinessCardData,
  onChange: (data: BusinessCardData) => void
) => {
  useEffect(() => {
    try {
      const savedData = localStorage.getItem(STORAGE_KEY);
      if (savedData) {
        const parsedData = JSON.parse(savedData);
        onChange(parsedData);
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
        onChange({
          ...data,
          [parent]: {
            ...parentValue,
            [child]: value,
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