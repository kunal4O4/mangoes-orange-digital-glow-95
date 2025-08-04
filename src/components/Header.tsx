import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useScrollToSection } from '@/utils/navigation';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollToSection } = useScrollToSection();

  const handleSectionClick = (e: React.MouseEvent, sectionId: string) => {
    e.preventDefault();
    scrollToSection(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-primary">
            MangosOrange
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" onClick={(e) => handleSectionClick(e, 'services')} className="text-foreground hover:text-primary transition-colors">Services</a>
            <a href="#" onClick={(e) => handleSectionClick(e, 'industries')} className="text-foreground hover:text-primary transition-colors">Industries</a>
            <Link to="/about" className="text-foreground hover:text-primary transition-colors">About</Link>
            <a href="#" onClick={(e) => handleSectionClick(e, 'testimonials')} className="text-foreground hover:text-primary transition-colors">Testimonials</a>
            <Link to="/contact">
              <Button variant="outline" className="mr-2">
                Contact Us
              </Button>
            </Link>
            <Button className="bg-gradient-to-r from-primary to-primary-glow text-primary-foreground">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            <a href="#" onClick={(e) => handleSectionClick(e, 'services')} className="block text-foreground hover:text-primary transition-colors">Services</a>
            <a href="#" onClick={(e) => handleSectionClick(e, 'industries')} className="block text-foreground hover:text-primary transition-colors">Industries</a>
            <Link to="/about" className="block text-foreground hover:text-primary transition-colors">About</Link>
            <a href="#" onClick={(e) => handleSectionClick(e, 'testimonials')} className="block text-foreground hover:text-primary transition-colors">Testimonials</a>
            <div className="space-y-2 pt-4">
              <Link to="/contact">
                <Button variant="outline" className="w-full">
                  Contact Us
                </Button>
              </Link>
              <Button className="w-full bg-gradient-to-r from-primary to-primary-glow text-primary-foreground">
                Get Started
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;