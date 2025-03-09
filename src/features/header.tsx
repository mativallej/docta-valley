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
import { useTheme } from "next-themes"
import { SunIcon, MoonIcon } from "lucide-react"
import { navItems } from "@/data/layout"
import { useEffect, useState } from "react"


export default function Header() {
  const pathname = usePathname()
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false)
  const isAuthPage = pathname === "/signin" || pathname === "/register"
  
  useEffect(() => {
    setMounted(true)
  }, [])

  const ThemeIcon = mounted ? (theme === "light" ? SunIcon : MoonIcon) : SunIcon
  
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
    >
      <div className="container px-4 flex h-16 md:h-20 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-xl md:text-2xl font-bold"
          >
            Docta Valley
          </motion.span>
        </Link>
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            {navItems.filter((item) => item.showOnHeader).map((item) => (
              <NavigationMenuItem key={item.href}>
                <Link href={item.href} legacyBehavior passHref>
                  <NavigationMenuLink className="flex items-center h-10 px-4 py-2 space-x-2">
                    {item.icon && <span>{item.icon}</span>}
                    <span>{item.label}</span>
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
        {!isAuthPage && (
          <div className="flex items-center space-x-2 md:space-x-4">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              <ThemeIcon className="h-4 w-4 md:h-5 md:w-5" />
            </Button>
            <Button size="sm" className="px-3 md:px-4" asChild>
              <Link href="https://tally.so/r/3ENKPX" target="_blank" rel="noopener noreferrer">Unirse</Link>
            </Button>
          </div>
        )}
      </div>
    </motion.header>
  )
}

