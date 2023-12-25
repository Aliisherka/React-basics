import styles from './Pagination.module.css';
import { getPagesArray } from "../../utils/pages";


const Pagination = ({totalPages, page, changePage}) => {
    const pagesArray = getPagesArray(totalPages);

    return (
        <div className={styles.page__wrapper}>
            {pagesArray.map((p) =>
                <span
                    onClick={() => changePage(p)}
                    key={p}
                    className={page === p ? `${styles.page} ${styles.page__current}` : styles.page}
                >
                    {p}
                </span>
            )}
        </div>
    );
}

export default Pagination;