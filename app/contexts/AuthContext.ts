import { createContext } from "react";
import type { userType } from "~/types/user.type";

export const AuthContext = createContext<userType | null>(null);
