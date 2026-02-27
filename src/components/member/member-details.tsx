import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Github, Linkedin, Twitter, ExternalLink } from "lucide-react"
import { Member } from "@/types/member"
import { RoleBadge } from "./role-badge"

const SocialLink = ({ href, icon: Icon, label }: { href?: string; icon: React.ElementType; label: string }) => {
  if (!href) return null

  return (
    <Link href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
      <Button variant="ghost" size="icon" className="h-8 w-8 text-[var(--muted-fg)] hover:text-[var(--primary)]">
        <Icon className="h-4 w-4" />
      </Button>
    </Link>
  )
}

interface MemberDetailsProps {
  member: Member
  showBio?: boolean
  showProfileButton?: boolean
  showRoleBadge?: boolean
  className?: string
}

export function MemberDetails({
  member,
  showBio = true,
  showProfileButton = true,
  showRoleBadge = true,
  className = ""
}: MemberDetailsProps) {
  return (
    <div className={`text-center space-y-3 ${className}`}>
      <h3 className="font-mono text-[14px] font-bold uppercase tracking-[0.03em] text-[var(--fg)]">{member.name}</h3>

      {showRoleBadge && (
        <div className="flex justify-center">
          <RoleBadge role={member.role} />
        </div>
      )}

      {showBio && member.bio && (
        <p className="font-sans text-[13px] text-[var(--fg-muted)] line-clamp-3">{member.bio}</p>
      )}

      <div className="flex justify-center space-x-1 pt-2">
        <SocialLink href={member.links.twitter} icon={Twitter} label="Twitter" />
        <SocialLink href={member.links.linkedin} icon={Linkedin} label="LinkedIn" />
        <SocialLink href={member.links.github} icon={Github} label="GitHub" />
        <SocialLink href={member.links.website} icon={ExternalLink} label="Website" />
      </div>

      {showProfileButton && (
        <Button variant="outline" size="sm" className="mt-4 w-full" asChild>
          <Link href={member.links.linkedin || ''} target="_blank" rel="noopener noreferrer">Ver Perfil</Link>
        </Button>
      )}
    </div>
  )
}
