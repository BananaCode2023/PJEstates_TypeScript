import { useState } from 'react';
import type { Property } from '../../../modules/propertyType'
import { PropertyCard } from '../../PropertyCard/PropertyCard'
import CustomSelect from '../CustomSelect/CustomSelect'
import styles from './PropertiesGrid.module.css'
import { FiSearch } from "react-icons/fi";
import {
    PRICE_OPTIONS, TYPE_OPTIONS, BEDS_OPTIONS, STATUS_OPTIONS, SORT_OPTIONS,
    DEFAULT_FILTERS, type Filters
} from '../../../modules/filterOptions'
import { applyFilters } from '../../../utils/propertyFilters'
import { isOneOf } from '../../../utils/typeGuards'



function PropertiesGrid ({propertiesData}:{propertiesData: Property[]}) {

    const [searchTerm, setSearchTerm] = useState('')

    const [propertyFilters, setPropertyFilters] = useState<Filters>(DEFAULT_FILTERS)

    const filtered = applyFilters(propertiesData, propertyFilters, searchTerm)

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