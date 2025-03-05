import { NEXTAUTH_URL } from 'src/env';
import { CommunityStartup } from '@/types/startup';

export interface StartupServiceInterface {
  base_url: string;
  getStartups(): Promise<CommunityStartup[]>;
}

export class StartupService implements StartupServiceInterface {
  base_url: string = NEXTAUTH_URL + '/api';

  async getStartups(): Promise<CommunityStartup[]> {
    const url = `${this.base_url}/startups`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }
}
