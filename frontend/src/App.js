import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Memo from './pages/Memo'
import LayoutWithComponent from './layouts'
import MainLayout from './layouts/MainLayout'
import { createGlobalStyle } from 'styled-components'
import { Helmet } from 'react-helmet'

const GlobalStyle = createGlobalStyle`
 * {
   box-sizing: border-box;
 }
 
 body {
   margin: 0;
   font-family: Arial, Helvetica, sans-serif;
   cursor: default;
 }
`

function App() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Helmet>
        <title>JNote - 웹노트</title>
        <meta name="description" content="편리한 웹노트"></meta>
      </Helmet>
      <Routes>
        <Route path="/" element={<LayoutWithComponent layout={MainLayout} component={Memo} />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </React.Fragment>
  )
}

export default App
