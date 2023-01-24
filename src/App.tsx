import React from 'react';
import classes from './styles/App.module.scss';
import {PaginationType, ValueOfPokemonsTypes} from "./types";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import PokemonPage from "./pages/PokemonPage";
import Wrapper from "./pages/Wrapper";


const App = () => {
    const appRef = React.useRef(null)
    const [paginationType, togglePaginationType] = React.useState<PaginationType>('dynamic')
    const [searchByNameQuery, setSearchByNameQuery] = React.useState('')
    const [searchByTypeQuery, setSearchByTypeQuery] = React.useState<ValueOfPokemonsTypes | ''>('')

    return (
        <div className={classes.App} ref={appRef}>
            <BrowserRouter basename={process.env.PUBLIC_URL}>
                <React.Suspense fallback={<div>Loading...</div>}>
                    <Routes>
                        <Route path='/' element={
                            <Wrapper paginationType={paginationType}>
                                <Header togglePaginationType={togglePaginationType}
                                        setSearchByNameQuery={setSearchByNameQuery}
                                />
                                <Home appRef={appRef} paginationType={paginationType}
                                      searchByNameQuery={searchByNameQuery}
                                      searchByTypeQuery={searchByTypeQuery}
                                />
                                <Footer setSearchByTypeQuery={setSearchByTypeQuery}/>
                            </Wrapper>
                        }/>
                        <Route path='pokemon/:id' element={
                            <Wrapper paginationType={paginationType}>
                                <PokemonPage />
                            </Wrapper>
                        }/>
                    </Routes>
                </React.Suspense>
            </BrowserRouter>
        </div>
    );
}

export default App;