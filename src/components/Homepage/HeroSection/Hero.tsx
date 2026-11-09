import { DarkBtn } from "../../Buttons/DarkBtn"
import { RiArrowRightLine } from "react-icons/ri";
import styles from './Hero.module.css'
import type { Property } from "../../../modules/propertyType";

function Hero ({propertiesData}:{propertiesData: Property[]}) {

    const getRandomNumber = (): number => {
        return Math.floor(Math.random() * 30) + 1;
    }

    //this is just to pick a random property
    const random:number = getRandomNumber();

    

    return(
        <section>
            
            <div>
                <div>
                    <small>Sacramento, California</small>
                    <h1><span>Find your place</span><span>in Sacramento.</span><br/></h1>
                    <p>Thoughtfully selected homes, local expertise, and a better way to explore the city we love.</p>
                </div>
                <DarkBtn path={`/properties`} linkText={'Explore Properties'} rightIcon={<RiArrowRightLine />}/>
            </div>

            <div 
                className={styles.heroImg} 
                style={{backgroundImage: `url('${propertiesData[random].images![0]}')`}}
            >
                <div className={styles.marketNote}>
                    <small>Local Market</small>
                    <h3>37</h3>
                    <p>properties currently available</p>
                </div>
            </div>
        </section>
    )
}

export default Hero