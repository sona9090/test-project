import React, { createContext, useState, useContext } from 'react';

const SearchContext = createContext();

export const useSearch = () => {
  return useContext(SearchContext);
}

export const SearchProvider = ({ children }) => {
  const [searchValue, setSearchValue] = useState('');

  const setSearch = (value) => {
    setSearchValue(value);
  };

  return (
    <SearchContext.Provider value={{ searchValue, setSearch }}>
      {children}
    </SearchContext.Provider>
  );
};
