import type { Property } from "../../modules/propertyType"
import PropertiesGrid from "./PropertiesGrid/PropertiesGrid"
import PropertyIntro from "./PropertyIntro/PropertyIntro"


function Properties ({propertiesData}:{propertiesData: Property[]}) {
    return(
        <>
            <title>Properties</title>

            <PropertyIntro/>
            <PropertiesGrid propertiesData={propertiesData}/>
        </>
    )
}

export default Properties