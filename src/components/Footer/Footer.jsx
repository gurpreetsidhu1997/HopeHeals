import React from 'react';
import styles from './Footer.module.scss'
import Facebook from '../../app/assets/facebook.png';
import Instagram from '../../app/assets/instagram.png';


function Footer() {
    return (
        <div className='container'>
            <div className={styles.footer} >
                <div className={styles.contacts}>
                    <span>Contact Us</span>
                    <span>+91 8296760271</span>
                </div>

                <div className={styles.socialIcon}>
                    <img src={Facebook.src} alt="" />
                    <img src={Instagram.src} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Footer