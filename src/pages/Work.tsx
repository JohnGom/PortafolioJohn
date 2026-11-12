import { Layout } from "@/components/layout/Layout";
import { CodeDivider } from "@/components/ui/CodeDivider";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { useI18n } from "@/lib/i18n/i18n-context";

const projectSlugs = ["ends", "ensm", "wellsite", "chatowl", "copa", "triko"] as const;

export default function Work() {
  const { t } = useI18n();

  const projects = projectSlugs.map((slug) => ({
    slug,
    name: t.projects[slug].name,
    description: t.projects[slug].description,
    stack: t.projects[slug].stack,
    impact: t.projects[slug].impact,
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

          <div className="opacity-0 animate-fade-in-up stagger-1">
            <CodeDivider label={t.workPage.projectsLabel} />
          </div>

          {/* Projects Grid */}
          <div className="grid gap-8">
            {projects.map((project, index) => (
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
