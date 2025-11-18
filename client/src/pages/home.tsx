import { useState } from "react";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ProjectCard from "@/components/ProjectCard";
import ProjectModal from "@/components/ProjectModal";
import SkillCard from "@/components/SkillCard";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import {
  Code2,
  Database,
  Server,
  Cloud,
  GitBranch,
  Smartphone,
  Layout,
  Terminal,
} from "lucide-react";

import ecommerceImg from "@assets/generated_images/E-commerce_project_mockup_6246c571.png";
import socialImg from "@assets/generated_images/Social_media_dashboard_mockup_93f48715.png";
import taskImg from "@assets/generated_images/Task_management_app_mockup_e291fe55.png";
import profileImg from "@assets/generated_images/Professional_developer_headshot_b4f0f43e.png";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-featured online shopping platform with cart, payments, and admin dashboard",
    fullDescription: "A comprehensive e-commerce solution built with React and Node.js, featuring real-time inventory management, secure payment processing with Stripe, and an intuitive admin dashboard for managing products, orders, and customers. The platform includes advanced features like abandoned cart recovery, product recommendations, and detailed analytics.",
    image: ecommerceImg,
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "Redis", "AWS"],
    features: [
      "Real-time inventory management and stock tracking",
      "Secure payment processing with Stripe integration",
      "Admin dashboard with analytics and reporting",
      "Customer authentication and profile management",
      "Shopping cart with persistent storage",
      "Order tracking and notification system",
    ],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    title: "Social Media Dashboard",
    description: "Analytics dashboard for tracking social media metrics across multiple platforms",
    fullDescription: "A comprehensive social media analytics platform that aggregates data from multiple social networks into a unified dashboard. Built with modern web technologies, it provides real-time insights, engagement metrics, and customizable reports to help businesses optimize their social media strategy.",
    image: socialImg,
    technologies: ["React", "TypeScript", "GraphQL", "PostgreSQL", "Docker"],
    features: [
      "Multi-platform social media integration",
      "Real-time analytics and engagement metrics",
      "Customizable dashboard with drag-and-drop widgets",
      "Automated reporting and scheduled exports",
      "Team collaboration features",
      "Advanced data visualization with charts",
    ],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    title: "Task Management App",
    description: "Collaborative project management tool with kanban boards and team features",
    fullDescription: "A powerful project management application designed for agile teams. Features kanban boards, sprint planning, task dependencies, and real-time collaboration. Built with performance in mind, it handles large projects with ease while maintaining a smooth user experience.",
    image: taskImg,
    technologies: ["Next.js", "Tailwind CSS", "Prisma", "WebSocket", "Vercel"],
    features: [
      "Kanban boards with drag-and-drop functionality",
      "Real-time collaboration with WebSocket",
      "Sprint planning and backlog management",
      "Task dependencies and subtasks",
      "Team member assignment and notifications",
      "Time tracking and productivity analytics",
    ],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
];

const skills = [
  { name: "React", icon: Code2, proficiency: 5 },
  { name: "Node.js", icon: Server, proficiency: 5 },
  { name: "TypeScript", icon: Code2, proficiency: 4 },
  { name: "MongoDB", icon: Database, proficiency: 4 },
  { name: "PostgreSQL", icon: Database, proficiency: 4 },
  { name: "AWS", icon: Cloud, proficiency: 4 },
  { name: "Docker", icon: Terminal, proficiency: 4 },
  { name: "Git", icon: GitBranch, proficiency: 5 },
];

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProjectClick = (project: typeof projects[0]) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen">
      <Navigation />

      <main>
        <section id="home">
          <HeroSection />
        </section>

        <section id="projects" className="py-20 container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-center mb-4">Featured Projects</h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Here are some of my recent projects showcasing my skills in full-stack development
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <ProjectCard
                    {...project}
                    onClick={() => handleProjectClick(project)}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        <section id="skills" className="py-20 bg-card/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-center mb-4">Skills & Technologies</h2>
              <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                My technical expertise spans across modern web technologies and cloud platforms
              </p>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                  >
                    <SkillCard {...skill} />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <section id="about" className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>

              <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="flex justify-center"
                >
                  <div className="relative">
                    <div className="w-64 h-64 md:w-80 md:h-80 rounded-lg overflow-hidden">
                      <img
                        src={profileImg}
                        alt="Alex Morgan"
                        className="w-full h-full object-cover"
                        data-testid="img-profile"
                      />
                    </div>
                    <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/20 rounded-lg -z-10" />
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="space-y-4"
                >
                  <h3 className="text-2xl font-semibold">
                    Full Stack Developer with a passion for building amazing web experiences
                  </h3>
                  <p className="text-muted-foreground">
                    With over 5 years of experience in web development, I specialize in creating
                    scalable, performant applications using modern technologies. My expertise spans
                    both frontend and backend development, with a focus on React, Node.js, and
                    cloud platforms.
                  </p>
                  <p className="text-muted-foreground">
                    I'm passionate about writing clean, maintainable code and building products that
                    solve real-world problems. When I'm not coding, you can find me contributing to
                    open-source projects, writing technical articles, or exploring new technologies.
                  </p>

                  <div className="pt-4">
                    <h4 className="font-semibold mb-3">Experience Highlights</h4>
                    <div className="space-y-3">
                      <Card className="p-4">
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                          <div>
                            <h5 className="font-medium">Senior Full Stack Developer</h5>
                            <p className="text-sm text-muted-foreground">Tech Corp • 2021 - Present</p>
                          </div>
                        </div>
                      </Card>
                      <Card className="p-4">
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                          <div>
                            <h5 className="font-medium">Full Stack Developer</h5>
                            <p className="text-sm text-muted-foreground">StartupXYZ • 2019 - 2021</p>
                          </div>
                        </div>
                      </Card>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="contact" className="py-20 bg-card/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-center mb-4">Get In Touch</h2>
              <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Have a project in mind? Let's work together to bring your ideas to life
              </p>

              <div className="max-w-2xl mx-auto">
                <ContactForm />
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />

      <ProjectModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        project={selectedProject}
      />
    </div>
  );
}
