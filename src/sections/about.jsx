import { Code2, Rocket, Users, Lightbulb } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "should edit ",
  },
  {
    icon: Rocket,
    title: "Performance",
    description: "should edit .",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "should edit .",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "should edit .",
  },
];

const About = () => {
  return (
    <section id="about" className="relative pt-50  overflow-hidden">
      <div className="div z-10 grid mx-5 lg:grid-cols-2 gap-24 items-center">
        {/**left section  */}
        <div className="div">
          <div className="mb-4 animate-fade-in animation-delay-200">
            <span className="text-primary text-2xl">About Me</span>
          </div>

          <h1 className="text-5xl md:text-5xl lg:text-6xl font-bold leading-tight animate-fade-in animation-delay-400 animation-delay-300">
            Here, Im converting
            <br /> Your
            <span className="text-primary glow-text"> MESSES </span>
            Into <br /> Productive Software
            <br />
            <span className="text-primary glow-text">SOLUTIONS</span>
          </h1>

          <div className="mt-10 space-y-4 text-muted-foreground animate-fade-in animation-delay-500">
            <p>para 1</p>
            <p>para 2</p>
            <p>para 3</p>
          </div>

          <div className="px-6 py-4 glass glow-border text-primary/50 font-medium italic tracking-wider rounded-3xl animate-fade-in animation-delay-700 mt-10">
            <p>Mission Here ...</p>
          </div>
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
