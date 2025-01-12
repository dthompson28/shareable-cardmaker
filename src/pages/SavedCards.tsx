import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { BusinessCardData } from "@/components/BusinessCardForm";

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

    setCards(data || []);
  };

  const copyEmbedCode = async (embedCode: string) => {
    await navigator.clipboard.writeText(embedCode);
    toast.success("Embed code copied to clipboard");
  };

  const handleEdit = (cardData: BusinessCardData) => {
    navigate('/', { state: { editData: cardData } });
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
          <div key={card.id} className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-start gap-6">
              {card.preview_image && (
                <img 
                  src={card.preview_image} 
                  alt={`${card.card_name} preview`}
                  className="w-48 h-48 object-cover rounded-lg"
                />
              )}
              <div className="flex-1 space-y-4">
                <div>
                  <h3 className="text-lg font-medium">{card.client_name}</h3>
                  <p className="text-gray-600">{card.card_name}</p>
                </div>
                <div className="flex gap-4">
                  <Button 
                    onClick={() => copyEmbedCode(card.embed_code)}
                    variant="secondary"
                  >
                    Copy Embed Code
                  </Button>
                  <Button
                    onClick={() => handleEdit(card.card_data)}
                    variant="outline"
                  >
                    Edit Card
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SavedCards;