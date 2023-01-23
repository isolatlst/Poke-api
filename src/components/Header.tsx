import React from 'react';
import cl from '../styles/Header.module.scss'
import pokeball from '../assets/pokeball.svg'
import {PaginationType} from "../types";
import Search from "./UI/Search";
import Switch from "./UI/Switch";

type PropType = {
    togglePaginationType: (type: PaginationType) => void
    setSearchByNameQuery: (value: string) => void
}

const Header:React.FC<PropType> = ({togglePaginationType, setSearchByNameQuery}) => {
    return (
        <div className={cl.header}>
            <div className={cl.header__item}>
                <img src={pokeball} alt="Pokemons"/>
            </div>
            <div className={cl.header__item}>
                <Switch name="loading type" callback={togglePaginationType}
                        first_title="Manual loading" second_title="Auto loading"
                        first_value="manual" second_value="dynamic"
                        first_text="ML" second_text="AL" />
            </div>
            <div className={cl.header__item}>
                <Search placeholder="Pokemon name" setSearchByNameQuery={setSearchByNameQuery} />
            </div>
        </div>
    );
};

export default Header;