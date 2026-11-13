import { useParams, Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { CodeDivider } from "@/components/ui/CodeDivider";
import { TechTag } from "@/components/ui/TechTag";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n/i18n-context";
import type { Translations } from "@/lib/i18n/translations";

type ProfessionalSlug = keyof Translations["en"]["projects"];
type PersonalSlug = keyof Translations["en"]["personalProjects"];

type ProjectVariant = "professional" | "personal";

interface ProjectData {
  name: string;
  fullDescription: string;
  stack: string[];
  impact: string;
  challenges: string[];
  features: string[];
  variant: ProjectVariant;
  demoUrl?: string;
  repoUrl?: string;
}

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const { t } = useI18n();

  const professionalSlugs = Object.keys(t.projects) as ProfessionalSlug[];
  const personalSlugs = Object.keys(t.personalProjects) as PersonalSlug[];

  let project: ProjectData | null = null;

  if (slug && professionalSlugs.includes(slug as ProfessionalSlug)) {
    const p = t.projects[slug as ProfessionalSlug];
    project = {
      ...p,
      variant: "professional",
    };
  } else if (slug && personalSlugs.includes(slug as PersonalSlug)) {
    const p = t.personalProjects[slug as PersonalSlug];
    project = {
      name: p.name,
      fullDescription: p.fullDescription,
      stack: p.stack,
      impact: p.impact,
      challenges: p.challenges,
      features: p.features,
      variant: "personal",
      demoUrl: p.demoUrl,
      repoUrl: p.repoUrl,
    };
  }

  if (!project) {
    return (
      <Layout>
        <section className="py-20">
          <div className="container">
            <div className="text-center">
              <h1 className="text-3xl font-bold text-foreground mb-4">
                {t.common.projectNotFound}
              </h1>
              <p className="text-muted-foreground mb-8">
                {t.common.projectNotFoundDesc}
              </p>
              <Button asChild>
                <Link to="/work">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  {t.common.backToWork}
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="py-20">
        <div className="container max-w-4xl">
          {/* Back Link */}
          <Link
            to="/work"
            className="inline-flex items-center font-mono text-sm text-muted-foreground hover:text-primary transition-colors mb-8 opacity-0 animate-fade-in-up"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            {t.common.backToWork}
          </Link>

          {/* Project Header */}
          <div className="mb-12 opacity-0 animate-fade-in-up stagger-1">
            <div className="flex items-center gap-3 mb-4">
              <h1 className="text-3xl md:text-4xl font-bold text-foreground">
                {project.name}
              </h1>
              {project.variant === "personal" && (
                <span className="inline-flex items-center px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-primary bg-primary/10 border border-primary/20 rounded-full">
                  Personal
                </span>
              )}
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              {project.fullDescription}
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.stack.map((tech) => (
                <TechTag key={tech}>{tech}</TechTag>
              ))}
            </div>

            {/* Impact */}
            <div className="p-4 bg-primary/5 border border-primary/20 rounded-lg">
              <span className="font-mono text-sm text-primary">
                <span className="text-muted-foreground">{"//"}</span>{" "}
                {t.projectDetail.impact}: {project.impact}
              </span>
            </div>
          </div>

          <div className="opacity-0 animate-fade-in-up stagger-2">
            <CodeDivider label={t.projectDetail.challenges} />
          </div>

          {/* Challenges */}
          <div className="mb-12 opacity-0 animate-fade-in-up stagger-3">
            <ul className="space-y-3">
              {project.challenges.map((challenge, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="font-mono text-primary mt-1">→</span>
                  <span className="text-muted-foreground">{challenge}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="opacity-0 animate-fade-in-up stagger-3">
            <CodeDivider label={t.projectDetail.features} />
          </div>

          {/* Features */}
          <div className="mb-12 opacity-0 animate-fade-in-up stagger-4">
            <ul className="space-y-3">
              {project.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="font-mono text-primary mt-1">✓</span>
                  <span className="text-muted-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 pt-8 border-t border-border opacity-0 animate-fade-in-up stagger-4">
            {project.variant === "personal" ? (
              <>
                {project.repoUrl && (
                  <Button
                    variant="outline"
                    className="font-mono"
                    asChild
                  >
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      {t.projectDetail.viewCode}
                    </a>
                  </Button>
                )}
                {project.demoUrl && (
                  <Button className="font-mono" asChild>
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      {t.projectDetail.liveDemo}
                    </a>
                  </Button>
                )}
              </>
            ) : (
              <>
                <Button variant="outline" className="font-mono" disabled>
                  <Github className="mr-2 h-4 w-4" />
                  {t.projectDetail.viewCode}
                </Button>
                <Button variant="outline" className="font-mono" disabled>
                  <ExternalLink className="mr-2 h-4 w-4" />
                  {t.projectDetail.liveDemo}
                </Button>
              </>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
}
