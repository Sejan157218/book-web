import React, { useEffect } from "react";
import { useState } from "react";

import { useParams } from "react-router-dom";
import useAuth from "../../hook/useAuth";
import SearchPgaeView from "../SearchPageView/SearchPgaeView";

const SearchView = () => {
  const { URl } = useAuth();
  const [books, setBooks] = useState([]);
  let { slug, title } = useParams();

  useEffect(() => {
    fetch(`${URl}/${slug}/${title}/`)
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, [URl, slug, title]);

  return (
    <div>
      <SearchPgaeView books={books}></SearchPgaeView>
    </div>
  );
};

export default SearchView;
