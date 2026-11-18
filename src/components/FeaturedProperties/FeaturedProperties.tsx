import styles from './FeaturedProperties.module.css'
import { MdArrowForwardIos } from "react-icons/md";
import { PropertyCard } from '../PropertyCard/PropertyCard';
import type { Property } from '../../modules/propertyType';
import { DarkBtn } from '../Buttons/DarkBtn';
import { RiArrowRightLine } from "react-icons/ri";
import { useState } from 'react';

function FeaturedProperties ({propertiesData}:{propertiesData: Property[]}) {

    const [currentIndex, setCurrentIndex] = useState(0)

    const nextSlide = () => {
        setCurrentIndex((prev) => {
            return Math.min(prev + 1, propertiesData.length - 1)
        })
    }

    const prevSlide = () => {
        setCurrentIndex((prev) => {
            return Math.max(prev - 1, 0)
        })
    }

    return(
        <>
            <section id={styles.featuredProperties}>
                <div className={styles.featuredPropertiesHeading}>
                    <div className={styles.heading}>
                        <small className={`pre-title ${styles.preTitle}`}>Curated for you</small>
                        <h2>Featured Properties</h2>
                    </div>

                    <div className={styles.sliders}>
                        <div 
                            className={`${styles.slider} ${styles.sliderLeft}`} 
                            onClick={currentIndex === 0 ? undefined : prevSlide}
                        >
                            <MdArrowForwardIos/>
                        </div>
                        <div 
                            className={`${styles.slider} ${styles.sliderRight}`}
                            onClick={currentIndex === propertiesData.length - 1 ? undefined : nextSlide}
                        >
                            <MdArrowForwardIos/>
                        </div>
                    </div>
                </div>
                
                <div 
                    className={styles.featuredPropertiesGrid}
                    style={{
                        transform: `translateX(-${currentIndex * 354}px)`,
                        transition: '0.4s ease'
                    }}
                >
                    {propertiesData.map((property) => {
                        return (
                            <PropertyCard 
                            key={property.id}
                            property={property}
                            />
                        )
                    })}
                </div>

            
                <div className={styles.btnContainer}>
                    <DarkBtn 
                        path={`/properties`} 
                        linkText={'View All Properties'} 
                        rightIcon={<RiArrowRightLine />}
                    />
                </div>
            </section>
        </>
    )
}

export default FeaturedProperties