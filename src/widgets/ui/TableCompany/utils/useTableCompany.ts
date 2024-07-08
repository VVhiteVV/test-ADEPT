import {useAppDispatch, useAppSelector} from "shared/hooks/redux/useAppDispatch";
import {
    change,
    createCompany,
    selectPaginatedList, setArraySelected,
    setPage
} from "features/slices/company";
import React, {ChangeEvent, useEffect, useRef, useState} from "react";
import {ActionChangeCompany, CompanyInterface, CompanyKey} from "features/slices/company/type";
import {CompanyContextInterface} from "./type";

export const useTableCompany = (): CompanyContextInterface => {

    const selectors = useAppSelector((state) => selectPaginatedList(state))
    const dispatch = useAppDispatch()
    const refTable = useRef<HTMLDivElement>(null)
    const [dataNewCompany, setDataNewCompany] = useState<CompanyInterface>({
        name: '',
        address: ''
    })
    const [isVisible,setVisible] = useState<boolean>(false)

    useEffect(() => {
        const element = refTable.current;
        if(element) {
            const handleScroll = () => {
                const { scrollTop, scrollHeight, clientHeight } = element!;
                const isBottom = scrollTop + clientHeight === scrollHeight
                if(isBottom){
                    dispatch(setPage(selectors.page + 1))
                }
            };
            element.addEventListener('scroll', handleScroll);

            return () => element.removeEventListener('scroll', handleScroll);
        }

    }, [selectors.page]);

    const handlers = {
        handleCreateCompany: () => {
            const {
                name,
                address
            } = dataNewCompany;

            if(name && address){
                dispatch(createCompany(dataNewCompany))
                setVisible(false)
            }
        },
        handleSelectedAll: (e: ChangeEvent<HTMLInputElement>) => {
            if(Boolean(selectors.selected.length)){
                dispatch(setArraySelected([]))
            } else {
                const selectedIds = Object.keys(selectors.list).map(Number)
                dispatch(setArraySelected(selectedIds))
            }
        },
        handleSetValue: (e: React.FocusEvent<HTMLInputElement>,id: number ,key: CompanyKey) => {
            const payload: ActionChangeCompany = {
                id,
                field: {
                    key,
                    value: e.target.value
                }
            }
            dispatch(change(payload))
        },
        handleLocalStorageClear: () => {
            localStorage.setItem('company','')
            window.location.reload()
        },
        handleVisibleForm: () => {
            setVisible(prev => !prev)
        }
    }
    return  {
        dispatch,
        refTable,
        selectors,
        createCompanyState: {
            dataNewCompany,
            setDataNewCompany,
            setVisible,
            isVisible
        },
        handlers
    }
}

