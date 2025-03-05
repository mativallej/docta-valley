import { Member } from "@/types/member";
import { NEXTAUTH_URL } from "src/env";

export interface MemberServiceInterface {
  base_url: string;
  getMembers(): Promise<Member[]>;
}

export class MemberService implements MemberServiceInterface {
  base_url: string = NEXTAUTH_URL + '/api';

  async getMembers(): Promise<Member[]> {
    const response = await fetch(`${this.base_url}/members`);
    const data = await response.json();
    return data.members;
  }
}