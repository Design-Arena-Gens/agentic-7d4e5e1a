export function Footer() {
  return (
    <footer className="mt-16 border-t border-white/10">
      <div className="container-max py-8 text-sm text-[var(--muted)] flex flex-col md:flex-row items-center justify-between gap-4">
        <p>? {new Date().getFullYear()} FinBridge</p>
        <p>Built for a modern, finance-forward web experience</p>
      </div>
    </footer>
  )
}
