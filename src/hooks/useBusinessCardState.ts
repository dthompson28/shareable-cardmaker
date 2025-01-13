import { useState, useCallback } from "react";
import { BusinessCardData } from "@/types/businessCard";
import { toast } from "sonner";

export const useBusinessCardState = () => {
  const [step, setStep] = useState(1);

  const handleEdit = useCallback(() => {
    setStep(1);
  }, []);

  const handleBack = useCallback(() => {
    setStep(1);
  }, []);

  const handleNext = useCallback((data: BusinessCardData) => {
    try {
      localStorage.setItem('businessCard', JSON.stringify(data));
      toast.success("Form data saved successfully");
      setStep(2);
    } catch (error) {
      console.error('Error saving data to localStorage:', error);
      toast.error("Could not save form data");
    }
  }, []);

  return {
    step,
    handleEdit,
    handleBack,
    handleNext,
  };
};