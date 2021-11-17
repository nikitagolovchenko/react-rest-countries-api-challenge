import React, { FC } from 'react'
import { Routes, Route } from 'react-router-dom'
import { publicRoutes } from './router'

const AppRouter: FC = () => {
  return (
    <Routes>
      {publicRoutes.map(route => (
        <Route {...route } key={route.path}/>
      ))}
    </Routes>
  )
}

export default AppRouter
