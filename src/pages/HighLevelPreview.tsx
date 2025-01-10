import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useEffect, useRef } from "react";

const htmlCode = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
  <title>Dani Thompson - Digital Business Card</title>
  <meta name="description" content="Digital Business Card for Dani Thompson">
  <meta name="author" content="Dani Thompson">
  <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;600&family=Playfair+Display:wght@400;500;600;700&display=swap" rel="stylesheet">
  <!-- Font Awesome for icons -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
  <link rel="stylesheet" href="styles.css"> <!-- Optional external CSS -->
</head>
<body>
  <div class="business-card-wrapper">
    <div class="business-card">
      <div class="header">
        <div class="header-overlay"></div>
        <img src="https://storage.googleapis.com/msgsndr/MZWdQlgITZo9mm1376Dv/media/674922593447a59599123157.png" alt="Logo" class="header-logo" />
        <div class="header-text">
          <h1>Dani Thompson</h1>
          <p>Marketer</p>
          <p>Thompson Limited</p>
        </div>
      </div>
      <div class="contact-info">
        <a href="tel:440-503-8011"><i class="fas fa-phone"></i> 440-503-8011</a>
        <a href="mailto:dani@danithompsonltd.com"><i class="fas fa-envelope"></i> dani@danithompsonltd.com</a>
        <a href="https://danithompsonltd.com/schedule-a-call-danithompson" target="_blank">
          <i class="fas fa-link"></i> danithompsonltd.com
        </a>
      </div>
      <div class="social-links">
        <a href="https://www.linkedin.com/in/danielle-thompson-cleveland/" target="_blank">
          <i class="fab fa-linkedin"></i>
        </a>
        <a href="https://www.facebook.com/danithomp2014" target="_blank">
          <i class="fab fa-facebook"></i>
        </a>
        <a href="https://www.instagram.com/danithompsoncle/" target="_blank">
          <i class="fab fa-instagram"></i>
        </a>
      </div>
      <a href="https://danithompsonltd.com/schedule-a-call-danithompson" target="_blank" class="additional-link">
        <i class="fas fa-arrow-right"></i> Schedule a Call with Me!
      </a>
      <div class="action-buttons">
        <button onclick="shareCard()" class="action-button share-button">
          <i class="fas fa-share-alt"></i> Share
        </button>
        <button onclick="saveContact()" class="action-button save-button">
          <i class="fas fa-download"></i> Save Contact
        </button>
      </div>
    </div>
  </div>
  <script>
    function saveContact() {
      const vcard = \`BEGIN:VCARD
VERSION:3.0
FN:Dani Thompson
TITLE:Marketer
ORG:Thompson Limited
EMAIL;TYPE=WORK:dani@danithompsonltd.com
TEL;TYPE=WORK,VOICE:440-503-8011
URL:https://danithompsonltd.com/schedule-a-call-danithompson
X-SOCIALPROFILE;TYPE=linkedin:https://www.linkedin.com/in/danielle-thompson-cleveland/
X-SOCIALPROFILE;TYPE=facebook:https://www.facebook.com/danithomp2014
X-SOCIALPROFILE;TYPE=instagram:https://www.instagram.com/danithompsoncle/
END:VCARD\`;
      const blob = new Blob([vcard], { type: 'text/vcard' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'Dani_Thompson_Contact.vcf';
      link.click();
      URL.revokeObjectURL(url);
    }

    function shareCard() {
      if (navigator.share) {
        navigator.share({
          title: 'Dani Thompson - Digital Business Card',
          text: 'Check out my digital business card!',
          url: window.location.href
        });
      } else {
        alert('Sharing is not supported on this device.');
      }
    }
  </script>
</body>
</html>`;

const cssCode = `.business-card-wrapper {
  --primary: #00674f;
  --secondary: #326872;
  --accent: #be5103;
  --background: #cecabe;
}

.business-card-wrapper * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.business-card-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 100vw;
  padding: 1rem;
  background-color: var(--background);
}

.business-card {
  width: 100%;
  max-width: 22rem;
  background-color: var(--background);
  border-radius: 0.75rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.business-card .header {
  position: relative;
  height: 250px;
  background-image: url('https://storage.googleapis.com/msgsndr/MZWdQlgITZo9mm1376Dv/media/67492bc96a2894272f8c25d7.jpeg');
  background-size: cover;
  background-position: 65% 28%;
}

.business-card .header-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.6), transparent);
}

.business-card .header-logo {
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 4rem;
  height: 4rem;
  object-fit: contain;
}

.business-card .header-text {
  position: absolute;
  bottom: 1rem;
  left: 1rem;
  color: white;
}

.business-card .header-text h1 {
  font-size: 1.75rem;
  font-weight: 700;
  font-family: 'Playfair Display', serif;
}

.business-card .header-text p {
  font-size: 1rem;
  font-weight: 500;
}

.business-card .contact-info a {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: var(--primary);
  text-decoration: none;
  font-weight: 400;
  margin: 0.5rem 0;
}

.business-card .contact-info a:hover {
  color: var(--secondary);
}

.business-card .social-links a {
  font-size: 1.5rem;
  color: var(--primary);
  transition: transform 0.2s ease, color 0.2s ease;
  margin: 0.5rem;
}

.business-card .social-links a:hover {
  color: var(--secondary);
  transform: scale(1.2);
}

.business-card .action-buttons button {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1rem;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  font-weight: 500;
  gap: 0.5rem;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.business-card .action-buttons .save-button {
  background-color: var(--accent);
  color: white;
}

.business-card .action-buttons .save-button:hover {
  background-color: var(--primary);
}

.business-card .action-buttons .share-button {
  background-color: var(--primary);
  color: white;
}

.business-card .action-buttons .share-button:hover {
  background-color: var(--secondary);
}

.business-card .additional-link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--primary);
  text-decoration: none;
  font-weight: 500;
  margin: 1rem 0;
}

.business-card .additional-link:hover {
  color: var(--secondary);
}`;

const HighLevelPreview = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    if (iframeRef.current) {
      const iframeDoc = iframeRef.current.contentDocument;
      if (iframeDoc) {
        iframeDoc.open();
        iframeDoc.write(`
          ${htmlCode}
          <style>${cssCode}</style>
        `);
        iframeDoc.close();
      }
    }
  }, []);

  return (
    <div className="container max-w-6xl mx-auto p-4 py-8">
      <h1 className="text-3xl font-bold mb-8">HighLevel Code Preview</h1>

      <Tabs defaultValue="html" className="space-y-4">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="html">HTML</TabsTrigger>
          <TabsTrigger value="css">CSS</TabsTrigger>
          <TabsTrigger value="output">Output</TabsTrigger>
        </TabsList>

        <TabsContent value="html" className="space-y-4">
          <div className="relative">
            <pre className="bg-muted p-4 rounded-md overflow-x-auto whitespace-pre-wrap">
              <code className="text-sm">{htmlCode}</code>
            </pre>
            <Button
              onClick={() => {
                navigator.clipboard.writeText(htmlCode);
                toast.success("HTML code copied to clipboard!");
              }}
              className="absolute top-4 right-4"
              variant="secondary"
            >
              Copy HTML
            </Button>
          </div>
        </TabsContent>

        <TabsContent value="css" className="space-y-4">
          <div className="relative">
            <pre className="bg-muted p-4 rounded-md overflow-x-auto whitespace-pre-wrap">
              <code className="text-sm">{cssCode}</code>
            </pre>
            <Button
              onClick={() => {
                navigator.clipboard.writeText(cssCode);
                toast.success("CSS code copied to clipboard!");
              }}
              className="absolute top-4 right-4"
              variant="secondary"
            >
              Copy CSS
            </Button>
          </div>
        </TabsContent>

        <TabsContent value="output" className="space-y-4">
          <div className="relative bg-white rounded-md shadow-md">
            <iframe
              ref={iframeRef}
              className="w-full min-h-[600px] rounded-md"
              title="Business Card Preview"
            />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default HighLevelPreview;
