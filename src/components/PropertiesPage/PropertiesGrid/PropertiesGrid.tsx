import type { Property } from '../../../modules/propertyType'
import { PropertyCard } from '../../PropertyCard/PropertyCard'
import CustomSelect from '../CustomSelect/CustomSelect'
import styles from './PropertiesGrid.module.css'
import { FiSearch } from "react-icons/fi";

function PropertiesGrid ({propertiesData}:{propertiesData: Property[]}) {

    const handleChange = (value: string) => {
        console.log("Selected:", value);
    };

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
                                options={["Any price", "Under $500k", "$500k - $750k", "$750k - $1M", "1M+"]}
                                placeholder="Any price"
                                onChange={handleChange}
                                label='Price range'
                            />
                        </div>
                        <div className={styles.filter}>
                            <CustomSelect
                                options={["All types", "Single-family", "Multi-family", "Condos", "Apartments"]}
                                placeholder="All types"
                                onChange={handleChange}
                                label='Property type'
                            />
                        </div>
                        <div className={styles.filter}>
                            <CustomSelect
                                options={["Any beds", "2+", "3+", "4+", "5+beds"]}
                                placeholder="Any beds"
                                onChange={handleChange}
                                label='Bedrooms'
                            />
                        </div>
                        <div className={styles.filter}>
                            <CustomSelect
                                options={["Any status", "For sale", "For rent", "Sold"]}
                                placeholder="Any status"
                                onChange={handleChange}
                                label='Status'
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
                            onChange={handleChange}
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