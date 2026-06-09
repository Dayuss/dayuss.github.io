'use client';

import Image from 'next/image';
import React, { useEffect, useCallback } from 'react';
import { motion } from 'motion/react';
import useEmblaCarousel from 'embla-carousel-react';
import { initializeFirebase } from '../lib/firebase';
import { trackButtonClick } from '../lib/analytics';
import {
  Mail,
  ExternalLink,
  Code2,
  Database,
  Layers,
  Terminal,
  ArrowUpRight,
  MapPin,
  Phone,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

function Github({ size = 24, className = '' }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836a9.59 9.59 0 0 1 2.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
    </svg>
  );
}

function Linkedin({ size = 24, className = '' }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

const SKILL_GROUPS = [
  {
    category: "Languages & Runtime",
    icon: <Terminal size={18} />,
    skills: ["Golang", "JavaScript", "TypeScript", "Node.js", "Java Spring Boot"]
  },
  {
    category: "Frameworks & UI",
    icon: <Layers size={18} />,
    skills: ["React", "Next.js", "Nest.js", "ExpressJS", "Redux"]
  },
  {
    category: "Databases & Cache",
    icon: <Database size={18} />,
    skills: ["MySQL", "PostgreSQL", "MongoDB", "Redis", "Elasticsearch"]
  },
  {
    category: "Infrastructure & Tools",
    icon: <Code2 size={18} />,
    skills: ["Micro-services", "CI/CD", "Docker", "RabbitMQ", "GCP", "AWS", "Jenkins", "Git"]
  },
  {
    category: "APIs & Standards",
    icon: <ExternalLink size={18} />,
    skills: ["GraphQL", "REST API", "gRPC", "Socket.io", "Unit Testing"]
  }
];

const PROJECTS = [
  {
    name: "Hunian Aja",
    role: "Frontend Developer",
    description: "Aplikasi yang mendigitalkan ekosistem hunian apartemen dan perumahan. Mengembangkan dashboard (CMS) untuk admin/pengelola.",
    stack: ["React (Hooks)", "Redux", "Tailwind", "ANT Design", "TypeScript"],
    image: "/porto_hunian_aja.png",
    link: "#",
    w: 659, h: 533
  },
  {
    name: "ADSCOIN",
    role: "Fullstack Developer",
    description: "Aplikasi e-commerce untuk copywriting. Merancang dan mengembangkan API serta dashboard admin.",
    stack: ["ExpressJS", "ReactJS", "Flutter"],
    image: "/porto_adscoin.png",
    link: "#",
    w: 397, h: 881
  },
  {
    name: "N-POS",
    role: "Fullstack Developer",
    description: "Aplikasi Point-of-Sales. Merancang dan mengembangkan API, backoffice, serta update pada aplikasi Android.",
    stack: ["ExpressJS", "ReactJS", "Java Android"],
    image: "/porto_npos.png",
    link: "#",
    w: 701, h: 651
  },
  {
    name: "PT Thaibah Mulia Internasional",
    role: "Fullstack Developer",
    description: "Aplikasi Multi Level Marketing Matahari. Merancang fitur pembagian bonus hingga 30 upline dan mengatur tim.",
    stack: ["ExpressJS", "Laravel", "Flutter"],
    image: "/porto_thaibah_mlm.png",
    link: "#",
    w: 676, h: 676
  },
  {
    name: "PT Sangkuriang Sinergi Insan",
    role: "Backend Engineer",
    description: "Aplikasi Multi Level Marketing Binary. Merancang fitur pembagian bonus pasangan dengan pengecekan setiap jam 12 malam.",
    stack: ["ExpressJS", "ReactJS", "Flutter"],
    image: "/porto_sangkuriang_mlm.png",
    link: "#",
    w: 556, h: 739
  },
  {
    name: "Pigijo",
    role: "Frontend Developer",
    description: "Aplikasi travel planner. Slicing dari base template HTML ke JSX dan integrasi API sesuai bisnis model.",
    stack: ["ReactJS"],
    image: "/porto_pigijo.png",
    link: "#",
    w: 846, h: 398
  }
];

const EXPERIENCE = [
  {
    role: "Backend Developer",
    company: "PT. Elektronik Distribusi Otomasi Terkemuka (eDot)",
    period: "02/2023 – 05/2026",
    location: "Bandung, West Java",
    highlights: [
      "Revamped chat application by migrating to microservices architecture, improving scalability, modularity, and maintainability.",
      "Designed and implemented hexagonal architecture to enforce separation of concerns, resulting in cleaner codebase and easier testing.",
      "Optimized real-time communication and API performance using Redis, reducing response time to under 50ms.",
      "Designed idempotent transaction mechanisms using idempotency keys to ensure safe retries and prevent duplicate transaction processing.",
      "Built voucher calculation engine with prorated distribution per product, ensuring accurate discount allocation and financial consistency.",
      "Managed transaction state consistency between internal services and external systems, handling retries, partial failures, and duplicate requests.",
      "Applied asynchronous processing patterns to decouple services and improve system resilience under high load."
    ]
  },
  {
    role: "Backend Developer",
    company: "Bas-It Studio",
    period: "08/2022 – 02/2023",
    location: "Bandung, West Java",
    highlights: [
      "Improved deployment process by implementing CI/CD pipelines using Jenkins, ensuring faster and more reliable releases.",
      "Led daily progress updates and facilitated team discussions on bug fixes and feature enhancements.",
      "Optimized code structure to ensure clean code practices and improved data efficiency using MongoDB."
    ]
  },
  {
    role: "Fullstack Developer",
    company: "PT Netindo Mediatama Perkasa",
    period: "10/2019 – 07/2022",
    location: "Bandung, West Java",
    highlights: [
      "Led revamp of POS API using ExpressJS and redesigned admin dashboard using ReactJS, resulting in enhanced user experience.",
      "Led development of MLM application APIs and optimized backend logic for improved performance and easier maintenance.",
      "Integrated secure payment gateway using Xendit Service API, resulting in 50% reduction in transaction processing time.",
      "Developed and maintained LIMS India, a laboratory information management system, by fixing bugs and implementing new features.",
      "Led and managed a team of 4 engineers, providing clear briefs and work schedules, resulting in 20% increase in team productivity."
    ]
  },
  {
    role: "Frontend Developer",
    company: "Tyrannix",
    period: "10/2018 – 07/2019",
    location: "Bandung, West Java",
    highlights: [
      "Developed travel planner application website using ReactJS, ensuring smooth and dynamic user experience.",
      "Implemented Redux for efficient state management across the application, improving performance and maintainability.",
      "Collaborated with backend team to ensure seamless API integration and optimal data exchange."
    ]
  }
];

type Project = typeof PROJECTS[number];

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 24, scale: 0.97 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="relative bg-white w-full max-w-2xl max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Image */}
        <div className="relative h-72 overflow-hidden bg-gray-100 flex items-center justify-center">
          <Image
            src={project.image}
            alt={project.name}
            fill
            sizes="(min-width: 672px) 672px, 100vw"
            className="object-contain"
          />
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="absolute top-4 right-4 w-9 h-9 bg-white/90 backdrop-blur-sm flex items-center justify-center hover:bg-black hover:text-white transition-all duration-200"
          >
            <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="p-8 md:p-10">
          <div className="flex items-start justify-between mb-2">
            <h3 className="text-2xl font-medium tracking-tight">{project.name}</h3>
            {project.link !== '#' && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="ml-4 mt-1 shrink-0 flex items-center gap-1.5 text-xs font-medium uppercase tracking-widest border border-black/10 px-3 py-2 hover:bg-black hover:text-white hover:border-black transition-all duration-200"
              >
                Visit <ArrowUpRight size={13} />
              </a>
            )}
          </div>
          <span className="text-[10px] font-medium uppercase tracking-widest text-gray-400 block mb-6">{project.role}</span>

          <p className="text-sm text-gray-500 font-light leading-relaxed mb-8">{project.description}</p>

          <div>
            <h4 className="text-[10px] font-medium uppercase tracking-[0.2em] text-gray-400 mb-3">Tech Stack</h4>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech, i) => (
                <span key={i} className="text-xs px-3 py-1.5 border border-black/10 text-gray-600 bg-[#FAFAFA]">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function ProjectsCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start', slidesToScroll: 1 });
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [activeProject, setActiveProject] = React.useState<Project | null>(null);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on('select', onSelect);
    return () => { emblaApi.off('select', onSelect); };
  }, [emblaApi]);

  return (
    <>
      <section id="projects" className="py-32 bg-white border-t border-black/5">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-end justify-between mb-16">
            <div>
              <h2 className="text-xs font-medium uppercase tracking-[0.2em] text-gray-400 mb-4">Portfolio</h2>
              <h3 className="text-4xl">Featured Projects</h3>
            </div>
            <div className="flex gap-3">
              <button
                onClick={scrollPrev}
                aria-label="Previous project"
                className="w-12 h-12 border border-black/10 flex items-center justify-center hover:bg-black hover:text-white hover:border-black transition-all duration-300"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={scrollNext}
                aria-label="Next project"
                className="w-12 h-12 border border-black/10 flex items-center justify-center hover:bg-black hover:text-white hover:border-black transition-all duration-300"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-6">
              {PROJECTS.map((project, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveProject(project)}
                  className="group flex-none w-[90%] sm:w-[48%] lg:w-[32%] border border-black/5 bg-white hover:border-black/20 transition-colors flex flex-col text-left cursor-pointer"
                >
                  <div className="relative h-56 overflow-hidden bg-gray-100">
                    <Image
                      src={project.image}
                      alt={project.name}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 90vw"
                      className="object-contain [filter:grayscale(1)] group-hover:[filter:grayscale(0)] transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 flex items-center justify-center">
                      {/* <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-xs font-medium uppercase tracking-widest bg-black/70 px-4 py-2 backdrop-blur-sm">
                        View Details
                      </span> */}
                    </div>
                  </div>
                  <div className="p-8 flex flex-col flex-1">
                    <div className="flex items-start justify-between mb-3">
                      <h4 className="text-lg font-medium leading-tight">{project.name}</h4>
                      <ArrowUpRight size={16} className="ml-3 mt-1 shrink-0 text-gray-300 group-hover:text-black group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200" />
                    </div>
                    <span className="text-[10px] font-medium uppercase tracking-widest text-gray-400 mb-4">{project.role}</span>
                    <p className="text-sm text-gray-500 font-light leading-relaxed mb-6 flex-1 line-clamp-3">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.stack.map((tech, tIdx) => (
                        <span key={tIdx} className="text-xs px-2.5 py-1 border border-black/8 text-gray-500 bg-[#FAFAFA]">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="flex gap-2 mt-8 justify-center">
            {PROJECTS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => emblaApi?.scrollTo(idx)}
                aria-label={`Go to project ${idx + 1}`}
                className={`h-px transition-all duration-300 ${
                  idx === selectedIndex ? 'w-8 bg-black' : 'w-4 bg-black/20'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {activeProject && (
        <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
      )}
    </>
  );
}

export default function PortfolioPage() {
  useEffect(() => {
    initializeFirebase();
  }, []);

  const handleButtonClick = (label: string) => () => {
    trackButtonClick(label);
  };

  return (
    <main className="min-h-screen bg-white selection:bg-black selection:text-white">
      {/* Navigation */}
      <nav className="sticky top-0 bg-white/80 backdrop-blur-md z-50 border-b border-black/5">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="font-display font-medium text-lg tracking-tighter">
            DAYUS<span className="bg-yellow-500 mx-1 px-2 py-1 border border-black inline-block rotate-[-6deg]">MAN</span>
          </div>
          <div className="hidden md:flex gap-10 font-sans text-xs font-medium uppercase tracking-widest text-gray-500">
            <a href="#about" className="hover:text-black transition-colors">About</a>
            <a href="#work" className="hover:text-black transition-colors">Work</a>
            <a href="#projects" className="hover:text-black transition-colors">Projects</a>
            <a href="#skills" className="hover:text-black transition-colors">Skills</a>
            <a href="#contact" className="hover:text-black transition-colors text-black border-b border-black pb-1">Contact</a>
            {/* <a href="/github-repos" className="hover:text-black transition-colors">GitHub Repos</a> */}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-7">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="text-xs font-medium uppercase tracking-[0.3em] text-gray-400 mb-8">
                Based in Bandung, Indonesia
              </div>
              <h1 className="text-6xl md:text-8xl font-medium leading-[0.9] mb-10 tracking-tighter">
                DAYUSMAN <br />
                <span className="text-gray-300">TARDIAN.</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-500 max-w-xl mb-12 font-light leading-relaxed">
                A Senior Backend Engineer designing robust systems for high-load, transaction-critical environments with 6+ years of experience.
              </p>
              <div className="flex flex-wrap gap-6 items-center">
                <a 
                  href="#contact"
                  onClick={handleButtonClick('Work with me')}
                  className="bg-black text-white px-10 py-5 text-sm font-medium hover:bg-gray-900 transition-all hover:px-12"
                >
                  Work with me
                </a>
                <a
                  href="https://drive.google.com/drive/folders/1jSYre7nR0OWpGdFqZ7BLPvU8cW_Z1PBI?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleButtonClick('See my resume')}
                  className="bg-white text-black px-10 py-5 text-sm font-medium hover:bg-gray-200 transition-all hover:px-12"
                >
                  See my resume <ArrowUpRight size={16} className="inline-block ml-2" />
                </a>
                <div className="flex gap-8 text-gray-400">
                  <a href="https://github.com/dayuss"   target="_blank" rel="noopener noreferrer" aria-label="GitHub" title="GitHub" className="hover:text-black transition-colors"><Github size={22} /></a>
                  <a href="https://www.linkedin.com/in/dayu-dayusman-tardian-1858b9118" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" title="LinkedIn" className="hover:text-black transition-colors"><Linkedin size={22} /></a>
                </div>
              </div>
            </motion.div>
          </div>
          <div className="hidden lg:block lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative aspect-[4/5] overflow-hidden group cursor-crosshair"
            >
              <Image
                src="/dayu-hero.png"
                alt="Dayu Dayusman"
                fill
                sizes="(min-width: 576px) 40vw, 100vw"
                className="object-none transition-all duration-700 ease-in-out [filter:grayscale(1)] group-hover:[filter:grayscale(0)] "
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="border-t border-black/5 py-32">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <h2 className="text-xs font-medium uppercase tracking-[0.2em] text-gray-400">The Engineer</h2>
          </div>
          <div className="md:col-span-8">
            <div className="max-w-2xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-sm font-medium uppercase tracking-widest mb-4">Philosophy</h3>
                  <p className="text-gray-500 leading-relaxed font-light">
                    I break down complex distributed systems challenges and translate solutions into clean, maintainable code. Proven as both an individual contributor and a team lead across Golang, Node.js, and full-stack ecosystems.
                  </p>
                </div>
                <div>
                  <h3 className="text-sm font-medium uppercase tracking-widest mb-4">Background</h3>
                  <p className="text-gray-500 leading-relaxed font-light">
                    Bachelor of Applied Science in Informatics Engineering from Bandung TEDC Polytechnic (GPA 3.56). 6+ years designing and delivering robust backend systems for high-load, transaction-critical environments.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work Experience */}
      <section id="work" className="bg-[#FAFAFA] py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-24">
            <h2 className="text-xs font-medium uppercase tracking-[0.2em] text-gray-400 mb-4">Experience</h2>
            <h3 className="text-4xl">Selected Work</h3>
          </div>

          <div className="divide-y divide-black/5 border-t border-b border-black/5">
            {EXPERIENCE.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="group relative bg-[#FAFAFA] hover:bg-white transition-colors duration-300"
              >
                {/* Left accent bar — slides in on hover */}
                <span
                  aria-hidden="true"
                  className="absolute left-0 top-0 bottom-0 w-[3px] bg-black scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-300 ease-out"
                />

                <div className="pl-8 pr-6 md:pr-12 py-10 md:py-12">
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-x-8 gap-y-6 items-start">

                    {/* Column 1 — index + period + location */}
                    <div className="md:col-span-3 flex md:flex-col gap-4 md:gap-3">
                      <span className="font-mono text-[11px] text-black/15 group-hover:text-black/30 transition-colors duration-300 leading-none pt-1 select-none">
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                      <div>
                        <div className="text-[11px] font-mono text-gray-400 leading-relaxed">
                          {exp.period}
                        </div>
                        <div className="text-[10px] font-medium uppercase tracking-widest text-gray-300 group-hover:text-gray-400 transition-colors duration-300 mt-2 hidden md:block">
                          {exp.location}
                        </div>
                      </div>
                    </div>

                    {/* Column 2 — role, company, highlights */}
                    <div className="md:col-span-9">
                      {/* Role + Company row */}
                      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-1">
                        <h4 className="text-xl font-medium leading-snug tracking-tight">
                          {exp.role}
                        </h4>
                        <span className="text-black/20 font-light hidden md:inline">—</span>
                        <span className="text-sm text-gray-400 font-light leading-snug">
                          {exp.company}
                        </span>
                      </div>

                      {/* Mobile location */}
                      <div className="text-[10px] font-medium uppercase tracking-widest text-gray-300 mb-5 md:hidden">
                        {exp.location}
                      </div>

                      {/* Highlights */}
                      <ul className="mt-5 space-y-2.5">
                        {exp.highlights.map((h, i) => (
                          <li key={i} className="flex gap-3 items-start">
                            <span
                              aria-hidden="true"
                              className="mt-[0.45em] shrink-0 w-3 h-px bg-black/20 group-hover:bg-black/40 transition-colors duration-300"
                            />
                            <span className="text-sm text-gray-500 font-light leading-relaxed">
                              {h}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Projects Carousel */}
      <ProjectsCarousel />

      {/* Skills Section */}
      <section id="skills" className="py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-20">
            <h2 className="text-xs font-medium uppercase tracking-[0.2em] text-gray-400 mb-4">Technical Stack</h2>
            <h3 className="text-4xl">Tools of the trade</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SKILL_GROUPS.map((group, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -5 }}
                tabIndex={0}
                className="p-8 border border-black/5 bg-[#FAFAFA] hover:bg-white hover:border-black/10 active:shadow-inner focus:shadow-inner focus:outline-none transition-all duration-300 cursor-pointer"
              >
                <div className="flex items-center gap-3 mb-8 text-gray-400">
                  {group.icon}
                  <h4 className="text-[10px] font-medium uppercase tracking-[0.2em]">{group.category}</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill, sIdx) => (
                    <span 
                      key={sIdx} 
                      className="text-sm font-light px-3 py-1.5 bg-white border border-black/5 text-gray-600 hover:border-black/20 hover:text-black transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 border-t border-black/5 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-xs font-medium uppercase tracking-[0.2em] text-gray-400 mb-4">Get in touch</h2>
            <h3 className="text-4xl md:text-6xl tracking-tight">Let&apos;s <span className="bg-black text-white px-2">collaborate.</span></h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <a 
              href="mailto:ddtardian@gmail.com" 
              className="group p-8 border border-black/5 hover:border-black/20 transition-all duration-300 flex flex-col items-center text-center"
            >
              <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center mb-6 group-hover:bg-black group-hover:text-white transition-all duration-300">
                <Mail size={20} />
              </div>
              <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-gray-400 mb-2">Email</span>
              <span className="text-sm font-light break-all">ddtardian@gmail.com</span>
            </a>

            <a 
              href="tel:+6285711868824" 
              className="group p-8 border border-black/5 hover:border-black/20 transition-all duration-300 flex flex-col items-center text-center"
            >
              <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center mb-6 group-hover:bg-black group-hover:text-white transition-all duration-300">
                <Phone size={20} />
              </div>
              <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-gray-400 mb-2">Phone</span>
              <span className="text-sm font-light">+62 857 1186 8824</span>
            </a>

            <a 
              href="https://www.linkedin.com/in/dayu-dayusman-tardian-1858b9118" 
              target="_blank"
              rel="noopener noreferrer"
              className="group p-8 border border-black/5 hover:border-black/20 transition-all duration-300 flex flex-col items-center text-center"
            >
              <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center mb-6 group-hover:bg-black group-hover:text-white transition-all duration-300">
                <Linkedin size={20} />
              </div>
              <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-gray-400 mb-2">LinkedIn</span>
              <span className="text-sm font-light">Dayu Dayusman Tardian</span>
            </a>

            <a 
              href="https://github.com/dayuss" 
              target="_blank"
              rel="noopener noreferrer"
              className="group p-8 border border-black/5 hover:border-black/20 transition-all duration-300 flex flex-col items-center text-center"
            >
              <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center mb-6 group-hover:bg-black group-hover:text-white transition-all duration-300">
                <Github size={20} />
              </div>
              <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-gray-400 mb-2">GitHub</span>
              <span className="text-sm font-light">dayuss</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-black/5">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-medium uppercase tracking-[0.2em] text-gray-400">
          <div>© {new Date().getFullYear()} Dayu Dayusman Tardian</div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-black transition-colors">Privacy</a>
            <a href="#" className="hover:text-black transition-colors">Terms</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
