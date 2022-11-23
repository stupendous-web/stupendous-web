import React, { useContext, useEffect, useState } from "react";
import axios from "axios";

export const Context = React.createContext();

export const useGlobal = () => useContext(Context);

export const Provider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [articles, setArticles] = useState();

  const getArticles = async () => {
    await axios
      .get("https://public-api.wordpress.com/rest/v1.1/sites/67222684/posts")
      .then((response) => setArticles(response.data?.posts));
  };

  useEffect(() => {
    getArticles();
  }, []);

  return (
    <Context.Provider
      value={{
        loading,
        setLoading,
        articles,
      }}
    >
      {children}
    </Context.Provider>
  );
};
