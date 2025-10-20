import { ArrowLeft, Rocket } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import spaceGameBg from "@/assets/space-game-bg.jpg";

const SpaceGame = () => {
  return (
    <div className="min-h-screen bg-background relative">
      {/* Background Image with Opacity */}
      <div 
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${spaceGameBg})` }}
      />
      {/* Header */}
      <header className="relative z-10 py-6 px-4 border-b border-border backdrop-blur-sm bg-background/80">
        <div className="container mx-auto max-w-6xl flex items-center justify-between">
          <Link to="/">
            <Button variant="outline" size="sm" className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              Volver al portafolio
            </Button>
          </Link>
          <div className="flex items-center gap-3">
            <Rocket className="w-6 h-6 text-primary" />
            <h1 className="text-2xl font-bold text-primary">Space Shooter</h1>
          </div>
        </div>
      </header>

      {/* Game Container */}
      <section className="relative z-10 py-8 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="relative aspect-video w-full rounded-lg overflow-hidden border-2 border-primary/30 bg-card/50 backdrop-blur-sm">
            <iframe
              src="https://itch.io/embed/3972224?bg_color=234446&fg_color=58fffa&link_color=7bfffd&border_color=276ea5"
              allowFullScreen
              className="absolute inset-0 w-full h-full border-0"
              title="ADVAD (DEMO) by ANGELUSD11"
            >
              <a href="https://angelus11.itch.io/advad-demo">ADVAD (DEMO) by ANGELUSD11</a>
            </iframe>
          </div>
          <p className="text-center text-muted-foreground mt-4">
            Usa las flechas para moverte y barra espaciadora para disparar
          </p>
        </div>
      </section>
    </div>
  );
};

export default SpaceGame;
