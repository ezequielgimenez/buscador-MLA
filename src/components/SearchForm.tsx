import React from "react";
import { useNavigate } from "react-router-dom";
import * as style from "./searchForm.module.css"

type myProps={
    onSearch:(any)=>any
}

export function SearchForm(p:myProps){
    const navigate = useNavigate()

    const handleSubmit = (e)=>{
    e.preventDefault()
    const value = e.target.valueSearch.value
    p.onSearch(value)
    }
    
    return(
        <div className={style.contenedorMainForm}>
            <form onSubmit={handleSubmit} className={style.contenedorForm}>
                <input type="text" name="valueSearch" className="input-form" />
                <button className="button-form" >Buscar</button>
            </form>
        </div>
    )
}

