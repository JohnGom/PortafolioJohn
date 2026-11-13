import { Link } from "react-router-dom";
import { Github, Linkedin, Mail } from "lucide-react";
import { useI18n } from "@/lib/i18n/i18n-context";
import { interpolate } from "@/lib/i18n/translations";

const socialLinks = [
  { href: "https://github.com/johngom", icon: Github, label: "GitHub" },
  { href: "https://linkedin.com/in/zemog1916", icon: Linkedin, label: "LinkedIn" },
  { href: "mailto:zemog1916@gmail.com", icon: Mail, label: "Email" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();
  const { t } = useI18n();

  return (
    <footer className="border-t border-border bg-background">
      <div className="container py-8">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          {/* Copyright */}
          <p className="font-mono text-sm text-muted-foreground">
            <span className="text-primary">//</span>{" "}
            {interpolate(t.footer.copyright, {
              year: String(currentYear),
              name: "John Harvey Gomez Vega",
            })}
          </p>

          {/* Footer Links */}
          <div className="flex items-center gap-6">
            <Link
              to="/styleguide"
              className="font-mono text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              {t.common.styleguide}
            </Link>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label={link.label}
              >
                <link.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
