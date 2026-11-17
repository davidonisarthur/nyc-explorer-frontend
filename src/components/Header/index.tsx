export default function Header() {
  return (
    <header className="border-b border-border bg-surface">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-x-8 gap-y-5 px-5 py-5 sm:px-8 sm:py-6 lg:px-12">
        <a
          href="/"
          aria-label="NYC Explorer — página inicial"
          className="flex items-center gap-3 rounded-sm no-underline sm:gap-4"
        >
          <span
            aria-hidden="true"
            className="flex size-12 shrink-0 items-center justify-center bg-accent text-sm font-extrabold tracking-tighter text-foreground"
          >
            NYC
          </span>
          <span className="flex flex-col">
            <span className="text-xl leading-tight font-semibold tracking-tight sm:text-2xl">
              NYC Explorer<span className="text-accent">.</span>
            </span>
            <span className="mt-1 text-xs leading-normal text-foreground-secondary">
              A cidade em cada esquina.
            </span>
          </span>
        </a>

        <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
          <span className="hidden text-xs font-medium tracking-widest text-foreground-secondary lg:block">
            NEW YORK CITY
          </span>
          <nav aria-label="Navegação principal">
            <ul className="flex flex-wrap items-center gap-x-6 gap-y-3">
              <li>
                <a
                  href="/"
                  className="inline-flex min-h-11 items-center border-b-2 border-transparent px-1 text-sm font-medium no-underline hover:border-accent"
                >
                  Explorar
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
