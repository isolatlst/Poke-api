import {call, put, takeEvery} from 'redux-saga/effects'
import axios from "axios";
import {pokeACs, pokeACSaga} from "../redux/poke-ac";
import {PokemonType, PokemonTypes} from "../types";

const SERVER_URL = 'https://pokeapi.co/api/v2/pokemon'

const fetchCount = () => axios.get(`${SERVER_URL}?limit=1&offset=0`)
const fetchPoke = (id: number) => axios.get(`${SERVER_URL}/${id}`)



function* fetchCountWorker() {
    try {
        const {data} = yield call(fetchCount)
        yield put(pokeACs.setCount(data.count))
    } catch (e) {
        alert('Сайт временно не работает');
    }
}

function* fetchPokeWorker({start, end, paginationType}: ReturnType<typeof pokeACSaga.fetchPoke>) {
    const pokes = [] as Array<PokemonType>
    for (let i = start; i <= end; i++) {
        try {
            const {data} = yield call(fetchPoke, i)
            yield pokes.push({
                id: data.id,
                name: data.name,
                photo: data.sprites.other.dream_world.front_default,
                second_photo: data.sprites.other.home.front_default,
                types: data.types.map((item: PokemonTypes) => item.type.name)
            })
        } catch (e) {
            continue
        }
    }
    switch (paginationType) {
        case "manual":
            yield put(pokeACs.replacePokemons(pokes))
            break
        case "dynamic":
            if (start === 1) { yield put(pokeACs.replacePokemons(pokes))
            } else { yield put(pokeACs.pushPokemons(pokes)) }
            break
    }
}



export function* pokeWatcher() {
    yield takeEvery("POKE/FETCH_COUNT", fetchCountWorker)
    yield takeEvery("POKE/FETCH_POKEMONS", fetchPokeWorker)
}