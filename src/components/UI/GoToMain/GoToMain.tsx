import React from 'react';
import {NavLink} from "react-router-dom";
import cl from './GoToMain.module.scss'

const GoToMain = () => {
    return (
        <NavLink to='/' className={cl.navlink}>╳</NavLink>
    );
};

export default GoToMain;