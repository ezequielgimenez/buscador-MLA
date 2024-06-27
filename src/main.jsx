import React, {Suspense} from 'react'
import ReactDOM from 'react-dom/client'
import {AppRoutes} from './router/index'

import {BrowserRouter} from "react-router-dom"
import {RecoilRoot} from "recoil"

import "./style.css"
import '@coreui/coreui/dist/css/coreui.min.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <RecoilRoot>
    <Suspense fallback={<div></div>}>
        <BrowserRouter>
            <AppRoutes />
        </BrowserRouter>
    </Suspense>
  </RecoilRoot>,
)
