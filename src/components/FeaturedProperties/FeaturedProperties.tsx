import styles from './FeaturedProperties.module.css'
import { MdArrowForwardIos } from "react-icons/md";
import { PropertyCard } from '../PropertyCard/PropertyCard';
import type { Property } from '../../modules/propertyType';
import { DarkBtn } from '../Buttons/DarkBtn';
import { RiArrowRightLine } from "react-icons/ri";
import { useState } from 'react';

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function FeaturedProperties ({propertiesData}:{propertiesData: Property[]}) {

    const [currentIndex, setCurrentIndex] = useState(0)
    const [isBeginning, setIsBeginning] = useState(true)
const [isEnd, setIsEnd] = useState(false)

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
                        <button 
                            className={`${styles.slider} ${styles.sliderLeft}`} 
                            id="propertyPrevSlider"
                            disabled={isBeginning}
                        >
                            <MdArrowForwardIos/>
                        </button>
                        <button 
                            className={`${styles.slider} ${styles.sliderRight}`}
                            id="propertyNextSlider"
                            disabled={isEnd}
                        >
                            <MdArrowForwardIos/>
                        </button>
                    </div>
                </div>
                
                <div 
                    className={styles.featuredPropertiesGrid}
                    style={{
                        transform: `translateX(-${currentIndex * 354}px)`,
                        transition: '0.4s ease'
                    }}
                >
                    <Swiper
                        modules={[Navigation]}
                        spaceBetween={24}
                        slidesPerView={4}
                        navigation={{
                            prevEl: `#propertyPrevSlider`,
                            nextEl: `#propertyNextSlider`,
                        }}
                        onSwiper={(swiper: SwiperType) => {
                            setIsBeginning(swiper.isBeginning)
                            setIsEnd(swiper.isEnd)
                        }}
                        onSlideChange={(swiper: SwiperType) => {
                            setIsBeginning(swiper.isBeginning)
                            setIsEnd(swiper.isEnd)
                        }}
                        
                        breakpoints={{
                            375: {
                                slidesPerView: 1,
                            },
                            680: {
                                slidesPerView: 2,
                            },
                            1024: {
                                slidesPerView: 3,
                            },
                            1440: {
                                slidesPerView: 4,
                            },
                        }}
                    >
                        {propertiesData.slice(0, 10).map((property) => {
                            return (
                                <SwiperSlide key={property.id}>
                                    <PropertyCard property={property}/>
                                </SwiperSlide>
                            )
                        })}
                    </Swiper>
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