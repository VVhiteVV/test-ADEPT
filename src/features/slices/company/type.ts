export type CompanyInterface = {
    name: string
    address: string
}
export type CompanyKey = keyof CompanyInterface

export type ActionChangeCompany = {
    id: number
    field: {
        key: CompanyKey,
        value: string
    }
}
export interface CompanyStateInterface {
    list: {
        [key: number]: CompanyInterface
    }
    selected: number[]
    page: number,
}