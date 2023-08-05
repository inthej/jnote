import clsx from 'clsx'
import React from 'react'
import styled from 'styled-components'
import MemoListItem from './MemoListItem'

const MemoListContainer = styled.ul`
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

const MemoList = () => {
  const selected = true
  return (
    <MemoListContainer>
      <MemoListItem className={clsx('row', { selected })} />
      <MemoListItem className="row" />
    </MemoListContainer>
  )
}

export default MemoList
