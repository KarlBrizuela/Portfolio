"use client";

import { Briefcase, Code2 } from "lucide-react";

export default function Skills() {
  const experiences = [
    {
      company: "Intracode IT Solutions",
      title: "Web Full Stack Developer",
      period: "Sept 2025 - Nov 2026",
      location: "Caloocan City, Philippines",
      type: "Full-Time",
      tasks: [
        "DDeveloped web applications, worked with APIs, checked system quality and functionality, and cross-checked payroll and DTR records to ensure data accuracy.",
        "Participated in client meetings, gathered requirements, collaborated with fellow programmers, delegated tasks, and helped manage the development team.",
        "Delivered functional systems that clients now use in their daily operations while improving my professionalism, leadership, communication, and problem-solving skills."
      ]
    },
    {
      company: "University of Caloocan City",
      title: "Bachelor of Science in Computer Science",
      period: "2022 - 2026",
      location: "Congress Campus",
      type: "Graduate",
      tasks: [
        "Organized group activities, delegated responsibilities, and maintained good communication among team members",
        "Balanced academic responsibilities and professional work while maintaining commitment to both.",
        "Led our thesis team throughout the research and development process, successfully completing our thesis requirements and graduating together."
      ]
    }
  ];

  const skillGroups = [
    {
      title: "Frontend / Language",
      skills: [
        "React.js",
        "Next.js",
        "JavaScript",
        "TypeScript",
        "Tailwind CSS",
        "Bootstrap CSS",
        "HTML5 / CSS",
        "Java"
      ]
    },
    {
      title: "Backend",
      skills: ["Laravel", "PHP", "Node.js", "VB.NET"]
    },
    {
      title: "Databases",
      skills: ["MySQL", "MongoDB", "Database Design"]
    },
    {
      title: "Tools & DevOps",
      skills: [
        "Git",
        "GitHub",
        "Docker",
        "GitHub Actions (CI/CD)",
        "Vercel",
        "Postman",
        "Jira / Agile"
      ]
    }
  ];

  return (
    <section id="skills" className="w-full min-h-screen py-12 md:py-20 px-4 sm:px-6 md:px-8">
      {/* Section Header */}
      <h2 className="text-lg sm:text-xl font-bold text-center m-6 md:m-10 mb-8 md:mb-12 uppercase tracking-wide">
        EXPERIENCE &amp; SKILLS
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-start">
        {/* LEFT SIDE: SCROLLABLE EXPERIENCE & EDUCATION */}
        <div data-aos="fade-right" className="flex flex-col gap-3">
          <div className="flex items-center gap-2 pb-1">
            <Briefcase className="text-red-600" size={20} />
            <h3 className="text-base sm:text-lg font-bold">Experience &amp; Education</h3>
          </div>

          {/* Scrollable Container */}
          <div className="max-h-[540px] sm:max-h-[580px] lg:max-h-[620px] overflow-y-auto pr-2 space-y-4 [scrollbar-width:thin] [scrollbar-color:#ef4444_transparent]">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className="border border-zinc-200 dark:border-zinc-800 rounded-2xl p-5 hover:border-red-600 transition duration-300 bg-white/40 dark:bg-zinc-950/30"
              >
                {/* Company (Highlighted) & Period at the top */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-1">
                  <h4 className="text-base sm:text-lg font-bold text-red-600 dark:text-red-500">
                    {exp.company}
                  </h4>
                  <span className="text-xs text-zinc-500 dark:text-zinc-400 font-medium">
                    {exp.period}
                  </span>
                </div>

                {/* Title / Role below Company */}
                <div className="text-sm sm:text-base font-semibold text-zinc-900 dark:text-zinc-100 mb-1">
                  {exp.title}
                </div>

                {/* Location & Type */}
                <div className="text-xs text-zinc-600 dark:text-zinc-400 font-medium mb-3">
                  <span>{exp.location}</span> •{" "}
                  <span className="text-zinc-800 dark:text-zinc-200 font-semibold">{exp.type}</span>
                </div>

                {/* Tasks */}
                <ul className="space-y-1.5 text-xs sm:text-sm text-zinc-700 dark:text-zinc-300">
                  {exp.tasks.map((task, tIdx) => (
                    <li key={tIdx} className="flex items-start gap-2">
                      <span className="text-red-600 mt-0.5">•</span>
                      <span>{task}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE: SKILLS IN A SINGLE UNIFIED CONTAINER */}
        <div data-aos="fade-left" className="flex flex-col gap-3">
          <div className="flex items-center gap-2 pb-1">
            <Code2 className="text-red-600" size={20} />
            <h3 className="text-base sm:text-lg font-bold">Skills</h3>
          </div>

          {/* Single Unified Container */}
          <div className="border border-zinc-200 dark:border-zinc-800 rounded-2xl p-5 sm:p-6 hover:border-red-600 transition duration-300 bg-white/40 dark:bg-zinc-950/30">
            <div className="space-y-5">
              {skillGroups.map((group, idx) => (
                <div
                  key={idx}
                  className={
                    idx !== skillGroups.length - 1
                      ? "border-b border-zinc-100 dark:border-zinc-800/60 pb-5"
                      : ""
                  }
                >
                  <h4 className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-red-600 dark:text-red-500 mb-2.5">
                    {group.title}
                  </h4>

                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="border border-zinc-200 dark:border-zinc-800 px-3 py-1.5 rounded-xl text-xs sm:text-sm hover:border-red-600 hover:text-red-600 transition cursor-default bg-zinc-50/50 dark:bg-zinc-900/40"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
