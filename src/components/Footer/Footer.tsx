import { Link } from 'react-router-dom'
import styles from './Footer.module.css'

function Footer () {
    return(
        <footer>
            <div className={styles.footerRow}>
                <div className={`${styles.footerCol} ${styles.footerLogo}`}>
                    <div className={styles.icon}>
                        <p className={styles.iconText}>PJ</p>
                    </div>
                    <div className={styles.logoText}>
                        <p>Estates</p>
                        <small>Sacramento</small>
                    </div>
                </div>

                <div className={`${styles.footerCol} ${styles.footerLinksContainer}`}>
                    <div className={styles.linkContainer}>
                        <p>Explore</p>
                        <div className={styles.footerLinks}>
                            <Link to='/' className={styles.footerLink}>Home</Link>
                            <Link to='/properties' className={styles.footerLink}>Properties</Link>
                        </div>
                    </div>

                    <div className={styles.linkContainer}>
                        <p>Get in Touch</p>
                        <div className={styles.footerLinks}>
                            <Link to='mailto: hello@pjestates.com' className={styles.footerLink}>hello@pjestates.com</Link>
                            <Link to='tel: +639208983562' className={styles.footerLink}>(+63) 920-898-3562</Link>
                        </div>
                    </div>
                </div>

                <div className={styles.footerLinks}>
                    <p className={styles.footerTagline}>Local insight.<br/>
                    Remarkable homes.
                    </p>
                </div>
            </div>

            <div className={styles.footerRow}>
                <small>© {new Date().getFullYear()} PJ Estates. All rights reserved.</small>
                <small>Serving Sacramento, California</small>
            </div>
        </footer>
    )
}

export default Footer