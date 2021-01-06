import React, { createContext, useCallback, useState, useContext } from 'react';
import api from '../services/api';

interface UserAuthData {
  token: string;
  user: object;
}

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  user: object;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [userData, setUserData] = useState<UserAuthData>(() => {
    const token = localStorage.getItem('@tournamet:token');
    const user = localStorage.getItem('@tournamet:user');

    if (token && user) {
      return { token, user: JSON.parse(user) };
    }

    return {} as UserAuthData;
  });

  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post('/sessions', {
      email,
      password,
    });

    const { token, user } = response.data;

    localStorage.setItem('@tournamet:token', token);
    localStorage.setItem('@tournamet:user', JSON.stringify(user));

    setUserData({ token, user });

    api.defaults.headers.authorization = `Bearer ${token}`;
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@tournamet:token');
    localStorage.removeItem('@tournamet:user');

    setUserData({} as UserAuthData);
  }, []);

  return (
    <AuthContext.Provider value={{ user: userData.user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = (): AuthContextData => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('Check if your app is wrapped in the AuthProvider');
  }

  return context;
};

export { AuthProvider, useAuth };
