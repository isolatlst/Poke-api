import PokemonListPage from "../pages/PokemonListPage/PokemonListPage";
import PokemonItemPage from "../pages/PokemonItemPage/PokemonItemPage";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

export const publicRoutes = [
    {path: '/', Component: [Header, PokemonListPage, Footer]},
    {path: '/pokemon/:id', Component: PokemonItemPage},
]
