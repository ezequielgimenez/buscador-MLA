import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

//Components
import { SearchForm } from "./SearchForm";

export function Layout(){
    const handleData = (data)=>{
        
    }
    return(
        <div className="layout-main">
            <header  className="header-main">
                 <img className="logo-header" src="https://statics.eleconomista.com.ar/2020/03/614e2f5f8c618.png" alt="" />
                 <SearchForm onSearch={handleData}></SearchForm>
            </header>
            <main className="content-main">
                 <Outlet/> 
            </main>
        </div>
    )
}