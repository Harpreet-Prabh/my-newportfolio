import { BorderBeam } from "@/components/ui/border-beam";
import { IconCloud } from "@/components/ui/icon-cloud";
import Image from "next/image";
import Skills from "./skills/page";
import SkillsIcons from "./components/SkillsIcons";
import ProfileCard from "./components/ProfileCard";

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
      {/* Left: Skills Section */}
      <div>
        <h2 className="text-3xl font-bold text-blue-700 mb-4">
          Frontend Developer Skills
        </h2>
        <p className="text-gray-700 mb-6">
          Here are some technologies I use to craft responsive and engaging user
          interfaces.
        </p>
        <SkillsIcons />
      </div>

      {/* Right: Info Card */}
      <div className="flex justify-center md:justify-end">
        <ProfileCard />
      </div>
    </div>
  );
}
