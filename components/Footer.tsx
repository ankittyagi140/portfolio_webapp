"use client";

import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  const socialLinks = [
    { icon: Github, label: "GitHub", url: "https://github.com/ankittyagi140" },
    { icon: Linkedin, label: "LinkedIn", url: "https://www.linkedin.com/in/atyagi-js/" },
    { icon: Mail, label: "Email", url: "mailto:ankit.tyagi555@gmail.com" },
  ];

  return (
    <footer className="border-t border-border py-12" data-testid="footer-main">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
              Ankit Tyagi
            </h3>
            <p className="text-muted-foreground text-sm">
              Senior Software Engineer
            </p>
          </div>

          <div className="flex gap-2">
            {socialLinks.map((link) => (
              <Button
                key={link.label}
                variant="ghost"
                size="icon"
                onClick={() => window.open(link.url, "_blank", "noopener,noreferrer")}
                data-testid={`button-social-${link.label.toLowerCase()}`}
              >
                <link.icon className="w-5 h-5" />
              </Button>
            ))}
          </div>

          <div className="text-center md:text-right text-sm text-muted-foreground">
            <p>© 2024 Ankit Tyagi. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
