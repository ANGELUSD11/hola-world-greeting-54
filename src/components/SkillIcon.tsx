interface SkillIconProps {
  src: string;
  alt: string;
}

export const SkillIcon = ({ src, alt }: SkillIconProps) => {
  return (
    <div className="p-4 rounded-lg bg-card/50 backdrop-blur-sm border border-border hover:border-primary transition-all duration-300 hover:scale-110">
      <img src={src} alt={alt} className="w-12 h-12 md:w-16 md:h-16 object-contain" />
    </div>
  );
};
