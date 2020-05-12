import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'

import { AuthProvider } from './utils/auth'

import routes from './config/routes'
import 'antd/dist/antd.css'
import './App.css'
import { Content } from './style'
import authClient from './utils/authClient'

function App() {
  return (
    <BrowserRouter>
      <AuthProvider forbiddenPath="/forbidden" client={authClient}>
        <Content>{renderRoutes(routes)}</Content>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
