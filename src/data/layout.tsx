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
    { label: 'WhatsApp', href: 'https://chat.whatsapp.com/KfBZXVDwrzuIs1HbrvvmSb' }
]

export const startupCategories: StartupCategory[] = [
    { id: 1, label: 'EdTech', emoji: '📚' },
    { id: 2, label: 'HR Tech', emoji: '👥' },
    { id: 3, label: 'Data Analytics', emoji: '📊' },
    { id: 4, label: 'Fintech', emoji: '💰' },
    { id: 5, label: 'Health Tech', emoji: '🏥' },
    { id: 6, label: 'AgTech', emoji: '🌾' },
    { id: 7, label: 'CleanTech', emoji: '🌱' },
    { id: 8, label: 'AI/ML', emoji: '🤖' },
    { id: 9, label: 'Other', emoji: '🌟' },
]

export interface FilterOption {
    id: string;
    label: string;
}

export const statusOptions: FilterOption[] = [
    { id: "idea", label: "Idea" },
    { id: "development", label: "En Desarrollo" },
    { id: "launched", label: "Lanzado" },
]

export const teamSizeOptions: FilterOption[] = [
    { id: "small", label: "1-10" },
    { id: "medium", label: "11-50" },
    { id: "large", label: "50+" },
]

export const roleOptions: FilterOption[] = [
  { id: 'all', label: 'Todos' },
  { id: 'member', label: 'Miembro' },
  { id: 'founder', label: 'Fundador' }
];
