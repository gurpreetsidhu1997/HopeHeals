import React from 'react'
import styles from './WomendHealth.module.scss'
import PCOS from '../../app/assets/pcos.png'
import Depression from '../../app/assets/depression.png';

function WomensHealth() {
    const therapyServices = [
        {
            title: "PCOS",
            image: PCOS
        },
        {
            title: "Postpartum Depression",
            image: Depression
        },
    ];

    return (
        <div className="container  mt-[75px]!">
            <div className={styles.message}>
                <span>You are not alone</span>
                <span>
                    It's okay, not to be okay
                </span>
            </div>
            <div className={styles.serviceMsg}>
                <span> Seeking support can be tough, but we’re here to provide judgment-free care. From PCOS and birth</span>
                <span>
                    control to postpartum depression, our experts are ready to help you prioritize your well-being.
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

export default WomensHealth