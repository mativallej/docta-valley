import { Separator } from "@/components/ui/separator"
import Link from "next/link"
import { navItems, resourceItems, legalItems, socialItems } from "@/data/layout"

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--surface)]">
      <div className="container flex flex-col gap-10 py-16">
        <div className="grid grid-cols-2 gap-12 md:grid-cols-3">
          <div className="flex flex-col gap-4">
            <h3 className="font-mono text-[12px] font-semibold uppercase tracking-[0.08em] text-[var(--primary)]">Docta Valley</h3>
            {
                navItems.filter(item => item.showOnFooter).map((item) => (
                    <Link key={item.href} href={item.href} className="font-sans text-[13px] text-[var(--fg-muted)] hover:text-[var(--fg)] transition-colors duration-150">
                    {item.label}
                  </Link>
                ))
            }
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="font-mono text-[12px] font-semibold uppercase tracking-[0.08em] text-[var(--primary)]">Legal</h3>
            {
                legalItems.map((item) => (
                    <Link key={item.href} href={item.href} className="font-sans text-[13px] text-[var(--fg-muted)] hover:text-[var(--fg)] transition-colors duration-150">
                    {item.label}
                  </Link>
                ))
            }
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="font-mono text-[12px] font-semibold uppercase tracking-[0.08em] text-[var(--primary)]">Social</h3>
            {
                socialItems.map((item) => (
                    <Link key={item.href} href={item.href} className="font-sans text-[13px] text-[var(--fg-muted)] hover:text-[var(--fg)] transition-colors duration-150">
                    {item.label}
                  </Link>
                ))
            }
          </div>
        </div>
        <Separator />
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p className="font-sans text-[12px] text-[var(--muted-fg)]">
            &copy; {new Date().getFullYear()} Docta Valley. Todos los derechos reservados.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="font-sans text-[12px] text-[var(--muted-fg)] hover:text-[var(--fg)] transition-colors duration-150">
              Politica de Privacidad
            </Link>
            <Link href="#" className="font-sans text-[12px] text-[var(--muted-fg)] hover:text-[var(--fg)] transition-colors duration-150">
              Terminos de Servicio
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
