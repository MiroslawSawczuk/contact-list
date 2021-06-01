import { GenderType } from "./enums";

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  gender: GenderType;
  avatar?: string | null;
  checked: boolean;
}
