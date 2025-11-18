import ProjectModal from "../ProjectModal";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import projectImage from "@assets/generated_images/E-commerce_project_mockup_6246c571.png";

export default function ProjectModalExample() {
  const [isOpen, setIsOpen] = useState(false);

  const mockProject = {
    title: "E-Commerce Platform",
    description: "A full-featured online shopping platform",
    fullDescription: "A comprehensive e-commerce solution built with React and Node.js, featuring real-time inventory management, secure payment processing, and an intuitive admin dashboard for managing products, orders, and customers.",
    image: projectImage,
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "Redis", "AWS"],
    features: [
      "Real-time inventory management and stock tracking",
      "Secure payment processing with Stripe integration",
      "Admin dashboard with analytics and reporting",
      "Customer authentication and profile management",
      "Shopping cart with persistent storage",
      "Order tracking and notification system"
    ],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com"
  };

  return (
    <div className="p-8">
      <Button onClick={() => setIsOpen(true)} data-testid="button-open-modal">
        Open Project Modal
      </Button>
      <ProjectModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        project={mockProject}
      />
    </div>
  );
}
