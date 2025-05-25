// ThemesGrid.tsx
import Typography from "@/ui/sub/headers/Typography";
import { ThemeCard } from "./ThemeCard";

// themesData.ts
export const themesData = [
  { title: "Digital Transformation with AI", icon: "CpuChipIcon" },
  { title: "Conversational AI/Chatbots", icon: "ChatBubbleLeftEllipsisIcon" },
  { title: "AIOps & MLOps", icon: "Cog6ToothIcon" },
  { title: "Robotic Process Automation", icon: "CpuChipIcon" },
  { title: "Generative AI", icon: "SparklesIcon" },
  { title: "AI in Banking", icon: "BanknotesIcon" },
  { title: "Cloud Integrated AI", icon: "CloudIcon" },
  { title: "Data Management & Analytics", icon: "ChartBarIcon" },
  { title: "Natural Language Processing", icon: "ChatBubbleLeftRightIcon" },
  { title: "Ethical AI", icon: "ScaleIcon" },
];

export default function ThemesGrid() {
  return (
    <div className="py-12 px-6 max-w-7xl mx-auto mb-20 mt-10">
      <Typography first="KEY" middle="THEMES" last="IN FOCUS" />
      <div className="grid grid-cols-1 sm:grid-cols-2 mt-[-4rem] md:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-10 justify-items-center">
        {themesData.map((theme, idx) => (
          <ThemeCard key={idx} title={theme.title} icon={theme.icon as any} />
        ))}
      </div>
    </div>
  );
}
