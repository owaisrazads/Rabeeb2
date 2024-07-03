import React from 'react'
import { BrowserRouter, Routes , Route} from 'react-router-dom'
import Calling from '../screens/App Developer/Calling'
import Dating from '../screens/App Developer/Dating'
import EcommerceApp from '../screens/App Developer/EcommerceApp'
import PhotoEditApp from '../screens/App Developer/PhotoEditApp'
import Utility from '../screens/App Developer/Utility'
// import { Portfolio } from '../components/UI/Portfolio'
// import WebEcomm from '../screens/Web-Development/WebEcomm'
// import Management from '../screens/Web-Development/Management'
// import Crm from '../screens/Web-Development/Crm'
// import Informative from '../screens/Web-Development/Informative'
// import  Portfolio  from '../components/UI/Portfolio'

const RouterConfig = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
            <Route path='/calling' element={<Calling/>} />
            <Route path='/dating' element={<Dating/>} />
            <Route path='/ecommApp' element={<EcommerceApp/>} />
            <Route path='/photoEdit' element={<PhotoEditApp/>} />
            <Route path='/utility' element={<Utility/>} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default RouterConfig

