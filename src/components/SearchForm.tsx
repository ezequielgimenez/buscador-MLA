import React from "react";
import { useNavigate } from "react-router-dom";

type myProps={
    onSearch:(any)=>any
}

export function SearchForm(p:myProps){
    const navigate = useNavigate()

    const handleSubmit = (e)=>{
    e.preventDefault()
    const value = e.target.valueSearch.value
    p.onSearch(value)
    navigate(`/search/${value}`)
    }
    
    return(
        <div className="contenedor-main-form">
            <form onSubmit={handleSubmit} className="contenedor-form">
                <input type="text" name="valueSearch" className="input-form" />
                <button className="button-form" >Buscar</button>
            </form>
        </div>
    )
}