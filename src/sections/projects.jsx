import { ArrowUpRight } from "lucide-react";

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
    title: "My Portfolio",
    description:
      "A personal portfolio website built with React and Tailwind CSS to showcase my projects, skills, and learning journey. Through this project, I gained hands on experience with component based development, responsive design, Tailwind CSS styling, animations, and creating reusable UI elements.",
    image: "/project-ss/portfolio.png",
    tags: ["React", "html", "css", "tailwind"],
    link: "#",
    github: "https://github.com/BH4NUK4/portfolio",
  },
  {
    title: "AI Student Assitant",
    description:
      "A university group project designed to assist students with academic tasks using AI powered features. Within this project I contributed by designing and implementing multiple user interface components, focusing on responsive layouts, usability, and maintaining a consistent user experience across the application.",
    image: "/project-ss/ai-assistant.png",
    tags: ["Flutetr", "Dart", "Python", "FastAPI"],
    link: "#",
    github: "https://github.com/BH4NUK4/Ai-study-assistant",
  },
];

const Projects = () => {
  return (
    <section id="project" className="relative mt-40 overflow-hidden">
      <div className=" grid md:grid-cols-2 gap-12 items-center px-5 pb-15">
        {/**heading */}
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />

        <div className=" max-w-3xl ">
          <p className="text-secondary-foreground   text-4xl font-bold tracking-widest uppercase animate-fade-in">
            My Works :
          </p>

          <p className="  font-bold text-5xl md:text-5xl lg:text-6xl tracking-wide pt-8 animate-fade-in animation-delay-200">
            Here are some of <br />
            my <span className="text-primary glow-text">own</span> projects{" "}
            <br />
            and projects that
            <br /> I recently <br />
            <span className="text-primary glow-text">contributed</span>.
          </p>
        </div>

        {/**Projects grid */}
        <div className="grid md:grid-cols-2 gap-10 ">
          {projects.map((project, index) => (
            <div
              className="group glass glow-border border-3 border-primary/40 rounded-2xl overflow-hidden animate-fade-in md:row--1"
              key={index}
            >
              {/**image */}
              <div className="relative  overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0 
                bg-linear-to-t from-card via-card/70
                 to-transparent opacity-80"
                />
                <div
                  className="absolute inset-0 
                bg-linear-to-b from-card via-card/50
                 to-transparent opacity-60"
                />

                {/**links */}

                <div className=" hover:bg-primary/5 flex flex-2 items-center justify-center absolute inset-0  group-hover:opacity-100 duration-300">
                  <a href={project.github}>
                    <div className="justify-center gap-3  flex flex-2 items-center">
                      <a className=" text-sm">GitHub</a>
                      <ArrowUpRight className="w-6 h-6 " />
                    </div>
                  </a>
                </div>
              </div>

              {/**project details */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight
                    className="w-5 h-5 
                  text-muted-foreground group-hover:text-primary
                   group-hover:translate-x-1 
                   group-hover:-translate-y-1 transition-all"
                  />
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
