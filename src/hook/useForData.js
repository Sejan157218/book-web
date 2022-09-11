import { useEffect, useState } from "react";

const useForData = () => {
  const [allData, setAllData] = useState([]);
  const [category, setCategory] = useState([]);
  const [author, setAuthor] = useState([]);
  const URl = "http://127.0.0.1:8000";

  useEffect(() => {
    fetch(`${URl}/all-book/`)
      .then((res) => res.json())
      .then((data) => setAllData(data));
  }, []);
  useEffect(() => {
    fetch(`${URl}/category/`)
      .then((res) => res.json())
      .then((data) => setCategory(data));
  }, []);
  useEffect(() => {
    fetch(`${URl}/author/`)
      .then((res) => res.json())
      .then((data) => setAuthor(data));
  }, []);

  return {
    URl,
    category,
    author,
    allData,
  };
};

export default useForData;
