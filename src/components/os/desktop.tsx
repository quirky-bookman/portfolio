"use client";

import { useState } from "react";
import Shortcut from "./shortcut";
import { Window } from "./window";

export function Desktop() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isAboutMeOpen, setIsAboutMeOpen] = useState(false);

  return (
    <div>
      <Shortcut label="Resume.pdf" icon={<span className="text-4xl">📄</span>} onClick={() => setIsResumeOpen(true)} />

      {/* <Shortcut label="Resume.pdf" icon={<span className="text-4xl">📄</span>} /> */}

      <Shortcut label="About Me" icon={<span className="text-4xl">👤</span>} onClick={() => setIsAboutMeOpen(true)} />

      <Shortcut label="Projects" icon={<span className="text-4xl">📁</span>} />

      <Shortcut label="Settings" icon={<span className="text-4xl">⚙️</span>} />

      <Window isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} title="Resume.pdf" icon="📄">
        <div className="prose prose-invert">
          <p>PDF фрейм...</p>
        </div>
      </Window>

      <Window isOpen={isAboutMeOpen} onClose={() => setIsAboutMeOpen(false)} title="About Me" icon="👤">
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
  );
}
