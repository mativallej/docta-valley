'use client';

import { useEffect } from 'react';
import MemberCard from './member-card';
import { MemberService } from '@/services/member-service';
import { MemberCardSkeleton } from '@/components/skeletons/member-card-skeleton';
import MembersFilters from './members-filters';
import { useMembers } from '../../context/members-context';

export default function MembersContent() {
  const { state, dispatch } = useMembers();

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const memberService = new MemberService();
        const data = await memberService.getMembers();
        dispatch({ type: 'SET_MEMBERS', payload: data });
      } catch (error) {
        console.error('Error fetching members:', error);
      } finally {
        dispatch({ type: 'SET_LOADING', payload: false });
      }
    };

    fetchMembers();
  }, [dispatch]);

  const filteredMembers = state.members.filter((member) => {
    const matchesSearch = member.name.toLowerCase().includes(state.filters.search.toLowerCase());
    const matchesRole = state.filters.role === 'all' || member.role === state.filters.role;
    return matchesSearch && matchesRole;
  });

  if (state.isLoading) {
    return (
      <div className="space-y-8">
        <MembersFilters />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[...Array(6)].map((_, index) => (
            <MemberCardSkeleton key={index} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <MembersFilters />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 auto-rows-fr">
        {filteredMembers.map((member, index) => (
          <MemberCard key={member.id} member={member} index={index} />
        ))}
      </div>
      {filteredMembers.length === 0 && (
        <div className="text-center py-12">
          <h3 className="text-xl font-medium mb-2">No se encontraron miembros</h3>
          <p className="text-muted-foreground">Intenta ajustar los filtros para ver más resultados.</p>
        </div>
      )}
    </div>
  );
}
