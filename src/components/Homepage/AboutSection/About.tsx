import styles from './About.module.css'
import { RiArrowRightLine } from "react-icons/ri";

function About () {
    return (
        <section id={styles.about}>
            <div className={styles.aboutContainer}>
                <div className={styles.heading}>
                    <small className={`pre-title ${styles.preTitle}`}>Our Approach</small>
                    <h2>Real estate, with a<br/>
                    <span>local point of view</span>
                    </h2>
                </div>
                <div className={styles.body}>
                    <h3>PJ Estates is a Sacramento-based property collective helping people discover homes with character, context, and lasting value.</h3>
                    <p>From tree-lined streets in East Sacramento to the energy of Midtown, we pair deep neighborhood knowledge with a refreshingly personal experience.</p>
                    <a href="tel: +639208983562">Contact us <RiArrowRightLine /></a>
                </div>
            </div>
        </section>
    )
}

export default About