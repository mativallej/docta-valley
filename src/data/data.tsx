import { Users, Rocket, Code, Globe, Lightbulb, Users2 } from "lucide-react";

interface Features {
  name: string;
  description: string;
  icon: React.ReactNode;
}

export const features: Features[] = [
  {
    name: 'Comunidad Tech',
    description: 'Conectamos founders y builders tech de Córdoba para crear un ecosistema vibrante.',
    icon: <Users className="h-10 w-10" />,
  },
  {
    name: 'Startups Innovadoras',
    description: 'Impulsamos la creación y desarrollo de startups tecnológicas con impacto.',
    icon: <Rocket className="h-10 w-10" />,
  },
  {
    name: 'Desarrollo de Talento',
    description: 'Fomentamos el crecimiento profesional y técnico de nuestra comunidad.',
    icon: <Code className="h-10 w-10" />,
  },
  {
    name: 'Alcance Global',
    description: 'Proyectamos el talento cordobés hacia oportunidades internacionales.',
    icon: <Globe className="h-10 w-10" />,
  },
  {
    name: 'Cultura Emprendedora',
    description: 'Cultivamos una mentalidad innovadora y espíritu emprendedor.',
    icon: <Lightbulb className="h-10 w-10" />,
  },
  {
    name: 'Networking',
    description: 'Facilitamos conexiones valiosas entre profesionales del ecosistema.',
    icon: <Users2 className="h-10 w-10" />,
  },
];
