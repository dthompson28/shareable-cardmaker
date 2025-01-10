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
      title: 'Business Card',
      text: 'Check out my business card!',
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
    <div className="flex gap-4 mt-6">
      <Button 
        className="flex-1 font-opensans"
        style={{ 
          backgroundColor: data.colors.primary,
          color: "#FFFFFF"
        }}
        onClick={handleShare}
      >
        <Share2 className="w-4 h-4 mr-2" />
        Share
      </Button>
      <Button
        className="flex-1 font-opensans transition-colors duration-200"
        variant="outline"
        style={{ 
          borderColor: data.colors.accent,
          borderWidth: '2px',
          color: data.colors.accent,
          backgroundColor: data.colors.background,
        }}
        onClick={handleSaveContact}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = data.colors.secondary;
          e.currentTarget.style.color = data.colors.background;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = data.colors.background;
          e.currentTarget.style.color = data.colors.accent;
        }}
      >
        <Download className="w-4 h-4 mr-2" />
        Save Contact
      </Button>
    </div>
  );
};