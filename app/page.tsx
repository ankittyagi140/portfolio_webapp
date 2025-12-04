"use client";

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
  Terminal,
  Lock,
  Container,
  Network,
} from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: "Crypto Fear & Greed Index",
    description: "A modern web application displaying real-time Crypto Fear & Greed Index with beautiful visualizations",
    fullDescription: "A comprehensive platform that displays the Crypto Fear & Greed Index, providing real-time insights into market sentiment. Based on volatility, social media sentiments, surveys, market momentum, and more. Features live cryptocurrency prices, market cap data, BTC dominance charts, and detailed analytics to help traders and investors understand market psychology and make informed decisions.",
    image: "/generated_images/crypto-greed-index-thumbnail.png",
    technologies: ["Next.js", "TypeScript", "React", "Tailwind CSS"],
    features: [
      "Real-time Crypto Fear & Greed Index data",
      "Live cryptocurrency prices and market cap",
      "BTC Dominance and Rainbow charts",
      "Beautiful data visualizations and charts",
      "Market sentiment analysis and trends",
      "Responsive design for all devices",
    ],
    liveUrl: "https://www.cryptogreedindex.com/",
    githubUrl: "https://github.com/ankittyagi140/crypto-greed-index",
  },
  {
    title: "MCP Server Directory",
    description: "Discover and share Model Context Protocol Servers for AI applications and development",
    fullDescription: "The central hub for MCP Servers, featuring 318+ MCP Servers and 16 MCP Clients. A comprehensive platform to discover and share Model Context Protocol (MCP) Servers for AI applications, development, and integration. Built with TypeScript, it provides powerful features including server management, secure authentication, analytics dashboard, and real-time notifications. Trusted by AI developers worldwide including Anthropic, OpenAI, and Cohere.",
    image: "/generated_images/mcp-server-directory-thumbnail.png",
    technologies: ["TypeScript", "React", "Next.js"],
    features: [
      "318+ MCP Servers and 16 MCP Clients directory",
      "Server management and monitoring",
      "Secure authentication system",
      "Analytics dashboard with performance metrics",
      "Real-time notifications",
      "Customizable settings and configurations",
    ],
    liveUrl: "https://www.mcp-server-directory.com/",
    githubUrl: "https://github.com/ankittyagi140/mcp-server-directory",
  },
  {
    title: "A2A Protocol Directory",
    description: "Discover, compare, and implement the best agent-to-agent protocols for AI systems",
    fullDescription: "A comprehensive platform for discovering, comparing, and implementing Agent-to-Agent (A2A) protocols that enable AI systems to communicate and collaborate effectively. Features advanced protocol discovery, verified & trusted protocols, side-by-side comparison tools, detailed documentation, community reviews, and developer resources. Trusted by 100+ companies and researchers, with 10+ listed protocols and 1k+ active users.",
    image: "/generated_images/a2a-protocol-thumbnail.png",
    technologies: ["TypeScript", "React", "Next.js"],
    features: [
      "Advanced protocol discovery and search",
      "Verified & trusted protocol listings",
      "Side-by-side protocol comparison",
      "Comprehensive documentation and guides",
      "Community reviews and discussions",
      "Developer resources, APIs, and SDKs",
    ],
    liveUrl: "https://www.a2aprotocal.com/",
    githubUrl: "https://github.com/ankittyagi140",
  },
];

const skills = [
  { name: "Python", icon: Code2, proficiency: 5 },
  { name: "Node.js", icon: Server, proficiency: 5 },
  { name: "Express", icon: Server, proficiency: 5 },
  { name: "React", icon: Code2, proficiency: 5 },
  { name: "Next.js", icon: Code2, proficiency: 5 },
  { name: "TypeScript", icon: Code2, proficiency: 5 },
  { name: "JavaScript", icon: Code2, proficiency: 5 },
  { name: "SQL", icon: Database, proficiency: 5 },
  { name: "NoSQL", icon: Database, proficiency: 5 },
  { name: "Microservices", icon: Network, proficiency: 5 },
  { name: "Redis", icon: Database, proficiency: 4 },
  { name: "AWS", icon: Cloud, proficiency: 5 },
  { name: "Docker", icon: Container, proficiency: 5 },
  { name: "Kubernetes", icon: Container, proficiency: 4 },
  { name: "Jenkins", icon: Terminal, proficiency: 5 },
  { name: "OAuth2", icon: Lock, proficiency: 5 },
  { name: "OKTA", icon: Lock, proficiency: 5 },
  { name: "JWT", icon: Lock, proficiency: 5 },
  { name: "Splunk", icon: Terminal, proficiency: 4 },
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
                Expertise in full-stack development, cloud native architecture, and DevOps practices
              </p>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 max-w-6xl mx-auto">
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
                      <Image
                        src="/generated_images/ankit_tyagi.jpg"
                        alt="Ankit Tyagi"
                        width={320}
                        height={320}
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
                    Senior Software Engineer specializing in Cloud Native Microservices Architecture
                  </h3>
                  <p className="text-muted-foreground">
                    Senior Software Engineer with extensive experience in designing, building, and deploying scalable and 
                    performance-driven cloud native platforms using Microservices architecture.
                  </p>
                  <p className="text-muted-foreground">
                    <strong>Backend Expertise:</strong> Python, Node.js, Express, SQL, NoSQL, Microservices, Redis
                  </p>
                  <p className="text-muted-foreground">
                    <strong>Frontend Expertise:</strong> React, Next.js, TypeScript, JavaScript
                  </p>
                  <p className="text-muted-foreground">
                    <strong>DevOps & Cloud:</strong> CI/CD (Jenkins, Docker, Kubernetes), Red Hat on AWS, AWS Cloud Platform
                  </p>
                  <p className="text-muted-foreground">
                    <strong>Security & Observability:</strong> OAuth2, OKTA, JWT, SSO, Splunk
                  </p>

                  <div className="pt-4">
                    <h4 className="font-semibold mb-3">Experience Highlights</h4>
                    <div className="space-y-3">
                      <Card className="p-4">
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                          <div>
                            <h5 className="font-medium">Specialist Software Engineer</h5>
                            <p className="text-sm text-muted-foreground">LTIMindtree • Aug 2022 - Present</p>
                          </div>
                        </div>
                      </Card>
                      <Card className="p-4">
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                          <div>
                            <h5 className="font-medium">Associate Software Engineer</h5>
                            <p className="text-sm text-muted-foreground">Cognizant Technology Solutions • Apr 2021 - Aug 2022</p>
                          </div>
                        </div>
                      </Card>
                      <Card className="p-4">
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                          <div>
                            <h5 className="font-medium">Software Engineer</h5>
                            <p className="text-sm text-muted-foreground">CISF (MHA) • Sep 2014 - Apr 2021</p>
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

