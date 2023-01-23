import React from 'react';
import classes from './styles/App.module.scss';
import Header from "./components/Header";
import Home from "./pages/Home";
import {PaginationType, ValueOfPokemonsTypes} from "./types";
import Footer from "./components/Footer";


export const pokemonTypes = [
    'bug', 'water', 'grass', 'fire',
    'normal', 'poison', 'electric', 'ground',
    'fairy', 'fighting', 'psychic', 'ghost',
    'rock', 'ice', 'flying', 'dark',
    'dragon', 'steel', 'unknown', 'shadow',
] as const


const App = () => {
    const appRef = React.useRef(null)
    const [paginationType, togglePaginationType] = React.useState<PaginationType>('dynamic')
    const [searchByNameQuery, setSearchByNameQuery] = React.useState('')
    const [searchByTypeQuery, setSearchByTypeQuery] = React.useState<ValueOfPokemonsTypes | ''>('')

    return (
        <div className={classes.App} ref={appRef}>
            <Header togglePaginationType={togglePaginationType}
                    setSearchByNameQuery={setSearchByNameQuery}
            />
            <Home appRef={appRef} paginationType={paginationType}
                  searchByNameQuery={searchByNameQuery}
                  searchByTypeQuery={searchByTypeQuery}
            />
            <Footer searchByTypeQuery={searchByTypeQuery}
                    setSearchByTypeQuery={setSearchByTypeQuery}
            />
        </div>
    );
}

export default App;