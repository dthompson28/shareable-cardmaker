import { BusinessCardData } from "@/components/BusinessCardForm";

export const generateHeaderStyles = (data: BusinessCardData) => `
  .header {
    position: relative;
    width: 100%;
    height: 300px;
    background-image: url('${data.photo}');
    background-size: cover;
    background-position: ${data.photoPosition.x}% ${data.photoPosition.y}%;
  }

  .header-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.6), transparent);
  }

  .header-logo {
    position: absolute;
    top: 1rem;
    right: 1rem;
    width: 5rem;
    height: 5rem;
    object-fit: contain;
  }

  .header-text {
    position: absolute;
    bottom: 1rem;
    left: 1rem;
    color: white;
  }

  .header-text h1 {
    font-size: 2rem;
    margin: 0;
    font-weight: 700;
    font-family: 'Playfair Display', serif;
  }

  .header-text p {
    margin: 0.25rem 0;
    font-size: 1.25rem;
    font-family: 'Playfair Display', serif;
  }

  @media (max-width: 640px) {
    .header {
      height: 250px;
    }
  }
`;