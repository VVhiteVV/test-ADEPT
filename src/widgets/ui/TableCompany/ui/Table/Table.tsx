import React, {FC, useContext} from 'react';
import styles from "./styles.module.scss";
import { CompanyListContext} from "widgets/ui/TableCompany/utils";
import {TableProps} from "./types";
import {TableHeader,TableList} from "widgets/ui/TableCompany/ui";


export const Table: FC<TableProps> = (props) => {
    const {
       refTable
    } = useContext(CompanyListContext)

    return (
        <>
            <div ref={refTable} className={styles.Table}>
                <table className={styles['table']}>
                    <TableHeader/>
                    <tbody>
                    <TableList/>
                    </tbody>
                </table>
            </div>
        </>
    )
};