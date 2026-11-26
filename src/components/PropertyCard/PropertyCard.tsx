import styles from './PropertyCard.module.css'
import { TbBed } from "react-icons/tb";
import { TbBath } from "react-icons/tb";
import { TbRulerMeasure2 } from "react-icons/tb";
import { TbCalendarTime } from "react-icons/tb";
import type { Property } from '../../modules/propertyType';

export function PropertyCard ({property}:{property:Property}) {
    return(
        <a className={styles.propertyCard}>
            <div className={styles.propertyHeader}>
                <img 
                    className={styles.image}
                    src={property.images![0]} 
                    alt='property_name'
                />
                <p className={`${styles.tag} ${styles.propertyStatus}`}>{property.status}</p>
                <p className={`${styles.tag} ${styles.propertyType}`}>{property.type}</p>
            </div>
            <div className={styles.propertyInfo}>
                <h4>${(property.price).toLocaleString('en-US')}</h4>
                <h3>{property.addressName}</h3>
                <p>{property.addressCity}</p>
                <div className={styles.infoFooter}>
                    <div className={styles.footerDetail}><TbBed/> {property.beds} Beds</div>
                    <div className={styles.footerDetail}><TbBath/> {property.baths} Baths</div>
                    <div className={styles.footerDetail}><TbRulerMeasure2 /> {property.sqft} sqft</div>
                    <div className={styles.footerDetail}><TbCalendarTime /> {property.yearBuilt}</div>
                </div>
            </div>
        </a>
    )
}