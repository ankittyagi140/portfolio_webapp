"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface SkillCardProps {
  name: string;
  icon: LucideIcon;
  proficiency: number;
}

export default function SkillCard({ name, icon: Icon, proficiency }: SkillCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      data-testid={`card-skill-${name.toLowerCase().replace(/\s+/g, "-")}`}
    >
      <Card className="p-6 text-center hover-elevate active-elevate-2">
        <div className="flex justify-center mb-4">
          <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center">
            <Icon className="w-8 h-8 text-primary" />
          </div>
        </div>
        <h3 className="font-semibold mb-3" data-testid={`text-skill-name-${name.toLowerCase().replace(/\s+/g, "-")}`}>{name}</h3>
        <div className="flex gap-1 justify-center">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full ${
                i < proficiency ? "bg-primary" : "bg-muted"
              }`}
              data-testid={`indicator-proficiency-${i}`}
            />
          ))}
        </div>
      </Card>
    </motion.div>
  );
}
