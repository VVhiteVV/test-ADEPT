import {store} from "app/provider/rtk/store";

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch