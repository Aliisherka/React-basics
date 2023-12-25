import styles from './MyInput.module.css';

const MyInput = (props) => {
    return (
        <input className={styles.input} {...props} />
    )
}

export default MyInput;