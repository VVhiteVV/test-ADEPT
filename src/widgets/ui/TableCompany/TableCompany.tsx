import React, {FC, useContext} from 'react';
import {CompanyListProvider} from "./utils";
import {TableCreateForm, TableMenu} from "./ui";
import {Table} from "./ui/Table";


export const TableCompany: FC = () => {
        return (
            <CompanyListProvider>
                <TableMenu/>
                <TableCreateForm/>
                <Table/>
            </CompanyListProvider>
        );
};