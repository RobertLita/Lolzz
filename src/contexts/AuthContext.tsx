import React, {
  useContext,
  createContext,
  ReactNode,
  useState,
  useEffect,
} from "react";
import { auth } from "../firebase/firebase";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  User,
  UserCredential,
} from "firebase/auth";

interface AuthContextValue {
  currentUser: User | null;
  signup: (email: string, password: string) => Promise<UserCredential>;
}

const AuthContext = createContext<AuthContextValue | null>(null);

export function useAuth() {
  return useContext(AuthContext);
}

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  function signup(email: string, password: string) {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const value: AuthContextValue = {
    currentUser,
    signup,
  };

  return (
    <AuthContext.Provider value={value}>
      {loading && children}
    </AuthContext.Provider>
  );
};
