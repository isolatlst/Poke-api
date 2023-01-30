import React from 'react';
import cl from './Footer.module.scss'
import {pokemonTypes, ValueOfPokemonsTypes} from "../../types";
import {FilterContext} from "../../context/FilterContext";

const Footer = () => {
    const {filter, setFilter} = React.useContext(FilterContext)

    const setSearchByTypeValue = (type: ValueOfPokemonsTypes | '') => {
        if (filter.type === type) {
            setFilter({...filter, type: ''})
        } else {
            setFilter({...filter, type: type})
        }
    }

    return (
        <div className={cl.footer}>
            {pokemonTypes.map(type => (
                <span key={type}
                      className={type}
                      onClick={() => setSearchByTypeValue(type)}
                >
                    {type}
                </span>
            ))}
        </div>
    );
};

export default Footer;