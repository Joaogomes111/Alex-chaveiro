import {
  ExternalLink,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";
import Image from "next/image";
import { getWhatsAppUrl, siteConfig } from "@/lib/config";

export function SiteFooter() {
  return (
    <footer id="contato" className="bg-black text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-6 md:grid-cols-[1.1fr_0.9fr_0.8fr] lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <span className="relative h-12 w-12 overflow-hidden rounded-full border border-white/15 bg-white">
              <Image
                src={siteConfig.brand.logo}
                alt="Logo Alex Chaveiro"
                fill
                sizes="48px"
                className="object-cover"
              />
            </span>
            <p className="text-lg font-semibold">{siteConfig.company.name}</p>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-7 text-zinc-400">
            Chaveiro 24 horas em Balneário Camboriú para serviços automotivos,
            residenciais e empresariais.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-10 items-center gap-2 rounded-full bg-[var(--accent)] px-4 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              WhatsApp
            </a>
            <a
              href={siteConfig.contact.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-10 items-center gap-2 rounded-full border border-white/15 px-4 text-sm font-medium text-white transition-colors hover:bg-white/10"
            >
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
              Instagram
            </a>
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-zinc-500">
            Contato
          </p>
          <ul className="mt-5 space-y-4 text-sm text-zinc-300">
            <li className="flex gap-3">
              <Phone className="mt-0.5 h-4 w-4 text-[var(--accent)]" />
              <a href={siteConfig.contact.phoneHref}>
                {siteConfig.contact.phoneDisplay}
              </a>
            </li>
            <li className="flex gap-3">
              <MessageCircle className="mt-0.5 h-4 w-4 text-[var(--accent)]" />
              <a href={getWhatsAppUrl()} target="_blank" rel="noreferrer">
                {siteConfig.contact.whatsappDisplay}
              </a>
            </li>
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 text-[var(--accent)]" />
              <span>{siteConfig.contact.address}</span>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-zinc-500">
            Links rápidos
          </p>
          <ul className="mt-5 space-y-3 text-sm text-zinc-300">
            {siteConfig.navLinks.map((link) => (
              <li key={link.href}>
                <a className="transition-colors hover:text-white" href={link.href}>
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={siteConfig.contact.googleMapsUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 transition-colors hover:text-white"
              >
                Google Maps
                <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-5 text-xs text-zinc-500 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <span>
            © {new Date().getFullYear()} {siteConfig.company.name}. Todos os
            direitos reservados.
          </span>
          <span>{siteConfig.contact.hours}</span>
        </div>
      </div>
    </footer>
  );
}
