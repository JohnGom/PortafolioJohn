import { Link } from "react-router-dom";
import { TechTag } from "./TechTag";
import { cn } from "@/lib/utils";
import { ArrowRight, ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  name: string;
  description: string;
  stack: string[];
  impact: string;
  slug: string;
  variant?: "internal" | "personal";
  demoUrl?: string;
  repoUrl?: string;
  className?: string;
}

export function ProjectCard({
  name,
  description,
  stack,
  impact,
  slug,
  variant = "internal",
  demoUrl,
  repoUrl,
  className,
}: ProjectCardProps) {
  const isPersonal = variant === "personal";

  const CardWrapper = ({ children }: { children: React.ReactNode }) => {
    const classes = cn(
      "group block p-6 bg-card border border-border rounded-lg transition-all hover:border-primary/50 hover:bg-card/80 cursor-pointer",
      className
    );

    if (isPersonal) {
      return (
        <article className={classes}>
          {children}
        </article>
      );
    }

    return (
      <Link to={`/work/${slug}`} className={classes}>
        <article>{children}</article>
      </Link>
    );
  };

  return (
    <CardWrapper>
      {/* Project Name */}
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-3">
          <h3 className="font-mono text-lg font-medium text-foreground group-hover:text-primary transition-colors">
            {name}
          </h3>
          {isPersonal && (
            <span className="inline-flex items-center px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-primary bg-primary/10 border border-primary/20 rounded-full">
              Personal
            </span>
          )}
        </div>
        <div className="flex items-center gap-2">
          {isPersonal && repoUrl && (
            <a
              href={repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-muted-foreground hover:text-primary transition-colors"
              aria-label="View repository"
              onClick={(e) => e.stopPropagation()}
            >
              <Github className="h-4 w-4" />
            </a>
          )}
          {isPersonal ? (
            demoUrl ? (
              <a
                href={demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-muted-foreground hover:text-primary transition-colors"
                aria-label="Open live demo"
                onClick={(e) => e.stopPropagation()}
              >
                <ExternalLink className="h-4 w-4" />
              </a>
            ) : null
          ) : (
            <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
          )}
        </div>
      </div>

      {/* Description */}
      <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
        {description}
      </p>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2 mb-4">
        {stack.map((tech) => (
          <TechTag key={tech}>{tech}</TechTag>
        ))}
      </div>

      {/* Impact */}
      <div className="pt-4 border-t border-border">
        <span className="font-mono text-xs text-primary">
          <span className="text-muted-foreground">{"//"}</span> {impact}
        </span>
      </div>
    </CardWrapper>
  );
}
