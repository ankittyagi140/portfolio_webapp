import SkillCard from "../SkillCard";
import { Code2 } from "lucide-react";

export default function SkillCardExample() {
  return (
    <div className="p-8 max-w-xs">
      <SkillCard name="React" icon={Code2} proficiency={5} />
    </div>
  );
}
