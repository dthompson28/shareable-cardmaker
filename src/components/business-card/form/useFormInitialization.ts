import { useEffect } from "react";
import { BusinessCardData } from "@/types/businessCard";
import { sortGroupsAndLinks } from "@/utils/sortGroupsAndLinks";

export const useFormInitialization = (
  data: BusinessCardData,
  onChange: (data: BusinessCardData) => void,
  editData?: BusinessCardData
) => {
  useEffect(() => {
    if (editData) {
      console.log("Edit data received:", editData);
      // Ensure we're working with a clean ID string
      const id = editData.id && typeof editData.id === 'object' ? editData.id.value : editData.id;
      
      const processedData = sortGroupsAndLinks({
        ...editData,
        id: id || crypto.randomUUID(), // Ensure we always have a valid ID
        fonts: editData.fonts || { heading: 'Playfair Display', body: 'Open Sans' },
      });
      console.log("Processed data:", processedData);
      onChange(processedData);
    } else if (!data.id) {
      onChange({
        ...data,
        id: crypto.randomUUID()
      });
    }
  }, [editData, onChange, data]);
};