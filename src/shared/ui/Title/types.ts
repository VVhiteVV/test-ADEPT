import {HTMLAttributes, ReactNode} from "react";

export type TitleSize = "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
export interface TitleProps extends HTMLAttributes<HTMLElement>{
    size: TitleSize
    children: ReactNode
}