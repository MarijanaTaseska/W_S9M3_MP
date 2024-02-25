import React,{useState } from "react";
import { useLocalStorage } from "./useLocalSorage";

 export function useDarkMode(){
    const [dark,setDark]=useLocalStorage('darkmode',false)
    return[dark,setDark]
}