import ProjectCard from "../ProjectCard";
import projectImage from "@assets/generated_images/E-commerce_project_mockup_6246c571.png";

export default function ProjectCardExample() {
  return (
    <div className="p-8 max-w-md">
      <ProjectCard
        title="E-Commerce Platform"
        description="A full-featured online shopping platform with cart, payments, and admin dashboard"
        image={projectImage}
        technologies={["React", "Node.js", "MongoDB", "Stripe"]}
        liveUrl="https://example.com"
        githubUrl="https://github.com"
        onClick={() => console.log("Project clicked")}
      />
    </div>
  );
}
