import React from 'react';
import cl from "../styles/Pokemon.module.scss";
import pokeball from "../assets/pokeball.svg"
import {PokemonType} from "../types";

type PropType = Omit<PokemonType, 'id'>

const Pokemon: React.FC<PropType> = React.memo(
    ({name, types, photo}) => {
    return (
        <div className={`${cl.card} ${[types[0]]}`}>
            <div className={cl.card__description}>
                <div className={cl.card__name}>{name}</div>
                <div className={cl.card__types}>
                    {types.map(type => (
                        <span key={type + name}>{type} </span>
                    ))}
                </div>
            </div>
            <div className={cl.card__image}>
                {photo ? <img src={photo} alt={name}/>
                    : <img src={pokeball} className={cl.no_sprite} alt=""/> }
            </div>
        </div>
    );
});

export default Pokemon;