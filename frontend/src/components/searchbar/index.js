import React from 'react';
import styled from 'styled-components';

const SearchBar = ({searchKeyword, updateSearch}) =>
  <InputField
    type="text"
    value={searchKeyword}
    onChange={updateSearch}
    placeholder="Search by title, artist..."
  />

export default SearchBar;


const InputField = styled.input`
  border: none;
  border-radius: 2px;
  outline: none;
  box-sizing: border-box;
  width: 100%;
  font-size: 1.5rem;
  padding: 0.2em 0.3em;
  margin: 1em 0;
  box-shadow: 0 1px 1px 1px rgba(66,66,66,0.1);
  &::placeholder {
    color: #bbb;
  }
`