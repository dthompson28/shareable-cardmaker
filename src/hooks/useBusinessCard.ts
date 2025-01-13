import { useState, useCallback } from "react";
import { BusinessCardData } from "@/types/businessCard";
import { STORAGE_KEY } from "@/constants/businessCard";
import { toast } from "sonner";
import { useLocation } from "react-router-dom";

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

export const useBusinessCard = () => {
  const location = useLocation();
  const [step, setStep] = useState(1);
  const [data, setData] = useState<BusinessCardData>(() => {
    // Only load from localStorage if we're editing (location.state?.editData exists)
    const isEditing = !!location.state?.editData;
    if (isEditing) {
      try {
        const savedData = localStorage.getItem(STORAGE_KEY);
        return savedData ? JSON.parse(savedData) : initialData;
      } catch (error) {
        console.error('Error loading data from localStorage:', error);
        return initialData;
      }
    }
    // For new cards, always start with initialData and clear localStorage
    localStorage.removeItem(STORAGE_KEY);
    return initialData;
  });

  const handleEdit = useCallback(() => {
    setStep(1);
  }, []);

  const handleBack = useCallback(() => {
    setStep(1);
  }, []);

  const handleDataChange = useCallback((newData: BusinessCardData) => {
    setData(newData);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newData));
    } catch (error) {
      console.error('Error saving data to localStorage:', error);
    }
  }, []);

  const handleClearForm = useCallback(() => {
    setData(initialData);
    localStorage.removeItem(STORAGE_KEY);
  }, []);

  const handleNext = useCallback(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
      toast.success("Form data saved successfully");
      setStep(2);
    } catch (error) {
      console.error('Error saving data to localStorage:', error);
      toast.error("Could not save form data");
    }
  }, [data]);

  return {
    step,
    data,
    handleEdit,
    handleBack,
    handleDataChange,
    handleClearForm,
    handleNext,
  };
};