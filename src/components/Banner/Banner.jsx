import React from 'react';
import styles from './Banner.module.scss';
import BannerImg from '../../app/assets/banner.png'

function Banner() {
    return (
        <div className={styles.Banner}>
            <div className={styles.bannerLeft}>
                <div className={styles.bannerHeading}>
                    <span>"Because every step toward healing begins with hope."</span>
                </div>
                <div className={styles.bannerText}>
                    <span>Experience the transformative power of online therapy—</span>
                    <span>
                        designed to break barriers, restore balance, and nurture mental harmony.  Begin your personalized journey toward lasting wellness and a healthier, happier you.</span>
                </div>
                <div className={styles.bookSession}>
                    <button className={styles.sessionBtn}>
                        Book  your first session FREE
                    </button>
                </div>
            </div>
            <div className={styles.bannerImg}>
                <img src={BannerImg.src} />
            </div>
        </div>
    )
}

export default Banner