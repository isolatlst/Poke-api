import React from 'react';
import cl from '../styles/Footer.module.scss'
import {pokemonTypes} from "../App";
import {ValueOfPokemonsTypes} from "../types";

type PropType = {
    searchByTypeQuery: ValueOfPokemonsTypes | ''
    setSearchByTypeQuery: (value: ValueOfPokemonsTypes | '') => void
}


const Footer: React.FC<PropType> = ({setSearchByTypeQuery, searchByTypeQuery}) => {
    const setSearchByTypeValue = (e: React.BaseSyntheticEvent) => {
        if (e.target.localName === 'span') {
            if (searchByTypeQuery === e.target.innerHTML) {
                setSearchByTypeQuery('')
            } else {
                setSearchByTypeQuery(e.target.innerHTML)
            }
        }
    }

    return (
        <div className={cl.footer} onClick={setSearchByTypeValue}>
            {pokemonTypes.map(type => (
                <span key={type} className={type}>{type}</span>
            ))}
        </div>
    );
};

export default Footer;