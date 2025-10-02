import { LucideIcon } from "lucide-react";

interface SocialLinkProps {
  href: string;
  icon: LucideIcon;
  label: string;
}

export const SocialLink = ({ href, icon: Icon, label }: SocialLinkProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col items-center gap-2 p-4 rounded-lg border border-border bg-card/50 backdrop-blur-sm hover:bg-card hover:border-primary transition-all duration-300 hover:scale-105"
    >
      <Icon className="w-8 h-8 text-primary group-hover:text-accent transition-colors" />
      <span className="text-sm font-medium text-foreground">{label}</span>
    </a>
  );
};
