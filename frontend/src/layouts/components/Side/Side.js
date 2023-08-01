import React from 'react'
import styled from 'styled-components'
import './Side.css'

const Container = styled.div`
  flex: 0 0 25%;
  background-color: aqua;
  height: 100%;
`

const Side = (props) => {
  const { className } = props
  return (
    <Container className={className}>
      <div className="nav">
        <div className="btn-group">
          <button>글쓰기</button>
          <button>메일</button>
          <button>찾기</button>
          <button>휴지통</button>
        </div>
        <form id="search" className="active">
          <input className="search" placeholder="Search" type="search" />
        </form>
        <ul className="stack">
          <li className="row selected">
            <span className="title">Title21</span>
          </li>
          <li className="row">
            <span className="title">Title20</span>
          </li>
          <li className="row">
            <span className="title">Title19</span>
          </li>
          <li className="row">
            <span className="title">Title18</span>
          </li>
          <li className="row">
            <span className="title">Title17</span>
          </li>
          <li className="row">
            <span className="title">Title16</span>
          </li>
          <li className="row">
            <span className="title">Title15</span>
          </li>
          <li className="row">
            <span className="title">Title14</span>
          </li>
          <li className="row">
            <span className="title">Title13</span>
          </li>
          <li className="row">
            <span className="title">Title12</span>
          </li>
          <li className="row">
            <span className="title">Title11</span>
          </li>
          <li className="row">
            <span className="title">Title10</span>
          </li>
          <li className="row">
            <span className="title">Title9</span>
          </li>
          <li className="row">
            <span className="title">Title8</span>
          </li>
          <li className="row">
            <span className="title">Title7</span>
          </li>
          <li className="row">
            <span className="title">Title6</span>
          </li>
          <li className="row">
            <span className="title">Title5</span>
          </li>
          <li className="row">
            <span className="title">Title4</span>
          </li>
          <li className="row">
            <span className="title">Title3</span>
          </li>
          <li className="row">
            <span className="title">Title4</span>
          </li>
          <li className="row">
            <span className="title">Title3</span>
          </li>
          <li className="row">
            <span className="title">Title2</span>
          </li>
          <li className="row">
            <span className="title">Title1</span>
          </li>
        </ul>
      </div>
    </Container>
  )
}

export default Side
