import type { Property } from "../../modules/propertyType"
import FeaturedProperties from "../FeaturedProperties/FeaturedProperties"
import About from "./AboutSection/About"
import Hero from "./HeroSection/Hero"


function Homepage ({propertiesData}:{propertiesData: Property[]}) {

    return(
        <>
            <title>PJ Estates</title>

            <Hero propertiesData={propertiesData}/>
            <About/>
            <FeaturedProperties/>
        </>
    )
}

export default Homepage