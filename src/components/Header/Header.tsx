import React from 'react';
import cl from './Header.module.scss'
import pokeball from '../../assets/pokeball.svg'
import Search from "../UI/Search/Search";
import Switch from "../UI/Switch/Switch";
import {useAppSelector} from "../../redux/store";
import {FilterContext} from "../../context/FilterContext";
import {PaginationContext} from "../../context/PaginationContext";


const Header = () => {
    const count = useAppSelector(state => state.pokemons.count)
    const totalCount = useAppSelector(state => state.pokemons.pokemons.length)
    const {filter, setFilter} = React.useContext(FilterContext)
    const {togglePaginationType} = React.useContext(PaginationContext)

    const setSearchByNameQuery = (value: string) => {
        setFilter({...filter, query: value})
    }

    return (
        <div className={cl.header}>
            <div className={cl.header__item}>
                <img src={pokeball} alt="Pokemons"/>
            </div>
            <div className={cl.header__item}>
                <Switch name="loading type" callback={togglePaginationType}
                        first_title="Manual loading" second_title="Auto loading"
                        first_value="manual" second_value="dynamic"
                        first_text="ML" second_text="AL"/>
            </div>
            {count && totalCount
                ? <div className={cl.header__item}>
                    <div className={cl.header__count}>
                        {totalCount}/{count}
                    </div>
                </div>
                : ''}
            <div className={cl.header__item}>
                <Search placeholder="Pokemon name" setSearchByNameQuery={setSearchByNameQuery}/>
            </div>
        </div>
    );
};

export default Header;