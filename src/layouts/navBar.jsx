import { Menu, X } from "lucide-react";
import Button from "../components/button";
import { useState } from "react";

const navLink = [
  { href: "#move-to-top", label: "HOME" },
  { href: "#about", label: "ABOUT" },
  { href: "#project", label: "PROJECTS" },
  //{ href: "#experiance", label: "Experiance" },
];

const NavBar = () => {
  let [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <header className="fixed  top-0 left-0 right-0 glass-header py-5 z-50">
      <nav className="flex container items-center pr-4 mx-auto my-2 justify-between">
        <a
          href="#move-to-top"
          className="text-2xl font-bold pl-5 tracking-normal hover:text-primary"
        >
          BH<span className="text-primary/70">4</span>NUK
          <span className="text-primary/70 ">4</span>
          <span className="text-primary font-extrabold text-3xl"> .</span>
        </a>

        {/*deckstop nav*/}
        <div className=" hidden md:flex items-center pr-15  gap-1">
          <div className="space-x-2 text-1xl px-2 py-2 rounded-full glass">
            {navLink.map((link, index) => {
              return (
                <a
                  href={link.href}
                  key={index}
                  className="px-2 py-1.5 rounded-full text-muted-foreground hover:text-foreground hover:bg-secondary/45"
                >
                  {link.label}
                </a>
              );
            })}
          </div>
        </div>

        {/*Button for deckstops*/}
        <div className="hidden md:block">
          <Button id="contact">Contact Me</Button>
        </div>

        {/*Mobile menu button*/}

        <button
          className="p-2 md:hidden text-foreground hover:text-primary "
          onClick={() =>
            setIsMobileMenuOpen((isMobileMenuOpen) => !isMobileMenuOpen)
          }
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28}></Menu>}
        </button>
      </nav>

      {/*Mobile menu*/}
      {isMobileMenuOpen && (
        <div className="md:hidden mx-1 rounded-2xl glass-strong right-0 animate-fade-in">
          <div className="flex flex-col py-2 px-2 my-2">
            {navLink.map((link, index) => {
              return (
                <a
                  href={link.href}
                  key={index}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="pl-5 py-1.5 rounded-full mb-2 text-muted-foreground hover:text-foreground hover:bg-secondary/45"
                >
                  {link.label}
                </a>
              );
            })}
            <Button size="sm" onClick={() => setIsMobileMenuOpen(false)}>
              Contact Me
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default NavBar;
