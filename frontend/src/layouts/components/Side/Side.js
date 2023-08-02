import React from 'react'
import styled from 'styled-components'
import './Side.css'

const Container = styled.div`
  flex: 0 0 25%;
  background-color: #ffffff; // 배경색을 하얀색으로 수정
  height: 100%;
  border: 1px solid #dcdcdc; // Light gray border
  border-radius: 10px; // Rounded borders
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.15); // Shadow for 3D effect
  margin: 5px; /* 외부 여백 */
`

const Side = (props) => {
  const { className } = props
  return (
    <Container className={className}>
      <div className="nav">
        <div className="btn-group">
          <button>새글</button>
          <button>메일</button>
          <button>검색</button>
          <button className="action-trash">휴지통</button>
        </div>
        <form id="search" className="active">
          <input className="search" placeholder="Search" type="search" />
        </form>
        <ul className="stack">
          <li className="row selected">
            <span className="title">제목21</span>
            <button className="trash">X</button>
          </li>
          <li className="row">
            <span className="title">제목20</span>
            <button className="trash">X</button>
          </li>
          <li className="row">
            <span className="title">제목19</span>
            <button className="trash">X</button>
          </li>
          <li className="row">
            <span className="title">제목18</span>
            <button className="trash">X</button>
          </li>
          <li className="row">
            <span className="title">제목17</span>
            <button className="trash">X</button>
          </li>
          <li className="row">
            <span className="title">제목16</span>
            <button className="trash">X</button>
          </li>
          <li className="row">
            <span className="title">제목15</span>
            <button className="trash">X</button>
          </li>
          <li className="row">
            <span className="title">제목14</span>
            <button className="trash">X</button>
          </li>
          <li className="row">
            <span className="title">제목13</span>
            <button className="trash">X</button>
          </li>
          <li className="row">
            <span className="title">제목12</span>
            <button className="trash">X</button>
          </li>
          <li className="row">
            <span className="title">제목11</span>
            <button className="trash">X</button>
          </li>
          <li className="row">
            <span className="title">제목10</span>
            <button className="trash">X</button>
          </li>
          <li className="row">
            <span className="title">제목9</span>
            <button className="trash">X</button>
          </li>
          <li className="row">
            <span className="title">제목8</span>
            <button className="trash">X</button>
          </li>
          <li className="row">
            <span className="title">제목7</span>
            <button className="trash">X</button>
          </li>
          <li className="row">
            <span className="title">제목6</span>
            <button className="trash">X</button>
          </li>
          <li className="row">
            <span className="title">제목5</span>
            <button className="trash">X</button>
          </li>
          <li className="row">
            <span className="title">제목4</span>
            <button className="trash">X</button>
          </li>
          <li className="row">
            <span className="title">제목3</span>
            <button className="trash">X</button>
          </li>
          <li className="row">
            <span className="title">제목4</span>
            <button className="trash">X</button>
          </li>
          <li className="row">
            <span className="title">제목3</span>
            <button className="trash">X</button>
          </li>
          <li className="row">
            <span className="title">제목2</span>
            <button className="trash">X</button>
          </li>
          <li className="row">
            <span className="title">제목1</span>
            <button className="trash">X</button>
          </li>
        </ul>
      </div>
    </Container>
  )
}

export default Side
