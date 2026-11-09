import { NavLink } from 'react-router-dom'
import styles from './Header.module.css'
import { FiSearch } from "react-icons/fi";
import { MdLocalPhone } from "react-icons/md";
import { DarkBtn } from '../Buttons/DarkBtn';
import { useState } from 'react';
import { IoMenu } from "react-icons/io5";
import { HeaderModal } from './HeaderModal';
import { IoCloseSharp } from "react-icons/io5";

function Header () {

    const [isHeaderModalOpen, setIsHeaderModalOpen] = useState(false)

    return(
        <>
            <header>
                <div className={styles.headerContainer}>
                    <NavLink to='/' className={styles.logo}>
                        <div className={styles.icon}>
                            <p className={styles.iconText}>PJ</p>
                        </div>
                        <div className={styles.logoText}>
                            <p>Estates</p>
                            <small>Sacramento</small>
                        </div>
                    </NavLink>

                    <div className={styles.headerCol}>
                        <div className={styles.headerInput}>
                            <FiSearch />
                            <input type="text" placeholder='Search by neighborhood or address'/>
                        </div>
                        <NavLink to='/' className={styles.navLink}>Home</NavLink>
                        <NavLink to='/properties' className={styles.navLink}>Properties</NavLink>
                        <DarkBtn path={'tel: +639208983562'} leftIcon={<MdLocalPhone/>} linkText={`Contact`}/>
                    </div>

                    <div 
                        className={styles.headerMenu} 
                        onClick={() => setIsHeaderModalOpen(!isHeaderModalOpen)}
                    >
                        {!isHeaderModalOpen ? <IoMenu /> : <IoCloseSharp />}
                    </div>
                    
                </div>

            </header>
            {isHeaderModalOpen ? <HeaderModal/> : ''}
        </>
    )
}

export default Header