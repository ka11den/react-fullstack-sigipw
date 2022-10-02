import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import Login from '../pages/login/Login'
import AdminGuard from './guards/AdminGuard'

export default function useRoutes(isAdmin) {
  console.log(isAdmin)
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login/>
        </Route>
      </Switch>

      <AdminGuard isAdmin={isAdmin} />
    </Router>
  )
}