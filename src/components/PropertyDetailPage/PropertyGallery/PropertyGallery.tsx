import type { Property } from '../../../modules/propertyType';
import styles from './PropertyGallery.module.css'
import { useState, useEffect  } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs, Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { Zoom } from "swiper/modules";
import "swiper/css";
import "swiper/css/thumbs";
import "swiper/css/zoom";

import { RiCloseLine } from "react-icons/ri";
import { Link } from 'react-router-dom';
import { RiArrowLeftLine } from "react-icons/ri";
import { MdArrowForwardIos } from "react-icons/md";

function PropertyGallery ({propertyDetail}:{propertyDetail:Property}) {

    const [thumbsSwiper, setThumbsSwiper] =
        useState<SwiperType | null>(null);

    const [currentIndex, setCurrentIndex] = useState(0);
    
    const [isBeginning, setIsBeginning] = useState(true)
    const [isEnd, setIsEnd] = useState(false)

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalSwiper, setModalSwiper] = useState<SwiperType | null>(null);
    const [modalIndex, setModalIndex] = useState(0);

    const [modalIsBeginning, setModalIsBeginning] = useState(true);
    const [modalIsEnd, setModalIsEnd] = useState(false);

    useEffect(() => {
        if (!isModalOpen) return;

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                setIsModalOpen(false);
            }

            if (e.key === "ArrowRight") {
                modalSwiper?.slideNext();
            }

            if (e.key === "ArrowLeft") {
                modalSwiper?.slidePrev();
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [isModalOpen, modalSwiper]);

    return (
        <section id={styles.propertyGallery}>
            
            <Swiper
                modules={[Navigation,Thumbs]}
                thumbs={{
                    swiper: thumbsSwiper && !thumbsSwiper.destroyed
                        ? thumbsSwiper
                        : null
                }}
                navigation={{
                    prevEl: `#galleryPrevSlider`,
                    nextEl: `#galleryNextSlider`,
                }}
                onSwiper={(swiper: SwiperType) => {
                    setIsBeginning(swiper.isBeginning)
                    setIsEnd(swiper.isEnd)
                }}
                onSlideChange={(swiper: SwiperType) => {
                    setIsBeginning(swiper.isBeginning)
                    setIsEnd(swiper.isEnd)
                    setCurrentIndex(swiper.realIndex)
                }}

                className={styles.mainSwiper}
            >
                {propertyDetail.images!.map((image, index) => (
                    <SwiperSlide key={index}>
                        <img src={`/${image}`} alt={`Property ${index + 1}`} />
                        
                    </SwiperSlide>
                ))}
            </Swiper>

            <Link to='/properties' className={styles.backButton}>
                <RiArrowLeftLine /> BACK TO PROPERTIES
            </Link>

            <Swiper
                onSwiper={setThumbsSwiper}
                modules={[Thumbs]}
                watchSlidesProgress
                slidesPerView="auto"
                spaceBetween={12}
                className={styles.thumbnailSwiper}
            >
                {propertyDetail.images!.map((image, index) => (
                    <SwiperSlide key={index}>
                        <img 
                            src={`/${image}`} 
                            alt={`Thumbnail ${index + 1}`}
                            onClick={() => {
                                setModalIndex(currentIndex);
                                setIsModalOpen(true);
                            }}
                            className={styles.clickableImage}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>

            <div className={styles.navigation}>
                <button id='galleryPrevSlider' disabled={isBeginning}><MdArrowForwardIos/></button>

                <span>
                    {String(currentIndex + 1).padStart(2, "0")}
                    {" / "}
                    {String(propertyDetail.images!.length).padStart(2, "0")}
                </span>

                <button id='galleryNextSlider' disabled={isEnd}><MdArrowForwardIos/></button>
            </div>

            {isModalOpen && (
                <div
                    className={styles.galleryModal}
                    onClick={() => setIsModalOpen(false)}
                >

                    <button
                        className={styles.closeModal}
                        onClick={() => setIsModalOpen(false)}
                    >
                        <RiCloseLine />
                    </button>

                    <Swiper
                        modules={[Zoom]}
                        zoom
                        initialSlide={currentIndex}
                        className={styles.modalSwiper}
                        onSwiper={(swiper) => {
                            setModalSwiper(swiper);
                            setModalIsBeginning(swiper.isBeginning);
                            setModalIsEnd(swiper.isEnd);
                        }}
                        onSlideChange={(swiper) => {
                            setModalIndex(swiper.realIndex);
                            setModalIsBeginning(swiper.isBeginning);
                            setModalIsEnd(swiper.isEnd);
                        }}
                        onClick={(_, event) => {
                            event.stopPropagation();
                        }}
                    >
                        {propertyDetail.images!.map((image, index) => (
                            <SwiperSlide key={index}>
                                <div className="swiper-zoom-container">
                                    <img
                                        src={`/${image}`}
                                        alt={`Property ${index + 1}`}
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    <button
                        className={styles.modalPrev}
                        disabled={modalIsBeginning}
                        onClick={(e) => {
                            e.stopPropagation();
                            modalSwiper?.slidePrev();
                        }}
                    >
                        <MdArrowForwardIos />
                    </button>

                    <button
                        className={styles.modalNext}
                        disabled={modalIsEnd}
                        onClick={(e) => {
                            e.stopPropagation();
                            modalSwiper?.slideNext();
                        }}
                    >
                        <MdArrowForwardIos />
                    </button>

                    <div className={styles.modalCounter}>
                        {String(modalIndex  + 1).padStart(2, "0")}
                        {" / "}
                        {String(propertyDetail.images!.length).padStart(2, "0")}
                    </div>

                </div>
            )}
            
        </section>
    )
}

export default PropertyGallery