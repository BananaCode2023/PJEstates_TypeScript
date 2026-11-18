import type { Property } from '../../../modules/propertyType'
import { PropertyCard } from '../../PropertyCard/PropertyCard'

function PropertiesGrid ({propertiesData}:{propertiesData: Property[]}) {
    return (
        <>
            {propertiesData.map((property) => {
                return (
                    <PropertyCard 
                    key={property.id}
                    property={property}
                    />
                )
            })}
        </>
    )
}

export default PropertiesGrid