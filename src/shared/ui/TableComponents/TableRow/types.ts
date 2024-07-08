import {HTMLAttributes, ReactNode} from "react";

export interface TableRowProps extends HTMLAttributes<HTMLTableRowElement>{
    selected?: boolean
}