import React, { createContext, useState, useContext } from 'react';

interface AuthContextData {
  stepSignUp: number;
  nextStep(): void;
  previousStep(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [stepSignUp, setStepSignUp] = useState(0);

  function nextStep() {
    setStepSignUp(1);
  }

  function previousStep() {
    setStepSignUp(0);
  }

  return (
    <AuthContext.Provider value={{ stepSignUp, nextStep, previousStep }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}