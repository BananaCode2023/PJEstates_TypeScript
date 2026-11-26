// import styles from './PropertyDetail.module.css'

import type { Property } from "../../modules/propertyType"
import FeaturedProperties from "../FeaturedProperties/FeaturedProperties"
import PropertyContact from "./PropertyContact/PropertyContact"
import PropertyGallery from "./PropertyGallery/PropertyGallery"
import PropertyInformation from "./PropertyInformation/PropertyInformation"
import PropertyOverview from "./PropertyOverview/PropertyOverview"

function PropertyDetail ({propertiesData}:{propertiesData: Property[]}) {
    return (
        <>
            <PropertyGallery/>
            <PropertyOverview/>
            <PropertyContact/>
            <PropertyInformation/>
            <FeaturedProperties propertiesData={propertiesData}/>
        </>
    )
}

export default PropertyDetail