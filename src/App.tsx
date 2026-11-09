import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Properties from "./components/PropertiesPage/PropertyPage/Properties";
import Homepage from "./components/Homepage/Homepage";
import properties from './data/properties.json'
import { useState } from "react";
import type { Property } from "./modules/propertyType";

function App () {

    
  const [propertiesData, setPropertiesData] = useState<Property[]>(properties)

  return (
      <>
          <BrowserRouter>
              <Header/>
                  <Routes>
                      <Route 
                        path='/' 
                        element={<Homepage propertiesData={propertiesData}/>}
                      >
                      </Route>
                      <Route path='/properties' element={<Properties/>}></Route>
                  </Routes>
              <Footer/>
          </BrowserRouter>

      </>
  )
}

export default App