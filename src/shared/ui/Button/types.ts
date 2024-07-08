import {ButtonHTMLAttributes} from "react";

type ButtonTheme = 'default' | 'red' | 'orange' | 'green'
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    theme?: ButtonTheme
}