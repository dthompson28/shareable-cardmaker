import { useCallback } from "react";
import { BusinessCardData } from "@/types/businessCard";
import { STORAGE_KEY } from "@/constants/businessCard";

export const useBusinessCardStorage = () => {
  const saveToStorage = useCallback((data: BusinessCardData) => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
      return true;
    } catch (error) {
      console.error('Error saving data to localStorage:', error);
      return false;
    }
  }, []);

  const loadFromStorage = useCallback(() => {
    try {
      const savedData = localStorage.getItem(STORAGE_KEY);
      return savedData ? JSON.parse(savedData) : null;
    } catch (error) {
      console.error('Error loading data from localStorage:', error);
      return null;
    }
  }, []);

  const clearStorage = useCallback(() => {
    localStorage.removeItem(STORAGE_KEY);
  }, []);

  return {
    saveToStorage,
    loadFromStorage,
    clearStorage,
  };
};