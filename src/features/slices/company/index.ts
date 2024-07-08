import {createDraftSafeSelector, createSelector, createSlice, PayloadAction} from '@reduxjs/toolkit'
import type { RootState } from 'shared/types'
import {ActionChangeCompany, CompanyInterface, CompanyStateInterface} from './type'
import {initialState} from './initState'

export const companyTable = createSlice({
    name: 'companyTable',
    initialState,
    reducers: {
        change: (state, {payload}: PayloadAction<ActionChangeCompany>) => {
            const {id, field: {key, value}} = payload
            const {list} = state
            list[id][key] = value
            localStorage.setItem('company',JSON.stringify(state.list))
        },
        deleteCompany: (state) => {
            const {list,selected} = state
            selected.forEach(id => {
                delete list[id]
            })
            localStorage.setItem('company',JSON.stringify(state.list))
        },
        createCompany: (state,{payload}: PayloadAction<CompanyInterface>) => {
            const id = Number(new Date())
            state.list[id] = payload
            localStorage.setItem('company',JSON.stringify(state.list))
        },
        setSelected: (state,{payload}: PayloadAction<number>) => {
            const {selected} = state
            if(selected.includes(payload)) {
                state.selected = selected.filter(id => id !== payload)
            } else {
                state.selected.push(payload)
            }
        },
        setArraySelected: (state, {payload}: PayloadAction<number[]>) => {
            state.selected = payload
        },
        setPage: (state, {payload}: PayloadAction<number>) => {
            state.page = payload
        }
    },
})

export const { change,setPage,createCompany,setArraySelected,deleteCompany,setSelected } = companyTable.actions
export const selectCompanyList = (state: RootState) => state.companyTable.list
export const selectPage = (state: RootState) => state.companyTable.page
export const selectSelected = (state: RootState) => state.companyTable.selected
export const selectPaginatedList = createSelector(
    [selectCompanyList,selectPage,selectSelected],
    (companyTable,page,selected) => {
        const list = Object.entries(companyTable)
        const arrLength = list.length
        const endIndex = (page * 10) > (arrLength ) ? (arrLength) : (page * 10);

        return {
            list: Object.fromEntries(list.slice(0, endIndex)),
            page,
            selected,
        };
    }
);


export default companyTable.reducer