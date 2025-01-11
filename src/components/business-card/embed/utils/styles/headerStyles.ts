import { BusinessCardData } from "@/components/BusinessCardForm";

export const generateHeaderStyles = (data: BusinessCardData) => `
  .bc-header {
    position: relative;
    width: 100%;
    ${data.photoStyle === 'full' ? `
      height: 16rem;
      background-image: url('${data.photo}');
      background-size: cover;
      background-position: ${data.photoPosition.x}% ${data.photoPosition.y}%;
    ` : `
      height: 12rem;
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
    padding: 1.5rem;
  }

  .bc-header-photo {
    ${data.photoStyle === 'compact' ? `
      position: absolute;
      bottom: -3rem;
      left: 1.5rem;
      width: 12rem;
      height: 12rem;
      border-radius: 9999px;
      border: 4px solid white;
      background-image: url('${data.photo}');
      background-size: cover;
      background-position: ${data.photoPosition.x}% ${data.photoPosition.y}%;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    ` : ''}
  }

  .bc-header-logo {
    position: absolute;
    top: 1rem;
    right: 1rem;
    width: 4rem;
    height: 4rem;
    object-fit: contain;
  }

  .bc-header-text {
    position: absolute;
    bottom: ${data.photoStyle === 'full' ? '1.5rem' : '1rem'};
    left: ${data.photoStyle === 'full' ? '1.5rem' : '15rem'};
    color: white;
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
`;