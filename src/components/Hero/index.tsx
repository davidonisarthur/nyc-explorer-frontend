

export function Hero() {
  return (
    <>
      <section aria-labelledby="hero-title" className="grid bg-foreground text-surface lg:min-h-[760px] lg:grid-cols-2">
        <div className="flex flex-col justify-between px-6 py-10 sm:px-12 sm:py-12 lg:px-16 xl:px-24">
          <div className="flex items-center gap-3 text-[10px] font-medium tracking-[0.24em] uppercase">
            <span className="h-px w-8 bg-accent" aria-hidden="true" />
            Um olhar além do cartão-postal
          </div>

          <div className="py-16 lg:py-20">
            <p className="mb-6 text-xs tracking-[0.2em] text-accent uppercase">Welcome to New York</p>
            <h1 id="hero-title" className="max-w-xl font-serif text-6xl leading-[0.98] font-normal tracking-tight sm:text-7xl xl:text-8xl">
              A cidade é<br />
              grande.<br />
              <span className="italic text-accent">Vá além.</span>
            </h1>
            <p className="mt-8 max-w-sm text-base leading-relaxed text-surface/65">
              Entre avenidas icônicas e esquinas inesperadas, encontre a Nova York que faz sentido para você.
            </p>
            <a href="#explorar" className="mt-10 inline-flex min-h-14 items-center justify-between gap-10 bg-accent px-6 text-xs font-semibold tracking-widest text-foreground uppercase no-underline hover:bg-surface">
              Explore a cidade <span aria-hidden="true" className="text-xl">↗</span>
            </a>
          </div>

          <div className="flex items-center justify-between border-t border-surface/20 pt-5 text-[10px] tracking-[0.18em] text-surface/60 uppercase">
            <span>Cinco distritos. Infinitas histórias.</span>
            <span aria-hidden="true">01 — NYC</span>
          </div>
        </div>

        <div
          role="img"
          aria-label="Vista urbana de Nova York com a ponte do Brooklyn e os edifícios de Manhattan"
          className="relative min-h-[450px] bg-cover bg-center sm:min-h-[560px] lg:min-h-full"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1518391846015-55a9cc003b25?auto=format&fit=crop&w=1800&q=85')" }}
        >
          <div className="absolute inset-0 bg-linear-to-t from-black/65 via-transparent to-transparent" />
          <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-6 p-6 text-surface sm:p-10">
            <div>
              <p className="text-[10px] tracking-[0.2em] uppercase">Um novo ponto de vista</p>
              <p className="mt-2 font-serif text-3xl italic">Meet New York.</p>
            </div>
            <span aria-hidden="true" className="flex size-11 items-center justify-center rounded-full border border-surface/50 text-lg">↗</span>
          </div>
        </div>
      </section>
    </>
  );
}
