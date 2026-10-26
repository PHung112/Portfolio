import { useState } from "react";

const projects = [
  {
    id: "genzite",
    title: "Genzite — AI-Assisted No-Code Website Builder",
    role: "Frontend Developer (Capstone Project)",
    roleBadgeColor: "bg-emerald-500/10 text-emerald-700 border-emerald-500/20",
    category: "no-code-builder",
    categoryLabel: "No-Code & Gemini",
    summary:
      "A web-based visual website builder where users can arrange UI components via drag-and-drop, manage dynamic content schemas, and use Google Gemini API to generate page layout drafts from text descriptions.",
    image: "/project2.png",
    githubBE: "https://github.com/KrisCTer/Genzite",
    githubFE: null,
    githubMain: "https://github.com/KrisCTer/Genzite",
    webHighlights: [
      {
        title: "Visual Drag-and-Drop Canvas",
        desc: "Interactive editor built with React, TypeScript, and Tailwind CSS, allowing users to add, reorder, and configure widgets with live preview.",
      },
      {
        title: "Dynamic Content Schemas (PostgreSQL)",
        desc: "Stores user-defined collections and form fields as structured JSON in PostgreSQL, allowing custom schemas without altering database tables.",
      },
      {
        title: "Direct S3 Image Uploads (Presigned URLs)",
        desc: "Generates AWS S3 Presigned URLs from the backend so the client uploads media directly to S3, reducing file transfer load on the server.",
      },
      {
        title: "Admin Dashboard & Authentication",
        desc: "Management console for viewing registered users, checking service status, and securing endpoints using JWT-based authentication.",
      },
    ],
    aiHighlights: [
      {
        title: "Text-to-Layout via Google Gemini API",
        desc: "Sends user prompt descriptions to Google Gemini API with a structured prompt, receives a JSON schema of the page layout, and parses it onto the canvas.",
      },
      {
        title: "Basic Token & Usage Logging",
        desc: "Logs prompt and response token counts from Gemini API responses into the database to track usage and estimate API costs.",
      },
      {
        title: "Asynchronous Request Handling",
        desc: "Handles AI generation calls asynchronously so the UI remains interactive and responsive while waiting for the Gemini API response.",
      },
      {
        title: "AI-Assisted Coding Workflow",
        desc: "Used ChatGPT and AI developer tools during development to speed up component refactoring, TypeScript typing, and writing test cases.",
      },
    ],
    cvBulletPoints: [
      "Developed a visual website builder using React, TypeScript, and Tailwind CSS, supporting drag-and-drop widget placement and real-time canvas preview.",
      "Integrated Google Gemini API with structured prompt engineering to generate JSON-formatted page layouts from user text descriptions and render them onto the canvas.",
      "Implemented direct image uploads to AWS S3 using Presigned URLs, reducing server file-handling overhead and improving upload speed.",
      "Built a basic token tracking dashboard to log Gemini API token counts and track API usage per user.",
      "Connected frontend components to a Node.js backend using RESTful APIs, securing endpoints with JWT-based authentication.",
    ],
    tags: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Google Gemini API",
      "Node.js",
      "PostgreSQL",
      "AWS S3",
      "Docker",
    ],
  },
  {
    id: "worksys",
    title: "WorkSys — Smart Task Management & AI Project Copilot",
    role: "Fullstack Developer (Personal Project)",
    roleBadgeColor: "bg-blue-500/10 text-blue-700 border-blue-500/20",
    category: "kanban-realtime",
    categoryLabel: "Kanban & Real-Time",
    summary:
      "A full-stack collaborative project management platform featuring drag-and-drop Kanban boards, real-time WebSocket state synchronization, and Gemini API for automated task decomposition (WBS).",
    image: "/project3.png",
    githubBE: "https://github.com/PHung112/WorkSys",
    githubFE: null,
    githubMain: "https://github.com/PHung112/WorkSys",
    webHighlights: [
      {
        title: "Interactive Kanban Board (DnD)",
        desc: "Implemented with @hello-pangea/dnd for fluid drag-and-drop cards across To Do, In Progress, Review, and Done columns.",
      },
      {
        title: "Real-Time Collaboration (WebSocket / STOMP)",
        desc: "Used SockJS and STOMP protocol to broadcast task moves, comments, and status changes instantly to all project members without page reload.",
      },
      {
        title: "Full-Stack Architecture (React + Spring Boot)",
        desc: "Built the frontend with React and Tailwind CSS, backed by a Spring Boot (Java 17) backend with Spring Data JPA and Spring Security (JWT).",
      },
      {
        title: "Redis Caching & GitHub Webhook",
        desc: "Applied Redis Cache-Aside pattern for fast task board loading and connected GitHub Webhooks to display linked commits on task cards.",
      },
    ],
    aiHighlights: [
      {
        title: "Task Decomposition (WBS with Gemini 2.5 Flash)",
        desc: "Sends feature descriptions to Google Gemini API to break high-level goals into 3–6 actionable sub-tasks returned as a clean JSON array (title, estimate, priority).",
      },
      {
        title: "Review & 1-Click Batch Insertion Modal",
        desc: "Displays an interactive modal for project managers to review and edit AI-suggested sub-tasks before batch-saving them to the database and broadcasting via WebSocket.",
      },
      {
        title: "Context-Aware Project Assistant Chatbot",
        desc: "Provided an API endpoint feeding project task statistics to Gemini API, allowing users to ask questions about overdue tasks and project bottlenecks.",
      },
      {
        title: "Structured Markdown Rendering",
        desc: "Used react-markdown to render AI responses cleanly with lists, tables, and highlighted sections for easy readability.",
      },
    ],
    cvBulletPoints: [
      "Built a full-stack project management app using React, Tailwind CSS, and Spring Boot, featuring an interactive drag-and-drop Kanban board.",
      "Synchronized real-time task updates across team members using WebSocket (STOMP protocol) without requiring page refreshes.",
      "Integrated Google Gemini API to analyze feature goals and automatically break them down into 3–6 actionable sub-tasks (WBS) formatted as JSON.",
      "Developed a task preview modal allowing users to review and edit AI suggestions before batch-saving to the database.",
      "Applied Redis caching (Cache-Aside pattern) for fast task board retrieval and connected GitHub Webhooks to link repository activity with tasks.",
    ],
    tags: [
      "React",
      "Tailwind CSS",
      "Spring Boot",
      "Java",
      "Google Gemini API",
      "WebSocket (STOMP)",
      "Redis",
      "PostgreSQL",
      "GitHub Webhooks",
    ],
  },
  {
    id: "documentsharing",
    title: "DocumentSharing — Academic Material Platform & AI Study Assistant",
    role: "Frontend Developer (Academic Project)",
    roleBadgeColor: "bg-purple-500/10 text-purple-700 border-purple-500/20",
    category: "study-assistant",
    categoryLabel: "Academic & Assistant",
    summary:
      "A document-sharing web application for students featuring a multi-step upload wizard, client-side image compression, embedded PDF viewer, and a Gemini-powered study assistant.",
    image: "/project1.png",
    githubBE: "https://github.com/Felix5124/DocumentSharingAPI",
    githubFE: "https://github.com/Felix5124/document-sharing-frontend",
    githubMain: "https://github.com/Felix5124/document-sharing-frontend",
    webHighlights: [
      {
        title: "Multi-Step Document Upload Wizard",
        desc: "Structured step-by-step form with client-side image compression using HTML Canvas, reducing uploaded image sizes before sending to server.",
      },
      {
        title: "In-Browser PDF Viewer",
        desc: "Embedded PDF previewer allowing students to read documents directly within the browser without having to download files first.",
      },
      {
        title: "4-Stage Moderation Workflow",
        desc: "Built UI screens reflecting 4 document lifecycle states (Pending, SemiApproved, Approved, Rejected) and a user violation reporting modal.",
      },
      {
        title: "Dynamic VietQR Payments & Optimization",
        desc: "Integrated dynamic VietQR code generation for VIP account upgrades and optimized UI responsiveness with search input debouncing and React memoization.",
      },
    ],
    aiHighlights: [
      {
        title: "DocShare AI Assistant Widget",
        desc: "Built a floating chatbot component calling Google Gemini API to help students answer questions regarding study documents and site features.",
      },
      {
        title: "Contextual Quick-Replies",
        desc: "Horizontal scrollable chips providing 1-click prompts for common questions such as download quotas and popular subject documents.",
      },
      {
        title: "Markdown Response Formatting",
        desc: "Parsed and displayed structured answers using Markdown for clean, readable bullet points and step-by-step academic explanations.",
      },
    ],
    cvBulletPoints: [
      "Built a responsive student document-sharing web app using React and Tailwind CSS, featuring a multi-step upload form and embedded PDF viewer.",
      "Implemented client-side image compression before upload, reducing image payload sizes and saving network bandwidth.",
      "Developed a floating AI assistant widget using Google Gemini API to help students query study materials and platform guidance.",
      "Integrated dynamic VietQR generation for VIP subscription checkout and automated transaction status checking.",
      "Optimized frontend responsiveness using search debouncing, route lazy loading, and React memoization hooks.",
    ],
    tags: [
      "React",
      "Tailwind CSS",
      "Google Gemini API",
      "PDF Viewer",
      "Client Compression",
      "VietQR",
      "RESTful API",
      "Firebase Auth",
    ],
  },
];

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [expandedCV, setExpandedCV] = useState({});

  const toggleCV = (id) => {
    setExpandedCV((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section
      className="py-section_gap px-margin_mobile md:px-margin_desktop bg-background"
      id="projects"
    >
      <div className="max-w-container_max w-full mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary font-label-md text-xs mb-3">
              <span className="material-symbols-outlined text-sm">laptop_mac</span>
              Featured Projects
            </div>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-on-surface">
              Practical Web &amp; AI Projects
            </h2>
            <p className="text-on-surface-variant text-base mt-2 max-w-2xl">
              Web applications built with React, Spring Boot, and Node.js, featuring hands-on integration with Google Gemini API for practical user features.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setActiveCategory("all")}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                activeCategory === "all"
                  ? "bg-primary text-on-primary shadow-sm"
                  : "bg-surface-container hover:bg-surface-container-high text-on-surface-variant"
              }`}
            >
              All Projects ({projects.length})
            </button>
            <button
              onClick={() => setActiveCategory("no-code-builder")}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                activeCategory === "no-code-builder"
                  ? "bg-primary text-on-primary shadow-sm"
                  : "bg-surface-container hover:bg-surface-container-high text-on-surface-variant"
              }`}
            >
              No-Code Builder
            </button>
            <button
              onClick={() => setActiveCategory("kanban-realtime")}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                activeCategory === "kanban-realtime"
                  ? "bg-primary text-on-primary shadow-sm"
                  : "bg-surface-container hover:bg-surface-container-high text-on-surface-variant"
              }`}
            >
              Kanban &amp; Real-Time
            </button>
            <button
              onClick={() => setActiveCategory("study-assistant")}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                activeCategory === "study-assistant"
                  ? "bg-primary text-on-primary shadow-sm"
                  : "bg-surface-container hover:bg-surface-container-high text-on-surface-variant"
              }`}
            >
              Document &amp; Study
            </button>
          </div>
        </div>

        {/* Project Cards List */}
        <div className="flex flex-col gap-12">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group rounded-2xl border border-outline-variant/80 bg-surface-container-lowest overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              {/* Card Top Banner / Role & Title */}
              <div className="p-6 md:p-8 border-b border-outline-variant/60 bg-gradient-to-r from-surface-container-low to-surface-container-lowest flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex flex-col gap-2">
                  <div className="flex flex-wrap items-center gap-3">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold border ${project.roleBadgeColor}`}
                    >
                      {project.role}
                    </span>
                    <span className="text-xs font-medium text-outline">
                      Project #{index + 1}
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-on-surface group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                </div>

                {/* External Links */}
                <div className="flex flex-wrap items-center gap-3 shrink-0">
                  {project.githubBE && (
                    <a
                      href={project.githubBE}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-surface-container text-on-surface hover:text-primary hover:bg-surface-container-high transition-colors text-sm font-medium border border-outline-variant/60"
                      title="Backend Repository"
                    >
                      <span className="material-symbols-outlined text-base">code</span>
                      {project.githubFE ? "Backend Repo" : "GitHub Repo"}
                    </a>
                  )}
                  {project.githubFE && (
                    <a
                      href={project.githubFE}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-surface-container text-on-surface hover:text-primary hover:bg-surface-container-high transition-colors text-sm font-medium border border-outline-variant/60"
                      title="Frontend Repository"
                    >
                      <span className="material-symbols-outlined text-base">web</span>
                      Frontend Repo
                    </a>
                  )}
                </div>
              </div>

              {/* Main Content: 2 Columns */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 md:p-8">
                {/* Left: Image & Project Summary (5 cols) */}
                <div className="lg:col-span-5 flex flex-col gap-5">
                  <div className="relative rounded-xl overflow-hidden border border-outline-variant/80 aspect-video lg:aspect-[4/3] bg-surface-container shadow-inner group/img">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-top transform group-hover/img:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 pointer-events-none"></div>
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs font-medium">
                      <span className="flex items-center gap-1 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-md">
                        <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                        Hands-on Project
                      </span>
                    </div>
                  </div>

                  <p className="text-on-surface-variant text-sm md:text-base leading-relaxed bg-surface-container/60 p-4 rounded-xl border border-outline-variant/50">
                    {project.summary}
                  </p>

                  {/* Tech Stack Pills */}
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-outline mb-2.5">
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded-md text-xs font-medium bg-surface-container-high text-on-surface border border-outline-variant/40 hover:border-primary transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right: Dual Highlights (7 cols) */}
                <div className="lg:col-span-7 flex flex-col gap-6">
                  {/* Web & AI Highlights Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {/* Web Highlights Column */}
                    <div className="p-5 rounded-xl border border-primary/20 bg-primary/5 flex flex-col gap-3">
                      <div className="flex items-center gap-2 text-primary font-bold text-sm">
                        <span className="material-symbols-outlined text-lg">devices</span>
                        Web Highlights
                      </div>
                      <div className="space-y-3">
                        {project.webHighlights.map((item, i) => (
                          <div key={i} className="text-xs">
                            <span className="font-semibold text-on-surface block">
                              • {item.title}:
                            </span>
                            <span className="text-on-surface-variant leading-relaxed">
                              {item.desc}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* AI Highlights Column */}
                    <div className="p-5 rounded-xl border border-secondary/20 bg-secondary/5 flex flex-col gap-3">
                      <div className="flex items-center gap-2 text-secondary font-bold text-sm">
                        <span className="material-symbols-outlined text-lg">psychology</span>
                        Gemini AI Features
                      </div>
                      <div className="space-y-3">
                        {project.aiHighlights.map((item, i) => (
                          <div key={i} className="text-xs">
                            <span className="font-semibold text-on-surface block">
                              • {item.title}:
                            </span>
                            <span className="text-on-surface-variant leading-relaxed">
                              {item.desc}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Recruiter-Ready CV Bullet Points Dropdown */}
                  <div className="border border-outline-variant/70 rounded-xl overflow-hidden bg-surface-container-low/40">
                    <button
                      onClick={() => toggleCV(project.id)}
                      className="w-full px-5 py-3.5 flex items-center justify-between text-left hover:bg-surface-container/60 transition-colors"
                    >
                      <span className="flex items-center gap-2 text-sm font-bold text-on-surface">
                        <span className="material-symbols-outlined text-primary text-base">
                          assignment_turned_in
                        </span>
                        Key Responsibilities &amp; Highlights
                      </span>
                      <span className="flex items-center gap-1 text-xs font-semibold text-primary">
                        {expandedCV[project.id] ? "Hide Details" : "View Contributions"}
                        <span
                          className={`material-symbols-outlined text-base transition-transform duration-200 ${
                            expandedCV[project.id] ? "rotate-180" : ""
                          }`}
                        >
                          expand_more
                        </span>
                      </span>
                    </button>

                    {expandedCV[project.id] && (
                      <div className="px-5 py-4 border-t border-outline-variant/60 bg-surface-container-lowest">
                        <ul className="space-y-2.5">
                          {project.cvBulletPoints.map((bullet, bIdx) => (
                            <li
                              key={bIdx}
                              className="text-xs md:text-sm text-on-surface-variant flex items-start gap-2.5 leading-relaxed"
                            >
                              <span className="text-primary mt-1 text-xs shrink-0">
                                ➔
                              </span>
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Summary Matrix */}
        <div className="mt-16 p-8 rounded-2xl border border-outline-variant/80 bg-surface-container-lowest">
          <div className="flex items-center gap-3 mb-6">
            <span className="material-symbols-outlined text-primary text-2xl">
              table_chart
            </span>
            <div>
              <h3 className="text-xl font-bold text-on-surface">
                Quick Project Summary
              </h3>
              <p className="text-sm text-on-surface-variant">
                Overview of my contributions across frontend, backend, and Gemini AI integration
              </p>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs md:text-sm">
              <thead>
                <tr className="border-b border-outline-variant bg-surface-container">
                  <th className="p-3.5 font-bold text-on-surface">Project</th>
                  <th className="p-3.5 font-bold text-on-surface">My Role</th>
                  <th className="p-3.5 font-bold text-on-surface">Web Highlights</th>
                  <th className="p-3.5 font-bold text-on-surface">Gemini AI Highlights</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant/60">
                <tr className="hover:bg-surface-container-low transition-colors">
                  <td className="p-3.5 font-bold text-primary">1. Genzite</td>
                  <td className="p-3.5 font-medium text-on-surface">
                    Frontend Developer (Capstone Project)
                  </td>
                  <td className="p-3.5 text-on-surface-variant">
                    Drag-and-Drop Canvas, Dynamic JSON schemas (PostgreSQL), S3 Presigned URLs, Admin Console
                  </td>
                  <td className="p-3.5 text-on-surface-variant">
                    Calls Gemini API with structured prompts to generate page layout JSON, logs basic token counts
                  </td>
                </tr>
                <tr className="hover:bg-surface-container-low transition-colors">
                  <td className="p-3.5 font-bold text-primary">2. WorkSys</td>
                  <td className="p-3.5 font-medium text-on-surface">
                    Fullstack Developer (Personal Project)
                  </td>
                  <td className="p-3.5 text-on-surface-variant">
                    Kanban Board (DnD), Real-time WebSocket/STOMP, Redis Cache-Aside, GitHub Webhook
                  </td>
                  <td className="p-3.5 text-on-surface-variant">
                    Uses Gemini 2.5 Flash to decompose features into 3–6 sub-tasks (WBS JSON), project assistant chatbot
                  </td>
                </tr>
                <tr className="hover:bg-surface-container-low transition-colors">
                  <td className="p-3.5 font-bold text-primary">3. DocumentSharing</td>
                  <td className="p-3.5 font-medium text-on-surface">
                    Frontend Developer (Academic Project)
                  </td>
                  <td className="p-3.5 text-on-surface-variant">
                    Multi-step Wizard, Client-side Image Compression, Embedded PDF Viewer, VietQR Checkout
                  </td>
                  <td className="p-3.5 text-on-surface-variant">
                    DocShare AI Assistant with Gemini API, quick-reply chips, Markdown rendering for study answers
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* GitHub Call to Action */}
        <div className="flex justify-center mt-12">
          <a
            href="https://github.com/PHung112"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3.5 rounded-xl border border-primary text-primary hover:bg-primary/10 transition-colors font-semibold inline-flex items-center gap-2 shadow-sm"
          >
            <span className="material-symbols-outlined">terminal</span>
            View My Repositories on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
