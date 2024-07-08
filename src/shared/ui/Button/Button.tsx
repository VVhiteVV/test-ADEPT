import React, {FC} from 'react';
import {ButtonProps} from "./types";
import styles from "./styles.module.scss";
import cl from "classnames";

export const Button: FC<ButtonProps> = (props) => {
    const {theme = 'default'} = props;
    return (
        <button className={cl(styles.Button,{
            [styles.red]: theme === 'red',
            [styles.green]: theme === 'green',
            [styles.orange]: theme === 'orange',
        })} {...props}>

        </button>
    );
};