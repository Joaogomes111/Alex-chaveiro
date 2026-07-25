"use client";

import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { siteConfig } from "@/lib/config";

export function Gallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const activeImage =
    activeIndex === null ? null : siteConfig.gallery[activeIndex] ?? null;

  useEffect(() => {
    if (activeIndex === null) {
      return;
    }

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActiveIndex(null);
      }

      if (event.key === "ArrowRight") {
        setActiveIndex((current) =>
          current === null ? current : (current + 1) % siteConfig.gallery.length,
        );
      }

      if (event.key === "ArrowLeft") {
        setActiveIndex((current) =>
          current === null
            ? current
            : (current - 1 + siteConfig.gallery.length) %
              siteConfig.gallery.length,
        );
      }
    }

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeIndex]);

  return (
    <>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {siteConfig.gallery.map((image, index) => (
          <button
            key={image.src}
            type="button"
            aria-label={`Abrir imagem: ${image.alt}`}
            onClick={() => setActiveIndex(index)}
            className="group relative aspect-[4/3] overflow-hidden rounded-lg bg-zinc-100 outline-none ring-zinc-950/10 transition-transform hover:-translate-y-1 focus-visible:ring-4"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover transition duration-500 group-hover:scale-[1.03]"
            />
            <span className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/10" />
          </button>
        ))}
      </div>

      {activeImage ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Galeria de imagens"
          className="fixed inset-0 z-[80] grid place-items-center bg-black/90 px-4 py-8 backdrop-blur-sm"
        >
          <button
            type="button"
            aria-label="Fechar galeria"
            onClick={() => setActiveIndex(null)}
            className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white transition-colors hover:bg-white/10"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>

          <button
            type="button"
            aria-label="Imagem anterior"
            onClick={() =>
              setActiveIndex((current) =>
                current === null
                  ? current
                  : (current - 1 + siteConfig.gallery.length) %
                    siteConfig.gallery.length,
              )
            }
            className="absolute left-4 top-1/2 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 text-white transition-colors hover:bg-white/10 sm:flex"
          >
            <ChevronLeft className="h-5 w-5" aria-hidden="true" />
          </button>

          <div className="relative aspect-[4/3] w-full max-w-5xl overflow-hidden rounded-lg bg-zinc-950">
            <Image
              src={activeImage.src}
              alt={activeImage.alt}
              fill
              sizes="90vw"
              className="object-contain"
            />
          </div>

          <button
            type="button"
            aria-label="Próxima imagem"
            onClick={() =>
              setActiveIndex((current) =>
                current === null
                  ? current
                  : (current + 1) % siteConfig.gallery.length,
              )
            }
            className="absolute right-4 top-1/2 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 text-white transition-colors hover:bg-white/10 sm:flex"
          >
            <ChevronRight className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      ) : null}
    </>
  );
}
