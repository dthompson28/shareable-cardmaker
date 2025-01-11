import { BusinessCardData } from "@/components/BusinessCardForm";
import { generateStyles } from "./utils/styleGenerator";
import { CompactCardLayout } from "../layouts/CompactCardLayout";
import { FullCardLayout } from "../layouts/FullCardLayout";
import { getLogoPosition } from "@/utils/positionUtils";

export const generateEmbedCode = (data: BusinessCardData) => {
  const hasAdditionalLinks = data.social.additionalLinks?.length > 0;
  const hasSocialLinks = Object.values(data.social).some(value => 
    typeof value === 'string' && value.length > 0
  );

  const renderLogo = () => {
    if (!data.logo) return null;
    return (
      <div 
        className={`absolute w-16 h-16 bg-contain bg-center bg-no-repeat ${getLogoPosition(data.logoPosition)}`}
        style={{ backgroundImage: `url(${data.logo})` }}
        data-section="header"
      />
    );
  };

  const cardContent = data.photoStyle === 'compact' ? (
    <CompactCardLayout
      data={data}
      hasSocialLinks={hasSocialLinks}
      hasAdditionalLinks={hasAdditionalLinks}
      renderLogo={renderLogo}
    />
  ) : (
    <FullCardLayout
      data={data}
      hasSocialLinks={hasSocialLinks}
      hasAdditionalLinks={hasAdditionalLinks}
      renderLogo={renderLogo}
    />
  );

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
  <title>${data.name} - Digital Business Card</title>
  <meta name="description" content="Digital Business Card for ${data.name}">
  <meta name="author" content="${data.name}">
  
  <!-- Preconnect to Google Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  
  <!-- Load fonts -->
  <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;600&family=Playfair+Display:wght@400;500;600;700&display=swap" rel="stylesheet">
  
  <style>
    ${generateStyles(data)}
  </style>
</head>
<body>
  <div class="business-card-wrapper">
    ${cardContent}
  </div>

  <script>
    function saveContact() {
      const vcard = \`BEGIN:VCARD
VERSION:3.0
FN:${data.name}
${data.jobTitle ? `TITLE:${data.jobTitle}\n` : ''}
${data.company ? `ORG:${data.company}\n` : ''}
${data.email ? `EMAIL:${data.email}\n` : ''}
${data.phone ? `TEL:${data.phone}\n` : ''}
${data.website ? `URL:${data.website}\n` : ''}
END:VCARD\`;
      const blob = new Blob([vcard], { type: 'text/vcard' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = '${data.name.replace(/\s+/g, '_')}_Contact.vcf';
      link.click();
      URL.revokeObjectURL(url);
    }

    function shareCard() {
      if (navigator.share) {
        navigator.share({
          title: '${data.name} - Digital Business Card',
          text: 'Check out my digital business card!',
          url: window.location.href
        });
      } else {
        const tempInput = document.createElement('input');
        tempInput.value = window.location.href;
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand('copy');
        document.body.removeChild(tempInput);
        alert('Link copied to clipboard!');
      }
    }
  </script>
</body>
</html>`;
};

export { generateStyles };