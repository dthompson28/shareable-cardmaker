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
      // Ensure we preserve the ID when editing
      onChange({
        ...editData,
        id: editData.id || data.id // Explicitly preserve the ID, fallback to current data ID
      });
    } else if (!data.id) {
      // Generate new ID for new cards
      const newId = crypto.randomUUID();
      console.log("Generating initial clientId for new card:", newId);
      onChange({
        ...data,
        id: newId
      });
    }
  }, [editData, onChange, data.id]);
};