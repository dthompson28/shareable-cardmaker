import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { BusinessCardData } from "@/components/BusinessCardForm";
import { SavedCardItem } from "@/components/business-card/saved/SavedCardItem";

interface SavedCard {
  id: string;
  client_name: string;
  card_name: string;
  embed_code: string;
  preview_image: string;
  card_data: BusinessCardData;
}

const SavedCards = () => {
  const [cards, setCards] = useState<SavedCard[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchCards();
  }, []);

  const fetchCards = async () => {
    const { data, error } = await supabase
      .from('business_cards')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      toast.error("Failed to load saved cards");
      return;
    }

    setCards(data as unknown as SavedCard[]);
  };

  const copyEmbedCode = async (embedCode: string) => {
    await navigator.clipboard.writeText(embedCode);
    toast.success("Embed code copied to clipboard");
  };

  const handleEdit = (cardData: BusinessCardData) => {
    navigate('/', { state: { editData: cardData } });
  };

  const handleDelete = async (id: string) => {
    const { error } = await supabase
      .from('business_cards')
      .delete()
      .eq('id', id);

    if (error) {
      toast.error("Failed to delete card");
      return;
    }

    setCards(cards.filter(card => card.id !== id));
    toast.success("Card deleted successfully");
  };

  return (
    <div className="container mx-auto py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-semibold text-[#00674f]">Saved Business Cards</h1>
        <Button onClick={() => navigate('/')} variant="outline">
          Create New Card
        </Button>
      </div>

      <div className="grid gap-6">
        {cards.map((card) => (
          <SavedCardItem
            key={card.id}
            id={card.id}
            clientName={card.client_name}
            cardName={card.card_name}
            previewImage={card.preview_image}
            embedCode={card.embed_code}
            cardData={card.card_data}
            onCopyEmbed={copyEmbedCode}
            onEdit={handleEdit}
            onDelete={() => handleDelete(card.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default SavedCards;