import React from 'react'
import styles from './MentalHealth.module.scss'
import OnlineTharapy from '../../app/assets/tharapy.png'
import CoupleTharapy from '../../app/assets/couple.png';
import Psychiatric from '../../app/assets/psychiatric.png';


function MentalHealth() {

    const therapyServices = [
        {
            title: "Online Therapy",
            image: OnlineTharapy
        },
        {
            title: "Couple Therapy",
            image: CoupleTharapy
        },
        {
            title: "Psychiatric",
            image: Psychiatric
        }
    ];


    return (
        <div className="container   mt-[75px]!">
            <div className={styles.message}>
                <span>You are not alone</span>
                <span>
                    It's okay, not to be okay
                </span>
            </div>
            <div className={styles.serviceMsg}>
                <span> At Hope Heals, we provide a safe, inclusive space to rediscover yourself. From therapy to resources,</span>
                <span>
                    our platform offers compassionate care and tools for mental wellness.
                </span>
            </div>
            <div className={styles.cards}>
                {console.log(therapyServices)}
                {therapyServices.map((item, index) => {
                    return (
                        <div key={index} className={styles.card}>
                            <div className={styles.cardImg}>
                                <img src={item.image.src} alt="" />
                            </div>
                            <button className={styles.cardBtn} type="button">{item.title}</button>
                        </div>
                    )
                })}
            </div>

        </div>
    )
}

export default MentalHealth