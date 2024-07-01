import React from 'react'
import { BrowserRouter, Routes , Route} from 'react-router-dom'
import WebEcomm from '../screens/Web-Development/WebEcomm'
import Portfolio from '../screens/Web-Development/Portfolio'
import Management from '../screens/Web-Development/Management'
import Crm from '../screens/Web-Development/Crm'
import Informative from '../screens/Web-Development/Informative'

const RouterConfig = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/webEcommerce' element={<WebEcomm/>} />
        <Route path='/portfolio' element={<Portfolio/>} />
        <Route path='/management' element={<Management/>} />
        <Route path='/crm' element={<Crm/>} />
        <Route path='/informative' element={<Informative/>} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default RouterConfig
