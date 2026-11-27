// import styles from './PropertyDetail.module.css'

import { useParams } from "react-router-dom"
import type { Property } from "../../modules/propertyType"
import FeaturedProperties from "../FeaturedProperties/FeaturedProperties"
import PropertyContact from "./PropertyContact/PropertyContact"
import PropertyGallery from "./PropertyGallery/PropertyGallery"
import PropertyInformation from "./PropertyInformation/PropertyInformation"
import PropertyOverview from "./PropertyOverview/PropertyOverview"

function PropertyDetail ({propertiesData}:{propertiesData: Property[]}) {

    const { id } = useParams();

    const propertyDetail = propertiesData.find(
        (property) => property.id === Number(id)
    )

    if (!propertyDetail) {
        return <h1>Property not found</h1>
    }

    return (
        <>
            <PropertyGallery propertyDetail={propertyDetail}/>
            <PropertyOverview/>
            <PropertyContact/>
            <PropertyInformation/>
            <FeaturedProperties propertiesData={propertiesData}/>
        </>
    )
}

export default PropertyDetail