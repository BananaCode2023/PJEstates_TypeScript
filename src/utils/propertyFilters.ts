import type { Property } from '../modules/propertyType'
import type { Price, PropertyType, Beds, Status, Sort, Filters } from '../modules/filterOptions'

export const matchesSearch = (property: Property, term: string): boolean => {
    const query = term.trim().toLowerCase()
    if (query === '') return true
    return property.address.toLowerCase().includes(query)
}

export const matchesPrice = (property: Property, selected: Price):boolean => {
    if(selected === 'Any price'){
        return true
    } else if(selected === 'Under $500k'){
        return property.price < 500000
    } else if(selected  === '$500k - $750k'){
        return property.price >= 500000 && property.price <= 750000
    } else if(selected === '$750k - $1M'){
        return property.price >= 750000 && property.price <= 1000000
    } else if(selected === '$1M+'){
        return property.price > 1000000
    }
    return true
}

export const matchesType = (property: Property, selected: PropertyType):boolean => {
    if(selected === 'Any type'){
        return true
    } else if(selected === 'Single-family'){
        return property.type === 'Single-Family Residence'
    } else if(selected  === 'Multi-family'){
        return property.type === 'Multi-Family Residence'
    } else if(selected === 'Condos'){
        return property.type === 'Condos'
    } else if(selected === 'Apartments'){
        return property.type === 'Apartments'
    }
    return true
}

export const matchesBeds = (property: Property, selected: Beds):boolean => {
    if(selected === 'Any beds'){
        return true
    } else if(selected === '2'){
        return property.beds === 2
    } else if(selected  === '3'){
        return property.beds === 3
    } else if(selected === '4'){
        return property.beds === 4
    } else if(selected === '5+'){
        return property.beds >= 5
    }
    return true
}

export const matchesStatus = (property: Property, selected: Status):boolean => {
    if(selected === 'Any status'){
        return true
    } else if(selected === 'For sale'){
        return property.status === 'For Sale'
    } else if(selected  === 'For rent'){
        return property.status === 'For Rent'
    } else if(selected === 'Sold'){
        return property.status === 'Sold'
    }
    return true
}

export const matchesSort = (property: Property[], selected: Sort): Property[] => {
    if(selected === 'Newest'){
        return [...property].sort((a,b) => b.yearBuilt - a.yearBuilt)
    } else if(selected === 'Oldest'){
        return [...property].sort((a,b) => a.yearBuilt - b.yearBuilt)
    } else if(selected  === 'Price: Low to high'){
        return [...property].sort((a,b) => a.price - b.price)
    } else if(selected === 'Price: High to low'){
        return [...property].sort((a,b) => b.price - a.price)
    }
    return property
}

export const applyFilters = (
    properties: Property[],
    filters: Filters,
    searchTerm: string
): Property[] => {
    const filtered = properties.filter(property =>
        matchesSearch(property, searchTerm) &&
        matchesPrice(property, filters.price) &&
        matchesType(property, filters.type) &&
        matchesBeds(property, filters.beds) &&
        matchesStatus(property, filters.status)
    )
    return matchesSort(filtered, filters.sort)
}