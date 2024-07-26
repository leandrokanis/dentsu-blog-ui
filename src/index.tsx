import React from 'react'
import ReactDOM from 'react-dom/client'
import reportWebVitals from './reportWebVitals'
import Router from './router'
import { GlobalStyle } from './global.styles'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)

root.render(
  <React.StrictMode>
    <GlobalStyle />
    <Router />
  </React.StrictMode>
)

reportWebVitals()
