import { Layout } from "@/components/layout/Layout";
import { CodeDivider } from "@/components/ui/CodeDivider";
import { TechTag } from "@/components/ui/TechTag";
import { useI18n } from "@/lib/i18n/i18n-context";
import { interpolate } from "@/lib/i18n/translations";

const stack = [
  "JavaScript",
  "TypeScript",
  "Node.js",
  "React",
  "React Native",
  "Android",
  "Kotlin",
  "R",
  "SQL Server",
  "MySQL",
  "PostgreSql",
  "ODK",
  "Git",
  "Docker",
];

export default function About() {
  const { t } = useI18n();

  return (
    <Layout>
      <section className="py-20">
        <div className="container">
          {/* Page Header */}
          <div className="max-w-3xl mb-12 opacity-0 animate-fade-in-up">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t.aboutPage.title}
            </h1>
          </div>

          <div className="grid gap-16 lg:grid-cols-3">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Developer Photo */}
              <div className="mb-8 opacity-0 animate-fade-in-up stagger-1">
                <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-lg overflow-hidden border-2 border-primary/30 transition-all duration-300 hover:border-primary photo-zoom">
                  <img
                    src="/perfil.png"
                    alt="John Harvey Gomez Vega"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="opacity-0 animate-fade-in-up stagger-1">
                <p
                  className="text-lg text-foreground leading-relaxed"
                  dangerouslySetInnerHTML={{
                    __html: interpolate(t.aboutPage.intro, {
                      name: "John Harvey Gomez Vega",
                    }).replace(
                      /<span>/g,
                      '<span class="text-primary font-medium">'
                    ),
                  }}
                />
              </div>

              <div className="opacity-0 animate-fade-in-up stagger-2">
                <p className="text-muted-foreground leading-relaxed">
                  {t.aboutPage.paragraph1}
                </p>
              </div>

              <div className="opacity-0 animate-fade-in-up stagger-3">
                <p className="text-muted-foreground leading-relaxed">
                  {t.aboutPage.paragraph2}
                </p>
              </div>

              <div className="opacity-0 animate-fade-in-up stagger-4">
                <CodeDivider label={t.aboutPage.philosophy} />
              </div>

              <div className="space-y-4 font-mono text-sm opacity-0 animate-fade-in-up stagger-4">
                {t.aboutPage.philosophyItems.map((item) => (
                  <p
                    key={item}
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <span className="text-primary">{"//"}</span> {item}
                  </p>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Skills */}
              <div className="opacity-0 animate-fade-in-up stagger-2">
                <h2 className="font-mono text-sm text-primary mb-4">
                  <span className="text-muted-foreground">/*</span>{" "}
                  {t.aboutPage.skills}{" "}
                  <span className="text-muted-foreground">*/</span>
                </h2>
                <ul className="space-y-2">
                  {t.aboutPage.skillsList.map((skill) => (
                    <li
                      key={skill}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      <span className="text-primary mr-2">→</span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack */}
              <div className="opacity-0 animate-fade-in-up stagger-3">
                <h2 className="font-mono text-sm text-primary mb-4">
                  <span className="text-muted-foreground">/*</span>{" "}
                  {t.aboutPage.stack}{" "}
                  <span className="text-muted-foreground">*/</span>
                </h2>
                <div className="flex flex-wrap gap-2">
                  {stack.map((tech) => (
                    <TechTag key={tech}>{tech}</TechTag>
                  ))}
                </div>
              </div>

              {/* Experience */}
              <div className="opacity-0 animate-fade-in-up stagger-4">
                <h2 className="font-mono text-sm text-primary mb-4">
                  <span className="text-muted-foreground">/*</span>{" "}
                  {t.aboutPage.experience}{" "}
                  <span className="text-muted-foreground">*/</span>
                </h2>
                <div className="space-y-3 text-sm text-muted-foreground">
                  {t.aboutPage.experienceItems.map((item) => (
                    <p key={item}>{item}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
