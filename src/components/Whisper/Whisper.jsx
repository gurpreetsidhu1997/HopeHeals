"use client";

import React, { useState } from 'react';
import styles from './Whisper.module.scss';
import Message from '../Message/Message';
import SendBtn from "../../app/assets/sendbtn.png"
import Emoji from "../../app/assets/emoji.png"


function Whisper() {
    const [inputText, setInputText] = useState('');
    const [chatText, setChatText] = useState(["I don’t even know how to put this into words, but I feel like I’m constantly wearing a mask."]);

    const handleSend = () => {
        if (inputText.trim() === "") return;
        setChatText([...chatText, inputText]);
        setInputText('');
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleSend();
        }
    };

    return (
        <div className='container mt-[75px]!'>
            <div className={styles.chatArea}>
                <div className={styles.msgArea}>
                    <Message chatText={chatText} />
                </div>
            </div>
            <div className={styles.inputMsg}>
                <div className={styles.sendText}>
                    <input
                        type="text"
                        value={inputText}
                        onChange={(e) => setInputText(e.target.value)}
                        onKeyDown={handleKeyDown}
                        placeholder="Type a message..."
                    />
                    <img src={Emoji.src} alt="" />
                </div>
                <button onClick={handleSend} className={styles.sendBtn}>
                    <img src={SendBtn.src} alt="" />
                </button>
            </div>
        </div>
    );
}

export default Whisper;
