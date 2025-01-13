import { BusinessCardData } from "@/types/businessCard";

export const generateGroupStyles = (data: BusinessCardData) => `
  .bc-link-groups {
    margin: 2rem 0;
  }

  .bc-link-group {
    margin-bottom: 1.5rem;
  }

  .bc-group-title {
    font-family: var(--heading-font);
    font-size: 1.25rem;
    font-weight: 600;
    color: var(--secondary-color);
    margin-bottom: 1rem;
  }

  .bc-group-links {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  .bc-additional-link {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem;
    border-radius: 0.375rem;
    text-decoration: none;
    color: var(--accent-color);
    font-family: var(--body-font);
    transition: background-color 0.2s;
  }

  .bc-additional-link:hover {
    background-color: color-mix(in srgb, var(--accent-color) 10%, transparent);
  }

  .bc-additional-link svg {
    width: 1.25rem;
    height: 1.25rem;
    flex-shrink: 0;
  }
`;