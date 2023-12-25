import styles from './MyModal.module.css'

const MyModal = ({children, visible, setVisible}) => {
    const rootClasses = [styles.modal];
    if (visible) {
        rootClasses.push(styles.active)
    }

    return (
        <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    )
}

export default MyModal;