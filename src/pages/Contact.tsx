import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { CodeDivider } from "@/components/ui/CodeDivider";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Github, Linkedin, Mail, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useI18n } from "@/lib/i18n/i18n-context";

const socialLinks = [
  { href: "https://github.com/zemog1916", icon: Github, label: "GitHub", handle: "@zemog1916" },
  { href: "https://linkedin.com/in/zemog1916", icon: Linkedin, label: "LinkedIn", handle: "/in/zemog1916" },
  { href: "mailto:zemog1916@gmail.com", icon: Mail, label: "Email", handle: "zemog1916@gmail.com" },
];

export default function Contact() {
  const { toast } = useToast();
  const { t } = useI18n();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: t.contactPage.toastTitle,
      description: t.contactPage.toastDescription,
    });

    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <Layout>
      <section className="py-20">
        <div className="container">
          {/* Page Header */}
          <div className="max-w-2xl mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t.contactPage.title}
            </h1>
            <p className="text-muted-foreground leading-relaxed">
              {t.contactPage.description}
            </p>
          </div>

          <div className="grid gap-16 lg:grid-cols-2">
            {/* Contact Form */}
            <div>
              <CodeDivider label={t.contactPage.sendMessage} />

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="font-mono text-sm">
                    <span className="text-primary">//</span> {t.contactPage.name}
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder={t.contactPage.namePlaceholder}
                    required
                    className="bg-card border-border font-mono text-sm"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="font-mono text-sm">
                    <span className="text-primary">//</span> {t.contactPage.email}
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder={t.contactPage.emailPlaceholder}
                    required
                    className="bg-card border-border font-mono text-sm"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="font-mono text-sm">
                    <span className="text-primary">//</span> {t.contactPage.message}
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder={t.contactPage.messagePlaceholder}
                    rows={6}
                    required
                    className="bg-card border-border font-mono text-sm resize-none"
                  />
                </div>

                <Button type="submit" disabled={isSubmitting} className="font-mono">
                  {isSubmitting ? (
                    t.common.sending
                  ) : (
                    <>
                      {t.common.sendMessage}
                      <Send className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>
            </div>

            {/* Social Links */}
            <div>
              <CodeDivider label={t.contactPage.connect} />

              <div className="space-y-6">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-card border border-border rounded-lg hover:border-primary/50 transition-colors group"
                  >
                    <div className="flex items-center justify-center w-12 h-12 bg-secondary rounded-lg group-hover:bg-primary/10 transition-colors">
                      <link.icon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                    <div>
                      <p className="font-mono text-sm text-foreground group-hover:text-primary transition-colors">
                        {link.label}
                      </p>
                      <p className="font-mono text-xs text-muted-foreground">
                        {link.handle}
                      </p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Availability */}
              <div className="mt-8 p-4 bg-card border border-border rounded-lg">
                <p className="font-mono text-xs text-muted-foreground mb-2">
                  <span className="text-primary">/*</span> {t.common.availability}{" "}
                  <span className="text-primary">*/</span>
                </p>
                <p className="text-sm text-foreground">
                  {t.common.availableForWork}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
