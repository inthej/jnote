import clsx from 'clsx'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const MemoListItemContainer = styled.li`
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

const MemoListItem = (props) => {
  const { className } = props

  return (
    <MemoListItemContainer className={clsx(className)}>
      <span className="title">제목1</span>
      <DeleteButton>X</DeleteButton>
    </MemoListItemContainer>
  )
}

MemoListItem.propTypes = {
  className: PropTypes.string,
}

export default MemoListItem
