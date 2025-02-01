import { createContext } from "react";
import type { userType } from "~/types/user.type";

export type AuthContextType = { userInfo: userType; isUserRegister: boolean };

export const AuthContext = createContext<AuthContextType | null>(null);
