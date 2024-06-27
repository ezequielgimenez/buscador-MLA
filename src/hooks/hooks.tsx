
import React, { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";

// state query form
    import {queryState} from "../atom.tsx"
    // selector
    import { resultsState } from "../atom.tsx";

////

//state query id product 
    import { idParam } from "../atom.tsx";
    // selector
    import { resultItem } from "../atom.tsx";
//

export function useSearchResults(){
    const param = useParams()
    const value = param.busqueda
    //
    const [query, setQuery] = useRecoilState(queryState)

    useEffect(()=>{
        if (value) {    
            setQuery(value)
        }
    }, [param])

    const results = useRecoilValue(resultsState)

    return results
}
  

export function useSearchItem(){
    
    const param = useParams()
    const value = param.idProduct

    const [id, setId] = useRecoilState(idParam)

    useEffect(()=>{
        if (value) {
            setId(value)
        }
    },[param])

    const item = useRecoilValue(resultItem)
    return [item]
}

