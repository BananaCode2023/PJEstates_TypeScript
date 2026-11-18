import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Properties from "./components/PropertiesPage/Properties";
import Homepage from "./components/Homepage/Homepage";
import properties from './data/properties.json'
import type { Property } from "./modules/propertyType";

function App () {

    
  const propertiesData: Property[] = properties

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
                      <Route path='/properties' element={<Properties propertiesData={propertiesData}/>}></Route>
                  </Routes>
              <Footer/>
          </BrowserRouter>

      </>
  )
}

export default App