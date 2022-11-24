import React, { useContext, useEffect, useState } from "react";
import axios from "axios";

export const Context = React.createContext();

export const useGlobal = () => useContext(Context);

export const Provider = ({ children }) => {
  const [articles, setArticles] = useState();
  const [isLoading, setIsLoading] = useState();

  useEffect(() => {
    axios
      .get("https://public-api.wordpress.com/rest/v1.1/sites/67222684/posts")
      .then((response) => setArticles(response.data?.posts));
  }, []);

  return (
    <Context.Provider
      value={{
        articles,
        isLoading,
        setIsLoading,
      }}
    >
      {children}
    </Context.Provider>
  );
};
