import { ExternalLink } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ProjectCardProps {
  title: string;
  description: string;
  url: string;
  borderColor?: string;
}

export const ProjectCard = ({ title, description, url, borderColor = "border-primary" }: ProjectCardProps) => {
  return (
    <Card className={`group hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 hover:-translate-y-1 border-2 ${borderColor}`}>
      <CardHeader>
        <CardTitle className="flex items-center justify-between text-primary">
          {title}
          <ExternalLink className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground mb-4">{description}</p>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-accent transition-colors"
        >
          Ver proyecto →
        </a>
      </CardContent>
    </Card>
  );
};
