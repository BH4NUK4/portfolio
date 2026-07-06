import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const projects = [
  {
    title: "BMI calculator",
    description:
      "A mobile application developed with Flutter that calculates Body Mass Index (BMI) based on user inputs. This project helped me build a strong foundation in Flutter development by understanding widget trees, state management, UI composition, and implementing simple application logic.",
    image: "/project-ss/bmi.png",
    tags: ["Flutter", "Dart"],
    link: "#",
    github: "https://github.com/BH4NUK4/BMICalculator--learn",
  },
  {
    title: "AI Student Assitant",
    description:
      "A university group project designed to assist students with academic tasks using AI powered features. Within this project I contributed by designing and implementing multiple user interface components, focusing on responsive layouts, usability, and maintaining a consistent user experience across the application.",
    image: "/project-ss/ai-assistant.png",
    tags: ["Flutter", "Dart", "Python", "FastAPI"],
    link: "#",
    github: "https://github.com/BH4NUK4/Ai-study-assistant",
  },
  {
    title: "ERP Management System",
    description:
      "A desktop based ERP solution developed as part of a university group project for the Advanced Database Management Systems course, designed to streamline inventory, customer, supplier, and order management. My contribution focused on building a cross platform desktop application by converting a React web interface using Electron and integrating it with our SQL Server database to showcase the team's implemented database functionalities.",
    image: "/project-ss/erp.png",
    tags: ["React", "Node.js", "Electron", "T-SQL"],
    link: "#",
    github: "https://github.com/BH4NUK4/frontend-for-ERP",
  },
  {
    title: "AI Story Generator",
    description:
      "An interactive storytelling platform where users define a theme to generate unique, branching narratives. By integrating the Gemini API with a FastAPI backend, I created a dynamic gameplay experience featuring multiple choice based endings and a dedicated winning path. This project sharpened my skills in AI integration and full stack deployment.",
    image: "/project-ss/story-game.png",
    tags: ["React", "FastAPI", "Python", "Gemini API", "Azure"],
    link: "#",
    github: "https://github.com/BH4NUK4/Make-A-Story",
  },
];

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const next = () => {
    if (activeIndex < projects.length - 1) setActiveIndex((prev) => prev + 1);
  };

  const prev = () => {
    if (activeIndex > 0) setActiveIndex((prev) => prev - 1);
  };

  return (
    <section id="project" className="relative mt-40 overflow-hidden">
      <div className="grid md:grid-cols-2 gap-12 items-center px-5 pb-15">
        {/**heading */}
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />

        <div className="max-w-3xl z-60">
          <p className="text-secondary-foreground text-4xl font-bold tracking-widest uppercase animate-fade-in">
            My Works :
          </p>
          <p className="font-bold text-5xl md:text-5xl lg:text-6xl tracking-wide pt-8 animate-fade-in animation-delay-200">
            Here are some of <br />
            my <span className="text-primary glow-text">own</span> projects{" "}
            <br />
            and projects that
            <br /> I recently <br />
            <span className="text-primary glow-text">contributed.</span>
          </p>
        </div>

        {/**Projects*/}
        <div className="relative w-full group/carousel mt-10 md:mt-0 py-4">
          {/* Left Arrow Button */}
          <button
            onClick={prev}
            disabled={activeIndex === 0}
            className="absolute left-0 md:-left-6 top-1/2 -translate-y-1/2 z-50 p-2 md:p-3 rounded-full bg-card border border-primary/20 text-primary transition-all duration-300 hover:bg-primary/20 backdrop-blur-md disabled:opacity-30 disabled:cursor-not-allowed shadow-lg"
            aria-label="Previous project"
          >
            <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
          </button>

          {/*Container */}
          <div className="relative w-full flex items-center justify-center">
            {/* THE DUMMY CARD:*/}
            <div className="w-[85vw] md:w-112.5 opacity-0 pointer-events-none">
              <div className="aspect-video w-full" />
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-semibold">Placeholder</h3>
                <p className="text-sm">
                  {/* Using the longest description to ensure max height is covered */}
                  {projects[2].description}
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-4 py-1.5 text-xs">Tag</span>
                </div>
              </div>
            </div>

            {/* The Actual Animated Cards */}
            {projects.map((project, index) => {
              const isActive = index === activeIndex;
              const isPrev = index === activeIndex - 1;
              const isNext = index === activeIndex + 1;

              let positionClasses =
                "left-1/2 translate-x-[150%] scale-75 opacity-0 z-0"; // Hidden far right

              if (index < activeIndex - 1) {
                positionClasses =
                  "left-1/2 -translate-x-[250%] scale-75 opacity-0 z-0"; // Hidden far left
              }
              if (isActive) {
                positionClasses =
                  "left-1/2 -translate-x-1/2 scale-100 opacity-100 z-40"; // Active center
              }
              if (isPrev) {
                positionClasses =
                  "left-1/2 -translate-x-[130%] scale-[0.85] opacity-100 z-20 pointer-events-none"; // Peeking left
              }
              if (isNext) {
                positionClasses =
                  "left-1/2 translate-x-[30%] scale-[0.85] opacity-100 z-20 pointer-events-none"; // Peeking right
              }

              return (
                <div
                  key={index}
                  className={`absolute top-0 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] w-[85vw] md:w-[450px] group glass glow-border border-3 border-primary/40 rounded-2xl overflow-hidden bg-card ${positionClasses}`}
                >
                  {/* The Black Shady Overlay */}
                  <div
                    className={`absolute inset-0 bg-black transition-opacity duration-700 z-30 pointer-events-none ${
                      isActive ? "opacity-0" : "opacity-70"
                    }`}
                  />

                  {/** image */}
                  <div className="relative overflow-hidden aspect-video">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-card via-card/70 to-transparent opacity-80" />
                    <div className="absolute inset-0 bg-linear-to-b from-card via-card/50 to-transparent opacity-60" />

                    {/** links */}
                    <div className="hover:bg-primary/5 flex flex-2 items-center justify-center absolute inset-0 group-hover:opacity-100 duration-300 z-40">
                      <a href={project.github}>
                        <div className="justify-center gap-3 flex flex-2 items-center">
                          <span className="text-sm">GitHub</span>
                          <ArrowUpRight className="w-6 h-6" />
                        </div>
                      </a>
                    </div>
                  </div>

                  {/** project details */}
                  <div className="p-6 space-y-4">
                    <div className="flex items-start justify-between">
                      <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                    </div>
                    <p className="text-muted-foreground text-sm">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIdx) => (
                        <span
                          key={tagIdx}
                          className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Arrow Button */}
          <button
            onClick={next}
            disabled={activeIndex === projects.length - 1}
            className="absolute right-0 md:-right-6 top-1/2 -translate-y-1/2 z-50 p-2 md:p-3 rounded-full bg-card border border-primary/20 text-primary transition-all duration-300 hover:bg-primary/20 backdrop-blur-md disabled:opacity-30 disabled:cursor-not-allowed shadow-lg"
            aria-label="Next project"
          >
            <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
