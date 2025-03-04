import { Separator } from "@/components/ui/separator"
import Link from "next/link"
import { navItems, resourceItems, legalItems, socialItems } from "@/data/layout"

export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container flex flex-col gap-10 py-16">
        <div className="grid grid-cols-2 gap-12 md:grid-cols-4">
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-semibold">Docta Valley</h3>
            {
                navItems.filter(item => item.showOnFooter).map((item) => (
                    <Link key={item.href} href={item.href} className="text-sm text-muted-foreground hover:text-foreground">
                    {item.label}
                  </Link>
                ))
            }
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-semibold">Recursos</h3>
            {
                resourceItems.map((item) => (
                    <Link key={item.href} href={item.href} className="text-sm text-muted-foreground hover:text-foreground">
                    {item.label}
                  </Link>
                ))
            }
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-semibold">Legal</h3>
            {
                legalItems.map((item) => (
                    <Link key={item.href} href={item.href} className="text-sm text-muted-foreground hover:text-foreground">
                    {item.label}
                  </Link>
                ))
            }
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-semibold">Social</h3>
            {
                socialItems.map((item) => (
                    <Link key={item.href} href={item.href} className="text-sm text-muted-foreground hover:text-foreground">
                    {item.label}
                  </Link>
                ))
            }
          </div>
        </div>
        <Separator />
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Docta Valley. Todos los derechos reservados.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Política de Privacidad
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Términos de Servicio
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

