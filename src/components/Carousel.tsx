"use client";

import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import type { CaseStudy } from "@/lib/portfolio";

export function Carousel({ items }: { items: CaseStudy[] }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selected, setSelected] = useState(0);

  const onSelect = useCallback(() => {
    if (emblaApi) setSelected(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div>
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {items.map((item) => (
            <div key={item.slug} className="relative min-w-0 flex-[0_0_100%] px-1">
              <div className="blob-card overflow-hidden border border-black/10 bg-black/[0.03]">
                <div className="relative aspect-[1003/706] w-full">
                  <Image
                    src={item.image}
                    alt={`${item.category} — ${item.client}`}
                    fill
                    sizes="(min-width: 768px) 900px, 100vw"
                    className="object-cover"
                    priority={item.slug === items[0].slug}
                  />
                </div>
                <div className="flex flex-wrap items-center justify-between gap-2 px-6 py-5">
                  <div>
                    <p className="font-heading text-sm font-medium">{item.client}</p>
                    <p className="text-xs text-foreground/50">{item.segment}</p>
                  </div>
                  <span className="rounded-full border border-black/15 px-3 py-1 text-xs text-foreground/70">
                    {item.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-5 flex items-center justify-center gap-2">
        {items.map((item, index) => (
          <button
            key={item.slug}
            aria-label={`Ir para o case ${item.client}`}
            onClick={() => emblaApi?.scrollTo(index)}
            className={`h-2 rounded-full transition-all ${
              index === selected ? "w-6 bg-foreground" : "w-2 bg-foreground/25"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
