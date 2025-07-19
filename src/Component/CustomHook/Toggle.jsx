import { useState } from "react";

export default function useToggle(initalValue =false){
    const[value,setValue]=useState(initalValue)
    const toggle = ()=>setValue(prev=>!prev)
    return[value,toggle]
}