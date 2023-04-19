import React from 'react'
import {Routes, Route} from "react-router-dom"

import Blog from "./screens/Blog"
import Store from "./screens/Store"
import Banner from "./component/Banner/Banner"
import HomePage from './component/HomePage'
import Dashboard from './DashBoard/Dashboard'
import Cart from './component/cart'




const Routing = () => {
  return (
    <div>
      <Banner/>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/store' element={<Store />} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/dashboard' element={<Dashboard/>}/>
      </Routes>
    </div>
  )
}

export default Routing