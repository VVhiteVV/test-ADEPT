import React, {createElement, FC, ReactNode} from 'react';

import styles from "./styles.module.scss"
import cl from "classnames"
import {TitleProps} from "./types";

export const Title: FC<TitleProps> = (props) => {
   const {size, children, ...other} = props
   const otherStyles = other.className

   return createElement(size,{...other,className: cl(styles[`Title__${size}`],otherStyles)},children)
};