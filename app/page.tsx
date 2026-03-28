'use client';

import Image from 'next/image';
import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { initializeFirebase } from '../lib/firebase';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Code2, 
  Database, 
  Layers, 
  Terminal,
  ArrowUpRight,
  MapPin,
  Phone
} from 'lucide-react';

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

const EXPERIENCE = [
  {
    role: "Backend Developer",
    company: "PT. Elektronik Distribusi Otomasi Terkemuka (eDot)",
    period: "02/2023 – Present",
    location: "Bandung, West Java",
    highlights: [
      "Revamped the chat application by adopting a microservices-based architecture.",
      "Optimized real-time communication features, resulting in an 80% enhancement in UX.",
      "Integrated Redis Stack to boost RESTful API performance (response times < 50ms).",
      "Implemented hexagonal architecture for clean code and maintainability."
    ]
  },
  {
    role: "Backend Developer",
    company: "Bas-It Studio",
    period: "08/2022 – 02/2023",
    location: "Bandung, West Java",
    highlights: [
      "Improved deployment process by implementing CI/CD pipelines using Jenkins.",
      "Led daily progress updates and facilitated team discussions on bug fixes.",
      "Optimized code structure for clean code practices and data efficiency using MongoDB."
    ]
  },
  {
    role: "Fullstack Developer",
    company: "PT Netindo Mediatama Perkasa",
    period: "10/2019 – 07/2022",
    location: "Bandung, West Java",
    highlights: [
      "Revamped POS API using ExpressJS and redesigned admin dashboard using ReactJS.",
      "Developed MLM application APIs and optimized backend logic.",
      "Integrated secure payment gateway using Xendit Service API (50% reduction in processing time).",
      "Managed a team of 4 engineers, resulting in a 20% increase in productivity."
    ]
  }
];

export default function PortfolioPage() {
  useEffect(() => {
    initializeFirebase();
  }, []);

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
                A Backend Engineer crafting high-performance systems and scalable architectures with over 7 years of experience.
              </p>
              <div className="flex flex-wrap gap-6 items-center">
                <a 
                  href="#contact"
                  className="bg-black text-white px-10 py-5 text-sm font-medium hover:bg-gray-900 transition-all hover:px-12"
                >
                  Work with me
                </a>
                <a
                  href="https://drive.google.com/drive/folders/1jSYre7nR0OWpGdFqZ7BLPvU8cW_Z1PBI?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
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
              <p className="text-3xl md:text-4xl font-light leading-tight mb-12">
                &quot;I believe that great software isn&apos;t just about code—it&apos;s about building <span className="text-gray-400 italic">resilient systems</span> that solve real-world problems at scale.&quot;
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-sm font-medium uppercase tracking-widest mb-4">Philosophy</h3>
                  <p className="text-gray-500 leading-relaxed font-light">
                    My approach is rooted in clean architecture and performance optimization. I strive for simplicity in complex systems, ensuring scalability without sacrificing maintainability.
                  </p>
                </div>
                <div>
                  <h3 className="text-sm font-medium uppercase tracking-widest mb-4">Background</h3>
                  <p className="text-gray-500 leading-relaxed font-light">
                    With a Bachelor&apos;s in Informatics Engineering and a GPA of 3.56, I&apos;ve spent the last 7 years navigating the complexities of backend ecosystems and team leadership.
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

          <div className="space-y-px bg-black/5 border border-black/5">
            {EXPERIENCE.map((exp, idx) => (
              <div 
                key={idx}
                className="group bg-white p-8 md:p-12 hover:bg-gray-50 transition-colors"
              >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                  <div className="md:col-span-3 text-sm text-gray-400 font-mono">
                    {exp.period}
                  </div>
                  <div className="md:col-span-6">
                    <h4 className="text-2xl mb-2">{exp.role}</h4>
                    <div className="text-gray-400 mb-6">{exp.company}</div>
                    <ul className="space-y-3">
                      {exp.highlights.map((h, i) => (
                        <li key={i} className="text-sm text-gray-500 leading-relaxed flex gap-3">
                          <span className="text-black/20">•</span> {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="md:col-span-3 text-right hidden md:block">
                    <div className="text-xs text-gray-400 uppercase tracking-widest">{exp.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

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
            <h3 className="text-4xl md:text-6xl tracking-tight">Let&apos;s collaborate.</h3>
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
