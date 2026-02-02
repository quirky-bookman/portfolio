"use client";

import { useState, useEffect, createContext, ReactNode, useContext } from "react";
import Shortcut from "./shortcut";
import { Window } from "./window";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { LoadingScreen } from "./loading-screen";
import Link from "next/link";

export const DesktopContext = createContext<{
  isResumeOpen: boolean;
  setIsResumeOpen: (value: boolean) => void;
  isAboutMeOpen: boolean;
  setIsAboutMeOpen: (value: boolean) => void;
  isProjectsOpen: boolean;
  setIsProjectsOpen: (value: boolean) => void;
  activeWindow: string | null;
  setActiveWindow: (windowId: string | null) => void;
} | null>(null);

export function DesktopProvider({ children }: { children: ReactNode }) {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isAboutMeOpen, setIsAboutMeOpen] = useState(false);
  const [isProjectsOpen, setIsProjectsOpen] = useState(false);
  const [activeWindow, setActiveWindow] = useState<string | null>(null);

  return <DesktopContext.Provider value={{ isResumeOpen, setIsResumeOpen, isAboutMeOpen, setIsAboutMeOpen, isProjectsOpen, setIsProjectsOpen, activeWindow, setActiveWindow }}>{children}</DesktopContext.Provider>;
}

