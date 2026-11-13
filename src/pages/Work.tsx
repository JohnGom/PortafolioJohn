import { Layout } from "@/components/layout/Layout";
import { CodeDivider } from "@/components/ui/CodeDivider";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { useI18n } from "@/lib/i18n/i18n-context";

const professionalSlugs = ["ends", "ensm", "wellsite", "chatowl", "copa", "triko"] as const;
const personalSlugs = ["linkstore", "tacticalboard", "smallopenshorts"] as const;

export default function Work() {
  const { t } = useI18n();

  const professionalProjects = professionalSlugs.map((slug) => ({
    slug,
    name: t.projects[slug].name,
    description: t.projects[slug].description,
    stack: t.projects[slug].stack,
    impact: t.projects[slug].impact,
    variant: "internal" as const,
  }));

  const personalProjects = personalSlugs.map((slug) => ({
    slug,
    name: t.personalProjects[slug].name,
    description: t.personalProjects[slug].description,
    stack: t.personalProjects[slug].stack,
    impact: t.personalProjects[slug].impact,
    variant: "personal" as const,
    demoUrl: t.personalProjects[slug].demoUrl,
    repoUrl: t.personalProjects[slug].repoUrl,
  }));

  return (
    <Layout>
      <section className="py-20">
        <div className="container">
          {/* Page Header */}
          <div className="max-w-2xl mb-12 opacity-0 animate-fade-in-up">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t.workPage.title}
            </h1>
            <p className="text-muted-foreground leading-relaxed">
              {t.workPage.description}
            </p>
          </div>

          {/* Professional Experience */}
          <div className="opacity-0 animate-fade-in-up stagger-1">
            <CodeDivider label={t.workPage.professionalLabel} />
          </div>

          <div className="grid gap-6 md:grid-cols-2 mb-20">
            {professionalProjects.map((project, index) => (
              <div
                key={project.slug}
                className={`opacity-0 animate-fade-in-up stagger-${Math.min(index + 2, 4)}`}
              >
                <ProjectCard {...project} className="hover-lift" />
              </div>
            ))}
          </div>

          {/* Personal Projects */}
          <div className="max-w-2xl mb-12 opacity-0 animate-fade-in-up">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              {t.workPage.personalLabel}
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              {t.workPage.personalDescription}
            </p>
          </div>

          <div className="opacity-0 animate-fade-in-up stagger-1">
            <CodeDivider label={t.workPage.personalLabel} />
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {personalProjects.map((project, index) => (
              <div
                key={project.slug}
                className={`opacity-0 animate-fade-in-up stagger-${Math.min(index + 2, 4)}`}
              >
                <ProjectCard {...project} className="hover-lift" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
