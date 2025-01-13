import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { BusinessCardData } from "@/types/businessCard";
import { SavedCardItem } from "@/components/business-card/saved/SavedCardItem";
import { Database } from "@/integrations/supabase/types";
import { PageLayout } from "@/components/layout/PageLayout";

type BusinessCard = Database['public']['Tables']['business_cards']['Row'];

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

    const transformedData: SavedCard[] = (data as BusinessCard[]).map(card => ({
      id: card.id,
      client_name: card.client_name,
      card_name: card.card_name,
      embed_code: card.embed_code,
      preview_image: card.preview_image || '',
      card_data: {
        ...card.card_data as BusinessCardData,
        id: card.id // Ensure the ID is set in card_data
      }
    }));

    setCards(transformedData);
  };

  const copyEmbedCode = async (embedCode: string) => {
    await navigator.clipboard.writeText(embedCode);
    toast.success("Embed code copied to clipboard!");
  };

  const handleEdit = (cardData: BusinessCardData) => {
    const dataWithId = {
      ...cardData,
      id: cardData.id // Ensure ID is preserved
    };
    console.log("Navigating to edit with data:", dataWithId); // Debug log
    navigate('/', { state: { editData: dataWithId } });
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
    <PageLayout>
      <div className="space-y-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-[#00674f] mb-2">Saved Cards</h1>
          <p className="text-muted-foreground">View and manage your saved business cards</p>
        </div>

        <div className="flex justify-end mb-8">
          <Button 
            onClick={() => navigate('/', { state: { newCard: true } })} 
            variant="outline"
          >
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
              cardData={{
                ...card.card_data,
                id: card.id // Ensure ID is passed to the item
              }}
              onCopyEmbed={copyEmbedCode}
              onEdit={handleEdit}
              onDelete={() => handleDelete(card.id)}
            />
          ))}
        </div>
      </div>
    </PageLayout>
  );
};

export default SavedCards;