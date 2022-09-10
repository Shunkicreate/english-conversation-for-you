// import { slide as Menu } from 'react-burger-menu'
// import { useNavigate } from "react-router-dom";

// export const HumbergerMenu = () => {
//     const navigate = useNavigate();
//     const handleNavigate = (to: string) => {
//         navigate("/" + to)
//     }
//     return (
//         <Menu>
//             <div id="home" className="menu-item" onClick={() => { handleNavigate("/") }}>Home</div>
//             <div id="login" className="menu-item" onClick={() => { handleNavigate("/login") }}>Login</div>
//             <div id="watch-together" className="menu-item" onClick={() => { handleNavigate("/watch-together") }}>watch youtube together</div>
//         </Menu>

//     )
// }

import React, { useState } from 'react';
import styles from '../stylesheets/HumbergerMenu.module.css';

// interface MenuProps {
//     children: React.ReactNode;
//     Open: boolean;
//     onClose: () => void;
// }
export const HumbergerMenu = () => {
    let [Open, setOpen] = useState(true);
    const onClick = () => {
        setOpen(true)
    }
    const onClose = () => {
        setOpen(false)
    }
    // const { children, Open, onClose } = props;

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
                data-Open={JSON.stringify(Open)}
                className={styles.overlay}
            >div</div>
            <nav data-Open={JSON.stringify(Open)} className={styles.menu}>
                {/* {children} */}
                <div>child elem</div>
            </nav>
        </div>
    );
}
