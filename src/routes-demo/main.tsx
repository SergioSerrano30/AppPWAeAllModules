import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "@/routes-demo/css/main.css";
import Expenses from "@/routes-demo/routes/expenses";
import Invoices from "@/routes-demo/routes/invoices";



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


import App from "@/routes-demo/App";

let rootElement = document.getElementById("root");
ReactDOM.render(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} >
          <Route path="expenses" element={<Expenses />} />
          <Route path="invoices" element={<Invoices />} />
        </Route>
      </Routes>
    </BrowserRouter>,
    rootElement
);
  
