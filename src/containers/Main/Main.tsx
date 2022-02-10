import React from 'react'

import { Route, Navigate, Routes } from 'react-router'
import { AlbumsPage } from '../AlbumsPage'
import { FavouritePage } from '../FavouritePage'
import { Navbar } from './../../components'

const items = [
  { text: 'Favourite', link: '/main/fav' },
  { text: 'Albums', link: '/main/albums' },
]

const Main = () => {
  return (
    <>
      <Navbar header="Photo Hub" items={items} />
      <Routes>
        <Route path={'fav'} element={<FavouritePage />} />
        <Route path={'albums'} element={<AlbumsPage />} />
        <Route path="" element={<Navigate to="fav" />} />
      </Routes>
    </>
  )
}

export default Main
