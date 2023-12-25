import  './PostList.css';
import { CSSTransition } from "react-transition-group";
import { TransitionGroup } from "react-transition-group";
import Post from "../Post/Post";


const PostList = ({posts, title, remove}) => {
    
    if(!posts.length) {
        return <p className='noElement'>No posts</p>
    }

    return (
        <>
            <h1 className="title">{title}</h1>
            <TransitionGroup> 
                {posts.map((post) => (
                    <CSSTransition
                        key={post.id}
                        timeout={500}
                        classNames="post"
                    >
                        <Post remove={remove} post={post} />
                    </CSSTransition>
                ))}
            </TransitionGroup>
        </>
    );
}

export default PostList;