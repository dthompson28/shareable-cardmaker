import { BusinessCardData } from "@/components/BusinessCardForm";

export const generateHeaderStyles = (data: BusinessCardData) => `
  .bc-header {
    position: relative;
    width: 100%;
    height: 256px;
    ${data.photoStyle === 'full' ? `
      background-image: url('${data.photo}');
      background-size: cover;
      background-position: ${data.photoPosition?.x}% ${data.photoPosition?.y}%;
    ` : `
      background-color: ${data.colors.secondary};
    `}
  }

  .bc-header-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.6), transparent);
  }

  .bc-header-content {
    position: relative;
    height: 100%;
    padding: 24px;
  }

  .bc-header-text {
    position: absolute;
    bottom: 24px;
    left: 24px;
    color: white;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  }

  .bc-header-text h1 {
    font-size: 1.75rem;
    margin-bottom: 0.25rem;
    font-weight: 700;
    font-family: 'Playfair Display', serif;
  }

  .bc-header-text p {
    font-size: 1.125rem;
    margin: 0.125rem 0;
    opacity: 0.9;
    font-family: 'Playfair Display', serif;
  }

  .bc-header-logo {
    position: absolute;
    top: 24px;
    right: 24px;
    width: 64px;
    height: 64px;
    object-fit: contain;
  }
`;