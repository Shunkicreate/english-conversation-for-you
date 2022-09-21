import { useNavigate } from "react-router-dom";
import React, { useState, useCallback } from 'react';
import styles from './HumbergerMenu.module.css'
import img from '../../../assets/Humberger.svg'

export const HumbergerMenu = () => {
    const navigate = useNavigate();
    const [Open, setOpen] = useState(false);
    const onClose = useCallback(() => {
        setOpen(() => Open ? (false) : Open)
    }, [Open, setOpen])

    function handleKeypress(event: React.KeyboardEvent<HTMLDivElement>) {
        if (event.keyCode === 27) {
            onClose();
        }
    }

    React.useEffect(() => {
        function fn(event: KeyboardEvent) {
            if (event.keyCode === 27) {
                onClose();
            }
        }

        document.addEventListener('keydown', fn);

        return () => document.removeEventListener('keydown', fn);
    }, [onClose]);

    return (
        <div>
            <div
                onClick={onClose}
                role="presentation"
                onKeyPress={handleKeypress}
                data-open={JSON.stringify(Open)}
                className={styles.overlay}
            />
            <nav data-open={JSON.stringify(Open)} className={styles.menu}>
                <div id="home" className="menu-item" onClick={() => { navigate("/") }}>Home</div>
                <div id="login" className="menu-item" onClick={() => { navigate("/login", { state: { Redirect: false } }) }}>Login</div>
                {/* <div id="watch-together" className="menu-item" onClick={() => { navigate("/watch-together") }}>watch youtube together</div> */}
            </nav>
            <div onClick={() => setOpen(!Open)} className={styles['HumbergerMenuIconWrap']} ><img src={img} alt="HumbergerMenuIcon" className={styles['HumbergerMenuIcon']} ></img></div>
        </div>
    );
}
