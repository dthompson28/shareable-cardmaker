import { useBusinessCardState } from "./useBusinessCardState";
import { useBusinessCardInit } from "./useBusinessCardInit";

export const useBusinessCard = () => {
  const { step, handleEdit, handleBack, handleNext } = useBusinessCardState();
  const { data, handleDataChange, handleClearForm } = useBusinessCardInit();

  return {
    step,
    data,
    handleEdit,
    handleBack,
    handleDataChange,
    handleClearForm,
    handleNext: () => handleNext(data),
  };
};