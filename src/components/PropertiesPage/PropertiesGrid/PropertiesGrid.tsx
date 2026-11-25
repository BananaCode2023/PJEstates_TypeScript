import { useState } from 'react';
import type { Property } from '../../../modules/propertyType'
import { PropertyCard } from '../../PropertyCard/PropertyCard'
import CustomSelect from '../CustomSelect/CustomSelect'
import styles from './PropertiesGrid.module.css'
import { FiSearch } from "react-icons/fi";
import {
    PRICE_OPTIONS, TYPE_OPTIONS, BEDS_OPTIONS, STATUS_OPTIONS, SORT_OPTIONS,
    type Price, type PropertyType, type Beds, type Status, type Sort, type Filters
} from '../../../modules/filterOptions'

const isOneOf = <T extends readonly string[]>(list: T, value: string): value is T[number] => (list as readonly string[]).includes(value);

function PropertiesGrid ({propertiesData}:{propertiesData: Property[]}) {

    const [searchTerm, setSearchTerm] = useState('')

    const [propertyFilters, setPropertyFilters] = useState<Filters>({
        price: 'Any price',
        type: 'Any type',
        beds: 'Any beds',
        status: 'Any status',
        sort: 'Newest'
    })

    const matchesSearch = (property: Property, term: string):boolean => {
        const query = term.trim().toLowerCase()
        if(query === '') {
            return true
        }
        return property.address.toLowerCase().includes(query)
    }

    const matchesPrice = (property: Property, selected: Price):boolean => {
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

    const matchesType = (property: Property, selected: PropertyType):boolean => {
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

    const matchesBeds = (property: Property, selected: Beds):boolean => {
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

    const matchesStatus = (property: Property, selected: Status):boolean => {
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

    const matchesSort = (property: Property[], selected: Sort): Property[] => {
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

    const filtered = matchesSort(
        propertiesData.filter(property => 
            matchesSearch(property, searchTerm) &&
            matchesPrice(property, propertyFilters.price) &&
            matchesType(property, propertyFilters.type) &&
            matchesBeds(property, propertyFilters.beds) &&
            matchesStatus(property, propertyFilters.status)
        ),
        propertyFilters.sort
    )

    return (
        <section id={styles.properties}>
            <div className={styles.filterContainer}>
                <div className={styles.filterTop}>
                    <div className={styles.searchColumn}>
                        <span className={styles.label}>Search</span>
                        <div className={styles.searchInput}>
                            <FiSearch />
                            <input 
                                type="text" 
                                placeholder='Neighborhood or address'
                                value={searchTerm}
                                onChange={(e) => {
                                    setSearchTerm(e.target.value)
                                }}
                            />
                        </div>
                    </div>
                    <div className={styles.filtersColumn}>
                        <div className={styles.filter}>
                            <CustomSelect
                                options={[...PRICE_OPTIONS]}
                                placeholder="Any price"
                                onChange={(value) => {
                                    if(isOneOf(PRICE_OPTIONS, value)) {
                                        setPropertyFilters(prev => ({...prev, price: value}));
                                    }
                                }}
                                label='Price range'
                                value={propertyFilters.price}
                            />
                        </div>
                        <div className={styles.filter}>
                            <CustomSelect
                                options={[...TYPE_OPTIONS]}
                                placeholder="All types"
                                onChange={(value) => {
                                    if(isOneOf(TYPE_OPTIONS, value)){
                                        setPropertyFilters(prev => ({...prev, type: value }))
                                    }
                                }}
                                label='Property type'
                                value={propertyFilters.type}
                            />
                        </div>
                        <div className={styles.filter}>
                            <CustomSelect
                                options={[...BEDS_OPTIONS]}
                                placeholder="Any beds"
                                onChange={(value) => {
                                    if(isOneOf(BEDS_OPTIONS, value)){
                                        setPropertyFilters(prev => ({...prev, beds: value }))
                                    }
                                }}
                                label='Bedrooms'
                                value={propertyFilters.beds}
                            />
                        </div>
                        <div className={styles.filter}>
                            <CustomSelect
                                options={[...STATUS_OPTIONS]}
                                placeholder="Any status"
                                onChange={(value) => {
                                    if(isOneOf(STATUS_OPTIONS, value)){
                                        setPropertyFilters(prev => ({...prev, status: value }))
                                    }
                                }}
                                label='Status'
                                value={propertyFilters.status}
                            />
                        </div>
                        
                    </div>
                </div>
                <div className={styles.filterBottom}>
                    <button 
                        className={styles.clearBtn}
                        onClick={() => {
                            setPropertyFilters({
                                price: 'Any price',
                                type: 'Any type',
                                beds: 'Any beds',
                                status: 'Any status',
                                sort: 'Newest'
                            })
                        }}
                    >
                        Clear all filters
                    </button>
                    <div className={styles.sortByContainer}>
                        <p>Sort by</p>
                        <CustomSelect
                            options={[...SORT_OPTIONS]}
                            placeholder="Newest"
                            onChange={(value) => {
                                    if(isOneOf(SORT_OPTIONS, value)){
                                        setPropertyFilters(prev => ({...prev, sort: value }))
                                    }
                                }}
                            value={propertyFilters.sort}
                        />
                    </div>
                </div>

                <div className={styles.resultsHead}>
                    <h2>{filtered.length} {filtered.length > 1 ? 'properties' : 'property'}</h2>
                    <p>Showing homes accross Sacramento</p>
                </div>

            </div>


            <div className={styles.propertyGridContainer}>
                    {filtered.map((property) => {
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