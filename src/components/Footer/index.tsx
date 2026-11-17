export default function Footer() {
  return (
    <footer className="border-t border-border bg-background-secondary">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 py-8 sm:px-8 lg:px-12">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <a
              href="/"
              aria-label="NYC Explorer — página inicial"
              className="inline-block rounded-sm text-xl font-semibold tracking-tight no-underline"
            >
              NYC Explorer<span className="text-accent">.</span>
            </a>
            <p className="mt-2 text-sm text-foreground-secondary">
              Novos lugares. Novas histórias. A mesma Nova York.
            </p>
          </div>

          <nav aria-label="Navegação do rodapé">
            <ul className="flex flex-wrap items-center gap-6">
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

        <div className="flex flex-col gap-3 border-t border-border pt-5 text-xs text-foreground-secondary sm:flex-row sm:items-center sm:justify-between">
          <p>NYC Explorer · Projeto educacional.</p>
          <span className="font-medium tracking-widest">NEW YORK CITY</span>
        </div>
      </div>
    </footer>
  );
}
