import { useContext } from "react";
import MyButton from "../components/UI/button/MyButton"
import MyInput from "../components/UI/input/MyInput"
import { AuthContext } from "../context";


const Login = () => {
    const {setIsAuth} = useContext(AuthContext);
    const login = (e) => {
        e.preventDefault();
        setIsAuth(true);
        localStorage.setItem('auth', 'true');
    }

    return (
        <>
            <h1>Login</h1>
            <form onSubmit={login}>
                <MyInput type='text' placeholder="login"/>
                <MyInput type='password' placeholder="password"/>
                <MyButton >Login</MyButton>
            </form>
        </>
    )
}

export default Login