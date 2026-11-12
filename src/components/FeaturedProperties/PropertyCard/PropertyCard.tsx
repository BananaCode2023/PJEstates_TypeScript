import styles from './PropertyCard.module.css'
import { TbBed } from "react-icons/tb";
import { TbBath } from "react-icons/tb";
import { TbRulerMeasure2 } from "react-icons/tb";
import { TbCalendarTime } from "react-icons/tb";

export function PropertyCard () {
    return(
        <div className={styles.propertyCard}>
            <div className={styles.propertyHeader}>
                <img 
                    className={styles.image}
                    src='/public/property-images/6 Mantauk Point Pl, Sacramento, CA 95835/01.jpeg' 
                    alt='property_name'
                />
                <p className={`${styles.tag} ${styles.propertyStatus}`}>For Sale</p>
                <p className={`${styles.tag} ${styles.propertyType}`}>Single Family</p>
            </div>
            <div className={styles.propertyInfo}>
                <h4>$895,000</h4>
                <h3>1842 41st Street</h3>
                <p>East Sacramento, CA 95819</p>
                <div className={styles.infoFooter}>
                    <div className={styles.footerDetail}><TbBed/> 4 Beds</div>
                    <div className={styles.footerDetail}><TbBath/> 3 Baths</div>
                    <div className={styles.footerDetail}><TbRulerMeasure2 /> 2460 sqft</div>
                    <div className={styles.footerDetail}><TbCalendarTime /> 1938</div>
                </div>
            </div>
        </div>
    )
}