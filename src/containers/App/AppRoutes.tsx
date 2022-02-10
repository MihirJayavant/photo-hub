import React from 'react'

import { Route, Routes, Navigate } from 'react-router'
import { Main } from './../Main'

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="main/*" element={<Main />} />
      <Route path="/" element={<Navigate to="/main" />} />
    </Routes>
  )
}
