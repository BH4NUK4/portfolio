import { FaLinkedin, FaInstagram } from "react-icons/fa";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
const contactInfo = [
  {
    icon: MdPhone,
    label: "Phone",
    value: "+94 781203528",
    href: "tel:+94 781203528",
  },
  {
    icon: FaLinkedin,
    label: "LinedIn",
    value: "Bhanuka Siriwardhana",
    href: "https://www.linkedin.com/in/bhanukasiri",
  },
  {
    icon: MdEmail,
    label: "Email",
    value: "hppbsiri@gmail.com",
    href: "mailto:hppbsiri@gmail.com",
  },

  {
    icon: FaInstagram,
    label: "Instagram",
    value: "Bhanuka",
    href: "https://www.instagram.com/bha_nuka?utm_source=qr&igsh=cW5mdXc2a29tNm5j",
  },
  {
    icon: MdLocationOn,
    label: "Location",
    value: "Kaduwela , Colombo",
    href: "#",
  },
];

const Contact = () => {
  return (
    <section id="contactss">
      {/* Contact Info */}
      <div className="space-y-6 animate-fade-in px-20 md:px-120 mt-50 animation-delay-400">
        <div className="glass rounded-3xl px-6 py-4">
          <h3 className="text-xl font-semibold tracking-wider mb-6">
            Contact Information :
          </h3>
          <div className="space-y-2">
            {contactInfo.map((item, i) => (
              <a
                key={i}
                href={item.href}
                className="flex items-center gap-6 p-4 rounded-xl hover:bg-surface transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">
                    {item.label}
                  </div>
                  <div className="font-medium">{item.value}</div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Availability Card */}
        <div className="glass rounded-2xl px-12 py-4 mb-20 mt-10 border border-primary/30">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
            <span className="font-medium">Currently Available</span>
          </div>
          <p className="text-muted-foreground text-sm tracking-wider">
            I’m currently open to new opportunities and exciting projects. If
            you’re looking to hire or collaborate, feel free to get in touch !!
          </p>
        </div>
      </div>

      {/**Send Emails through site */}
      <div className="div"></div>
    </section>
  );
};

export default Contact;
