import {FC, useContext} from 'react';
import {Button} from "shared/ui";
import {deleteCompany} from "features/slices/company";
import { CompanyListContext} from "widgets/ui/TableCompany/utils";

export const TableMenu: FC = () => {
    const {
        dispatch,
        createCompanyState:{
          setVisible,
          isVisible
        },
        handlers:{
            handleLocalStorageClear,
            handleVisibleForm
        }

    } = useContext(CompanyListContext)


    return (
        <>
            <Button theme={'green'} onClick={() => setVisible(!isVisible)}>Добавить компанию</Button>
            <Button theme={'red'} onClick={() => dispatch(deleteCompany())}>Удалить</Button>
            <Button theme={'orange'} onClick={handleLocalStorageClear}>Очистить локальное хранилище</Button>
        </>
    )
};