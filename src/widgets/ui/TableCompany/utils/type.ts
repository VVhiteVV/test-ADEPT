import {ThunkDispatch, UnknownAction} from "@reduxjs/toolkit";
import {CompanyInterface, CompanyKey, CompanyStateInterface} from "features/slices/company/type";
import {ChangeEvent, Dispatch, RefObject, SetStateAction,FocusEvent} from "react";

export interface CompanyContextInterface {
    dispatch: ThunkDispatch<{companyTable: CompanyStateInterface}, undefined, UnknownAction>
    refTable: RefObject<HTMLDivElement>
    selectors: CompanyStateInterface
    createCompanyState: {
        dataNewCompany: CompanyInterface
        setDataNewCompany: Dispatch<SetStateAction<CompanyInterface>>
        isVisible: boolean
        setVisible: Dispatch<SetStateAction<boolean>>
    }
    handlers: {
        handleCreateCompany: () => void,
        handleSelectedAll: (e: ChangeEvent<HTMLInputElement>) => void,
        handleSetValue: (e: FocusEvent<HTMLInputElement>, id: number, key: CompanyKey) => void,
        handleLocalStorageClear: () => void
        handleVisibleForm: () => void
    }
}