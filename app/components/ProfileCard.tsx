import { BorderBeam } from "@/components/ui/border-beam";
import React from "react";
import Image from "next/image";

export default function ProfileCard() {
  return (
    <div className="relative bg-white shadow-lg rounded-2xl p-6 max-w-sm w-full border border-blue-100 text-center overflow-hidden">
      <BorderBeam />

      <Image
        src="/profile.png"
        alt="Harpreet Kaur"
        width={100}
        height={100}
        className="rounded-full border-4 border-blue-200 mx-auto"
      />

      <h1 className="text-2xl font-bold text-blue-700 mt-4">Harpreet Kaur</h1>
      <h3 className="text-lg text-gray-700 font-medium">Frontend Developer</h3>
      <p className="text-gray-600 text-sm mt-2">
        I build clean, user-focused web applications with React, Next.js, and
        Tailwind CSS.
      </p>

      <div className="flex justify-center gap-3 mt-4">
        <a
          href="/projects"
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          View Projects
        </a>
        <a
          href="/contact"
          className="px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition"
        >
          Contact
        </a>
      </div>
    </div>
  );
}
