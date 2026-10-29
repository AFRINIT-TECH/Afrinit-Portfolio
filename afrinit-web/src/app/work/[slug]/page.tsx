import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { Button } from "@/components/ui/Button";
import { GeometricVisual } from "@/components/work/GeometricVisual";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return siteConfig.work.items.map((item) => ({
    slug: item.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = siteConfig.work.items.find((item) => item.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found | Afrinit",
    };
  }

  return {
    title: `${project.title} (${project.category}) | Afrinit Case Study`,
    description: project.summary,
  };
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const project = siteConfig.work.items.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main id="main-content">
      <Section variant="dark" className="pt-12 md:pt-16 pb-20">
        <Container>
          {/* Back link */}
          <div className="mb-8">
            <Link
              href="/#work"
              className="inline-flex items-center gap-2 text-[15px] font-medium text-sand-300 hover:text-white transition-colors focus-visible:outline-2 focus-visible:outline-orange-500 rounded-lg px-2 py-1 -ml-2"
            >
              <svg
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="m15 18-6-6 6-6" />
              </svg>
              <span>Back to selected work</span>
            </Link>
          </div>

          <div className="max-w-4xl mx-auto space-y-12">
            {/* Header info */}
            <div className="space-y-4">
              <span className="text-sm font-bold uppercase tracking-wider text-green-400">
                {project.category}
              </span>
              <Heading level={1} variant="hero" className="text-sand-100">
                {project.title}
              </Heading>
              <p className="text-[19px] md:text-[22px] leading-[1.5] text-sand-300 font-medium pt-2">
                {project.summary}
              </p>
            </div>

            {/* Geometric visual illustration */}
            <div className="rounded-2xl overflow-hidden border border-brown-800 shadow-2xl">
              <GeometricVisual
                theme={project.visualTheme}
                className="h-[300px] md:h-[360px]"
              />
            </div>

            {/* Case Study Details Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-6 border-t border-brown-800">
              {/* Challenge */}
              <div className="bg-brown-900 border border-brown-800 rounded-2xl p-6 sm:p-8 space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-orange-500">
                  01 · The Challenge
                </span>
                <Heading level={2} variant="card" className="text-sand-100">
                  Challenge
                </Heading>
                <p className="text-[16px] leading-[1.6] text-sand-300">
                  {project.challenge}
                </p>
              </div>

              {/* Solution */}
              <div className="bg-brown-900 border border-brown-800 rounded-2xl p-6 sm:p-8 space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-orange-500">
                  02 · The Solution
                </span>
                <Heading level={2} variant="card" className="text-sand-100">
                  Solution
                </Heading>
                <p className="text-[16px] leading-[1.6] text-sand-300">
                  {project.solution}
                </p>
              </div>

              {/* Result */}
              <div className="bg-brown-900 border border-brown-800 rounded-2xl p-6 sm:p-8 space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-green-400">
                  03 · The Result
                </span>
                <Heading level={2} variant="card" className="text-sand-100">
                  Result
                </Heading>
                <p className="text-[16px] leading-[1.6] text-sand-300">
                  {project.result}
                </p>
              </div>
            </div>

            {/* Bottom CTA */}
            <div className="bg-brown-900 border border-brown-800 rounded-2xl p-8 sm:p-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div className="space-y-1">
                <Heading level={3} variant="card" className="text-sand-100">
                  Have a similar project in mind?
                </Heading>
                <p className="text-sand-300 text-[15px]">
                  Let us discuss your goals, architecture, and timeline.
                </p>
              </div>
              <Button href="/#contact" variant="primary" size="lg">
                Discuss your project
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
