import { MembersProvider } from "@/context/members-context";
import MembersContent from "@/components/member/members-content";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WhatsAppIcon } from "@/components/icons/whatsapp";

export const metadata = {
  title: "Miembros | Docta Valley",
  description: "Conoce a los miembros de la comunidad Docta Valley.",
};

export default function MembersPage() {
  return (
    <MembersProvider>
      <div className="min-h-screen bg-background">
        <div className="max-w-7xl mx-auto px-4 py-8 md:px-6">
          {/* Title section with navigation */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-8 md:mb-10">
            {/* Mobile navigation buttons */}
            <div className="w-full flex justify-between sm:hidden mb-4">
              <Link href="/">
                <Button variant="ghost" size="lg" className="flex items-center gap-2">
                  <ArrowLeft className="h-4 w-4" />
                  Inicio
                </Button>
              </Link>
              <Link href="https://chat.whatsapp.com/KfBZXVDwrzuIs1HbrvvmSb?mode=gi_t" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline">
                  <WhatsAppIcon className="mr-2 h-4 w-4" /> Forma parte
                </Button>
              </Link>
            </div>

            {/* Desktop home button */}
            <div className="hidden sm:block sm:w-auto order-none">
              <Link href="/">
                <Button variant="ghost" size="lg" className="flex items-center gap-2">
                  <ArrowLeft className="h-4 w-4" />
                  Inicio
                </Button>
              </Link>
            </div>

            {/* Title */}
            <div className="w-full text-center order-0 sm:order-none">
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
                Miembros de Docta 🇦🇷
              </h1>
            </div>

            {/* Desktop join button */}
            <div className="hidden sm:block sm:w-auto">
              <Link href="https://chat.whatsapp.com/KfBZXVDwrzuIs1HbrvvmSb?mode=gi_t" target="_blank" rel="noopener noreferrer">
                <Button size="lg">
                  <WhatsAppIcon className="mr-2 h-4 w-4" /> Unirse a Docta
                </Button>
              </Link>
            </div>
          </div>

          {/* Content */}
          <div className="max-w-7xl mx-auto px-4 py-2 md:px-0">
            <MembersContent className="grid grid-auto-rows-[1fr]" />
          </div>
        </div>
      </div>
    </MembersProvider>
  );
}
