//import * as React from "react";
//import * as ReactDOM from "react-dom";
//import { BrowserRouter, Routes, Route } from "react-router-dom";
//import "@/Commerce/css/main.css";

//import Expenses from "@/routes-demo/routes/expenses";
//import Invoices from "@/routes-demo/routes/invoices";
//import AppSecurity from '@/security/AppSecurity';

/***********************************************/
/*********** FIC: INICIO CON LOGIN *************/
/****************************************/
/* import { createRoot } from 'react-dom/client';
const container = document.getElementById('root')!;
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
  <AppSecurity></AppSecurity>
);   */ 

/***********************************************/
/****** FIC: INICIO CON MENU HAMBURGUESA *******/
/***********************************************/
//FIC: Root contains the main dependencies and providers of the base app
//- React, ReactDom, RecoilRoot, HelmetProvider, ThemeProvider, MUI-core)
//App contains the main structure of the base app
// These are the two main chunks that are used to render the core structure of the app
// Importing them with Promise.all (by using HTTP/2 multiplexing) we can load them in parallel
// and achieve the best possible performance

import welcome from '@/Commerce/utils/welcome';

Promise.all(
    [import('@/Commerce/Root'), import('@/Commerce/App')])
    .then(([{ default: render }, { default: App }]) => {
    render(App);
});

//FIC: welcome message for users in the console
welcome();

// ts(1208)
export {};

/***********************************************/
/* FIC: INICIO CON ROUTES DEMO */ 
/***********************************************/

/*     <BrowserRouter>
        <Routes>
          <Route path='/' element={<App />} >
            <Route path="expenses" element={<Expenses />} />
            <Route path="invoices" element={<Invoices />} />
          </Route>
        </Routes>
     </BrowserRouter>  */
     


/* FIC: INICIO CON ROUTES DEMO VERSION ACTUAL */     
/* 
import App from "./demos/AppRoutes";

let rootElement = document.getElementById("root");
ReactDOM.render(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<AppRoutesDemo />} >
          <Route path="expenses" element={<Expenses />} />
          <Route path="invoices" element={<Invoices />} />
        </Route>
      </Routes>
    </BrowserRouter>,
    rootElement
);
  */
