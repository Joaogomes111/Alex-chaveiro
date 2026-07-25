import {
  ArrowRight,
  Check,
  Clock,
  MapPin,
  MessageCircle,
  Navigation,
  ShieldCheck,
} from "lucide-react";
import Image from "next/image";
import { AnimatedSection } from "@/components/animated-section";
import { CountUpMetric } from "@/components/count-up-metric";
import { FaqAccordion } from "@/components/faq-accordion";
import { Gallery } from "@/components/gallery";
import { Hero } from "@/components/hero";
import { SectionHeading } from "@/components/section-heading";
import { ServiceIcon } from "@/components/service-icon";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import reviews from "@/data/reviews.json";
import { getWhatsAppUrl, siteConfig } from "@/lib/config";

type Review = {
  name: string;
  service: string;
  text: string;
};

const typedReviews = reviews as Review[];

function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Locksmith",
    name: siteConfig.company.legalName,
    image: `${siteConfig.seo.siteUrl}${siteConfig.brand.logo}`,
    url: siteConfig.seo.siteUrl,
    telephone: siteConfig.contact.phoneDisplay,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "Av. do Estado Dalmo Vieira, 1771, Sala 21, Galeria Pontal Norte",
      addressLocality: siteConfig.company.city,
      addressRegion: siteConfig.company.state,
      addressCountry: "BR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.contact.geo.latitude,
      longitude: siteConfig.contact.geo.longitude,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "00:00",
        closes: "23:59",
      },
    ],
    areaServed: `${siteConfig.company.city} e região`,
    sameAs: [siteConfig.contact.instagramUrl, siteConfig.contact.googleMapsUrl],
  };
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessJsonLd()),
        }}
      />
      <SiteHeader />
      <main className="bg-white text-zinc-950">
        <Hero />
        <TrustSection />
        <ServicesSection />
        <DifferentialSection />
        <GallerySection />
        <ReviewsSection />
        <ServiceAreaSection />
        <FaqSection />
        <FinalCta />
      </main>
      <SiteFooter />
    </>
  );
}

function TrustSection() {
  return (
    <AnimatedSection
      id="confianca"
      className="border-y border-zinc-200 bg-white text-zinc-950"
      variant="fadeUp"
    >
      <div className="mx-auto max-w-5xl px-5 py-14 sm:px-6 lg:px-8">
        <div className="grid overflow-hidden rounded-lg border border-zinc-200 bg-white shadow-sm md:grid-cols-2">
        {siteConfig.trustMetrics.map((metric) => (
          <div
            key={metric.label}
            className="border-zinc-200 px-6 py-8 md:border-l md:first:border-l-0 lg:px-10"
          >
            <p className="text-5xl font-semibold tracking-normal text-[var(--accent)] lg:text-6xl">
              <CountUpMetric value={metric.value} suffix={metric.suffix} />
            </p>
            <p className="mt-4 text-sm leading-6 text-zinc-700">
              {metric.label}
            </p>
          </div>
        ))}
        </div>
      </div>
    </AnimatedSection>
  );
}

function ServicesSection() {
  return (
    <AnimatedSection
      id="servicos"
      className="mx-auto max-w-7xl px-5 py-24 sm:px-6 lg:px-8"
    >
      <SectionHeading
        eyebrow="Serviços"
        title="Soluções completas para portas, carros, chaves e controles."
        description="Um portfólio direto, técnico e preparado para emergências ou atendimentos programados."
      />

      <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
        {siteConfig.services.map((service) => (
          <article
            key={service.title}
            className="group rounded-lg border border-zinc-200 bg-white p-5 transition-colors hover:border-[var(--accent)]"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--accent)] text-white transition-colors group-hover:bg-zinc-950">
              <ServiceIcon name={service.icon} className="h-5 w-5" />
            </div>
            <h3 className="mt-8 text-lg font-semibold text-zinc-950">
              {service.title}
            </h3>
            <p className="mt-3 text-sm leading-7 text-zinc-600">
              {service.description}
            </p>
          </article>
        ))}
      </div>
    </AnimatedSection>
  );
}

