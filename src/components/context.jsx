import React, { createContext, useState } from 'react'
export let myContext=createContext()

export default function Context({children}) {

    let [busList,setbusList]=useState(null)
  return (
    <myContext.Provider value={{busList,setbusList}} >
        {children}
    </myContext.Provider>
  )
}
