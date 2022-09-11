import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useAuth from "../../hook/useAuth";
import SearchPgaeView from "../SearchPageView/SearchPgaeView";

const SearchWithValue = () => {
  const [books, setBooks] = useState([]);
  const { searchValue } = useParams();
  const { URl } = useAuth();

  useEffect(() => {
    fetch(`${URl}/search/${searchValue}/`)
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, [URl, searchValue]);

  return (
    <div>
      <SearchPgaeView books={books} />
    </div>
  );
};

export default SearchWithValue;
