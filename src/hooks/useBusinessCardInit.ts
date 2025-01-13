import { useState, useCallback } from "react";
import { BusinessCardData } from "@/types/businessCard";
import { useLocation } from "react-router-dom";
import { useBusinessCardStorage } from "./useBusinessCardStorage";

const initialData: BusinessCardData = {
  id: undefined,
  name: "",
  company: "",
  jobTitle: "",
  phone: "",
  email: "",
  website: "",
  photo: "",
  photoStyle: "full",
  photoPosition: {
    x: 50,
    y: 50
  },
  logo: "",
  address: "",
  fonts: {
    heading: "Playfair Display",
    body: "Open Sans"
  },
  social: {
    linkedin: "",
    facebook: "",
    instagram: "",
    youtube: "",
    twitter: "",
    tiktok: "",
    whatsapp: "",
    additionalLinks: [],
  },
  colors: {
    primary: "#000000",
    secondary: "#000000",
    accent: "#000000",
    background: "#ffffff",
  },
};

export const useBusinessCardInit = () => {
  const location = useLocation();
  const { loadFromStorage, clearStorage } = useBusinessCardStorage();
  const [data, setData] = useState<BusinessCardData>(() => {
    const isEditing = !!location.state?.editData;
    if (isEditing) {
      const savedData = loadFromStorage();
      return savedData || initialData;
    }
    clearStorage();
    return initialData;
  });

  const handleDataChange = useCallback((newData: BusinessCardData) => {
    setData(newData);
  }, []);

  const handleClearForm = useCallback(() => {
    setData(initialData);
    clearStorage();
  }, [clearStorage]);

  return {
    data,
    handleDataChange,
    handleClearForm,
  };
};