import { BusinessCardData } from "@/components/BusinessCardForm";

export const UtilityStyles = ({ data }: { data: BusinessCardData }) => `
  .section-highlight:hover {
    outline: 2px solid var(--primary);
    outline-offset: 2px;
  }
  
  .section-selected {
    outline: 3px solid var(--accent) !important;
    outline-offset: 2px;
  }
`;