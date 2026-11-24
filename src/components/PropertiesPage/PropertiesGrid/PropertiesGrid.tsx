import { useState } from 'react';
import type { Property } from '../../../modules/propertyType'
import { PropertyCard } from '../../PropertyCard/PropertyCard'
import CustomSelect from '../CustomSelect/CustomSelect'
import styles from './PropertiesGrid.module.css'
import { FiSearch } from "react-icons/fi";

function PropertiesGrid ({propertiesData}:{propertiesData: Property[]}) {

    const handleFilterChange = (key: keyof Filters, value: string) => {
        setPropertyFilters(prev => ({...prev, [key]: value }))
    };


    interface Filters {
        price: "Any price" | "Under $500k" | "$500k - $750k" | "$750k - $1M" | "$1M+";
        type: "Any type" | "Single-family" | "Multi-family" | "Condos" | "Apartments";
        beds: "Any beds" | "2" | "3" | "4" | "5+";
        status: "Any status" | "For sale" | "For rent" | "Sold";
        sort: "Newest" | "Oldest" | "Price: Low to high" | "Price: High to low";
    }

    const [propertyFilters, setPropertyFilters] = useState<Filters>({
        price: 'Any price',
        type: 'Any type',
        beds: 'Any beds',
        status: 'Any status',
        sort: 'Newest'
    })


    const matchesPrice = (property: Property, selected: string):boolean => {
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

    const matchesType = (property: Property, selected: string):boolean => {
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

    const matchesBeds = (property: Property, selected: string):boolean => {
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

    const matchesStatus = (property: Property, selected: string):boolean => {
        if(selected === 'Any status'){
            return true
        } else if(selected === 'For sale'){
            return property.type === 'For Sale'
        } else if(selected  === 'For rent'){
            return property.type === 'For Rent'
        } else if(selected === 'Sold'){
            return property.type === 'Sold'
        }
        return true
    }

    const matchesSort = (property: Property[], selected: string): Property[] => {
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

    // console.log(matchesSort(propertiesData, 'Price: High to low'))
    // console.log(propertiesData.filter(property => matchesPrice(property, '$1M+')))

    return (
        <section id={styles.properties}>
            <div className={styles.filterContainer}>
                <div className={styles.filterTop}>
                    <div className={styles.searchColumn}>
                        <span className={styles.label}>Search</span>
                        <div className={styles.searchInput}>
                            <FiSearch />
                            <input type="text" placeholder='Neighborhood or address'/>
                        </div>
                    </div>
                    <div className={styles.filtersColumn}>
                        <div className={styles.filter}>
                            <CustomSelect
                                options={["Any price", "Under $500k", "$500k - $750k", "$750k - $1M", "$1M+"]}
                                placeholder="Any price"
                                onChange={(value) => handleFilterChange("price", value)}
                                label='Price range'
                                value={propertyFilters.price}
                            />
                        </div>
                        <div className={styles.filter}>
                            <CustomSelect
                                options={["Any type", "Single-family", "Multi-family", "Condos", "Apartments"]}
                                placeholder="All types"
                                onChange={(value) => handleFilterChange("type", value)}
                                label='Property type'
                                value={propertyFilters.type}
                            />
                        </div>
                        <div className={styles.filter}>
                            <CustomSelect
                                options={["Any beds", "2", "3", "4", "5+"]}
                                placeholder="Any beds"
                                onChange={(value) => handleFilterChange("beds", value)}
                                label='Bedrooms'
                                value={propertyFilters.beds}
                            />
                        </div>
                        <div className={styles.filter}>
                            <CustomSelect
                                options={["Any status", "For sale", "For rent", "Sold"]}
                                placeholder="Any status"
                                onChange={(value) => handleFilterChange("status", value)}
                                label='Status'
                                value={propertyFilters.status}
                            />
                        </div>
                        
                    </div>
                </div>
                <div className={styles.filterBottom}>
                    <button className={styles.clearBtn}>Clear all filters</button>
                    <div className={styles.sortByContainer}>
                        <p>Sort by</p>
                        <CustomSelect
                            options={["Newest", "Oldest", "Price: Low to high", "Price: High to low"]}
                            placeholder="Newest"
                            onChange={(value) => handleFilterChange("sort", value)}
                            value={propertyFilters.sort}
                        />
                    </div>
                </div>

                <div className={styles.resultsHead}>
                    <h2>{propertiesData.length} properties</h2>
                    <p>Showing homes accross Sacramento</p>
                </div>

            </div>


            <div className={styles.propertyGridContainer}>
                    {propertiesData.map((property) => {
                        return (
                            <PropertyCard 
                            key={property.id}
                            property={property}
                            />
                        )
                    })}
            </div>
        </section>
    )
}

export default PropertiesGrid