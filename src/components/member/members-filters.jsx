'use client';

import { Search, Filter, X } from "lucide-react";
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from "@/components/ui/badge";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useMembers } from '@/context/members-context';
import { roleOptions } from "@/data/layout";

export default function MembersFilters() {
  const { state, dispatch } = useMembers();

  const handleClearFilters = () => {
    dispatch({
      type: 'SET_FILTER',
      payload: { key: 'search', value: '' },
    });
    dispatch({
      type: 'SET_FILTER',
      payload: { key: 'role', value: 'all' },
    });
  };

  const getActiveFilterCount = () => {
    return Object.values(state.filters).filter(value => 
      value !== 'all' && value !== '' && value !== state.filters.search
    ).length;
  };

  const getActiveFilters = () => {
    const active = [];
    if (state.filters.role !== 'all') {
      active.push({
        type: 'role',
        value: roleOptions.find(r => r.id === state.filters.role)?.label || state.filters.role
      });
    }
    return active;
  };

  return (
    <div className="w-full space-y-3">
      <div className="relative w-full flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
            <Search className="h-4 w-4 text-muted-foreground" />
          </div>
          <Input
            type="search"
            placeholder="Buscar miembro..."
            className="pl-10 h-11 text-base w-full"
            value={state.filters.search}
            onChange={(e) =>
              dispatch({
                type: 'SET_FILTER',
                payload: { key: 'search', value: e.target.value },
              })
            }
          />
        </div>

        <Popover>
          <PopoverTrigger asChild>
            <Button 
              variant={getActiveFilterCount() > 0 ? "default" : "outline"}
              className="h-11 px-4 w-full sm:w-[180px] justify-center"
            >
              <Filter className="h-4 w-4 mr-2" />
              <span>Filtros</span>
              {getActiveFilterCount() > 0 && (
                <Badge variant="secondary" className="ml-1">
                  {getActiveFilterCount()}
                </Badge>
              )}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[calc(100vw-2rem)] sm:w-[340px] p-4 sm:p-5" align="end">
            <div className="space-y-5">
              <div className="flex items-center justify-between">
                <h4 className="font-semibold text-base sm:text-lg">Filtros</h4>
                {getActiveFilterCount() > 0 && (
                  <Button variant="ghost" size="sm" onClick={handleClearFilters} className="h-8 px-2 text-xs">
                    <X className="h-4 w-4 mr-1" />
                    Limpiar filtros
                  </Button>
                )}
              </div>

              {/* Role filter */}
              <div className="space-y-2 sm:space-y-3">
                <h5 className="font-medium text-sm sm:text-base">Rol</h5>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {roleOptions.map((role) => (
                    <Badge
                      key={role.id}
                      variant={state.filters.role === role.id ? "default" : "outline"}
                      className="cursor-pointer hover:opacity-80 transition-opacity text-xs sm:text-sm py-1"
                      onClick={() => dispatch({
                        type: 'SET_FILTER',
                        payload: { key: 'role', value: role.id },
                      })}
                    >
                      {role.label}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </PopoverContent>
        </Popover>
      </div>

      {/* Active filters - Only show when role filters are active */}
      {state.filters.role !== 'all' && (
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 rounded-lg py-2 px-3">
            <span className="text-sm text-muted-foreground">Filtros activos:</span>
            <div className="flex flex-wrap gap-1.5 items-center">
              {getActiveFilters().map((filter, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="cursor-pointer hover:opacity-80 transition-opacity flex items-center gap-1 text-xs py-1"
                  onClick={() => dispatch({
                    type: 'SET_FILTER',
                    payload: { key: filter.type, value: 'all' },
                  })}
                >
                  {filter.value}
                  <X className="h-3 w-3 ml-1" />
                </Badge>
              ))}
            </div>
          </div>
          <Button
            variant="default"
            size="sm"
            onClick={handleClearFilters}
            className="ml-2"
          >
            Limpiar todo
          </Button>
        </div>
      )}
    </div>
  );
} 