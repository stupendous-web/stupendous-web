import React, { useContext, useEffect, useState } from "react";
import axios from "axios";

export const Context = React.createContext();

export const useGlobal = () => useContext(Context);

export const Provider = ({ children }) => {
  const [articles, setArticles] = useState([]);
  const [tags, setTags] = useState([]);
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

  useEffect(() => {
    axios
      .get("https://public-api.wordpress.com/rest/v1.1/sites/67222684/posts")
      .then((response) => setArticles(response.data?.posts));
    axios
      .get("https://public-api.wordpress.com/rest/v1.1/sites/67222684/tags")
      .then((response) => {
        setTags(response.data?.tags);
      });
  }, []);

  return (
    <Context.Provider
      value={{
        articles,
        tags,
        isLoading,
        setIsLoading,
        services,
      }}
    >
      {children}
    </Context.Provider>
  );
};
