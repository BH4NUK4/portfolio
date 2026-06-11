import { Code2, Clock3, Gauge, Users, BookOpen, Lightbulb } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description:
      "Focused on writing readable and well structured code that is easy to understand.",
  },
  {
    icon: Gauge,
    title: "Performance",
    description:
      "Always mindful of efficiency, responsiveness, and optimizing applications for a smooth user experience.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description:
      "Able to work effectively with teams, communicate ideas clearly, and contribute towards shared goals.",
  },
  {
    icon: Lightbulb,
    title: "Creativity",
    description:
      "Enjoy finding innovative solutions to problems and transforming ideas into practical applications.",
  },
  {
    icon: Clock3,
    title: "Time Management",
    description:
      "Comfortable working with deadlines and delivering work on schedule.",
  },
  {
    icon: BookOpen,
    title: "Continuous Learning",
    description:
      "Passionate about exploring new technologies and continuously improving technical and professional skills.",
  },
];

const About = () => {
  return (
    <section id="about" className="relative pt-75  overflow-hidden">
      <div className="div z-10 grid mx-5 lg:grid-cols-2 gap-24 items-center">
        {/**left section  */}
        <div className="div">
          <div className="mb-14 animate-fade-in animation-delay-200">
            <span className="text-secondary-foreground   text-4xl font-bold tracking-widest uppercase animate-fade-in">
              About Me :
            </span>
          </div>

          <h1 className="text-5xl md:text-5xl lg:text-6xl font-bold leading-tight animate-fade-in animation-delay-400 animation-delay-300">
            Here, I'm Learning <br />
            <span className="text-primary glow-text">Skills</span>, Solving{" "}
            <br />
            <span className="text-primary glow-text">Problems</span>, And
            Creating
            <br /> <span className=" font-normal text-white">Solutions</span>
          </h1>

          <div className="mt-10 space-y-4 text-muted-foreground animate-fade-in animation-delay-500">
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;am
              an undergraduate pursuing a degree in Management Information
              Systems (MIS) at NSBM Green University, currently in my third year
              of study. I am passionate about problemsolving, mathematics, and
              logical thinking, and I enjoy applying these skills to develop
              practical and effective technology solutions. I am highly
              motivated and continuously strive to improve both my technical and
              professional capabilities.
            </p>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Throughout
              my academic journey, I have gained knowledge in a wide range of
              areas, including database systems, networking, project management,
              data structures and algorithms, cybersecurity, web development,
              and mobile application development. I am confident in Flutter and
              Python development, have experience working with React.In
              addition, I have a strong foundation in computer networks and
              information systems, which allows me to approach problems from
              both technical and business perspectives.
            </p>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;While
              I am comfortable working independently and enjoy taking ownership
              of my tasks, I also value collaboration and understand the
              importance of teamwork in achieving project goals. I am always
              eager to explore new technologies, expand my knowledge, and refine
              the skills I already possess. My goal is to continuously grow as a
              technology professional and contribute to meaningful projects that
              create real-world impact.
            </p>
          </div>

          {/*<div className="px-6 py-4 glass glow-border text-primary/50 font-medium italic tracking-wider rounded-3xl animate-fade-in animation-delay-700 mt-10">
            <p>Mission Here ...</p>
          </div>*/}
        </div>

        {/**right section */}
        <div className="grid sm:grid-cols-2 gap-6">
          {highlights.map((item, idx) => (
            <div
              key={idx}
              className="glass p-6 rounded-2xl animate-fade-in"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
