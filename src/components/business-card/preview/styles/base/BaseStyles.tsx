import { BusinessCardData } from "@/components/BusinessCardForm";

export const BaseStyles = ({ data }: { data: BusinessCardData }) => `
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    font-family: 'Open Sans', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  .business-card-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 448px;
    height: 500px;
    overflow: hidden;
  }
  
  .business-card {
    width: 100%;
    height: 100%;
    background-color: white;
    display: flex;
    flex-direction: column;
  }
`;