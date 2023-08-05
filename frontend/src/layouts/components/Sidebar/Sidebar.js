import PropTypes from 'prop-types'
import React, { useState } from 'react'
import styled from 'styled-components'
import MemoList from './components/MemoList'
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
  height: ${(props) => (props.open ? '35px' : '0')};
  margin-top: 10px;
`

const SearchField = styled.input`
  width: 100%;
  height: 35px;
  border-radius: 5px;
  border: 1px solid #dcdcdc;
  //margin-top: 10px;
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
        <SearchFieldContainer open={isSearchOpen}>
          <SearchField placeholder="Search" type="search" />
        </SearchFieldContainer>
        <MemoList />
      </NavigationContainer>
    </SidebarContainer>
  )
}

Sidebar.propTypes = {
  className: PropTypes.string,
}

export default Sidebar
