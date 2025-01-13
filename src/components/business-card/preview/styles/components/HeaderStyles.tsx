import { BusinessCardData } from "@/types/businessCard";

export const HeaderStyles = ({ data }: { data: BusinessCardData }) => `
  .header {
    position: relative;
    width: 100%;
    height: 160px;
    background-size: cover;
    background-position: center;
  }
  
  .header-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.6), transparent);
  }
  
  .header-content {
    position: relative;
    height: 100%;
    padding: 1rem;
  }
  
  .header-logo {
    position: absolute;
    top: 1rem;
    right: 1rem;
    width: 4rem;
    height: 4rem;
    object-fit: contain;
  }
  
  .header-text {
    position: absolute;
    bottom: 1rem;
    left: 1rem;
    color: white;
  }
  
  .header-text h1 {
    font-size: 1.75rem;
    margin-bottom: 0.25rem;
    font-weight: 700;
    font-family: 'Playfair Display', serif;
  }
  
  .header-text p {
    font-size: 1rem;
    margin: 0.125rem 0;
    opacity: 0.9;
    font-family: 'Playfair Display', serif;
  }
`;