function DifferentialSection() {
  return (
    <AnimatedSection id="diferenciais" className="bg-zinc-50 text-zinc-950">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-24 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-8">
        <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-zinc-900">
          <Image
            src={siteConfig.differentials.image}
            alt={siteConfig.differentials.imageAlt}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>

        <AnimatedSection as="div" variant="fadeLeft" className="lg:pl-8">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
            {siteConfig.differentials.eyebrow}
          </p>
          <h2 className="text-3xl font-semibold leading-tight text-zinc-950 sm:text-4xl lg:text-5xl">
            {siteConfig.differentials.title}
          </h2>
          <p className="mt-5 text-base leading-8 text-zinc-600 sm:text-lg">
            {siteConfig.differentials.description}
          </p>

          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {siteConfig.differentials.items.map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm text-zinc-800">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[var(--accent)] text-white">
                  <Check className="h-3.5 w-3.5" aria-hidden="true" />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </AnimatedSection>
      </div>
    </AnimatedSection>
  );
}

function GallerySection() {
  return (
    <AnimatedSection
      id="galeria"
      className="mx-auto max-w-7xl px-5 py-24 sm:px-6 lg:px-8"
      variant="scale"
    >
      <SectionHeading
        eyebrow="Galeria"
        title="Do balcão à máquina: um pouco do dia a dia da loja."
        description="Fotos da Galeria Pontal Norte, da máquina de corte, dos controles e das chaves que passam pelo atendimento do Alex Chaveiro."
      />
      <div className="mt-12">
        <Gallery />
      </div>
    </AnimatedSection>
  );
}

function ReviewsSection() {
  return (
    <AnimatedSection id="avaliacoes" className="bg-zinc-50">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <SectionHeading
            eyebrow="Clientes"
            title="Atendimento direto, técnico e sem complicação."
            description="Alguns pontos que os clientes costumam destacar no contato com a loja e nos atendimentos emergenciais."
          />
          <div className="rounded-lg border border-zinc-200 bg-white p-6">
            <p className="text-4xl font-semibold text-[var(--accent)]">30</p>
            <p className="mt-2 text-sm leading-6 text-zinc-600">
              anos de atuação local com foco em residências, comércios e
              automóveis.
            </p>
          </div>
        </div>

        <div className="mt-12 grid gap-3 md:grid-cols-3">
          {typedReviews.map((review) => (
            <article
              key={`${review.service}-${review.text}`}
              className="rounded-lg border border-zinc-200 bg-white p-6"
            >
              <div className="h-1 w-10 rounded-full bg-[var(--accent)]" />
              <p className="mt-6 text-sm leading-7 text-zinc-700">
                “{review.text}”
              </p>
              <div className="mt-6 border-t border-zinc-100 pt-5">
                <p className="text-sm font-semibold text-zinc-950">
                  {review.name}
                </p>
                <p className="mt-1 text-xs text-zinc-500">{review.service}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}

function ServiceAreaSection() {
  return (
    <AnimatedSection
      id="atendimento"
      className="mx-auto max-w-7xl px-5 py-24 sm:px-6 lg:px-8"
    >
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <SectionHeading
            eyebrow="Área de atendimento"
            title="Atendimento em Balneário Camboriú e região."
            description="A base fica na Galeria Pontal Norte, com plantão 24 horas para emergências e serviços em residências, comércios e veículos conforme disponibilidade."
          />
          <div className="mt-8 rounded-lg border border-zinc-200 bg-white p-5">
            <div className="flex gap-3">
              <MapPin className="mt-1 h-5 w-5 shrink-0 text-[var(--accent)]" />
              <div>
                <p className="text-sm font-semibold text-zinc-950">
                  {siteConfig.contact.shortAddress}
                </p>
                <p className="mt-2 text-sm leading-7 text-zinc-600">
                  {siteConfig.contact.address}
                </p>
              </div>
            </div>
          </div>
          <a
            href={siteConfig.contact.googleMapsUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex h-12 items-center gap-2 rounded-full bg-zinc-950 px-5 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 hover:bg-[var(--accent)]"
          >
            <Navigation className="h-4 w-4" aria-hidden="true" />
            Abrir no Google Maps
          </a>
        </div>

        <div className="overflow-hidden rounded-lg border border-zinc-200 bg-zinc-100">
          <iframe
            title="Mapa Alex Chaveiro 24Hrs"
            src={siteConfig.contact.googleMapsEmbedUrl}
            className="h-[420px] w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </AnimatedSection>
  );
}

function FaqSection() {
  return (
    <AnimatedSection id="faq" className="bg-zinc-50">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-24 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
        <div>
          <SectionHeading
            eyebrow="FAQ"
            title="Respostas rápidas antes de chamar."
            description="As dúvidas mais comuns de quem precisa resolver uma emergência ou agendar um serviço."
          />
        </div>
        <FaqAccordion />
      </div>
    </AnimatedSection>
  );
}

function FinalCta() {
  return (
    <AnimatedSection className="bg-white px-5 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-lg bg-[var(--accent)] px-6 py-14 text-white sm:px-10 lg:px-14 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-white/80">
              Atendimento imediato
            </p>
            <h2 className="text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
              Precisa de um chaveiro agora?
            </h2>
            <div className="mt-6 flex flex-wrap gap-5 text-sm text-white/85">
              <span className="inline-flex items-center gap-2">
                <Clock className="h-4 w-4 text-white" />
                24 horas
              </span>
              <span className="inline-flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-white" />
                Serviço técnico
              </span>
            </div>
          </div>
          <a
            href={getWhatsAppUrl(
              "Olá, preciso de um chaveiro agora em Balneário Camboriú.",
            )}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-14 items-center justify-center gap-2 rounded-full bg-white px-7 text-sm font-semibold text-[var(--accent)] transition-transform hover:-translate-y-0.5 hover:bg-zinc-50"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            Chamar no WhatsApp
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </AnimatedSection>
  );
}
