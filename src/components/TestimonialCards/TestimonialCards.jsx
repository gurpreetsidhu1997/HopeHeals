import React from 'react';
import styles from './TestimonialCards.module.scss';
import womanIcon from '../../app/assets/women.jpeg'; // use actual icons
import manIcon from '../../app/assets/men.jpeg';

const testimonials = [
    {
        id: 1,
        text: `Hope Heals made therapy so easy for me. I was hesitant at first, but their free first session gave me the courage to start. My therapist was so kind and understanding—it felt like talking to a friend who truly cared.`,
        author: 'Anonymous',
        icon: womanIcon,
    },
    {
        id: 2,
        text: `As a working professional, I struggled to balance my mental health. Hope Heals provided flexible online sessions that fit perfectly into my busy schedule. Their approach is compassionate and judgment-free.`,
        author: 'Anonymous',
        icon: manIcon,
    },
    {
        id: 3,
        text: `After having my second child, I dealt with postpartum depression and felt completely lost. Hope Heals connected me with an expert who really understood what I was going through. It changed my life.`,
        author: 'Anonymous',
        icon: womanIcon,
    },
];

function TestimonialCards() {
    return (
        <div className={styles.testimonialWrapper}>
            {testimonials.map(({ id, text, author, icon }) => (
                <div key={id} className={styles.card}>
                    <p className={styles.text}>“{text}”</p>
                    <div className={styles.footer}>
                        <img src={icon.src} alt="Anonymous" className={styles.icon} />
                        <span className={styles.author}>{author}</span>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default TestimonialCards;
