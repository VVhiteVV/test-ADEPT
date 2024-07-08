import { combineSlices} from "@reduxjs/toolkit";
import company from "./company";

export const rootReducer = combineSlices({
    companyTable: company
})