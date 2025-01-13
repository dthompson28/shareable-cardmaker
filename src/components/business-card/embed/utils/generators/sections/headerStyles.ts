import { BusinessCardData } from "@/types/businessCard";

export const generateHeaderStyles = (data: BusinessCardData) => `
  .header {
    height: 192px;
    width: 100%;
    background-color: ${data.colors.secondary};
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }

  ${data.logo ? `
  .logo {
    position: absolute;
    top: 24px;
    right: 24px;
    width: 64px;
    height: 64px;
    background-image: url('${data.logo}');
    background-size: contain;
    background-repeat: no-repeat;
  }
  ` : ''}

  .contact-photo {
    width: 192px;
    height: 192px;
    border-radius: 50%;
    border: 4px solid white;
    background-image: url('${data.photo}');
    background-size: cover;
    background-position: ${data.photoPosition.x}% ${data.photoPosition.y}%;
    position: absolute;
    bottom: -96px;
    left: 24px;
    z-index: 10;
  }
`;
