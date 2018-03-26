import styled from 'styled-components';

export const InputField = styled.input`
  border: none;
  border-radius: 2px;
  outline: none;
  box-sizing: border-box;
  width: 100%;
  min-width: 300px;
  max-width: 500px;
  font-size: 1.5rem;
  padding: 0.2em 0.3em;
  margin: 1em 0;
  box-shadow: 0 1px 1px 1px rgba(66,66,66,0.1);
  &::placeholder {
  color: #bbb;
  }
`