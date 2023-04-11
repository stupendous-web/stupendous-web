import { createContext, useContext, useState } from "react";

export const Context = createContext();

export const useGlobal = () => useContext(Context);

export const Provider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  const services = [
    { target: "websites", shortTitle: "Websites", longTitle: "Websites" },
    {
      target: "ios-and-android-apps",
      shortTitle: "Apps",
      longTitle: "iOS and Android Apps",
    },
    {
      target: "consulting",
      shortTitle: "Consulting",
      longTitle: "Consulting",
    },
    {
      target: "software-development",
      shortTitle: "Software",
      longTitle: "Software Development",
    },
    {
      target: "secure-managed-domain-and-hosting",
      shortTitle: "Hosting",
      longTitle: "Secure, Managed Domain and Hosting",
    },
    {
      target: "long-term-support",
      shortTitle: "LTS",
      longTitle: "Long Term Support",
    },
  ];

  return (
    <Context.Provider
      value={{
        isLoading,
        setIsLoading,
        services,
      }}
    >
      {children}
    </Context.Provider>
  );
};
