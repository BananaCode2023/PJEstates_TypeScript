import { NavLink } from "react-router-dom";
import styles from './Header.module.css'
import { DarkBtn } from "../Buttons/DarkBtn";
import { MdLocalPhone } from "react-icons/md";

export function HeaderModal () {
    return(
        <div className={styles.headerModal}>
            <NavLink to='/' className={styles.navLink}>Home</NavLink>
            <NavLink to='/properties' className={styles.navLink}>Properties</NavLink>
            <DarkBtn path={'tel: +639208983562'} leftIcon={<MdLocalPhone/>} linkText={`Contact`}/>
        </div>
    )
}