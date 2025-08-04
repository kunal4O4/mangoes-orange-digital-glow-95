import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Users, Cpu, RotateCw, Zap, Server, Heart } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const About = () => {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation();
  const { ref: storyRef, isVisible: storyVisible } = useScrollAnimation();
  const { ref: valuesRef, isVisible: valuesVisible } = useScrollAnimation();
  const { ref: teamRef, isVisible: teamVisible } = useScrollAnimation();
  const { ref: benefitsRef, isVisible: benefitsVisible } = useScrollAnimation();
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollAnimation();

  const values = [
    {
      icon: Users,
      title: "People-First Culture",
      description: "We care about people — not just resumes. We build lasting relationships with our clients and talent."
    },
    {
      icon: Cpu,
      title: "Proven Tech Expertise", 
      description: "From DevOps to cloud strategy, our team knows how to solve real-world IT challenges at scale."
    },
    {
      icon: RotateCw,
      title: "Transparent & Agile",
      description: "We stay lean, communicate openly, and adapt quickly to your needs — no bloated processes, no surprises."
    }
  ];

  const team = [
    { name: "Amit Sharma", role: "Co-Founder & Head of Engineering" },
    { name: "Neha Rao", role: "Talent Partner" },
    { name: "Jordan Miles", role: "Client Success Manager" },
    { name: "Riya Patel", role: "Cloud Consultant" }
  ];

  const benefits = [
    "Fast, flexible staffing solutions",
    "Deep expertise in IT infrastructure, DevOps, and modern software stacks", 
    "Friendly people who genuinely care about your success"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section ref={heroRef} className={`pt-24 pb-16 px-4 fade-up ${heroVisible ? 'visible' : ''}`}>
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Where Technology 
                <span className="text-primary"> Meets Talent</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                At MangosOrange, we connect innovative businesses with top-tier tech talent and deliver tailored IT solutions that make a difference. We're not just another agency — we're your growth partner.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="w-64 h-64 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                <Heart className="w-24 h-24 text-primary" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section ref={storyRef} className={`py-16 px-4 bg-accent/30 fade-up ${storyVisible ? 'visible' : ''}`}>
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-8">Our Story</h2>
          <div className="text-muted-foreground space-y-6 text-lg leading-relaxed">
            <p>
              Founded by a team of tech enthusiasts and talent specialists, MangosOrange was born from a simple idea: great technology begins with great people. We've seen too many companies struggle with rigid vendors or one-size-fits-all solutions.
            </p>
            <p>
              So we decided to do things differently — by putting people first.
            </p>
            <p>
              Whether you're scaling your tech team or tackling a complex cloud project, we bring deep technical expertise, a human touch, and a commitment to delivering outcomes that matter.
            </p>
          </div>
        </div>
      </section>

      {/* What We Believe In */}
      <section ref={valuesRef} className={`py-16 px-4 fade-up ${valuesVisible ? 'visible' : ''}`}>
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">What We Believe In</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 ease-out">
                <CardContent className="p-8 text-center">
                  <div className="mb-6">
                    <value.icon className="w-12 h-12 text-primary mx-auto" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section ref={teamRef} className={`py-16 px-4 bg-accent/30 fade-up ${teamVisible ? 'visible' : ''}`}>
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-8">Meet the Team</h2>
              <div className="space-y-6">
                {team.map((member, index) => (
                  <Card key={index} className="rounded-xl hover:scale-105 hover:shadow-lg transition-all duration-300 ease-out hover:shadow-primary/20">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold text-primary">{member.name}</h3>
                      <p className="text-muted-foreground">{member.role}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <p className="text-muted-foreground mt-8">
                We're a global, diverse team united by curiosity, tech obsession, and a love for collaboration.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="w-80 h-80 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center hover:scale-105 hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 ease-out">
                <div className="grid grid-cols-2 gap-4">
                  <div className="w-16 h-16 rounded-full bg-primary/40"></div>
                  <div className="w-16 h-16 rounded-full bg-secondary/40"></div>
                  <div className="w-16 h-16 rounded-full bg-secondary/40"></div>
                  <div className="w-16 h-16 rounded-full bg-primary/40"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section ref={benefitsRef} className={`py-16 px-4 fade-up ${benefitsVisible ? 'visible' : ''}`}>
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">Why Work With Us?</h2>
          <div className="space-y-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="rounded-xl hover:scale-105 hover:shadow-lg transition-all duration-300 ease-out">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-3 h-3 rounded-full bg-primary"></div>
                    <p className="text-lg">{benefit}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section ref={ctaRef} className={`py-16 px-4 bg-gradient-to-r from-primary/10 to-secondary/10 fade-up ${ctaVisible ? 'visible' : ''}`}>
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6">Let's build something amazing together.</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="rounded-xl">
              👉 Get in Touch
            </Button>
            <Button variant="outline" size="lg" className="rounded-xl">
              📘 Explore Our Services
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;