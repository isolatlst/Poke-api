import React from 'react';
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import {publicRoutes} from "../../router";

const AppRouter = () => {
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <React.Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    {publicRoutes.map(route =>
                        <Route
                            key={route.path}
                            path={route.path}
                            element={
                                Array.isArray(route.Component)
                                    ? <>
                                        {route.Component.map((Component) => <Component key={Component.name}/>)}
                                    </>
                                    : <route.Component/>
                            }
                        />
                    )}
                    <Route path='*' element={<Navigate to='/'/>}/>
                </Routes>
            </React.Suspense>
        </BrowserRouter>
    );
};

export default AppRouter;