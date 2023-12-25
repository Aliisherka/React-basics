import styles from './Post.module.css'
import { Link } from "react-router-dom";
import MyButton from "../UI/button/MyButton";

const Post = ({post, remove}) => {
    const postId = post.id

    return (
        <div className={styles.post}>
            <div>
                <h2>{post.id} {post.title}</h2>
                <p>{post.body}</p>
            </div>
            <div className={styles.post__btns}>
                <Link to={`posts/${postId}`}>
                    <MyButton>Open</MyButton>
                </Link>
                <MyButton onClick={() => remove(post)}>Delete</MyButton>
            </div>
        </div>
    );
}

export default Post;