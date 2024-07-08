import {HTMLAttributes, ReactNode} from "react";

export interface TableHeadProps extends HTMLAttributes<HTMLTableCellElement>{
    children: ReactNode
}