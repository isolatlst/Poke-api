import Home from "../pages/Home/Home";
import PokemonPage from "../pages/PokemonPage/PokemonPage";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

export const publicRoutes = [
    {path: '/', Component: [Header, Home, Footer]},
    {path: '/pokemon/:id', Component: PokemonPage},
]
