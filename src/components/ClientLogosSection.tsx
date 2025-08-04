const ClientLogosSection = () => {
  const clients = [
    "TechFlow Solutions",
    "DataVault Inc",
    "InnovateLabs", 
    "FinSecure",
    "SmartAnalytics",
    "ManufacturingPlus",
    "CloudFirst Corp",
    "NextGen Systems",
    "DigitalEdge Co",
    "FutureTech Labs",
    "ScaleUp Solutions",
    "AgileWorks Inc"
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Trusted by Industry Leaders
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From startups to Fortune 500 companies, organizations worldwide choose MangosOrange 
            for their technology and talent needs.
          </p>
        </div>

        <div className="relative overflow-hidden">
          <div className="flex animate-scroll">
            {[...clients, ...clients].map((client, index) => (
              <div 
                key={index}
                className="flex-shrink-0 mx-8 px-6 py-4 bg-card rounded-lg border border-border/50 hover:border-primary/30 transition-colors min-w-[200px]"
              >
                <div className="text-center">
                  <div className="text-lg font-semibold text-foreground/80 hover:text-primary transition-colors">
                    {client}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground mb-4">
            Join 500+ satisfied clients who trust MangosOrange
          </p>
          <div className="flex justify-center items-center gap-2">
            <div className="flex -space-x-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <div 
                  key={i}
                  className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary border-2 border-background flex items-center justify-center text-xs text-primary-foreground font-bold"
                >
                  {String.fromCharCode(65 + i)}
                </div>
              ))}
            </div>
            <span className="text-sm text-muted-foreground ml-3">
              and many more...
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientLogosSection;