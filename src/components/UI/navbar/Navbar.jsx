import styles from './Navbar.module.css';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context';
import MyButton from '../button/MyButton';

const Navbar = () => {
    const {setIsAuth} = useContext(AuthContext);

    const logout = () => {
        setIsAuth(false);
        localStorage.removeItem('auth');
    }

    return (
        <div className={styles.navbar}>
            <MyButton onClick={logout}>Exit</MyButton>
            <div className={styles.navbar__item}>
                <Link className={styles.navbar__link} to="/about">About</Link>
                <Link className={styles.navbar__link} to="/">Posts</Link>
            </div>
        </div>
    );
}

export default Navbar