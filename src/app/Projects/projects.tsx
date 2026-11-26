"use client";

import { useTheme } from "next-themes";
import { useEffect, useState, useSyncExternalStore } from "react";
import { X, Layers, CheckCircle2, Images, ChevronLeft, ChevronRight, LayoutGrid, ArrowUpRight } from "lucide-react";
import Carousel, { CarouselEntry, CarouselItem } from "./Carousel";

export interface ProjectDetail {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  alt: string;
  gallery?: string[]; // Limit sa 3 images
  techStack: string[];
  features: string[];
}

const projectsData: ProjectDetail[] = [
  {
    id: 1,
    title: "Claretian-ERP",
    category: "ERP",
    description:
      "A comprehensive School Enterprise Resource Planning (ERP) system designed to centralize academic administration, student information records, enrollment, grade assessment, and tuition financial transactions.",
    image: "/claretian1.png",
    gallery: ["/claretian1.png","/claretian2.png","/claretian3.png"],
    alt: "Claretian-ERP School Enterprise System",
    techStack: ["Laravel", "PHP", "MySQL", "Bootstrap CSS"],
    features: [
      "Role: Full Stack Developer",
      "Engineered core modules for student enrollment, registrar management, and tuition billing",
      "Implemented role-based access control (RBAC) for administrators, faculty members, and students",
      "Conducted automated and manual testing to ensure data integrity and security across academic records"
    ]
  },
  {
    id: 2,
    title: "Multitop",
    category: "ERP",
    description:
      "A web-based Enterprise Resource Planning (ERP) system designed to streamline and centralize business operations, including sales transactions, inventory monitoring, delivery coordination, employee administration, and product management.",
    image: "/multitop.png",
    gallery: ["/multitop.png", "/multitop1.png", "/multitop2.png"],
    alt: "Multitop ERP System",
    techStack: ["Laravel", "PHP", "Bootstrap CSS", "MySQL"],
    features: [
      "Role: Full Stack Developer",
      "Contributed to the end-to-end development and implementation of the ERP system",
      "Conducted manual testing and debugging to ensure system functionality and reliability",
      "Collaborated with fellow Full Stack Developers in developing, integrating, and maintaining system modules"
    ]
  },
  {
    id: 3,
    title: "Ricement -thesis project",
    category: "School Project",
    description:
      "an IoT-Based Rice Husk Ash Production System with Mobile App Control for Farmer-Driven Sustainable Cement Additive Manufacturing",
    image: "/ricement.png",
    gallery: ["/ricement.png","ricement2.png","ricement4.png"],
    alt: "Ricement Supply Chain ERP",
    techStack: ["React Native", "Firebase", "Gemini Api", "Esp32"],
    features: [
      "Role: Project Manager",
      "Built grain inventory tracking, sack batching, price tiering, and supplier management modules",
      "Created sales order processing, delivery dispatch tracking, and financial invoice reporting",
      "Conducted rigorous testing and performance optimization for high-volume inventory transactions"
    ]
  },
  {
    id: 4,
    title: "Maxtel",
    category: "Payroll",
    description:
      "Enterprise payroll system for corporate employees covering net salary computation, overtime calculations, government deductions, employee loans, and personnel action forms.",
    image: "/Maxtel.png",
    gallery: ["/Maxtel.png", "/Maxtel3.png", "/Maxtel2.png"],
    alt: "Maxtel Payroll Project",
    techStack: ["Laravel", "PHP", "Bootstrap CSS", "MySQL"],
    features: [
      "Role: Full Stack Developer",
      "Implemented NTE, Disciplinary Actions, List of Accountabilities, and Personnel Action Form (PAF)",
      "Conducted manual testing and unit testing using php artisan test",
      "Collaborated with the team to identify and resolve bugs, ensuring reliable and secure payroll computations"
    ]
  },
  {
    id: 5,
    title: "Bluebonnet - Payroll",
    category: "Payroll",
    description:
      "An enterprise-grade Employee Payroll and Compensation Management System handling salary computation, government deductions (SSS, PhilHealth, Pag-IBIG), attendance logs, overtime, loans, and tax reporting.",
    image: "/bluebonnet.svg",
    gallery: ["/bluebonnet.svg"],
    alt: "Bluebonnet Payroll System",
    techStack: ["Laravel", "PHP", "MySQL", "Bootstrap CSS"],
    features: [
      "Role: Full Stack Developer",
      "Engineered automated payroll calculations including SSS, PhilHealth, Pag-IBIG, and withholding taxes",
      "Developed employee loan management, overtime validation, and payslip generation",
      "Conducted thorough testing with PHPUnit / php artisan test to ensure precision in financial calculations"
    ]
  },
  {
    id: 6,
    title: "Ultra Mrf",
    category: "Payroll",
    description:
      "HRIS and Payroll Management System for company personnel that includes automated salary distribution, overtime computation, loan amortization, and employee records.",
    image: "/mrf.png",
    gallery: ["/mrf.png", "/mrf1.png"],
    alt: "Ultra MRF Payroll & HRIS Project",
    techStack: ["Laravel", "PHP", "Bootstrap CSS", "MySQL"],
    features: [
      "Role: Full Stack Developer",
      "Executed automated tests using Laravel's php artisan test command to validate application logic",
      "Handled frontend and backend development, including database integration and business logic implementation",
      "Collaborated with senior engineers to streamline deployment and system security"
    ]
  },
  {
    id: 7,
    title: "Amoure",
    category: "Booking",
    description:
      "A web-based Transportation Management and Booking System designed to streamline transport operations, vehicle fleets, trip scheduling, driver assignments, and reservation monitoring.",
    image: "/amoure.png",
    gallery: ["/amoure.png", "/amoure1.png", "/amoure2.png"],
    alt: "Amoure Transport Booking System",
    techStack: ["Laravel", "PHP", "Bootstrap CSS", "MySQL"],
    features: [
      "Role: Full Stack Developer",
      "Handled frontend and backend development, including database integration and business logic implementation",
      "Communicated directly with clients to gather requirements, clarify system specifications, and discuss updates",
      "Executed automated tests using Laravel php artisan test to validate business logic"
    ]
  },
  {
    id: 8,
    title: "Imajica",
    category: "Booking",
    description:
      "A web-based Aesthetic Clinic Booking Management System designed to streamline appointment scheduling, client management, treatment reservations, and clinic operations.",
    image: "/imajica3.png",
    gallery: ["/imajica3.png", "/imajica1.png", "/imajica2.png"],
    alt: "Imajica Clinic Booking System",
    techStack: ["Laravel", "PHP", "Bootstrap CSS", "MySQL"],
    features: [
      "Role: Full Stack Developer",
      "Contributed to the development and implementation of appointment reservation functionalities",
      "Collaborated with team members to implement requirements and improve system functionality",
      "Coordinated directly with clients to gather requirements and provide technical assistance"
    ]
  },
  {
    id: 9,
    title: "Albertos",
    category: "Booking",
    description:
      "A web-based Resort Booking Management System designed to streamline resort operations, room reservations, guest management, and booking transactions.",
    image: "/albertos.png",
    gallery: ["/albertos.png", "/albertos1.png", "/albertos2.png"],
    alt: "Albertos Resort Booking System",
    techStack: ["React.js", "MongoDB", "MERN Stack", "Tailwind CSS"],
    features: [
      "Role: Project Manager & Full Stack Developer",
      "Led the development of core system functionalities, including frontend implementation and booking engine",
      "Collaborated with team members to integrate and improve system functionalities",
      "Communicated directly with clients to clarify specifications and discuss project progress"
    ]
  },
  {
    id: 10,
    title: "Clearview OB-GYN",
    category: "Booking",
    description:
      "A dedicated OB-GYN Clinic Consultation and Appointment Booking System enabling expectant mothers and patients to book prenatal visits, ultrasound schedules, and manage clinical consultations.",
    image: "/clearview.svg",
    gallery: ["/clearview.svg"],
    alt: "Clearview OB-GYN Clinic Booking System",
    techStack: ["Laravel", "PHP", "MySQL", "Tailwind CSS"],
    features: [
      "Role: Full Stack Developer",
      "Built real-time doctor availability calendar and automated appointment slot booking",
      "Integrated patient history logs, prenatal appointment trackers, and visit reminders",
      "Designed responsive client-facing portal and intuitive doctor clinic dashboard"
    ]
  },
  {
    id: 11,
    title: "Dental Combo Studio",
    category: "Booking",
    description:
      "A modern Dental Clinic Booking and Treatment Management System facilitating patient reservations, dental service packages, dentist scheduling, and treatment records.",
    image: "/dentalcombo.svg",
    gallery: ["/dentalcombo.svg"],
    alt: "Dental Combo Studio Booking System",
    techStack: ["React.js", "Laravel", "MySQL", "Tailwind CSS"],
    features: [
      "Role: Full Stack Developer",
      "Developed dental treatment selection, doctor time-slot booking, and instant confirmation system",
      "Implemented patient dental chart records, appointment histories, and follow-up notices",
      "Created clean, modern interface designed to maximize client conversion and streamline clinic desk duties"
    ]
  },
  {
    id: 12,
    title: "IHMP",
    category: "Healthcare & Insurance",
    description:
      "Integrated Healthcare Management Platform designed to streamline hospital operations, patient records management, clinical consultations, medical inventory, and department workflows.",
    image: "/ihmp1.png",
    gallery: ["/ihmp1.png","/ihmp2.png","/ihmp3.png"],
    alt: "IHMP Healthcare Management Platform",
    techStack: ["Laravel", "PHP", "MySQL", "Bootstrap CSS"],
    features: [
      "Role: Full Stack Developer",
      "Developed centralized electronic medical records (EMR) and patient admission tracking",
      "Integrated laboratory request workflows, billing processing, and doctor consultation schedules",
      "Optimized database queries for fast retrieval of patient histories and diagnostics"
    ]
  },
  {
    id: 13,
    title: "Powerlug",
    category: "Healthcare & Insurance",
    description:
      "A web-based Car Insurance Management System designed to streamline insurance operations, including insurance provider management, policy administration, claim filing, and claims processing.",
    image: "/powerlug.png",
    gallery: ["/powerlug.png", "/powerlug1.png", "/powerlug2.png"],
    alt: "Powerlug Insurance Management System",
    techStack: ["Laravel", "PHP", "Bootstrap CSS", "MySQL"],
    features: [
      "Role: Full Stack Developer",
      "Collaborated with team members to implement project requirements and improve system functionality",
      "Conducted manual testing, debugging, and system validation",
      "Played a major role in the end-to-end development and implementation of the system"
    ]
  },
  {
    id: 14,
    title: "Check it up",
    category: "School Project",
    description:
      "A clinic management system that allows users to schedule appointments, record medical histories, and track ongoing health concerns with ease.",
    image: "/Checkitup.png",
    gallery: ["/Checkitup.png", "/checkitup1.png", "/checkitup2.png"],
    alt: "Checkitup Clinic Project",
    techStack: ["C#", "VB.NET", "MySQL"],
    features: [
      "Role: Full Stack Developer (Team Leader)",
      "Developed all core modules and functionalities",
      "Managed system improvements and maintenance",
      "Integrated patient management, appointment scheduling, consultation, billing, and reporting modules"
    ]
  },
  {
    id: 15,
    title: "Ramen System",
    category: "School Project",
    description:
      "Desktop application point of sales (POS) system that can print receipts, customize orders, and manage real-time inventory.",
    image: "/Ramen.png",
    gallery: ["/Ramen.png", "/Ramen1.png", "/Ramen2.png"],
    alt: "Ramen POS System",
    techStack: ["Java", "NetBeans", "MySQL"],
    features: [
      "Team Leader / Lead Programmer",
      "Customizable Ramen toppings and broth selections",
      "Customer service rating module",
      "Automated printable receipt generation"
    ]
  },
  {
    id: 16,
    title: "Cuisining",
    category: "School Project",
    description:
      "An interactive web-based learning platform designed to provide users with engaging cooking tutorials, interactive 3D assets, and an immersive gaming experience powered by Unity.",
    image: "/Cuisining1.png",
    gallery: ["/Cuisining1.png", "/Cuisining2.png", "/Cuisining3.png"],
    alt: "Cuisining Learning Platform",
    techStack: ["React.js", "MongoDB", "MERN Stack", "Tailwind CSS", "Unity"],
    features: [
      "Role: Project Manager",
      "Utilized Jira for task management, sprint planning, issue tracking, and development monitoring",
      "Followed Agile development practices to organize tasks and deliver features incrementally",
      "Used Git and GitHub for collaborative source code management and version control"
    ]
  }
];

