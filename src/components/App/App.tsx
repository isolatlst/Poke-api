import React from 'react';
import classes from './App.module.scss';
import {PaginationType} from "../../types";
import Wrapper from "../../pages/Wrapper";
import {FilterContext, FilterType} from "../../context/FilterContext";
import {PaginationContext} from "../../context/PaginationContext";
import AppRouter from "./AppRouter";


const App = () => {
    const [paginationType, togglePaginationType] = React.useState<PaginationType>('dynamic')
    const [filter, setFilter] = React.useState<FilterType>({type: '', query: ''})

    return (
        <div className={classes.App}>
            <FilterContext.Provider value={{filter, setFilter}}>
                <PaginationContext.Provider value={{paginationType, togglePaginationType}}>

                    <Wrapper paginationType={paginationType}>
                        <AppRouter/>
                    </Wrapper>
                    
                </PaginationContext.Provider>
            </FilterContext.Provider>
        </div>
    );
}

export default App;