import React, {FC} from 'react';
import {type InputProps} from "./types";
import styles from "./styles.module.scss";

export const Input: FC<InputProps> = (props) => {
    return (
        <input className={styles.input} {...props}/>
    );
};