export default function Projects() {
  const { resolvedTheme } = useTheme();
  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );
  const [selectedProject, setSelectedProject] = useState<ProjectDetail | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isAllProjectsOpen, setIsAllProjectsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Close modal on Escape key press and prevent body scroll when open
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (selectedProject) {
          setSelectedProject(null);
        } else if (isAllProjectsOpen) {
          setIsAllProjectsOpen(false);
        }
      }
    };

    if (selectedProject || isAllProjectsOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [selectedProject, isAllProjectsOpen]);

  const currentTheme = (mounted && resolvedTheme === "light" ? "light" : "dark") as "light" | "dark";

  const handleCardClick = (item: CarouselEntry) => {
    if (typeof item === "object" && item !== null && "id" in item) {
      const found = projectsData.find((p) => p.id === (item as CarouselItem).id);
      if (found) {
        setSelectedProject(found);
        setSelectedImageIndex(0);
      }
    }
  };

  // Limit sa maximum of 3 gallery images
  const galleryList = (
    selectedProject?.gallery && selectedProject.gallery.length > 0
      ? selectedProject.gallery
      : [selectedProject?.image || ""]
  ).slice(0, 3);

  const activeImage = galleryList[selectedImageIndex] || selectedProject?.image || "";

  const preferredCategoryOrder = ["All", "ERP", "Payroll", "Booking", "Healthcare & Insurance", "School Project"];
  const existingCategories = Array.from(new Set(projectsData.map((p) => p.category)));
  const categories = [
    "All",
    ...preferredCategoryOrder.filter((cat) => cat !== "All" && existingCategories.includes(cat)),
    ...existingCategories.filter((cat) => !preferredCategoryOrder.includes(cat))
  ];
  const filteredProjects =
    selectedCategory === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === selectedCategory);

  return (
    <section
      id="projects"
      className="w-full min-h-screen py-16 md:py-24 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center overflow-hidden"
    >
      <div className="w-full max-w-6xl mx-auto flex flex-col items-center justify-center text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight mb-3 uppercase">
          My Projects
        </h2>

        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 max-w-xl mb-8 sm:mb-12">
          Swipe or drag to browse my works. <span className="font-semibold text-red-600 dark:text-red-400">Click any project</span> to view its full details and features.
        </p>

        {/* Carousel Container */}
        <div className="w-full flex items-center justify-center mx-auto">
          <Carousel
            items={projectsData}
            baseWidth={850}
            aspectRatio={1.5}
            effect="tilt"
            indicator="dots"
            frame={true}
            arrows={true}
            loop={true}
            autoplay={true}
            autoplayDelay={3500}
            pauseOnHover={true}
            theme={currentTheme}
            peek={0}
            gap={20}
            radius={24}
            draggable={true}
            round={false}
            onCardClick={handleCardClick}
            className="w-full max-w-4xl mx-auto shadow-2xl"
          />
        </div>

        {/* See All Projects Button */}
        <div className="mt-8 sm:mt-10 flex items-center justify-center">
          <button
            type="button"
            onClick={() => setIsAllProjectsOpen(true)}
            className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full text-sm sm:text-base font-semibold bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 hover:bg-red-600 dark:hover:bg-red-600 dark:hover:text-white transition-all duration-300 shadow-xl hover:shadow-red-600/25 hover:scale-105 active:scale-95 cursor-pointer"
          >
            <LayoutGrid size={18} className="transition group-hover:rotate-12" />
            <span>See All Projects ({projectsData.length})</span>
            <ArrowUpRight size={16} className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>

      {/* ALL PROJECTS GALLERY MODAL (Overlays the carousel & section) */}
      {isAllProjectsOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-8 bg-black/80 backdrop-blur-md transition-all duration-300 animate-in fade-in"
          onClick={(e) => {
            if (e.target === e.currentTarget) setIsAllProjectsOpen(false);
          }}
          aria-modal="true"
          role="dialog"
        >
          <div className="relative w-full max-w-6xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh] animate-in zoom-in-95 duration-200">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 sm:p-6 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/90 shrink-0 text-left">
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-red-600/10 text-red-600 mb-1">
                  <LayoutGrid size={13} />
                  <span>All Projects Collection ({projectsData.length})</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white">
                  Projects Gallery
                </h3>
              </div>

              {/* Close Button */}
              <button
                type="button"
                onClick={() => setIsAllProjectsOpen(false)}
                className="p-2.5 rounded-full bg-zinc-200/80 hover:bg-zinc-300 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-zinc-700 dark:text-zinc-200 transition shadow-sm shrink-0 cursor-pointer focus:outline-none focus:ring-2 focus:ring-red-500"
                aria-label="Close gallery modal"
              >
                <X size={20} />
              </button>
            </div>

            {/* Category Filter Bar */}
            <div className="px-5 sm:px-6 py-3 border-b border-zinc-100 dark:border-zinc-800 bg-white/50 dark:bg-zinc-900/50 flex flex-wrap gap-1.5 shrink-0 overflow-x-auto">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition cursor-pointer shrink-0 ${
                    selectedCategory === cat
                      ? "bg-red-600 text-white shadow-md shadow-red-600/20"
                      : "bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Modal Body: Scrollable Gallery Grid */}
            <div className="p-4 sm:p-6 overflow-y-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {filteredProjects.map((project) => (
                  <div
                    key={project.id}
                    onClick={() => {
                      setSelectedProject(project);
                      setSelectedImageIndex(0);
                    }}
                    className="group relative bg-zinc-50 dark:bg-zinc-950/70 border border-zinc-200 dark:border-zinc-800 hover:border-red-500/60 rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 cursor-pointer flex flex-col text-left"
                  >
                    {/* Thumbnail Stage (Uncropped object-contain) */}
                    <div className="relative w-full h-44 sm:h-48 bg-zinc-950 overflow-hidden flex items-center justify-center p-2.5">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="max-h-full max-w-full w-auto h-auto object-contain transition duration-500 group-hover:scale-105"
                      />

                      {/* Hover Overlay Hint */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-3 pointer-events-none">
                        <span className="inline-flex items-center gap-1 text-xs font-semibold text-white bg-red-600 px-2.5 py-1 rounded-full shadow">
                          View Details <ArrowUpRight size={13} />
                        </span>
                        {project.gallery && project.gallery.length > 0 && (
                          <span className="text-[11px] font-medium text-white/90 bg-black/60 px-2 py-0.5 rounded-full backdrop-blur-sm border border-white/10">
                            {project.gallery.length} photos
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Card Body */}
                    <div className="p-4 flex-1 flex flex-col justify-between">
                      <div>
                        <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-red-50 dark:bg-red-950/40 text-red-600 dark:text-red-400 border border-red-200/50 dark:border-red-900/50 mb-1.5 line-clamp-1">
                          {project.category}
                        </span>
                        <h4 className="text-base font-bold text-zinc-900 dark:text-white group-hover:text-red-600 transition">
                          {project.title}
                        </h4>
                        <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-1 line-clamp-2 leading-relaxed">
                          {project.description}
                        </p>
                      </div>

                      {/* Tech Stack Pills */}
                      <div className="flex flex-wrap gap-1.5 mt-3 pt-2.5 border-t border-zinc-200/60 dark:border-zinc-800/60">
                        {project.techStack.slice(0, 3).map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-0.5 rounded-md text-[10px] font-medium bg-zinc-200/70 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.techStack.length > 3 && (
                          <span className="px-2 py-0.5 rounded-md text-[10px] font-medium bg-zinc-200/70 dark:bg-zinc-800 text-zinc-500">
                            +{project.techStack.length - 3}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* POP-UP DETAILS MODAL WITH MINI-GALLERY */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center p-3 sm:p-5 bg-black/80 backdrop-blur-md transition-all duration-300 animate-in fade-in"
          onClick={(e) => {
            if (e.target === e.currentTarget) setSelectedProject(null);
          }}
          aria-modal="true"
          role="dialog"
        >
          <div className="relative w-full max-w-3xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh] animate-in zoom-in-95 duration-200">
            {/* Modal Header: Category, Title & Close Button */}
            <div className="flex items-center justify-between p-4 sm:p-5 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/90 shrink-0">
              <div className="text-left pr-4">
                <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold bg-red-600 text-white mb-1 shadow-sm">
                  {selectedProject.category}
                </span>
                <h3 className="text-lg sm:text-2xl font-bold text-zinc-900 dark:text-white leading-tight">
                  {selectedProject.title}
                </h3>
              </div>

              <button
                onClick={() => setSelectedProject(null)}
                className="p-2 rounded-full bg-zinc-200/80 hover:bg-zinc-300 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-zinc-700 dark:text-zinc-200 transition shadow-sm shrink-0 focus:outline-none focus:ring-2 focus:ring-red-500"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Body Content (Scrollable) */}
            <div className="p-4 sm:p-6 overflow-y-auto text-left space-y-6">
              {/* Full Image Showcase Stage (Uncropped / Fully Visible) */}
              <div className="relative w-full h-[280px] sm:h-[380px] md:h-[440px] bg-zinc-950 rounded-2xl flex items-center justify-center p-2 sm:p-4 border border-zinc-200/10 shadow-inner group/viewer overflow-hidden">
                <img
                  src={activeImage}
                  alt={`${selectedProject.title} screenshot ${selectedImageIndex + 1}`}
                  className="max-w-full max-h-full w-auto h-auto object-contain mx-auto rounded-lg shadow-lg select-none transition-all duration-300"
                />

                {/* Counter Pill */}
                <span className="absolute top-3 left-3 z-20 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-black/70 text-white/95 backdrop-blur-md border border-white/10 flex items-center gap-1.5 shadow">
                  <Images size={13} />
                  <span>{selectedImageIndex + 1} / {galleryList.length}</span>
                </span>

                {/* Left / Right Navigation Arrows */}
                {galleryList.length > 1 && (
                  <>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedImageIndex((prev) =>
                          prev > 0 ? prev - 1 : galleryList.length - 1
                        );
                      }}
                      className="absolute left-3 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full bg-black/60 hover:bg-black/90 text-white backdrop-blur-md transition shadow-md hover:scale-105"
                      aria-label="Previous screenshot"
                    >
                      <ChevronLeft size={22} />
                    </button>

                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedImageIndex((prev) =>
                          prev < galleryList.length - 1 ? prev + 1 : 0
                        );
                      }}
                      className="absolute right-3 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full bg-black/60 hover:bg-black/90 text-white backdrop-blur-md transition shadow-md hover:scale-105"
                      aria-label="Next screenshot"
                    >
                      <ChevronRight size={22} />
                    </button>
                  </>
                )}
              </div>

              {/* Project Preview Gallery Thumbnails (Max 3, Uncropped) */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-zinc-400 dark:text-zinc-500 flex items-center gap-1.5">
                    <Images size={14} className="text-red-500" />
                    Project Screenshots ({galleryList.length} Views)
                  </h4>
                  <span className="text-[11px] text-zinc-500">Pindutin para makita ng buo</span>
                </div>

                <div className="grid grid-cols-3 gap-2.5 sm:gap-3.5">
                  {galleryList.map((imgUrl, idx) => {
                    const isActive = idx === selectedImageIndex;
                    return (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => setSelectedImageIndex(idx)}
                        className={`group relative h-20 sm:h-28 rounded-xl bg-zinc-950 flex items-center justify-center p-1.5 overflow-hidden border-2 transition-all duration-200 focus:outline-none ${
                          isActive
                            ? "border-red-600 ring-2 ring-red-500/50 shadow-md scale-[1.02]"
                            : "border-zinc-200 dark:border-zinc-800 opacity-60 hover:opacity-100 hover:border-zinc-400 dark:hover:border-zinc-600"
                        }`}
                      >
                        <img
                          src={imgUrl}
                          alt={`${selectedProject.title} view ${idx + 1}`}
                          className="max-h-full max-w-full w-auto h-auto object-contain mx-auto transition duration-300 group-hover:scale-105"
                        />
                        <span
                          className={`absolute bottom-1 right-1 px-1.5 py-0.5 rounded text-[10px] font-bold ${
                            isActive
                              ? "bg-red-600 text-white shadow-sm"
                              : "bg-black/80 text-zinc-200"
                          }`}
                        >
                          View {idx + 1}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Description */}
              <div>
                <h4 className="text-xs uppercase tracking-wider font-semibold text-zinc-400 dark:text-zinc-500 mb-2">
                  Project Overview
                </h4>
                <p className="text-sm sm:text-base leading-relaxed text-zinc-700 dark:text-zinc-300">
                  {selectedProject.description}
                </p>
              </div>

              {/* Technologies Used */}
              <div>
                <h4 className="text-xs uppercase tracking-wider font-semibold text-zinc-400 dark:text-zinc-500 mb-2.5 flex items-center gap-1.5">
                  <Layers size={14} className="text-red-500" />
                  Technologies used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-lg text-xs font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 border border-zinc-200 dark:border-zinc-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key Contributions */}
              <div>
                <h4 className="text-xs uppercase tracking-wider font-semibold text-zinc-400 dark:text-zinc-500 mb-2.5 flex items-center gap-1.5">
                  <CheckCircle2 size={14} className="text-green-500" />
                  Key Contributions
                </h4>
                <ul className="space-y-2 text-xs sm:text-sm text-zinc-600 dark:text-zinc-300">
                  {selectedProject.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-red-600 dark:text-red-400 font-bold">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Modal Footer Actions */}
              <div className="pt-2 flex justify-end gap-3 border-t border-zinc-100 dark:border-zinc-800">
                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  className="px-5 py-2 rounded-xl text-sm font-medium bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-zinc-800 dark:text-zinc-200 transition cursor-pointer"
                >
                  {isAllProjectsOpen ? "← Back to Projects Gallery" : "Close"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
