import React, {FC, useContext} from 'react';
import {Input, TableHead, TableRow} from "shared/ui";
import { CompanyListContext} from "widgets/ui/TableCompany/utils";

export const TableHeader: FC = () => {
    const {
        selectors: {
            selected
        },
        handlers:{
            handleSelectedAll
        }
    } = useContext(CompanyListContext)


    return (
        <>
            <thead>
            <TableRow>
                <TableHead>
                    <Input
                        type={'checkbox'}
                        checked={Boolean(selected.length)}
                        onChange={handleSelectedAll}
                    />
                </TableHead>
                <TableHead>
                    Компания
                </TableHead>
                <TableHead>
                    Адрес
                </TableHead>
            </TableRow>
            </thead>
        </>
    )
};