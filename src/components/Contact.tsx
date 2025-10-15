import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github, MapPin, Phone } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "bhuvanac@ualberta.ca",
      href: "mailto:bhuvanac@ualberta.ca",
      color: "text-secondary",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (780) 884-5180",
      href: "tel:+17808845180",
      color: "text-primary",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Edmonton, Alberta",
      href: null,
      color: "text-purple-500",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Connect with me",
      href: "https://linkedin.com/in/bhuvana-chandar-veeravalli-8431362a7",
      color: "text-blue-500",
    },
  ];

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <div className="w-20 h-1 gradient-bg mx-auto rounded-full" />
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Open to opportunities in machine learning, data science, and software development. 
            Let's discuss how we can work together!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 mb-8">
          {contactInfo.map((item, index) => (
            <Card
              key={index}
              className="glass-card p-6 hover:glow-effect transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-4">
                <div className={`p-3 rounded-lg bg-muted/50 ${item.color}`}>
                  <item.icon className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-muted-foreground mb-1">{item.label}</p>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="font-semibold hover:text-primary transition-colors"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="font-semibold">{item.value}</p>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>

        <Card className="glass-card p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to collaborate?</h3>
          <p className="text-muted-foreground mb-6">
            Whether it's a research opportunity, internship, or project collaboration, I'd love to hear from you.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              size="lg"
              className="gradient-bg text-white font-semibold hover:opacity-90 transition-opacity"
              onClick={() => window.location.href = "mailto:bhuvanac@ualberta.ca"}
            >
              <Mail className="w-5 h-5 mr-2" />
              Send Email
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-primary/30 hover:border-primary hover:bg-primary/10"
              onClick={() => window.open("https://linkedin.com/in/bhuvana-chandar-veeravalli-8431362a7", "_blank")}
            >
              <Linkedin className="w-5 h-5 mr-2" />
              LinkedIn
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-secondary/30 hover:border-secondary hover:bg-secondary/10"
              onClick={() => window.open("https://github.com/bhuvanchandar7", "_blank")}
            >
              <Github className="w-5 h-5 mr-2" />
              GitHub
            </Button>
          </div>
        </Card>
      </div>

      <footer className="text-center mt-16 text-muted-foreground">
        <p>© 2025 Bhuvan Veeravalli. Built with React & Tailwind CSS.</p>
      </footer>
    </section>
  );
};

export default Contact;
