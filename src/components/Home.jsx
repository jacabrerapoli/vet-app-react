import React, { useEffect, useState } from 'react'

export const Home = () => {

    
    const [info, setInfo] = useState({
        name:"",
        surname:""
    });

    useEffect(()=>{
        setInfo({
            name: "Jaime",
            surname: "Cabrera"
        }),{}
    })

    return (
        <>
            <h1>Home</h1>
            <h2>{info.name}</h2>
            <h2>{info.surname}</h2>
            <button onClick={()=>setInfo({name: "Pepe",surname: "Perez"})}>Cambiar</button>
        </>
    )
}
