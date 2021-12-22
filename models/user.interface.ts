export interface IUserInterface {
  name: string;
  email: string;
}

export interface IUserProfile {
  id: string;
  email?: string | null;
  name?: string | null;
  role?: string | null;
  gender?: string | null;
  birthday?: string | null;
  numberPhone?: string | null;
  avatar?: string | null;
  isLoggedIn?: boolean;
  isBankAccount?: boolean;
}
