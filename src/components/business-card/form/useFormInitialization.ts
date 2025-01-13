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
        id: editData.id // Explicitly preserve the ID
      });
    }
  }, [editData, onChange]);
};