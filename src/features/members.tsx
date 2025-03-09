'use client';

import { useState, useEffect } from 'react';
import MemberCard from '@/components/member/member-card';
import { MemberService } from '@/services/member-service';
import type { Member } from '@/types/member';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MemberCardSkeleton } from '@/components/skeletons/member-card-skeleton';

function ViewAllMembersButton() {
  return (
    <Button variant="ghost" asChild>
      <Link href="/members">
        Ver todos los miembros 🧑🏻‍💻
      </Link>
    </Button>
  );
}

export default function Members() {
  const [members, setMembers] = useState<Member[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const memberService = new MemberService();
        const data = await memberService.getMembers();
        setMembers(data);
      } catch (error) {
        console.error('Error fetching members:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMembers();
  }, []);

  if (isLoading) {
    return (
      <div className="space-y-8 w-full">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[...Array(6)].map((_, index) => (
            <MemberCardSkeleton key={index} />
          ))}
        </div>
        <div className="flex justify-center">
          <ViewAllMembersButton />
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {members.map((member, index) => (
          <MemberCard key={member.id} member={member} index={index} />
        ))}
      </div>
      <div className="flex justify-center">
        <ViewAllMembersButton />
      </div>
    </div>
  );
}
