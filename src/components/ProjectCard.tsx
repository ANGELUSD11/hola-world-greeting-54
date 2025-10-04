import { ExternalLink, Gamepad2 } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ProjectCardProps {
  title: string;
  description: string;
  url: string;
  borderColor?: string;
  isInternal?: boolean;
}

export const ProjectCard = ({ title, description, url, borderColor = "border-primary", isInternal = false }: ProjectCardProps) => {
  const content = (
    <Card className={`group hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 hover:-translate-y-1 border-2 ${borderColor}`}>
      <CardHeader>
        <CardTitle className="flex items-center justify-between text-primary">
          {title}
          {isInternal ? (
            <Gamepad2 className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
          ) : (
            <ExternalLink className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
          )}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground mb-4">{description}</p>
        <span className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-accent transition-colors">
          {isInternal ? "Jugar ahora" : "Ver proyecto"} →
        </span>
      </CardContent>
    </Card>
  );

  if (isInternal) {
    return <Link to={url}>{content}</Link>;
  }

  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      {content}
    </a>
  );
};
