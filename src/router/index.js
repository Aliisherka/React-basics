import About from "../pages/About";
import Error from "../pages/Error";
import Login from "../pages/Login";
import PostIdPage from "../pages/PostIdPage";
import Posts from "../pages/Posts";


export const privateRoutes = [
    {path: '/about', element: <About />},
    {path: '/', element: <Posts />},
    {path: '/posts/:postId', element: <PostIdPage />},
    {path: '*', element: <Error />},
]

export const publicRoutes = [
    {path: '/login', element: <Login />},
    {path: '*', element: <Login />},
]