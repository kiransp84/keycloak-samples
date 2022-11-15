import {useState,useEffect} from "react";

import {loadData} from "@ibsplc/shared-api-access";

import NavbarPanel from "./NavbarPanel";

const CONSTANTS = {
    'URL' : 'http://localhost:3030/user/menu'
}

export const NavbarContainer = () => {

    const [menu,setMenu] = useState([]);

    useEffect(async ()=> {
        const menu = await loadData( CONSTANTS.URL , {} );
        console.log(' response from loadData ',menu);
        /*menu.success( (res)=> {
            console.log(' response from axios ',res);
            setMenu(res);
        });*/
        
        
    },[])

    return <NavbarPanel data={menu} />
}

