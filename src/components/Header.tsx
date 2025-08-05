import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useScrollToSection } from '@/utils/navigation';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

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
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-foreground hover:text-primary transition-colors">Home</Link>
            <Link to="/about" className="text-foreground hover:text-primary transition-colors">About</Link>
            
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-foreground hover:text-primary bg-transparent">
                    IT Services
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid w-[300px] gap-3 p-4 bg-background border border-border rounded-lg shadow-lg">
                      <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">Web Development</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Custom web solutions and modern frameworks
                        </p>
                      </NavigationMenuLink>
                      <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">App Development</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Mobile and desktop applications
                        </p>
                      </NavigationMenuLink>
                      <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">Open Source</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Open source solutions and contributions
                        </p>
                      </NavigationMenuLink>
                      <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">Custom Software</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Tailored software solutions for your business
                        </p>
                      </NavigationMenuLink>
                      <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">E-commerce</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Online store and e-commerce platforms
                        </p>
                      </NavigationMenuLink>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <a href="#" onClick={(e) => handleSectionClick(e, 'cloud')} className="text-foreground hover:text-primary transition-colors">Cloud Infrastructure</a>
            <a href="#" onClick={(e) => handleSectionClick(e, 'staffing')} className="text-foreground hover:text-primary transition-colors">Staffing</a>
            <a href="#" onClick={(e) => handleSectionClick(e, 'hmis')} className="text-foreground hover:text-primary transition-colors">HMIS</a>
            <Link to="/contact">
              <Button variant="outline" className="mr-2">
                Contact Us
              </Button>
            </Link>
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
            <Link to="/" className="block text-foreground hover:text-primary transition-colors">Home</Link>
            <Link to="/about" className="block text-foreground hover:text-primary transition-colors">About</Link>
            <div className="space-y-2">
              <div className="text-sm font-medium text-muted-foreground">IT Services</div>
              <div className="pl-4 space-y-2">
                <div className="block text-foreground hover:text-primary transition-colors text-sm">Web Development</div>
                <div className="block text-foreground hover:text-primary transition-colors text-sm">App Development</div>
                <div className="block text-foreground hover:text-primary transition-colors text-sm">Open Source</div>
                <div className="block text-foreground hover:text-primary transition-colors text-sm">Custom Software</div>
                <div className="block text-foreground hover:text-primary transition-colors text-sm">E-commerce</div>
              </div>
            </div>
            <a href="#" onClick={(e) => handleSectionClick(e, 'cloud')} className="block text-foreground hover:text-primary transition-colors">Cloud Infrastructure</a>
            <a href="#" onClick={(e) => handleSectionClick(e, 'staffing')} className="block text-foreground hover:text-primary transition-colors">Staffing</a>
            <a href="#" onClick={(e) => handleSectionClick(e, 'hmis')} className="block text-foreground hover:text-primary transition-colors">HMIS</a>
            <div className="space-y-2 pt-4">
              <Link to="/contact">
                <Button variant="outline" className="w-full">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;