import React from 'react';
import { InputField } from './style';


const SearchBar = ({searchKeyword, updateSearch}) =>
  <InputField
    type="text"
    value={searchKeyword}
    onChange={updateSearch}
    placeholder="Search by title or artist..."
  />

export default SearchBar;
