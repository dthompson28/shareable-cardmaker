import { Button } from "@/components/ui/button";
import { Download, Share2 } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { downloadVCard } from "@/utils/vCardGenerator";
import { BusinessCardData } from "@/components/BusinessCardForm";

interface CardActionsProps {
  data: BusinessCardData;
}

export const CardActions = ({ data }: CardActionsProps) => {
  const { toast } = useToast();

  const handleShare = async () => {
    const shareData = {
      title: data.name,
      text: `Contact information for ${data.name}`,
      url: window.location.href
    };

    try {
      if (navigator.share && navigator.canShare(shareData)) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(window.location.href);
        toast({
          title: "Link copied!",
          description: "The URL has been copied to your clipboard.",
          duration: 3000,
        });
      }
    } catch (error) {
      console.error('Error sharing:', error);
      toast({
        title: "Sharing failed",
        description: "There was an error while trying to share.",
        variant: "destructive",
        duration: 3000,
      });
    }
  };

  const handleSaveContact = () => {
    try {
      downloadVCard(data);
      toast({
        title: "Contact saved!",
        description: "The contact file has been downloaded.",
        duration: 3000,
      });
    } catch (error) {
      console.error('Error saving contact:', error);
      toast({
        title: "Save failed",
        description: "There was an error while trying to save the contact.",
        variant: "destructive",
        duration: 3000,
      });
    }
  };

  return (
    <div className="flex gap-4">
      <Button 
        className="flex-1 bg-[#326872] hover:opacity-90 transition-opacity"
        onClick={handleShare}
      >
        <Share2 className="w-5 h-5 mr-2" />
        Share
      </Button>
      <Button
        className="flex-1 bg-[#be5103] hover:opacity-90 transition-opacity"
        onClick={handleSaveContact}
      >
        <Download className="w-5 h-5 mr-2" />
        Save Contact
      </Button>
    </div>
  );
};