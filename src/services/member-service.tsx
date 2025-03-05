import { Member } from "@/types/member";
import { NEXT_PUBLIC_API_URL } from "src/env";

export interface MemberServiceInterface {
  base_url: string;
  getMembers(): Promise<Member[]>;
}

export class MemberService implements MemberServiceInterface {
  base_url: string = NEXT_PUBLIC_API_URL + '/api';

  async getMembers(): Promise<Member[]> {
    const response = await fetch(`${this.base_url}/members`);
    const data = await response.json();
    return data.members;
  }
}