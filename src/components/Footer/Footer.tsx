import React from 'react';
import cl from './Footer.module.scss'
import {pokemonTypes, ValueOfPokemonsTypes} from "../../types";

type PropType = {
    setSearchByTypeQuery: (value: ValueOfPokemonsTypes | '') => void
}


const Footer: React.FC<PropType> = ({setSearchByTypeQuery}) => {
    const setSearchByTypeValue = (e: React.BaseSyntheticEvent) => {
        if (e.target.localName === 'span') {
            setSearchByTypeQuery((prevValue: ValueOfPokemonsTypes | '') => {
                return prevValue === e.target.innerHTML ? '' : e.target.innerHTML
            })
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