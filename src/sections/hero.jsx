import Button from "../components/button";
import { ArrowRight, Download } from "lucide-react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="relative min-h-screen  flex items-center overflow-hidden ">
      <div className="absolute inset-0">
        <img
          src="/hero-bg.jpg"
          alt="hero bg"
          className="h-full w-full opacity-80 object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-b  from-background/20 via-background/70 to-background" />
      </div>

      {/**content of hero */}
      <div className="container p-2 top-14 left-10 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/**left side  */}
          <div className="space-y-8">
            {/**undergrad */}
            <div className="animate-fade-in">
              <span className="inline-flex items-center bg-secondary text-sm text-primary glow-text tracking-wider gap-2 px-4 py-2 rounded-full">
                <span className="w-2 h-2 bg-primary  rounded-full animate-pulse"></span>
                Software Engineer : Undergraduate
              </span>
            </div>

            {/**headline */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-5xl lg:text-6xl font-bold leading-tight animate-fade-in">
                Someone Who <br />
                <span className="text-primary glow-text">
                  OBSESSED{" "}
                </span>With <br />
                <span className="text-5xl md:text-5xl lg:text-6xl font-normal text-white">
                  CODING
                </span>
              </h1>

              {/**about me */}
              <p className="div">
                Hi, I'm BHANUKA, and Im passionate about coding, problem
                solving, and mathematics. And I enjoy turning ideas into
                practical applications, learning new technologies, and tackling
                complex challenges through logical and creative thinking.
              </p>
            </div>

            {/**contact / cv download */}
            <div className="div flex gap-5 items-center">
              <Button size="lg">
                Contact Me
                <ArrowRight className="w-5 h-5" />
              </Button>
              <button class="relative flex gap-2 focus:outline-none border-0 px-5 py-2 text-lg rounded-full text-primary-foreground hover:bg-muted bg-muted/75 ">
                <Download />
                CV Download
              </button>
            </div>

            {/**social links */}
            <div className="flex gap-4 items-center">
              <span className="tracking-widest font-normal">Follow Me :</span>

              {[
                { icon: FaGithub, href: "https://github.com/BH4NUK4" },
                {
                  icon: FaLinkedin,
                  href: "https://www.linkedin.com/in/bhanukasiri",
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
          <div className="relative  ">
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
                <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-4 h-4 bg-green-400 rounded-full animate-pulse" />
                    <span className="text-sm font-normal tracking-wide">
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
      </div>
    </section>
  );
};

export default Hero;
