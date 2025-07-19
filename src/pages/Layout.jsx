import { Outlet } from "react-router-dom";
import Navbar from "../Component/Layout/Navbar";

export default function Layout(){
    return(
        <>
        <Navbar />
        <Outlet/>
        </>
    )
}