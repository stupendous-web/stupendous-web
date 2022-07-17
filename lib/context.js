import React, { useContext, useState } from "react";

export const Context = React.createContext();

export const useLoading = () => useContext(Context);

export const Provider = ({ children }) => {
  const [loading, setLoading] = useState(true);

  return (
    <Context.Provider value={{ loading, setLoading }}>
      {children}
    </Context.Provider>
  );
};
