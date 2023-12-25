import { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AuthContext } from '../../context';
import { privateRoutes, publicRoutes } from '../../router';

const AppRouter = () => {
    const {isAuth} = useContext(AuthContext);

    return (
        <Routes>
            {isAuth
                ? privateRoutes.map((route) =>
                    <Route path={route.path} element={route.element} key={route.path}/>
                )
                : publicRoutes.map((route) =>
                <Route path={route.path} element={route.element} key={route.path}/>
            )
            }
        </Routes>
    );
}

export default AppRouter;