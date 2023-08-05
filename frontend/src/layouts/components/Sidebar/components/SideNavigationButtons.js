import React from 'react'
import { FaPlus, FaRegEnvelope, FaRegTrashAlt, FaSearch } from 'react-icons/fa'
import styled from 'styled-components'

const ButtonContainer = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: left;
  gap: 10px;
`

const NavigationButton = styled.button`
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #dcdcdc;
  background-color: #f5f5dc;
  font-family: Arial, sans-serif;
  cursor: pointer;

  &:hover {
    background-color: #e8e8c4;
  }
`

const SideNavigationButtons = (props) => {
  const { className, onSearchClick } = props
  return (
    <ButtonContainer className={className}>
      <NavigationButton>
        <FaPlus />
      </NavigationButton>
      <NavigationButton>
        <FaRegEnvelope />
      </NavigationButton>
      <NavigationButton onClick={onSearchClick}>
        <FaSearch />
      </NavigationButton>
      <NavigationButton>
        <FaRegTrashAlt />
      </NavigationButton>
    </ButtonContainer>
  )
}

export default SideNavigationButtons
