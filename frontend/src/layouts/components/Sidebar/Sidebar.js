import PropTypes from 'prop-types'
import React, { useState } from 'react'
import styled from 'styled-components'
import SideNavigationButtons from './components/SideNavigationButtons'

const SidebarContainer = styled.div`
  flex: 0 0 25%;
  background-color: #ffffff; // 배경색을 하얀색으로 수정
  height: 100%;
  border: 1px solid #dcdcdc; // Light gray border
  border-radius: 10px; // Rounded borders
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.15); // Shadow for 3D effect
  margin: 5px; /* 외부 여백 */
`

const NavigationContainer = styled.div`
  margin: 15px;
`

const SearchFieldContainer = styled.div`
  overflow: hidden;
  transition: height 0.3s ease;
  height: ${(props) => (props.isOpen ? '35px' : '0')};
  margin-top: 10px;
`

const SearchField = styled.input`
  width: 100%;
  height: 35px;
  border-radius: 5px;
  border: 1px solid #dcdcdc;
  //margin-top: 10px;
`

const NoteList = styled.ul`
  overflow-y: scroll;
  max-height: 85vh;
  padding: 0;
  margin-top: 10px;
  border: 1px solid #dcdcdc;
  border-radius: 5px;

  @media screen and (max-width: 768px) {
    max-height: 150px;
  }

  &::-webkit-scrollbar {
    width: 2px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: darkgrey;
    border-radius: 10px;

    &:hover {
      background: grey;
    }
  }
`

const NoteListItem = styled.li`
  padding: 5px;
  margin-top: 1px;
  list-style: none;
  border-bottom: 1px solid #ddd;
  transition: background-color 0.2s ease;
  display: flex;
  justify-content: space-between;

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background-color: #f5f5f5;
  }

  &.selected {
    background-color: #f0f0f0;
    font-weight: bold;
  }
`

const DeleteButton = styled.button`
  background-color: #ff9999;
  color: #ffffff;
  border: none;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #ff3333;
  }
`

const Sidebar = (props) => {
  const { className } = props
  const [isSearchOpen, setSearchOpen] = useState(false)

  const handleSearchOpen = () => {
    setSearchOpen((prevState) => !prevState)
  }

  return (
    <SidebarContainer className={className}>
      <NavigationContainer>
        <SideNavigationButtons className="sideNavigationButtons" onSearchClick={handleSearchOpen} />
        <SearchFieldContainer isOpen={isSearchOpen}>
          <SearchField placeholder="Search" type="search" />
        </SearchFieldContainer>
        <NoteList>
          <NoteListItem className="row selected">
            <span className="title">제목2</span>
            <DeleteButton>X</DeleteButton>
          </NoteListItem>
          <NoteListItem className="row">
            <span className="title">제목1</span>
            <DeleteButton>X</DeleteButton>
          </NoteListItem>
        </NoteList>
      </NavigationContainer>
    </SidebarContainer>
  )
}

Sidebar.propTypes = {
  className: PropTypes.string,
}

export default Sidebar
