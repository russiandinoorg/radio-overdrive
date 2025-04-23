import React from "react";

import styles from './modal.module.scss';

/* eslint-disable @typescript-eslint/no-unsafe-assignment */

export const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
        <div aria-hidden="true"
            className={styles.container} onClick={onClose} 
        >
            <div className={styles.modal}
            >
                {children}
            </div>
        </div>
    );
};