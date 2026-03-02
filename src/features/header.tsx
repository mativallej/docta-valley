"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"
import { WhatsAppIcon } from "@/components/icons/whatsapp"
import { Linkedin, Twitter } from "lucide-react"
import { navItems } from "@/data/layout"

export default function Header() {
  const pathname = usePathname()
  const isAuthPage = pathname === "/signin" || pathname === "/register"

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 z-50 w-full border-b border-[var(--border)] bg-[var(--surface)]/95 backdrop-blur supports-[backdrop-filter]:bg-[var(--surface)]/60"
      style={{ height: 'var(--header-h)' }}
    >
      <div className="container px-4 flex h-14 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="font-mono text-[14px] font-bold uppercase tracking-[0.03em] text-[var(--primary)]"
          >
            Docta Valley
          </motion.span>
        </Link>
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            {navItems.filter((item) => item.showOnHeader).map((item) => (
              <NavigationMenuItem key={item.href}>
                <Link href={item.href} legacyBehavior passHref>
                  <NavigationMenuLink
                    className={`flex items-center h-8 px-3 py-1.5 space-x-2 rounded-[var(--radius)] font-mono text-[10px] font-semibold uppercase tracking-[0.10em] transition-colors ${
                      pathname === item.href
                        ? 'bg-[var(--primary-faint)] text-[var(--primary)] border border-[var(--primary)]/20'
                        : 'text-[var(--muted-fg)] hover:text-[var(--fg)] hover:bg-[var(--surface-elevated)]'
                    }`}
                  >
                    {item.icon && <span>{item.icon}</span>}
                    <span>{item.label}</span>
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
        {!isAuthPage && (
          <div className="flex items-center space-x-3">
            <Link href="https://x.com/doctavalley" target="_blank" rel="noopener noreferrer" className="text-[var(--muted-fg)] hover:text-[var(--fg)] transition-colors">
              <Twitter className="h-4 w-4" />
            </Link>
            <Link href="https://www.linkedin.com/company/doctavalley" target="_blank" rel="noopener noreferrer" className="text-[var(--muted-fg)] hover:text-[var(--fg)] transition-colors">
              <Linkedin className="h-4 w-4" />
            </Link>
            <Button size="sm" asChild>
              <Link href="https://chat.whatsapp.com/KfBZXVDwrzuIs1HbrvvmSb?mode=gi_t" target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon className="h-3.5 w-3.5 mr-1.5" />
                Unirse
              </Link>
            </Button>
          </div>
        )}
      </div>
    </motion.header>
  )
}
