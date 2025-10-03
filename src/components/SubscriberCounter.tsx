import { useEffect, useState } from "react";
import { Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface SubscriberCounterProps {
  channelId?: string;
}

export const SubscriberCounter = ({ channelId = "UCjHYcO_GQmLWasg1UDhLq9Q" }: SubscriberCounterProps) => {
  const [subscribers, setSubscribers] = useState<string>("...");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSubscribers = async () => {
      try {
        // Usando la API gratuita de counts.live
        const response = await fetch(`https://api.countapi.xyz/get/youtube/${channelId}`);
        
        if (!response.ok) {
          // Fallback: intenta con otro método
          const fallbackResponse = await fetch(
            `https://www.youtube.com/channel/${channelId}/about`
          );
          
          if (fallbackResponse.ok) {
            const text = await fallbackResponse.text();
            // Busca el número de suscriptores en el HTML
            const match = text.match(/"subscriberCountText":\{"simpleText":"([^"]+)"/);
            if (match && match[1]) {
              setSubscribers(match[1]);
            } else {
              setSubscribers("N/A");
            }
          } else {
            setSubscribers("N/A");
          }
        } else {
          const data = await response.json();
          if (data.value) {
            setSubscribers(formatNumber(data.value));
          }
        }
      } catch (error) {
        console.error("Error fetching subscriber count:", error);
        setSubscribers("N/A");
      } finally {
        setLoading(false);
      }
    };

    fetchSubscribers();
    // Actualizar cada 10 segundos
    const interval = setInterval(fetchSubscribers, 10000);

    return () => clearInterval(interval);
  }, [channelId]);

  const formatNumber = (num: number): string => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(2) + "M";
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1) + "K";
    }
    return num.toString();
  };

  return (
    <Card className="border-2 border-primary/30 bg-card/50 backdrop-blur-sm">
      <CardContent className="p-6">
        <div className="flex items-center gap-4">
          <div className="p-3 rounded-lg bg-primary/10">
            <Users className="w-8 h-8 text-primary" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Suscriptores en YouTube</p>
            <p className="text-3xl font-bold text-primary">
              {loading ? (
                <span className="animate-pulse">...</span>
              ) : (
                subscribers
              )}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
