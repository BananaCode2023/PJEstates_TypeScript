import { DarkBtn } from "../../Buttons/DarkBtn"
import { RiArrowRightLine } from "react-icons/ri";
import styles from './Hero.module.css'
import type { Property } from "../../../modules/propertyType";

function Hero ({propertiesData}:{propertiesData: Property[]}) {
    
    //these are just to pick a random property to show for hero
    const getRandomNumber = (): number => {
        return Math.floor(Math.random() * 30) + 1;
    }

    const random:number = getRandomNumber();

    
// className={styles.}
    return(
        <section id={styles.heroSection}>
            <div className={styles.heroContainer}>
                <div className={`${styles.heroTextContainer} ${styles.heroCol}`}>
                    <div className={styles.heroText}>
                        <small className='pre-title'>Sacramento, California</small>
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
                    className={`${styles.heroImg} ${styles.heroCol}`} 
                    style={{backgroundImage: `url('${propertiesData[random].images![0]}')`}}
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