import React from 'react'
import "./App.css";

import { useSelector } from "react-redux";

import useRoutes from './routes'

function App() {
  const admin = useSelector(state => state.user.currentUser?.isAdmin);
  const routes = useRoutes(admin)

  return routes;
}

export default App;