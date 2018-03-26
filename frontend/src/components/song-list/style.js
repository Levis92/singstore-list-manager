import styled, { css } from 'styled-components';

export const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  height: 90%;
  width: 100%;
  overflow-y: scroll;
`

export const Song = styled.li`
  --placeholder-color: rgba(250,250,250,0.6);
  display: flex;
  align-items: center;
  height: 100px;
  width: 100%;
  margin: 5px 0;
  border-radius: 0.2em;
  background-image: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  box-shadow: 0 1px 1px 1px rgba(66,66,66,0.1);
  position: relative;
`

export const CoverImage = styled.img`
  height: 100%;
  min-width: 100px;
  border-radius: 0.2em 0 0 0.2em;

  ${props => props.secondary && css`
    background: var(--placeholder-color);
    border: none;
  `}
`

export const Details = styled.section`
  display: flex;
  flex-direction: column;
  margin-left: 15px;
  margin-right: 50px;
`

export const Title = styled.h3`
  margin: 0;
  text-align: left;
  color: #555;
  font-weight: 600;
  font-size: 1rem;

  ${props => props.secondary && css`
    background: var(--placeholder-color);
    width: 200px;
    height: 15px;
    margin-bottom: 5px;
  `}
`

export const Artist = styled.h4`
  margin: 0;
  text-align: left;
  color: #777;
  font-weight: 400;
  font-size: 0.9rem;

  ${props => props.secondary && css`
    background: var(--placeholder-color);
    width: 150px;
    height: 10px;
  `}
`

export const AddRemoveIcon = styled.svg`
  --icon-color: ${props => props.primary ? 'red' : 'green'};
  --rotation: ${props => props.primary ? '45deg' : '0deg'};
  border: none;
  outline: none;
  width: 35px;
  height: 35px;
  position: absolute;
  right: 10px;
  transform: rotate(var(--rotation));
  &:hover {
    cursor: pointer;
  }
  #Combined-Shape {
    fill: var(--icon-color);
  }
  #Oval {
    stroke: var(--icon-color);
  }
`
