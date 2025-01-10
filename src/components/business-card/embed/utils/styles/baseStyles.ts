import { BusinessCardData } from "@/components/BusinessCardForm";

export const generateBaseStyles = (data: BusinessCardData) => `
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

  .business-card {
    font-family: 'Inter', system-ui, -apple-system, sans-serif;
    max-width: 600px;
    margin: 0 auto;
    padding: 2rem;
  }

  .card {
    position: relative;
    border-radius: 1rem;
    overflow: hidden;
    background-color: ${data.colors.background};
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  }

  .photo-header {
    position: relative;
    width: 100%;
    height: 300px;
    overflow: hidden;
  }

  .photo-container {
    position: relative;
    width: 100%;
    height: 100%;
  }

  .photo {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url('${data.photo}');
    background-size: cover;
    background-position: ${data.photoPosition.x}% ${data.photoPosition.y}%;
  }

  .photo::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 70%;
    background: linear-gradient(to top, rgba(0,0,0,0.7), transparent);
  }

  .header-content {
    position: absolute;
    bottom: 2rem;
    left: 2rem;
    z-index: 10;
  }

  .name {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
    color: white;
    text-shadow: 0 2px 4px rgba(0,0,0,0.1);
  }

  .job-title {
    font-size: 1.5rem;
    color: rgba(255,255,255,0.9);
    margin-bottom: 0.25rem;
  }

  .company {
    font-size: 1.25rem;
    color: rgba(255,255,255,0.9);
  }
`;