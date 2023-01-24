import React from 'react';
import cl from "./PokemonCard.module.scss";
import pokeball from "../../assets/pokeball.svg"
import {PokemonType} from "../../types";
import {NavLink} from "react-router-dom";

type PropType = Omit<PokemonType,
    'height' | 'weight' | 'base_experience' | 'stats'>

const PokemonCard: React.FC<PropType> = React.memo(
    ({name, types, photo, id}) => {
        return (
            <NavLink to={`pokemon/${id}`} className={`${cl.card} ${[types[0]]}`}>
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
                        : <img src={pokeball} className={cl.no_sprite} alt=""/>}
                </div>
            </NavLink>
        );
    });

export default PokemonCard;