import type { Property } from "../../modules/propertyType"
import About from "./AboutSection/About"
import Hero from "./HeroSection/Hero"


function Homepage ({propertiesData}:{propertiesData: Property[]}) {

    return(
        <>
            <title>PJ Estates</title>

            <Hero propertiesData={propertiesData}/>
            <About/>
        </>
    )
}

export default Homepage