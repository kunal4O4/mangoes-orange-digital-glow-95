import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Cloud, 
  Users, 
  Code, 
  Shield, 
  Database, 
  Smartphone,
  ArrowRight,
  Zap
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const services = [
  {
    icon: Users,
    title: "IT Talent Sourcing",
    description: "Connect with pre-vetted software engineers, DevOps specialists, and tech leaders who fit your culture and technical requirements.",
    features: ["Contract & Permanent", "Technical Screening", "Cultural Fit Assessment"]
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Accelerate your digital transformation with comprehensive cloud migration, architecture, and optimization services.",
    features: ["AWS & Azure", "Migration Strategy", "Cost Optimization"]
  },
  {
    icon: Code,
    title: "Software Development",
    description: "Custom software solutions built by experienced teams using modern frameworks and agile methodologies.",
    features: ["Full-Stack Development", "Mobile Apps", "API Integration"]
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Protect your digital assets with comprehensive security assessments, implementations, and ongoing monitoring.",
    features: ["Security Audits", "Compliance", "Threat Monitoring"]
  },
  {
    icon: Database,
    title: "Data & Analytics",
    description: "Transform your data into actionable insights with modern data pipelines, warehousing, and visualization solutions.",
    features: ["Data Engineering", "Business Intelligence", "Machine Learning"]
  },
  {
    icon: Smartphone,
    title: "Digital Transformation",
    description: "Modernize your technology stack and processes to drive innovation and competitive advantage.",
    features: ["Process Automation", "Legacy Modernization", "Change Management"]
  }
];

const ServicesSection = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation();

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-background to-accent/30">
      <div className="container mx-auto px-4">
        <div 
          ref={headerRef}
          className={`text-center mb-16 fade-up ${headerVisible ? 'visible' : ''}`}
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Zap className="w-4 h-4" />
            Our Expertise
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Comprehensive IT Services &
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"> Talent Solutions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From finding the perfect candidate to implementing cutting-edge technology solutions, 
            we're your trusted partner in digital success.
          </p>
        </div>

        <div 
          ref={cardsRef}
          className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 fade-up ${cardsVisible ? 'visible' : ''}`}
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index} 
                className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 hover:scale-105 bg-card/50 backdrop-blur-sm card-hover"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-glow rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button 
                    variant="ghost" 
                    className="w-full justify-between group/btn hover:bg-primary/10 hover:text-primary transform transition-all duration-300 hover:scale-105"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-2 transition-transform duration-300" />
                  </Button>
                </CardContent>
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Button 
            size="lg" 
            variant="premium"
            className="group"
          >
            View All Services
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;