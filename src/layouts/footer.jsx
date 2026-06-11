import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const socialLinks = [
  { icon: FaGithub, href: "https://github.com/BH4NUK4", label: "GitHub" },
  {
    icon: FaLinkedin,
    href: "https://www.linkedin.com/in/bhanukasiri",
    label: "LinkedIn",
  },
  {
    icon: FaInstagram,
    href: "https://www.instagram.com/bha_nuka?utm_source=qr&igsh=cW5mdXc2a29tNm5j",
    label: "Instagram",
  },
];

const footerLinks = [
  { href: "#about", label: "About" },
  { href: "#project", label: "Projects" },
  //{ href: "#experience", label: "Experience" },
  { href: "#contactss", label: "Contact" },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-15 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <a
              href="#move-to-top"
              className="text-1xl font-bold pl-5 tracking-normal "
            >
              BH<span className="text-primary/70">4</span>NUK
              <span className="text-primary/70 ">4</span>
              <span className="text-primary font-extrabold text-1xl"> .</span>
            </a>
            <p className="text-sm text-muted-foreground mt-2">
              © {currentYear} Bhanuka Siriwardhana. All rights reserved.
            </p>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
