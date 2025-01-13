import { useEffect } from "react";
import { BusinessCardData } from "@/types/businessCard";

export const useFormInitialization = (
  data: BusinessCardData,
  onChange: (data: BusinessCardData) => void,
  editData?: BusinessCardData
) => {
  useEffect(() => {
    if (editData) {
      console.log("Initializing form with edit data:", editData);
      // When editing, preserve the existing ID
      onChange({
        ...editData,
        id: editData.id // Explicitly set the ID from editData
      });
    } else if (!data.id) {
      // Only generate new ID for new cards
      const newId = crypto.randomUUID();
      console.log("Generating initial clientId for new card:", newId);
      onChange({
        ...data,
        id: newId
      });
    }
  }, [editData, onChange, data.id]);
};