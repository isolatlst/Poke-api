import React from 'react';
import PokemonItem from "../../components/PokemonItem/PokemonItem";
import cl from './Home.module.scss'
import {useAppSelector} from "../../redux/store";
import {FilterContext} from "../../context/FilterContext";
import {useFilter} from "../../hooks/useFilter";
import WithPagination from "../WithPagination";


const Home = () => {
    const pokemons = useAppSelector(state => state.pokemons.pokemons)
    const {filter} = React.useContext(FilterContext)
    const sortedPokemons = useFilter(pokemons, filter)

    return (
        <WithPagination isActive={!filter.query && !filter.type} totalDataCount={pokemons.length}>
            <div className={cl.pokemons}>
                {sortedPokemons && sortedPokemons.map(item => (
                    <PokemonItem key={item.id} id={item.id} name={item.name}
                                 photo={item.photo || item.second_photo} types={item.types}/>
                ))}
            </div>
        </WithPagination>
    );
};

export default Home;