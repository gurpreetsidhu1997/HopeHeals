import React from 'react';
import styles from './Message.module.scss';

function Message({ chatText }) {
    return (
        <>
            {chatText?.map((item, index) => (
                <div key={index} className={styles.messageList}>
                    <span className={styles.message}>
                        {item}
                    </span>
                </div>
            ))}
        </>
    );
}

export default Message;
