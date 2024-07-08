import React, {createContext, FC, ReactNode, useContext, useMemo} from "react";
import {CompanyContextInterface} from "./type";
import {useTableCompany} from "./index";

export const CompanyListContext =  createContext<CompanyContextInterface>({} as CompanyContextInterface);


export const CompanyListProvider = ({ children }: { children: React.ReactNode }) => {
    const defaultValue = useTableCompany();

    return (
        <CompanyListContext.Provider value={defaultValue}>
            {children}
        </CompanyListContext.Provider>
    );
};



