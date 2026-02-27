'use client';
import Link from 'next/link';
import Hero from '@/features/hero';
import Footer from '@/features/footer';
import Features from '@/features/features';
import Header from '@/features/header';
import Members from '@/features/members';
import { Separator } from '@/components/ui/separator';
import { Section } from '@/layouts/section';
import { Users, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { WhatsAppIcon } from '@/components/icons/whatsapp';
import { CommunityStartups } from '@/features/community-startups';
import { Events } from '@/features/event';

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col overflow-x-hidden bg-[var(--bg)]">
      <Header />
      <main className="flex-1 w-full">
        <Hero />
        <Separator className="my-12" />

        {/* Acerca de Nosotros Section */}
        <Section
          id="about"
          section={{
            icon: <Users className="h-6 w-6 text-[var(--accent-bright)]" />,
            title: 'Que es Docta Valley?',
            subtitle:
              'Somos una comunidad que impulsa el ecosistema tech de Cordoba, conectando talento, ideas y oportunidades para crear startups innovadoras.',
          }}
        >
          <Features />
        </Section>
        {/* Nuestra Comunidad Section */}
        <Separator className="my-12" />
        <Section
          id="members"
          section={{
            icon: <Users className="h-6 w-6 text-[var(--accent-bright)]" />,
            title: 'Nuestra Comunidad',
            subtitle: 'Conoce a los emprendedores, profesionales e inversionistas que dan vida a Docta Valley.',
          }}
        >

          <Members />
        </Section>
        {/* Startups Section */}
        <Separator className="my-12" />
        <Section
          id="startups"
          section={{
            icon: <Users className="h-6 w-6 text-[var(--accent-bright)]" />,
            title: 'Docta Startups',
            subtitle: 'Descubre las startups que forman parte de Docta Valley.',
          }}
        >
          <CommunityStartups />
        </Section>

        {/* Events Section */}
        <Separator className="my-12" />
        <Section
          id="events"
          section={{
            icon: <Calendar className="h-6 w-6 text-[var(--accent-bright)]" />,
            title: 'Ultimos Eventos',
            subtitle: 'Participa en nuestros eventos y conecta con otros miembros de la comunidad.',
          }}
        >
          <Events />
        </Section>
        <Separator className="my-12" />

        {/* Join Section */}
        <Section
          id="join"
          section={{
            icon: <Users className="h-6 w-6 text-[var(--accent-bright)]" />,
            title: 'Listo para unirte?',
            subtitle:
              'Forma parte de la comunidad tech mas vibrante de Cordoba y conecta con otros founders y builders.',
          }}
        >
          <Button size="lg" className="mt-4" asChild>
            <Link href="https://chat.whatsapp.com/KfBZXVDwrzuIs1HbrvvmSb?mode=gi_t" target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon className="h-4 w-4 mr-2" />
              Unirse Ahora
            </Link>
          </Button>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
