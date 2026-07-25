"use client";

import { Menu, MessageCircle, Phone, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { getWhatsAppUrl, siteConfig } from "@/lib/config";

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const whatsAppUrl = getWhatsAppUrl();

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-zinc-200 bg-white/92 text-zinc-950 backdrop-blur-xl">
      <div className="relative mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
        <a
          href="#inicio"
          className="group inline-flex items-center gap-3"
          aria-label="Ir para o início"
          onClick={() => setIsOpen(false)}
        >
          <span className="relative h-14 w-14 overflow-hidden rounded-full border border-zinc-200 bg-white transition-colors group-hover:border-[var(--accent)]">
            <Image
              src={siteConfig.brand.logo}
              alt="Logo Alex Chaveiro"
              fill
              sizes="56px"
              className="object-cover"
              priority
            />
          </span>
          <span className="leading-none">
            <span className="block text-sm font-semibold tracking-tight">
              Alex Chaveiro
            </span>
            <span className="block text-xs text-zinc-500">24Hrs</span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Principal">
          {siteConfig.navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-zinc-600 transition-colors hover:text-zinc-950"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={siteConfig.contact.phoneHref}
            className="inline-flex h-10 items-center gap-2 rounded-full border border-zinc-200 px-4 text-sm font-medium text-zinc-950 transition-colors hover:border-zinc-300 hover:bg-zinc-50"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            {siteConfig.contact.phoneDisplay}
          </a>
          <a
            href={whatsAppUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-10 items-center gap-2 rounded-full bg-[var(--accent)] px-4 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 hover:bg-[var(--accent-dark)]"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            WhatsApp
          </a>
        </div>

        <button
          type="button"
          className="absolute right-5 top-5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-950 lg:hidden"
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((value) => !value)}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {isOpen ? (
        <div className="border-t border-zinc-200 bg-white px-5 py-5 lg:hidden">
          <nav className="grid gap-1" aria-label="Principal mobile">
            {siteConfig.navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-lg px-2 py-3 text-base text-zinc-800 transition-colors hover:bg-zinc-50"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="mt-5 grid gap-3">
            <a
              href={whatsAppUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[var(--accent)] px-5 text-sm font-semibold text-white"
              onClick={() => setIsOpen(false)}
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              Chamar no WhatsApp
            </a>
            <a
              href={siteConfig.contact.phoneHref}
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-zinc-200 px-5 text-sm font-medium text-zinc-950"
              onClick={() => setIsOpen(false)}
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              Ligar agora
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
