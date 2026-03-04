"use client";

import { FadeIn } from "../animations/FadeIn";
import { PageHeader } from "./PageHeader";

interface PolicySection {
  title: string;
  content: string[];
}

interface PolicyLayoutProps {
  badge: string;
  title: string;
  titleHighlight: string;
  description: string;
  lastUpdated: string;
  sections: PolicySection[];
}

export function PolicyLayout({
  badge,
  title,
  titleHighlight,
  description,
  lastUpdated,
  sections,
}: PolicyLayoutProps) {
  return (
    <>
      <PageHeader
        badge={badge}
        title={title}
        titleHighlight={titleHighlight}
        description={description}
      />

      <section className="pb-24">
        <div className="max-w-3xl mx-auto px-6">
          <FadeIn>
            <p className="text-sm text-black/40 mb-12 text-center">
              Last updated: {lastUpdated}
            </p>
          </FadeIn>

          <div className="space-y-10">
            {sections.map((section, index) => (
              <FadeIn key={section.title} delay={index * 0.05}>
                <div>
                  <h2 className="text-xl font-bold mb-4">{section.title}</h2>
                  <div className="space-y-3">
                    {section.content.map((paragraph, i) => (
                      <p
                        key={i}
                        className="text-black/60 leading-relaxed"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.3}>
            <div className="mt-16 pt-8 border-t border-black/10">
              <p className="text-sm text-black/40 text-center">
                If you have any questions about this policy, please contact us at{" "}
                <a
                  href="mailto:info@getrestyle.com"
                  className="text-black hover:underline"
                >
                  info@getrestyle.com
                </a>
              </p>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
