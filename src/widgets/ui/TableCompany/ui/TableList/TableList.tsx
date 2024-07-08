import React, {FC, useContext} from 'react';
import {Input, TableCell, TableRow} from "shared/ui";
import {setSelected} from "features/slices/company";
import { CompanyListContext} from "widgets/ui/TableCompany/utils";

export const TableList: FC = () => {
    const {
        dispatch,
        selectors: {
            list: tableList,
            selected
        },
        handlers:{
            handleSetValue
        }
    } = useContext(CompanyListContext)


    return (
        <>
            {Object.entries(tableList).map(([id,item]) => (
            <TableRow key={id} selected={selected.includes(Number(id))} >
                <TableCell>
                    <Input
                        type={'checkbox'}
                        checked={selected.includes(Number(id))}
                        onChange={() => dispatch(setSelected(Number(id)))}
                    />
                </TableCell>
                <TableCell>
                    <Input
                        defaultValue={item.name}
                        onBlur={(e) => handleSetValue(e, Number(id), 'name')}
                    />
                </TableCell>
                <TableCell>
                    <Input
                        defaultValue={item.address}
                        onBlur={(e) => handleSetValue(e, Number(id), 'address')}
                    />
                </TableCell>
            </TableRow>
            ))}
        </>
    )
};