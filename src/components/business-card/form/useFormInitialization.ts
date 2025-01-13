import { useEffect } from "react";
import { BusinessCardData } from "@/types/businessCard";
import { Location } from "react-router-dom";

export const useFormInitialization = (
  data: BusinessCardData,
  onChange: (data: BusinessCardData) => void,
  editData?: BusinessCardData
) => {
  useEffect(() => {
    if (editData) {
      console.log("Initializing form with edit data:", editData);
      onChange(editData);
    }
  }, [editData, onChange]);
};