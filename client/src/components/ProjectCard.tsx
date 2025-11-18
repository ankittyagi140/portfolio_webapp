import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  onClick: () => void;
}

export default function ProjectCard({
  title,
  description,
  image,
  technologies,
  liveUrl,
  githubUrl,
  onClick,
}: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      data-testid={`card-project-${title.toLowerCase().replace(/\s+/g, "-")}`}
    >
      <Card className="overflow-hidden cursor-pointer group hover-elevate active-elevate-2" onClick={onClick}>
        <div className="relative aspect-video overflow-hidden bg-muted">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6 gap-3">
            {liveUrl && (
              <Button
                size="sm"
                variant="outline"
                className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20"
                onClick={(e) => {
                  e.stopPropagation();
                  console.log("Open live demo:", liveUrl);
                }}
                data-testid={`button-live-demo-${title.toLowerCase().replace(/\s+/g, "-")}`}
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Live Demo
              </Button>
            )}
            {githubUrl && (
              <Button
                size="sm"
                variant="outline"
                className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20"
                onClick={(e) => {
                  e.stopPropagation();
                  console.log("Open GitHub:", githubUrl);
                }}
                data-testid={`button-github-${title.toLowerCase().replace(/\s+/g, "-")}`}
              >
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </Button>
            )}
          </div>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2" data-testid={`text-project-title-${title.toLowerCase().replace(/\s+/g, "-")}`}>{title}</h3>
          <p className="text-muted-foreground mb-4 line-clamp-2">{description}</p>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <Badge key={tech} variant="secondary" className="text-xs" data-testid={`badge-tech-${tech.toLowerCase()}`}>
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
