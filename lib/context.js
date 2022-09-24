import React, { useContext, useEffect, useState } from "react";
import axios from "axios";

export const Context = React.createContext();

export const useGlobal = () => useContext(Context);

export const Provider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [articles, setArticles] = useState();
  const [examples, setExamples] = useState();
  const [photos, setPhotos] = useState();

  useEffect(() => {
    axios
      .get("https://cms.stupendousweb.com/wp-json/wp/v2/posts?categories=1")
      .then((response) => {
        setArticles(response.data);
      });
    axios
      .get("https://cms.stupendousweb.com/wp-json/wp/v2/posts?categories=8")
      .then((response) => {
        setExamples(response.data);
      });
    axios
      .get("https://cms.stupendousweb.com/wp-json/wp/v2/media")
      .then((response) => {
        setPhotos(response.data);
      });
  }, []);

  return (
    <Context.Provider
      value={{
        loading,
        setLoading,
        articles,
        examples,
        photos,
      }}
    >
      {children}
    </Context.Provider>
  );
};
