import React from 'react';
import cl from "./UI.module.scss";


type PropType = {
    placeholder: string
    setSearchByNameQuery: (value: string) => void
}

const Search: React.FC<PropType> = ({placeholder, setSearchByNameQuery}) => {
    const [tempQuery, setTempQuery] = React.useState('')

    React.useEffect(() => {
        const Debounce = window.setTimeout(() => {
            setSearchByNameQuery(tempQuery)
        }, 300);
        return () => clearTimeout(Debounce);
    }, [tempQuery]);

    return (
        <label className={cl.search}>
            <input type="text" placeholder={placeholder} value={tempQuery} onChange={e => setTempQuery(e.target.value)}/>
        </label>
    );
};

export default Search;