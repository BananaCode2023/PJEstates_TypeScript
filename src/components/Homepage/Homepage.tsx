import type { Property } from "../../modules/propertyType"
import Hero from "./HeroSection/Hero"


function Homepage ({propertiesData}:{propertiesData: Property[]}) {

    return(
        <>
            <title>PJ Estates</title>

            <Hero propertiesData={propertiesData}/>
        </>
    )
}

export default Homepage