import { BusinessCardData } from "./BusinessCardForm";
import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Linkedin, Youtube, Phone, Mail, Globe, Download, Share2 } from "lucide-react";
import { toast } from "sonner";

interface Props {
  data: BusinessCardData;
  onBack: () => void;
}

export const BusinessCard = ({ data, onBack }: Props) => {
  const generateVCard = () => {
    const vcard = `BEGIN:VCARD
VERSION:3.0
FN:${data.name}
ORG:${data.company}
TEL:${data.phone}
EMAIL:${data.email}
URL:${data.website}
ADR:;;${data.address};;;;
PHOTO;VALUE=URL:${data.photo}
X-SOCIALPROFILE;TYPE=linkedin:${data.social.linkedin}
X-SOCIALPROFILE;TYPE=facebook:${data.social.facebook}
X-SOCIALPROFILE;TYPE=instagram:${data.social.instagram}
X-SOCIALPROFILE;TYPE=youtube:${data.social.youtube}
END:VCARD`;

    const blob = new Blob([vcard], { type: "text/vcard" });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", `${data.name.replace(/\s+/g, "_")}_contact.vcf`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  };

  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      toast.success("Link copied to clipboard!");
    } catch (err) {
      toast.error("Failed to copy link");
    }
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      <div 
        className="max-w-md mx-auto rounded-xl overflow-hidden shadow-xl"
        style={{ backgroundColor: data.colors.background }}
      >
        {data.photo && (
          <div className="w-full h-48 bg-cover bg-center" style={{ backgroundImage: `url(${data.photo})` }} />
        )}
        
        <div className="p-6 space-y-6">
          <div className="text-center">
            <h1 className="text-2xl font-bold" style={{ color: data.colors.primary }}>{data.name}</h1>
            {data.company && (
              <p className="text-lg" style={{ color: data.colors.secondary }}>{data.company}</p>
            )}
          </div>

          <div className="space-y-3">
            {data.phone && (
              <a href={`tel:${data.phone}`} className="flex items-center gap-2 hover:opacity-75">
                <Phone className="w-5 h-5" style={{ color: data.colors.primary }} />
                <span>{data.phone}</span>
              </a>
            )}
            
            {data.email && (
              <a href={`mailto:${data.email}`} className="flex items-center gap-2 hover:opacity-75">
                <Mail className="w-5 h-5" style={{ color: data.colors.primary }} />
                <span>{data.email}</span>
              </a>
            )}
            
            {data.website && (
              <a href={data.website} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:opacity-75">
                <Globe className="w-5 h-5" style={{ color: data.colors.primary }} />
                <span>{data.website}</span>
              </a>
            )}
          </div>

          <div className="flex justify-center gap-4">
            {data.social.linkedin && (
              <a href={data.social.linkedin} target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-6 h-6 hover:opacity-75" style={{ color: data.colors.primary }} />
              </a>
            )}
            {data.social.facebook && (
              <a href={data.social.facebook} target="_blank" rel="noopener noreferrer">
                <Facebook className="w-6 h-6 hover:opacity-75" style={{ color: data.colors.primary }} />
              </a>
            )}
            {data.social.instagram && (
              <a href={data.social.instagram} target="_blank" rel="noopener noreferrer">
                <Instagram className="w-6 h-6 hover:opacity-75" style={{ color: data.colors.primary }} />
              </a>
            )}
            {data.social.youtube && (
              <a href={data.social.youtube} target="_blank" rel="noopener noreferrer">
                <Youtube className="w-6 h-6 hover:opacity-75" style={{ color: data.colors.primary }} />
              </a>
            )}
          </div>
        </div>
      </div>

      <div className="flex gap-4 justify-center">
        <Button onClick={onBack} variant="outline">Back</Button>
        <Button onClick={generateVCard}>
          <Download className="w-4 h-4 mr-2" />
          Save Contact
        </Button>
        <Button onClick={handleShare}>
          <Share2 className="w-4 h-4 mr-2" />
          Share
        </Button>
      </div>
    </div>
  );
};