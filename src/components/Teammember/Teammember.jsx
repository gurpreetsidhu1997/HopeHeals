import React from "react";
import styles from "./Teammember.module.scss";
import ProfileOne from '../../app/assets/profile-one.png'
import ProfileTwo from '../../app/assets/profile-two.png'
import ProfileThree from '../../app/assets/profile-three.png'

const teamMembers = [
    {
        name: "Dr. Amita Sinha",
        title: "MBBS, MS (OBGYN)",
        role: "Director and OBGYN, ANH",
        image: ProfileOne,
    },
    {
        name: "Dr. Ratan Kumar",
        title: "MBBS, MS, MBA",
        role: "Director and Surgeon, ANH",
        image: ProfileTwo,
    },
    {
        name: "Dr. Sneha",
        title: "MBBS, MS, MBA",
        role: "Surgeon",
        image: ProfileThree,
    },
];

const Teammember = () => {
    return (
        <section className={styles.teamSection}>
            <h2 className={styles.heading}>Meet our Healthcare Team</h2>
            <div className={styles.cardGrid}>
                {teamMembers.map((member, index) => (
                    <div className={styles.card} key={index}>
                        <img src={member.image.src} alt={member.name} />
                        <div className={styles.details}>
                            <p><strong>{member.name}</strong></p>
                            <p>{member.title}</p>
                            <p>{member.role}</p>
                        </div>
                    </div>
                ))}
            </div>
            <a className={styles.viewAll}>
                View All
            </a>
        </section>
    );
};

export default Teammember;
