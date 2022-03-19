import './App.css';
import {MainLayout} from "./layouts/MainLayout";
import {Home, Profile, Chats, Api, Signup, Login} from './views';
// import {LogOut} from "./components/LogOut";
import {Route, Switch} from 'react-router-dom';
// import {useEffect, useState} from "react";
// import {auth} from "./services/firebase";
import {PublicRoute} from "./hocs/PublicRoute";
import {PrivateRoute} from "./hocs/PrivateRoute";
import {useDispatch, useSelector} from "react-redux";
import {getIsAuth, initAuthAction} from "./store/user/reducer";
import {useEffect} from "react";

export function App() {
    // const [authed, setAuthed] = useState(false);
    //
    // useEffect(() => {
    //     auth.onAuthStateChanged((user) => {
    //         if (user) {
    //             setAuthed(true);
    //         } else {
    //             setAuthed(false);
    //         }
    //     })
    // }, []);

    const isAuth = useSelector(getIsAuth);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(initAuthAction);
    }, [dispatch]);

    return (
        <MainLayout>
            <Switch>
                <PrivateRoute authenticated={isAuth} exact path={'/'}>
                    <Home/>
                </PrivateRoute>
                <PrivateRoute authenticated={isAuth} path={'/profile'}>
                    <Profile/>
                </PrivateRoute>
                <PrivateRoute authenticated={isAuth} path={'/chats'}>
                    <Chats/>
                </PrivateRoute>
                <PrivateRoute authenticated={isAuth} path={'/api'}>
                    <Api/>
                </PrivateRoute>

                <PublicRoute authenticated={isAuth} path={'/signup'}>
                    <Signup/>
                </PublicRoute>
                <PublicRoute authenticated={isAuth} path={'/login'}>
                    <Login/>
                </PublicRoute>


                <Route>
                    <h3>Page not found</h3>
                </Route>
            </Switch>
        </MainLayout>
    )


}