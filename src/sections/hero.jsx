import Button from "../components/button";
import { ArrowRight, Download } from "lucide-react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const skills = [
  "React",
  "Flutter",
  "TypeScript",
  "Tsql",
  "JavaScript",
  "Tailwind CSS",
  "Figma",
  "Git",
  "Python",
  "PHP",
  "C",
  "GitHub",
  "Node.js ",
  "FastAPI",
  "Canva",
  "PostgreSQL",
  "MongoDB",
  "Electron",
  "Azure",
];
const Hero = () => {
  return (
    <section
      id="move-to-top"
      className="relative min-h-screen  flex items-center"
    >
      <div className="absolute inset-0">
        <img
          src="/hero-bg.jpg"
          alt="hero bg"
          className="h-full w-full opacity-80 object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-b  from-background/20 via-background/70 to-background" />
      </div>

      {/**content of hero */}
      <div className="container p-2  top-45  relative z-10">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          {/**left side  */}
          <div className="space-y-8 ml-5">
            {/**undergrad */}
            <div className="animate-fade-in animation-delay-200">
              <span className="inline-flex items-center bg-secondary text-sm text-primary glow-text tracking-wider gap-2 px-4 py-2 rounded-full">
                <span className="w-2 h-2 bg-primary  rounded-full animate-pulse"></span>
                Management Information Systems : Undergraduate
              </span>
            </div>

            {/**headline */}
            <div className="space-y-4 ">
              <h1 className="text-5xl md:text-5xl lg:text-6xl font-bold leading-tight animate-fade-in animation-delay-300">
                Someone Who Is <br />
                <span className="text-primary glow-text">
                  PASSIONATE{" "}
                </span>about <br />
                <span className="text-5xl md:text-5xl lg:text-6xl font-normal text-white">
                  CODING
                </span>
              </h1>

              {/**about me */}
              <p className="tracking-tight animate-fade-in animation-delay-400">
                Hello there...!! ,I'm Bhanuka Siriwardhana,A Management
                Information Systems undergraduate passionate about mathematics,
                coding, and logical problem solving. I enjoy developing software
                applications and exploring new technologies to improve my
                skills.
              </p>
            </div>

            {/**contact / cv download */}
            <div className="div flex gap-5 items-center animate-fade-in animation-delay-500">
              <a href="#contactss">
                <Button size="lg">
                  Contact Me
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </a>
              <a href="/Bhanuka-03.pdf" target="_blank">
                <button className="relative flex gap-2 focus:outline-none border border-primary px-5 py-2 text-lg rounded-full text-primary-foreground hover:bg-muted bg-muted/75 ">
                  <Download />
                  CV Download
                </button>
              </a>
            </div>

            {/**social links */}
            <div className="flex gap-4 items-center animate-fade-in animation-delay-600">
              <span className="tracking-widest font-normal">Follow Me :</span>

              {[
                { icon: FaGithub, href: "https://github.com/BH4NUK4" },
                {
                  icon: FaLinkedin,
                  href: "https://www.linkedin.com/in/bhanukasiriwardhana",
                },
                {
                  icon: FaInstagram,
                  href: "https://www.instagram.com/bha_nuka?utm_source=qr&igsh=cW5mdXc2a29tNm5j",
                },
              ].map((social, index) => (
                <a href={social.href} key={index}>
                  {
                    <social.icon
                      className="glass shadow-sm shadow-primary/40"
                      size={25}
                    />
                  }
                </a>
              ))}
            </div>
          </div>

          {/**right side */}
          <div className="relative animate-fade-in animation-delay-300 ">
            {/**img */}
            <div className="relative max-w-md mx-auto">
              <div className="absolute inset-0 rounded-3xl " />
              <div className="relative glass rounded-3xl p-1 ">
                <img
                  src="\hero-profile.png"
                  alt="bhanuka siriwardhana"
                  className="w-full aspect-4/5 object-cover rounded-2xl"
                />

                {/**open to work?? */}
                <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-fade-in animation-delay-600">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-primary/50 rounded-full animate-pulse" />
                    <span className="text-sm font-normal tracking-widest">
                      Open for work
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/**expecience tag */}
            <div className="div"></div>
          </div>
        </div>

        {/**Skils Bar*/}
        <div className="relative  flex-col items-center min-w-auto top-16 tracking-tighter text-primary/70  font-bold animate-fade-in animation-delay-700">
          <p className=" text-center mb-4 ">Technologies Im Familier With :</p>
          <div className="relative overflow-hidden">
            <div
              className="absolute left-0 top-0 bottom-20 w-40
             bg-linear-to-r from-background to-transparent z-20"
            />
            <div
              className="absolute right-0 top-0 bottom-0 w-40
             bg-linear-to-l from-background to-transparent z-20"
            />
            <div className="flex animate-marquee">
              {[...skills, ...skills].map((skill, index) => (
                <div className="px-8 mb-20 shrink-0 py-4" key={index}>
                  <span className="text-2xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors ">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
