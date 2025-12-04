"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, X } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import Image from "next/image";

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    title: string;
    description: string;
    fullDescription: string;
    image: string;
    technologies: string[];
    features: string[];
    liveUrl?: string;
    githubUrl?: string;
  } | null;
}

export default function ProjectModal({ isOpen, onClose, project }: ProjectModalProps) {
  if (!project) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[90vh] p-0" data-testid="modal-project-details">
        <DialogHeader className="p-6 pb-4">
          <DialogTitle className="text-2xl font-bold" data-testid="text-modal-title">{project.title}</DialogTitle>
        </DialogHeader>
        <ScrollArea className="max-h-[calc(90vh-8rem)]">
          <div className="px-6 pb-6">
            <div className="relative aspect-video overflow-hidden rounded-lg mb-6">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Overview</h3>
              <p className="text-muted-foreground">{project.fullDescription}</p>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3">Key Features</h3>
              <ul className="space-y-2">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2" data-testid={`text-feature-${index}`}>
                    <span className="text-primary mt-1">•</span>
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <Badge key={tech} variant="secondary" data-testid={`badge-modal-tech-${tech.toLowerCase()}`}>
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="flex gap-3">
              {project.liveUrl && (
                <Button
                  onClick={() => console.log("Open live demo:", project.liveUrl)}
                  data-testid="button-modal-live-demo"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Live Demo
                </Button>
              )}
              {project.githubUrl && (
                <Button
                  variant="outline"
                  onClick={() => console.log("Open GitHub:", project.githubUrl)}
                  data-testid="button-modal-github"
                >
                  <Github className="w-4 h-4 mr-2" />
                  View Source
                </Button>
              )}
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
