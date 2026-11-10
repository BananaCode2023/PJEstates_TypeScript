import { DarkBtn } from "../../Buttons/DarkBtn"
import { RiArrowRightLine } from "react-icons/ri";
import styles from './Hero.module.css'
import type { Property } from "../../../modules/propertyType";
import { useEffect, useState } from "react";

function Hero ({propertiesData}:{propertiesData: Property[]}) {
    
    //these is just for the hero slideShow
    const [randomNumber, setRandomNumber] = useState(0)
    const [isVisible, setIsVisible] = useState(true)

    useEffect(() => {
        if(propertiesData.length === 0) return

        let timeoutId: ReturnType<typeof setTimeout>

        const interval = setInterval (() => {
            setIsVisible(false)

            timeoutId = setTimeout(() => {
                const getRandomNumber = (): number => {
                    return Math.floor(Math.random() * propertiesData.length);
                }

                setRandomNumber(getRandomNumber())

                setIsVisible(true);
            }, 500)

        }, 6000)

        return () => {
            clearInterval(interval)
            clearTimeout(timeoutId)
        }
        
    }, [propertiesData.length])

    
// className={styles.}
    return(
        <section id={styles.heroSection}>
            <div className={styles.heroContainer}>
                <div className={`${styles.heroTextContainer} ${styles.heroCol}`}>
                    <div className={styles.heroText}>
                        <small className={`pre-title ${styles.preTitle}`}>Sacramento, California</small>
                        <h1>Find your place</h1>
                        <p>Thoughtfully selected homes, local expertise, and a better way to explore the city we love.</p>
                        
                        <DarkBtn 
                            path={`/properties`} 
                            linkText={'Explore Properties'} 
                            rightIcon={<RiArrowRightLine />}
                        />
                    </div>
                </div>

                <div 
                    className={`
                        ${styles.heroImg}
                        ${styles.heroCol}
                        ${isVisible ? styles.fadeIn : styles.fadeOut}    
                    `} 
                    style={{backgroundImage: `url('${propertiesData[randomNumber].images![0]}')`}}
                >
                    <div className={styles.imgTextContainer}>
                        <div className={styles.marketNote}>
                            <small>Local Market</small>
                            <h3>{(propertiesData.length)-(propertiesData.filter((property) => property.status === 'Sold').length)}</h3>
                            <p>properties currently available</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero