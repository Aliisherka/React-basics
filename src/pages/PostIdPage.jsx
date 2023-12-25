import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PostService from "../components/Api/PostService";
import { useFetching } from "../hooks/useFetching";
import Loader from "../components/UI/loader/Loader";


const PostIdPage = () => {
    const params = useParams();
    const [post, setPost] = useState({});
    const [comments, setComments] = useState([]);
    const [fetchPostById, isLoading, error] = useFetching(async () => {
        const response = await PostService.getById(params.postId);
        setPost(response.data);
    })

    const [fetchComments, isCommentsLoading, commentserror] = useFetching(async () => {
        const response = await PostService.getCommentsById(params.postId);
        setComments (response.data);
    })

    useEffect(() => {
        fetchPostById();
        fetchComments();
    }, [])

    return (
        <>
            <h1>You open post with id: {post.id}</h1>
            {isLoading
                ? <Loader />
                : <p>{post.id} {post.title}</p> 
            }
            <h2>Comments:</h2>
            {isCommentsLoading
                ? <Loader />
                : <div>
                    {comments.map((comment) => 
                        <div key={comment.id} style={{marginTop: 15}}>
                            <h3>{comment.email}</h3>
                            <p>{comment.body}</p> 
                        </div>
                    )}
                </div>
            }
        </>
    )
}

export default PostIdPage;