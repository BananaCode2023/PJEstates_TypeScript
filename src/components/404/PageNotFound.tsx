import { DarkBtn } from "../Buttons/DarkBtn"
import { RiArrowRightLine } from "react-icons/ri";
import styles from './PageNotFound.module.css'

function PageNotFound () {
    return (
        <section id={styles.pageNotFound}>
            <h1>
                <span>404</span><br/>
                <span style={{color: 'var(--color-accent)', fontStyle: 'italic'}}>Page not found</span>
            </h1>
            <DarkBtn path='/' rightIcon={<RiArrowRightLine/>} linkText={`Home`}/>
        </section>
    )
} 

export default PageNotFound