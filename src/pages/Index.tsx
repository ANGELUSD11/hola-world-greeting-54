import { Github, Youtube, Twitter, Twitch, MessageCircle, Diamond, Code2, Database, Globe } from "lucide-react";
import { SocialLink } from "@/components/SocialLink";
import { ProjectCard } from "@/components/ProjectCard";
import { SkillIcon } from "@/components/SkillIcon";

const Index = () => {
  const socialLinks = [
    { href: "https://discord.gg/ne3U8RS8bA", icon: MessageCircle, label: "Discord" },
    { href: "https://github.com/ANGELUSD11", icon: Github, label: "GitHub" },
    { href: "https://www.youtube.com/@ANGELUSD11", icon: Youtube, label: "YouTube" },
    { href: "https://x.com/ANGELUSD11", icon: Twitter, label: "Twitter" },
    { href: "https://www.twitch.tv/angelusd11", icon: Twitch, label: "Twitch" },
  ];

  const projects = [
    {
      title: "💠 TDMBOT",
      description: "Bot de Discord con funcionalidades avanzadas para comunidades de Geometry Dash",
      url: "https://discord.com/oauth2/authorize?client_id=1367861699683549276",
      borderColor: "border-primary"
    },
    {
      title: "🌱 Berto AI",
      description: "Asistente de inteligencia artificial para diversas tareas",
      url: "https://berto-ai.onrender.com/",
      borderColor: "border-green-500"
    },
    {
      title: "RobTopLvlID",
      description: "Identificador de niveles de Geometry Dash usando IA",
      url: "https://huggingface.co/spaces/ANGELUSD11/RobtopLvlIdentifier1",
      borderColor: "border-blue-400"
    }
  ];

  const skills = [
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", alt: "HTML5" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", alt: "CSS3" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg", alt: "Bootstrap" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", alt: "Python" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", alt: "Git" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", alt: "MySQL" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="container mx-auto max-w-6xl relative">
          <div className="text-center space-y-8">
            <div className="inline-block animate-float">
              <Diamond className="w-24 h-24 text-primary animate-glow mx-auto" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              ANGELUS11
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Desarrollador autodidacta especializado en Python, IA y desarrollo de bots
            </p>
          </div>
        </div>
      </section>

      {/* Social Links */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {socialLinks.map((link) => (
              <SocialLink key={link.label} {...link} />
            ))}
          </div>
        </div>
      </section>

      {/* About Me */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-primary flex items-center gap-3">
              <Code2 className="w-8 h-8" />
              Sobre mí
            </h2>
            <div className="p-6 md:p-8 rounded-lg border-2 border-primary/30 bg-card/50 backdrop-blur-sm">
              <p className="text-lg text-foreground leading-relaxed">
                Mi nombre es Angel 💠, actualmente tengo 20 años. Desde los 16 aprendí a programar de manera autodidacta 
                ya que desde pequeño me apasiona la tecnología 💻. Actualmente estoy tomando una carrera técnica en análisis 
                y desarrollo de software mientras hago mis propios proyectos. Considero a Python como mi mayor skill 🐍, 
                me encanta el lenguaje y he decidido especializarme en él 🔍. Ahora ando aprendiendo distintas librerías 
                de Python 📚 como OpenCV para computer vision y herramientas para data science como scikit-learn, Pandas 
                o Numpy. También tengo un canal de YouTube de Geometry Dash donde ocasionalmente hablo de programación y 
                modding. Me gusta compartir el conocimiento y aprender cosas nuevas experimentando en mis proyectos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-16 px-4 bg-secondary/20">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 flex items-center gap-3">
            <Globe className="w-8 h-8" />
            Proyectos
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 flex items-center gap-3">
            <Database className="w-8 h-8" />
            Mis Skills
          </h2>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
            {skills.map((skill) => (
              <SkillIcon key={skill.alt} {...skill} />
            ))}
          </div>
        </div>
      </section>

      {/* YouTube Video */}
      <section className="py-16 px-4 bg-secondary/20">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 flex items-center gap-3">
            <Youtube className="w-8 h-8" />
            Último vídeo
          </h2>
          <div className="relative aspect-video rounded-lg overflow-hidden border-2 border-primary/30">
            <iframe
              src="https://www.youtube.com/embed/TKbDN0jD6-U"
              title="YouTube video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border">
        <div className="container mx-auto max-w-6xl text-center">
          <p className="text-muted-foreground">
            © 2025 ANGELUS11 • Hecho con ❤️ y código
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
