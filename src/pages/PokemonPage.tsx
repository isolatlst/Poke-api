import React from 'react';
import cl from "../styles/PokemonPage.module.scss";
import {NavLink, useParams} from "react-router-dom";
import {useAppSelector} from "../redux/store";
import pokeball from "../assets/pokeball.svg"


const PokemonPage = () => {
    const {id} = useParams()
    const pokemon = useAppSelector(state => state.pokemons.pokemons.find(poke => poke.id === Number(id)))
    const photo = pokemon?.photo || pokemon?.second_photo || pokeball
    const TableCell = ({title, value}: { title: string, value: string | number }) => {
        return <p>
            <span>{title}</span>
            <b>{value}</b>
        </p>
    }

    return pokemon ? (
        <div className={cl.poke_page}>
            <div className={cl.poke_page__body}>
                <div className={cl.poke_page__item}>
                    <img src={photo} alt=""/>
                </div>
                <div className={cl.poke_page__item}>
                    <div className={cl.poke_page__name}>
                        <span>No. {pokemon.id}</span>
                        <span>{pokemon.name}</span>
                    </div>
                    <div className={cl.poke_page__info}>
                        <TableCell title='Base exp' value={pokemon.base_experience}/>
                        <TableCell title='Weight' value={pokemon.weight}/>
                        <TableCell title='Height' value={pokemon.height}/>
                        <TableCell title='Types' value={`${pokemon.types[0]} ${pokemon.types[1] ? pokemon.types[1] : ''}`}/>
                    </div>
                    <div className={cl.poke_page__stats}>
                        {pokemon.stats.map(stat => <TableCell key={stat.name} title={stat.name} value={stat.base_stat}/>)}
                    </div>
                </div>
            </div>
            <NavLink to='/'>╳</NavLink>
        </div>
    ) : <>Something wrong</>;
};

export default PokemonPage;