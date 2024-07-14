import { lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import UserContext from "./utils/UserContext";
import Login from "./pages/Login";
import Home from "./pages/Home";

// const PageNotFound = lazy(() => import('./components/PageNotFound'))
// const Login = lazy(() => import('./pages/Login'))
// const Home = lazy(() => import('./pages/Home'))

const AppLayout = () => {
    const username = localStorage.getItem('username') || ''
    const [userName, setUserName] = useState(username)
    
    return(
        <UserContext.Provider value={{loggedUser: userName, setUserName}}>
            <div className="bg-black">
                <Suspense fallback={<h1>Loading....</h1>}>
                    <Outlet />
                </Suspense>
            </div>
        </UserContext.Provider>
    )
}

const isLoggedIn = () => {
    const username = localStorage.getItem('username')
    return username
}

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        children: [{
            index: true,
            element: isLoggedIn() ? <Home /> : <Login />
        },{
            path: '/login',
            element: <Login />
        }, {
            path: '/home',
            element: <Home />
        }]
    }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />)

// Before routes were added
// root.render(<AppLayout />);