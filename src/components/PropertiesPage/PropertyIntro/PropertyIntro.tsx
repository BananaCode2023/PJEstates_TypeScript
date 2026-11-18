import styles from './PropertyIntro.module.css'

function PropertyIntro () {
    return (
        <section id={styles.propertyIntro}>
            <div className={`${styles.propertyIntroTextContainer} ${styles.heroCol}`}>
                <div className={styles.propertyIntroText}>
                    <small className={`pre-title ${styles.preTitle}`}>Sacramento Listings</small>
                    <h1>Find a home that <span style={{color: 'var(--color-accent-light)', fontStyle: 'italic'}}>feels like you.</span></h1>
                    <p>Explore a curated collection of homes across Sacramento's most distinctive neighborhoods.</p>
                </div>
            </div>
        </section>
    )
}

export default PropertyIntro