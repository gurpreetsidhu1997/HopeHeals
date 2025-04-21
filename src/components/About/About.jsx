import React from 'react'
import styles from './About.module.scss'
import Bandage from '../../app/assets/bandage.png'

function About() {
    return (
        <div className='container mt-[75px]!'>
            <div className={styles.message}>
                <span>About Us ?</span>
            </div>
            <div className={styles.aboutUs}>
                <p>At Hope Heals, we’re dedicated to making mental health support accessible and judgment-free. Our tailored solutions are designed to help you heal and thrive. To make starting easier, your first session is completely free—because we care about your journey and are here to walk it with you.</p>
            </div>
            <div className={styles.note}>
                <div className={styles.notesText}>
                    <img className='bandage' src={Bandage.src} alt="Notes" />
                    <span className={styles.impText}>A NOTE FROM US</span>
                </div>
                <span className={styles.desc}>
                    Asking for help isn’t easy, but you’ve already taken the first step. At Hope Heals, you’ll find not just support, but a caring community dedicated to your well-being. Together, let’s build a brighter, healthier chapter in your journey.
                </span>
                <span className={styles.desc}> - The Hope Heals Team</span>
            </div>
        </div>
    )
}

export default About