export function Desktop() {
  const [showLoading, setShowLoading] = useState(true);
  const [basePath] = useState(() => process.env.NEXT_PUBLIC_BASE_PATH || "");
  const context = useContext(DesktopContext);

  if (!context) {
    return null;
  }

  const { isResumeOpen, setIsResumeOpen, isAboutMeOpen, setIsAboutMeOpen, isProjectsOpen, setIsProjectsOpen, activeWindow, setActiveWindow } = context;

  return (
    <>
      <div>
        <LoadingScreen onComplete={() => setShowLoading(false)} duration={5000} />

        <Shortcut label="Resume.pdf" icon={<span className="text-4xl">📄</span>} onClick={() => setIsResumeOpen(true)} />

        <Shortcut label="About Me" icon={<span className="text-4xl">👤</span>} onClick={() => setIsAboutMeOpen(true)} />

        <Shortcut label="Projects" icon={<span className="text-4xl">📁</span>} onClick={() => setIsProjectsOpen(true)} />

        <Window isOpen={isProjectsOpen} onClose={() => setIsProjectsOpen(false)} title="Resume.pdf" icon="📄" windowId="projects">
          <div className="prose prose-invert">
            <div className="max-w-4xl mx-auto p-6 bg-black text-gray-300">
              <h2 className="text-2xl font-bold mb-10 text-white border-b border-gray-800 pb-4">Projects</h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="md:col-span-1 flex flex-col justify-start">
                  <h3 className="text-xl font-semibold text-white mb-2">Speedrack West</h3>
                  <a href="https://www.speedrackwest.com/" target="_blank" className="flex items-center text-blue-400 hover:text-blue-300 transition-colors group">
                    Visit Website
                    <ExternalLink className="h-4 w-4 ml-1 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </a>
                </div>

                <div className="md:col-span-2">
                  <ul className="space-y-2 text-sm md:text-base leading-relaxed">
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      Custom front-end development and precise layout coding (HTML/CSS).
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      Developed interactive UI elements and interface logic using JavaScript.
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      Full integration of custom-coded templates into the WordPress ecosystem.
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      Advanced WordPress configuration, including complex plugin management and fine-tuning.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="md:col-span-1 flex flex-col justify-start">
                  <h3 className="text-xl font-semibold text-white mb-2">Fuego Camina Conmigo</h3>
                  <a href="https://fuegocaminaconmigo.com/en/" target="_blank" className="flex items-center text-blue-400 hover:text-blue-300 transition-colors group">
                    Visit Website
                    <ExternalLink className="h-4 w-4 ml-1 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </a>
                </div>

                <div className="md:col-span-2">
                  <ul className="space-y-2 text-sm md:text-base leading-relaxed">
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      Responsive front-end development based on provided design.
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      WordPress theme integration and customization.
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      Implementation of sliders using Swiper.js.
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      Smooth animations and interactions powered by GSAP.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="md:col-span-1 flex flex-col justify-start">
                  <h3 className="text-xl font-semibold text-white mb-2">Samkaup</h3>
                  <a href="https://www.samkaup.is/" target="_blank" className="flex items-center text-blue-400 hover:text-blue-300 transition-colors group">
                    Visit Website
                    <ExternalLink className="h-4 w-4 ml-1 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </a>
                </div>

                <div className="md:col-span-2">
                  <ul className="space-y-2 text-sm md:text-base leading-relaxed">
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      Pixel-perfect layout development for WordPress.
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      Scroll-based animations using ScrollReveal.
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      Media galleries and modals implemented with Fancybox.
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      Interactive sliders built with Swiper.js.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="md:col-span-1 flex flex-col justify-start">
                  <h3 className="text-xl font-semibold text-white mb-2">Recrea Gastronomia</h3>
                  <a href="https://recreagastronomia.com/" target="_blank" className="flex items-center text-blue-400 hover:text-blue-300 transition-colors group">
                    Visit Website
                    <ExternalLink className="h-4 w-4 ml-1 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </a>
                </div>

                <div className="md:col-span-2">
                  <ul className="space-y-2 text-sm md:text-base leading-relaxed">
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      Custom WordPress-based layout development.
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      Theme integration and content structure setup.
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      Configuration and customization of Contact Form 7.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="md:col-span-1 flex flex-col justify-start">
                  <h3 className="text-xl font-semibold text-white mb-2">Carnet Barcelona</h3>
                  <a href="https://carnetbarcelona.com/" target="_blank" className="flex items-center text-blue-400 hover:text-blue-300 transition-colors group">
                    Visit Website
                    <ExternalLink className="h-4 w-4 ml-1 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </a>
                </div>

                <div className="md:col-span-2">
                  <ul className="space-y-2 text-sm md:text-base leading-relaxed">
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      Front-end layout development tailored for WordPress.
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      Theme integration and responsive optimization.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="md:col-span-1 flex flex-col justify-start">
                  <h3 className="text-xl font-semibold text-white mb-2">Premios ADCV</h3>
                  <a href="https://premiosadcv.com/" target="_blank" className="flex items-center text-blue-400 hover:text-blue-300 transition-colors group">
                    Visit Website
                    <ExternalLink className="h-4 w-4 ml-1 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </a>
                </div>

                <div className="md:col-span-2">
                  <ul className="space-y-2 text-sm md:text-base leading-relaxed">
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      WordPress-oriented front-end layout development.
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      Integration of custom templates into CMS structure.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="md:col-span-1 flex flex-col justify-start">
                  <h3 className="text-xl font-semibold text-white mb-2">Conrent Tramway</h3>
                  <a href="https://www.conrentramway.com/" target="_blank" className="flex items-center text-blue-400 hover:text-blue-300 transition-colors group">
                    Visit Website
                    <ExternalLink className="h-4 w-4 ml-1 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </a>
                </div>

                <div className="md:col-span-2">
                  <ul className="space-y-2 text-sm md:text-base leading-relaxed">
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      Layout development and WordPress integration.
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      Plugin setup and configuration according to project needs.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="md:col-span-1 flex flex-col justify-start">
                  <h3 className="text-xl font-semibold text-white mb-2">Anamas Projects</h3>
                  <a href="https://www.anamasprojects.com/" target="_blank" className="flex items-center text-blue-400 hover:text-blue-300 transition-colors group">
                    Visit Website
                    <ExternalLink className="h-4 w-4 ml-1 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </a>
                </div>

                <div className="md:col-span-2">
                  <ul className="space-y-2 text-sm md:text-base leading-relaxed">
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      Custom WordPress layout development.
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      Plugin configuration and performance fine-tuning.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-1 flex flex-col justify-start">
                  <h3 className="text-xl font-semibold text-white mb-2">Batlle i Roig</h3>
                  <a href="https://www.batlleiroig.com/" target="_blank" className="flex items-center text-blue-400 hover:text-blue-300 transition-colors group">
                    Visit Website
                    <ExternalLink className="h-4 w-4 ml-1 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </a>
                </div>

                <div className="md:col-span-2">
                  <ul className="space-y-2 text-sm md:text-base leading-relaxed">
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      Front-end layout development for WordPress CMS.
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      Plugin setup and site functionality configuration.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Window>

        <Window isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} title="Resume.pdf" icon="📄" windowId="resume">
          <div className="prose prose-invert">
            <iframe src={`${basePath}/sd.pdf`} width="100%" height="900px">
              Your browser does not support viewing PDF files.
              <a href={`${basePath}/sd.pdf`}>Download the file</a> to view it.
            </iframe>
            <div className="flex justify-center pt-5">
              <Button variant="secondary" size="sm" aria-label="Submit" asChild>
                <Link href={`${basePath}/sd.pdf`} target="_blank" aria-label="Download PDF">
                  Download pdf file
                </Link>
              </Button>
            </div>
          </div>
        </Window>

        <Window isOpen={isAboutMeOpen} onClose={() => setIsAboutMeOpen(false)} title="About Me" icon="👤" windowId="about">
          <div className="prose prose-invert">
            <header className="mb-10">
              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">Serhii Demchyshyn</h1>
              <p className="mt-2 text-lg text-gray-400">Frontend Developer</p>
            </header>

            <div className="space-y-10">
              <div>
                <h2 className="text-xl font-semibold mb-3">About</h2>
                <p className="leading-relaxed">I’m a frontend developer with professional experience since 2020. I work at the intersection of engineering, design, and user experience, building modern, fast, and thoughtfully crafted web interfaces.</p>
                <p className="mt-4 leading-relaxed">For me, quality code is not just about technology — it’s about responsibility, clarity, and long-term product value. I believe great products emerge when technical decisions support the idea rather than get in its way.</p>
                <p className="mt-4 leading-relaxed">I’m comfortable working end-to-end: from understanding the problem and shaping the solution to thinking about scalability, maintainability, and future growth.</p>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-3">Current</h2>
                <p className="leading-relaxed">Frontend developer focused on building user interfaces for web products, design systems, and UI architecture.</p>
                <p className="mt-4 leading-relaxed">I work with a modern frontend stack and continuously improve my skills, keeping up with the evolution of web technologies.</p>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-3">Experience</h2>
                <ul className="list-disc list-inside space-y-2">
                  <li>Frontend development experience since 2020</li>
                  <li>Building responsive, accessible, and performant interfaces</li>
                  <li>Close collaboration with design and product teams</li>
                  <li>Strong focus on clean architecture and readable code</li>
                </ul>
              </div>

              {/* <div>
              <p className="font-medium">If you’re looking to build a thoughtful, modern web product — I’d be happy to connect.</p>
              <a href="#contact" className="inline-block mt-4 text-indigo-600 font-semibold hover:text-indigo-800 transition">
                Get in touch →
              </a>
            </div> */}
            </div>
          </div>
        </Window>
      </div>
    </>
  );
}
