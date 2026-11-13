import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { CodeDivider } from "@/components/ui/CodeDivider";
import { CodeLabel } from "@/components/ui/CodeLabel";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { TypingCursor } from "@/components/ui/TypingCursor";
import { useI18n } from "@/lib/i18n/i18n-context";
import { interpolate } from "@/lib/i18n/translations";
import { ArrowRight } from "lucide-react";

const featuredProjectSlugs = [
  { slug: "tacticalboard", variant: "personal" as const },
  { slug: "wellsite", variant: "professional" as const },
  { slug: "copa", variant: "professional" as const },
  { slug: "ensm", variant: "professional" as const },
];

export default function Home() {
  const { t } = useI18n();
  const featuredProjects = featuredProjectSlugs.map(({ slug, variant }) => {
    const source = variant === "personal" ? t.personalProjects[slug as keyof typeof t.personalProjects] : t.projects[slug as keyof typeof t.projects];
    return {
      slug,
      name: source.name,
      description: source.description,
      stack: source.stack,
      impact: source.impact,
      variant,
      demoUrl: variant === "personal" ? (source as typeof t.personalProjects[keyof typeof t.personalProjects]).demoUrl : undefined,
      repoUrl: variant === "personal" ? (source as typeof t.personalProjects[keyof typeof t.personalProjects]).repoUrl : undefined,
    };
  });

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background grid */}
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute inset-0 bg-grid-animated opacity-60" />

        {/* Left-to-right gradient for readability */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, hsl(160 20% 3% / 0.98) 0%, hsl(160 20% 3% / 0.75) 45%, transparent 80%)",
          }}
        />

        {/* Bottom-up gradient for readability */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, hsl(160 20% 3% / 0.9) 0%, transparent 40%)",
          }}
        />

        {/* Vertical grid lines */}
        <div className="absolute inset-0 pointer-events-none hidden lg:block">
          <div className="container h-full relative">
            {[25, 50, 75].map((percent) => (
              <div
                key={percent}
                className="absolute top-0 bottom-0 w-px bg-white/10"
                style={{ left: `${percent}%` }}
              />
            ))}
          </div>
        </div>

        {/* Central glow */}
        <div className="absolute left-1/2 top-[15%] -translate-x-1/2 pointer-events-none animate-pulse-glow">
          <svg width="800" height="200" viewBox="0 0 800 200" className="opacity-60">
            <defs>
              <filter id="glow-blur" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur in="SourceGraphic" stdDeviation="25" />
              </filter>
            </defs>
            <ellipse
              cx="400"
              cy="100"
              rx="350"
              ry="60"
              fill="hsl(150 60% 50% / 0.25)"
              filter="url(#glow-blur)"
            />
          </svg>
        </div>

        {/* Liquid Glass Card */}
        <div
          className="absolute right-[10%] top-[20%] hidden xl:block w-[200px] -translate-y-[50px]"
          style={{
            background: "rgba(255, 255, 255, 0.01)",
            backgroundBlendMode: "luminosity",
            backdropFilter: "blur(4px)",
            boxShadow: "inset 0 1px 1px rgba(255, 255, 255, 0.1)",
          }}
        >
          <div className="relative p-5 rounded-lg overflow-hidden">
            <div
              className="absolute inset-0 rounded-lg pointer-events-none"
              style={{
                padding: "1.4px",
                background: "linear-gradient(180deg, rgba(255,255,255,0.35), rgba(255,255,255,0.05))",
                WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                WebkitMaskComposite: "xor",
                maskComposite: "exclude",
              }}
            />
            <span className="font-mono text-xs text-primary">{t.hero.card.year}</span>
            <h3 className="mt-3 text-sm font-medium text-foreground leading-snug">
              {t.hero.card.title}
            </h3>
            <p className="mt-2 text-[11px] text-muted-foreground leading-relaxed">
              {t.hero.card.description}
            </p>
          </div>
        </div>

        <div className="container relative z-10">
          <div className="max-w-3xl opacity-0 animate-fade-in-up">
            {/* Code-style label */}
            <CodeLabel className="mb-6">{t.hero.role}</CodeLabel>

            {/* Headline with typing cursor */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              {interpolate(t.hero.greeting, { name: "John Gomez" })}
              <br />
              <span className="text-muted-foreground">{t.hero.headline}</span>
              <TypingCursor />
            </h1>

            {/* Subheadline */}
            <p className="text-lg text-muted-foreground mb-8 max-w-xl leading-relaxed opacity-0 animate-fade-in-up stagger-1">
              {t.hero.description}
            </p>

            {/* CTA */}
            <div className="opacity-0 animate-fade-in-up stagger-2">
              <Button
                asChild
                size="lg"
                className="font-mono rounded-full px-8 transition-transform hover:scale-105 glow-primary btn-press"
              >
                <Link to="/work">
                  {t.hero.cta}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20">
        <div className="container">
          <div className="opacity-0 animate-fade-in-up">
            <CodeDivider label={t.featuredWork.title} />
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {featuredProjects.map((project, index) => (
              <div
                key={project.slug}
                className={`opacity-0 animate-fade-in-up stagger-${Math.min(index + 1, 4)}`}
              >
                <ProjectCard {...project} className="hover-lift" />
              </div>
            ))}
          </div>

          {/* View All Link */}
          <div className="mt-12 text-center opacity-0 animate-fade-in-up stagger-4">
            <Link
              to="/work"
              className="inline-flex items-center font-mono text-sm text-muted-foreground hover:text-primary transition-colors link-underline"
            >
              <span className="text-primary mr-2">{"//"}</span>
              {t.common.viewAllProjects}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
