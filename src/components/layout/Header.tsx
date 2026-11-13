import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, Globe } from "lucide-react";
import { cn } from "@/lib/utils";
import { useI18n } from "@/lib/i18n/i18n-context";
import { Logo } from "@/components/Logo";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

export function Header() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const { t, language, toggleLanguage } = useI18n();

  const navItems = [
    { href: "/", label: t.nav.home },
    { href: "/work", label: t.nav.work },
    { href: "/about", label: t.nav.about },
    { href: "/contact", label: t.nav.contact },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 font-mono text-sm font-medium text-primary hover:opacity-80 transition-opacity"
          aria-label="John Gomez home"
        >
          <Logo className="h-7 w-7" />
          <span className="hidden sm:inline">{"<john />"}</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={cn(
                "font-mono text-sm transition-colors hover:text-primary link-underline",
                location.pathname === item.href
                  ? "text-primary"
                  : "text-muted-foreground"
              )}
            >
              {item.label}
            </Link>
          ))}
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleLanguage}
            className="font-mono text-sm text-muted-foreground hover:text-primary gap-2"
            aria-label={language === "es" ? "Switch to English" : "Cambiar a español"}
          >
            <Globe className="h-4 w-4" />
            <span className="uppercase">{language}</span>
          </Button>
        </nav>

        {/* Mobile Menu */}
        <div className="flex items-center gap-2 md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleLanguage}
            className="text-muted-foreground hover:text-primary"
            aria-label={language === "es" ? "Switch to English" : "Cambiar a español"}
          >
            <Globe className="h-5 w-5" />
          </Button>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-foreground">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72 bg-background border-border">
              <div className="flex flex-col gap-6 mt-8">
                <div className="font-mono text-sm text-primary mb-4">
                  {"// "}{t.nav.navigation}
                </div>
                {navItems.map((item) => (
                  <SheetClose asChild key={item.href}>
                    <Link
                      to={item.href}
                      className={cn(
                        "font-mono text-lg transition-colors hover:text-primary py-2",
                        location.pathname === item.href
                          ? "text-primary"
                          : "text-muted-foreground"
                      )}
                      onClick={() => setIsOpen(false)}
                    >
                      <span className="text-primary mr-2">→</span>
                      {item.label}
                    </Link>
                  </SheetClose>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
