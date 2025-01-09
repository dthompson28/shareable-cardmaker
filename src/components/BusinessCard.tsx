import { BusinessCardData } from "./BusinessCardForm";
import { Button } from "@/components/ui/button";
import { Download, Share2 } from "lucide-react";
import { toast } from "sonner";
import { CardPreview } from "./business-card/CardPreview";

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
      <CardPreview data={data} />

      <div className="flex justify-center">
        <Button onClick={onBack} variant="outline">Back</Button>
      </div>
    </div>
  );
};