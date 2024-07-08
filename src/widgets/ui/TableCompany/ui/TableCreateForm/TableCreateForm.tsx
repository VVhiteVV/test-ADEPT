import React, {FC, useContext, useEffect} from 'react';
import {Button, Input, TableCell, TableRow} from "shared/ui";
import { CompanyListContext} from "widgets/ui/TableCompany/utils/TableCompanyContext";
import styles from './styles.module.scss'
export const TableCreateForm: FC = () => {
    const {
        createCompanyState:{
            setDataNewCompany,
            isVisible
        },
        handlers: {
            handleCreateCompany,
            handleVisibleForm
        }
    } = useContext(CompanyListContext)

    if(!isVisible){
        return (<></>)
    }
    return (
        <table className={styles.TableCreateForm}>
            <tbody>
                <TableRow>
                    <TableCell colSpan={2}>
                        <Input
                            type={'text'}
                            placeholder={'Имя компании'}
                            onChange={(e) => setDataNewCompany(prev => ({...prev,name: e.target.value}) )}
                        />
                    </TableCell>
                    <TableCell>
                        <div className={styles.Flex}>
                            <Input
                                type={'text'}
                                placeholder={'Адрес'}
                                onChange={(e) => setDataNewCompany(prev => ({...prev,address: e.target.value}) )}
                            />
                            <div className={styles.buttons}>
                                <Button onClick={handleCreateCompany}>
                                    Принять
                                </Button>
                                <Button onClick={handleVisibleForm}>
                                    Отмена
                                </Button>
                            </div>
                        </div>
                    </TableCell>
                </TableRow>
            </tbody>
        </table>
    )
};