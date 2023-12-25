import styles from './MyButton.module.css';

const MyButton = ({children, ...props}) => {
    return (
        <button {...props} className={styles.button}>
            {children}
        </button>
    )
}

export default MyButton;