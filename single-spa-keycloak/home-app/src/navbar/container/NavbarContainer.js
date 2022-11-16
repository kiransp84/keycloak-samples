import {useState,useEffect} from "react";

import {loadData} from "@ibsplc/shared-api-access";

import NavbarPanel from "./NavbarPanel";

const CONSTANTS = {
    'URL' : 'http://localhost:3030/user/menu'
}

export const NavbarContainer = () => {

    const [menu,setMenu] = useState([]);

    useEffect(async ()=> {
        const menus = await loadData( CONSTANTS.URL , {} );
        console.log(' response from loadData ',menus);
        setMenu(menus)
    },[])

    const reloadMenu = async () => {
        const menus = await loadData( CONSTANTS.URL , {} );
        console.log(' response from loadData ',menus);
        setMenu(menus);
        return null;
    }

    return <NavbarPanel data={menu} reloadMenu={reloadMenu} />
}

