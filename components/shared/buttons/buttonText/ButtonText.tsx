"use client"

import React from "react";

import {Modal} from "@/components/shared/modal/Modal";
import { Typography } from "@/components/typography/Typography";

import styles from './buttonText.module.scss'

export const ButtonText = ({children}) => {
    const [open, setOpen] = React.useState(false);

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };

    return (
        <div
            style={{
                textAlign: "center",
                display: "block",
                padding: 30,
                margin: "auto",
            }}
        >
            <button className={styles.button} type="button" onClick={handleOpen}>
                <Typography tag='span' variant='text6'>Разработка </Typography>
            </button>
            <Modal isOpen={open} onClose={handleClose}>
                {children}
            </Modal>
        </div>
    );
}
