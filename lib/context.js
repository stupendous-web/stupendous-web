import { createContext, useContext, useState } from "react";

export const Context = createContext();

export const useGlobal = () => useContext(Context);

export const Provider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Context.Provider
      value={{
        isLoading,
        setIsLoading,
      }}
    >
      {children}
    </Context.Provider>
  );
};
