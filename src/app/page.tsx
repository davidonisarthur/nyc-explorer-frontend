import { Hero } from "@/components/Hero";

export default function Home() {
  return (
    <main>

      <Hero />

      <section id="explorar" aria-labelledby="explore-title" className="mx-auto max-w-7xl scroll-mt-8 px-5 py-16 sm:px-8 sm:py-24 lg:px-12">
        <div className="grid gap-6 border-b border-border pb-10 md:grid-cols-2 md:items-end">
          <div>
            <p className="mb-4 text-xs font-medium tracking-[0.2em] text-foreground-secondary uppercase">01 / Descubra seu caminho</p>
            <h2 id="explore-title" className="font-serif text-4xl leading-tight font-normal tracking-tight sm:text-5xl">
              Uma cidade.<br /><span className="italic">Muitas versões.</span>
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-foreground-secondary md:justify-self-end">
            A energia muda a cada travessia. Comece pelos cinco distritos e descubra o que torna cada pedaço de Nova York único.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5">
          <article className="border-b border-border py-8 sm:pr-6">
            <span className="text-xs text-foreground-secondary">01</span>
            <h3 className="mt-6 font-serif text-2xl font-normal">Manhattan</h3>
            <p className="mt-3 text-sm text-foreground-secondary">Arranha-céus, arte e o ritmo que nunca para.</p>
          </article>
          <article className="border-b border-border py-8 sm:pr-6">
            <span className="text-xs text-foreground-secondary">02</span>
            <h3 className="mt-6 font-serif text-2xl font-normal">Brooklyn</h3>
            <p className="mt-3 text-sm text-foreground-secondary">Criatividade, cafés e novas perspectivas do skyline.</p>
          </article>
          <article className="border-b border-border py-8 sm:pr-6">
            <span className="text-xs text-foreground-secondary">03</span>
            <h3 className="mt-6 font-serif text-2xl font-normal">Queens</h3>
            <p className="mt-3 text-sm text-foreground-secondary">Um encontro de culturas e sabores do mundo.</p>
          </article>
          <article className="border-b border-border py-8 sm:pr-6">
            <span className="text-xs text-foreground-secondary">04</span>
            <h3 className="mt-6 font-serif text-2xl font-normal">The Bronx</h3>
            <p className="mt-3 text-sm text-foreground-secondary">História, identidade e cultura em cada esquina.</p>
          </article>
          <article className="border-b border-border py-8">
            <span className="text-xs text-foreground-secondary">05</span>
            <h3 className="mt-6 font-serif text-2xl font-normal">Staten Island</h3>
            <p className="mt-3 text-sm text-foreground-secondary">Uma pausa verde, do outro lado da travessia.</p>
          </article>
        </div>
      </section>

      <section aria-labelledby="invitation-title" className="bg-background-secondary px-6 py-16 text-center sm:py-20">
        <p className="text-xs font-medium tracking-[0.2em] text-foreground-secondary uppercase">Menos roteiro. Mais descobertas.</p>
        <h2 id="invitation-title" className="mx-auto mt-5 max-w-2xl font-serif text-4xl leading-tight font-normal tracking-tight sm:text-5xl">
          Sua próxima história<br />começa em uma <span className="italic">esquina.</span>
        </h2>
        <a href="#explorar" className="mt-8 inline-flex min-h-12 items-center gap-8 border-b border-foreground text-sm font-medium no-underline hover:border-accent">
          Encontre seu ponto de partida <span aria-hidden="true">↑</span>
        </a>
      </section>
    </main>
  );
}
