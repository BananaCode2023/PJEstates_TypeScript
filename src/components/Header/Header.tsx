import { NavLink } from 'react-router-dom'
import styles from './Header.module.css'
import { FiSearch } from "react-icons/fi";
import { MdLocalPhone } from "react-icons/md";
import { DarkBtn } from '../Buttons/DarkBtn';
import { useEffect, useState } from 'react';
import { IoMenu } from "react-icons/io5";
import { HeaderModal } from './HeaderModal';
import { IoCloseSharp } from "react-icons/io5";

function Header () {

    const [showHeader, setShowHeader] = useState(true);
    const [isHeaderModalOpen, setIsHeaderModalOpen] = useState(false)

    useEffect(() => {
        let lastScrollY = window.scrollY

        const handleScroll = () => {
            const currentScrollY = window.scrollY

            if(currentScrollY <= 0) {
                setShowHeader(true)
            } else if (currentScrollY < lastScrollY) {
                setShowHeader(true)
            } else{
                setShowHeader(false)
            }

            lastScrollY = currentScrollY
        }
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, [])

    return(
        <>
            <header className={isHeaderModalOpen ? styles.visible : showHeader ? styles.visible : styles.hidden}>
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
            <HeaderModal isHeaderModalOpen={isHeaderModalOpen}/>
            {/* {isHeaderModalOpen ? <HeaderModal/> : ''} */}
        </>
    )
}

export default Header