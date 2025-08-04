import { Button } from '@/components/ui/button';
import { ArrowRight, Users, Zap } from 'lucide-react';
import heroImage from '@/assets/hero-team.jpg';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const HeroSection = () => {
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation();
  const { ref: imageRef, isVisible: imageVisible } = useScrollAnimation();

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-background via-accent/30 to-background pt-20">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div 
            ref={contentRef}
            className={`space-y-8 fade-up ${contentVisible ? 'visible' : ''}`}
          >
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                <Zap className="w-4 h-4" />
                Powering Innovation Through People & Technology
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
                We Know
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"> Tech</span>,
                <br />
                We Care About
                <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent"> People</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                MangosOrange combines enterprise-grade IT expertise with people-first staffing solutions. 
                We bridge the gap between cutting-edge technology and exceptional talent.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                variant="premium"
                className="group"
              >
                Hire Top Talent
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 group hover:bg-primary hover:text-primary-foreground hover:border-primary"
              >
                <Users className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                IT Consulting
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Successful Placements</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-secondary">50+</div>
                <div className="text-sm text-muted-foreground">Enterprise Clients</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary">98%</div>
                <div className="text-sm text-muted-foreground">Client Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div 
            ref={imageRef}
            className={`relative slide-in-right ${imageVisible ? 'visible' : ''}`}
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-500">
              <img 
                src={heroImage} 
                alt="MangosOrange team collaborating on technology solutions"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20"></div>
            </div>
            {/* Floating elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-primary to-primary-glow rounded-full opacity-20 blur-xl"></div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-br from-secondary to-accent rounded-full opacity-20 blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;