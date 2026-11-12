import styles from './FeaturedProperties.module.css'
import { MdArrowForwardIos } from "react-icons/md";
import { PropertyCard } from './PropertyCard/PropertyCard';

function FeaturedProperties () {
    return(
        <>
            <section id={styles.featuredProperties}>
                <div className={styles.featuredPropertiesHeading}>
                    <div className={styles.heading}>
                        <small className={`pre-title ${styles.preTitle}`}>Curated for you</small>
                        <h2>Featured Properties</h2>
                    </div>

                    <div className={styles.sliders}>
                        <div className={`${styles.slider} ${styles.sliderLeft}`}><MdArrowForwardIos/></div>
                        <div className={`${styles.slider} ${styles.sliderRight}`}><MdArrowForwardIos/></div>
                    </div>
                </div>

                <div className={styles.featuredPropertiesGrid}>
                    <PropertyCard/>
                    <PropertyCard/>
                    <PropertyCard/>
                    <PropertyCard/>
                    <PropertyCard/>
                    <PropertyCard/>
                </div>
            </section>
        </>
    )
}

export default FeaturedProperties