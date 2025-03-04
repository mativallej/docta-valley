import { StartupCategory } from "@/types/startup";

export interface NavItem {
  label: string;
  href: string;
  showOnHeader?: boolean;
  showOnFooter?: boolean;
}

export const navItems: NavItem[] = [
  { label: 'Miembros', href: '/#members', showOnHeader: true, showOnFooter: true },
  { label: 'Startups', href: '/#startups', showOnHeader: true, showOnFooter: true },
  { label: 'Eventos', href: '/#events', showOnHeader: true, showOnFooter: true },
  { label: 'Sobre Nosotros', href: '/#about', showOnHeader: true, showOnFooter: true },
];

export interface ResourceItem {
    label: string,
    href: string
}

export const resourceItems: ResourceItem[] = [
    { label: 'Blog', href: '/blog' },
    { label: 'Guias', href: '/guias' },
    { label: 'Mentorías', href: '/mentorias' },
]

export interface LegalItem {
    label: string,
    href: string
}

export const legalItems: LegalItem[] = [
    { label: 'Privacidad', href: '/privacidad' },
    { label: 'Términos', href: '/terminos' },
    { label: 'Cookies', href: '/cookies' },
]

export interface SocialItem {
    label: string,
    href: string
}

export const socialItems: SocialItem[] = [
    { label: 'Twitter', href: 'https://twitter.com/doctavalley' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/company/doctavalley' },
    { label: 'WhatsApp', href: 'https://chat.whatsapp.com/KfBZXVDwrzuIs1HbrvvmSb' },
]

export const startupCategories: StartupCategory[] = [
    { id: 1, label: 'HR Tech' },
    { id: 2, label: 'Data Analytics' },
    { id: 3, label: 'Fintech' },
    { id: 4, label: 'Health Tech' },
    { id: 5, label: 'EdTech' },
    { id: 6, label: 'AgTech' },
    { id: 7, label: 'CleanTech' },
    { id: 8, label: 'AI/ML' },
]
