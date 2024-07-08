import React from 'react';
import {RouterProvider} from "react-router-dom";
import {router} from "app/provider/route";
import "shared/assets/styles/_global.scss"
import {store} from "app/provider/rtk/store";
import {Provider} from "react-redux";


function App() {
  return (
    <div className="App">
        <Provider store={store}>
            <RouterProvider router={router}/>
        </Provider>
    </div>
  );
}

export default App;
