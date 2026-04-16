"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatedInView } from "@/components/animated-in-view";
import { BoundaryNotice } from "@/components/boundary-notice";
import { EmergencyHelpCard } from "@/components/emergency-help-card";
import { FeatureCard } from "@/components/feature-card";
import { FloatingCTA } from "@/components/floating-cta";
import { GuidedFlow } from "@/components/guided-flow";
import { HeroSection } from "@/components/hero-section";
import { ProductPreviewTabs } from "@/components/product-preview-tabs";
import { ResourceCard } from "@/components/resource-card";
import { SectionHeading } from "@/components/section-heading";
import { SiteHeader } from "@/components/site-header";
import { TestimonialCard } from "@/components/testimonial-card";
import {
  boundaryItems,
  emergencyContacts,
  features,
  guidedSteps,
  moods,
  previewTabs,
  resources,
  testimonials,
} from "@/lib/data";
import type { MoodDefinition, PreviewTabKey } from "@/lib/types";

export function HomeExperience() {
  const [selectedMoodKey, setSelectedMoodKey] = useState<MoodDefinition["key"]>("mixed");
  const [activeTab, setActiveTab] = useState<PreviewTabKey>("chat");
  const [journalValue, setJournalValue] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [hideFloatingCta, setHideFloatingCta] = useState(false);
  const footerRef = useRef<HTMLDivElement | null>(null);

  const selectedMood = useMemo(
    () => moods.find((mood) => mood.key === selectedMoodKey) ?? moods[2],
    [selectedMoodKey],
  );

  const recommendedResources = useMemo(() => {
    const recommendedIds = new Set(selectedMood.recommendedResourceIds);
    return [...resources].sort((a, b) => {
      const aScore = recommendedIds.has(a.id) ? 0 : 1;
      const bScore = recommendedIds.has(b.id) ? 0 : 1;
      return aScore - bScore;
    });
  }, [selectedMood]);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 14);
    }

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!footerRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setHideFloatingCta(entry.isIntersecting);
      },
      { threshold: 0.12 },
    );

    observer.observe(footerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <SiteHeader scrolled={scrolled} />

      <main className="mx-auto max-w-[1380px] space-y-24 pb-24 pt-6 md:space-y-28">
        <HeroSection mood={selectedMood} />

        <section id="how-it-helps" className="space-y-8">
          <SectionHeading
            eyebrow="How it helps"
            title="A calmer interface with clearer product value"
            description="The visual system is sharper, the hierarchy is stronger, and each feature now speaks to a concrete moment of need instead of generic wellness language."
          />
          <div className="grid gap-4 lg:grid-cols-3">
            {features.map((feature, index) => (
              <AnimatedInView key={feature.title} delay={index * 0.05}>
                <FeatureCard feature={feature} />
              </AnimatedInView>
            ))}
          </div>
        </section>

        <GuidedFlow steps={guidedSteps} />

        <ProductPreviewTabs
          activeTab={activeTab}
          onTabChange={setActiveTab}
          journalValue={journalValue}
          onJournalChange={setJournalValue}
          moods={moods}
          selectedMood={selectedMood}
          onMoodChange={(mood) => setSelectedMoodKey(mood.key)}
          tabs={previewTabs}
        />

        <section id="resources" className="space-y-8">
          <SectionHeading
            eyebrow="Resources"
            title="Recommended guides that shift with the check-in"
            description="Resources are grouped more clearly and the most relevant ones rise to the top based on the current mood selection."
          />
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {recommendedResources.slice(0, 6).map((resource) => (
              <AnimatedInView key={resource.id} delay={0.03}>
                <ResourceCard
                  resource={resource}
                  highlighted={selectedMood.recommendedResourceIds.includes(resource.id)}
                />
              </AnimatedInView>
            ))}
          </div>
        </section>

        <EmergencyHelpCard contacts={emergencyContacts} />

        <section className="space-y-8">
          <SectionHeading
            eyebrow="Sample tone"
            title="Supportive language without overclaiming what the product is"
            description="These testimonials stay secondary in the hierarchy and reinforce trust rather than overpowering the page."
          />
          <div className="grid gap-4 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.author} testimonial={testimonial} />
            ))}
          </div>
        </section>

        <div ref={footerRef}>
          <BoundaryNotice items={boundaryItems} />
        </div>
      </main>

      <FloatingCTA hideNearFooter={hideFloatingCta} />
    </>
  );
}
