import { useState } from "react";

export default function useToggle(initalValue =false){
    const[value,setValue]=useState(initalValue)
    const toggle = ()=>setValue(prev=>!prev)
    const close = ()=>setValue(false)
    return[value,toggle,close]
}