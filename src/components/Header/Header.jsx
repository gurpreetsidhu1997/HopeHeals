"use client";
import React, { useState } from "react";
import styles from "./Header.module.scss";
import Logo from "../../app/assets/hopeheals.png";
import { Menu, X } from "lucide-react";

function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen((prev) => !prev);
    };

    return (
        <header className={styles.header}>
            <div className="container">
                <div className={styles.navbar}>
                    <div className={styles.logoImg}>
                        <a href="/"> <img src={Logo.src} alt="Hope Heals" /></a>
                    </div>

                    <ul className={`${styles.menuList} ${styles.desktopMenu}`}>
                        <li><a href="/mentalhealth">Mental Health</a></li>
                        <li><a href="/womenhealth">Women’s Health</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/whisper">Whisper</a></li>
                    </ul>

                    <div className={styles.mobileToggle} onClick={toggleMobileMenu}>
                        {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </div>
                </div>

                {isMobileMenuOpen && (
                    <ul className={styles.mobileMenu}>
                        <li><a href="/mentalhealth">Mental Health</a></li>
                        <li><a href="/womenhealth">Women’s Health</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/whisper">Whisper</a></li>
                    </ul>
                )}
            </div>
        </header>
    );
}

export default Header;
