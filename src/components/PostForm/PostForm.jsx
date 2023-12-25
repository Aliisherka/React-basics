import { useState } from "react";
import MyButton from "../UI/button/MyButton";
import MyInput from "../UI/input/MyInput";


const PostForm = ({create}) => {
    const [input, setInput] = useState({title: '', body: ''});

    const addNewPost = (event) => {
        event.preventDefault();
        const newPost = {
            ...input,
            id: Date.now()
        }
        create(newPost);
        setInput({title: '', body: ''})
    }

    return (
        <form>
            <MyInput
                onChange={(event) =>
                    setInput({ ...input, title: event.target.value })
                }
                value={input.title}
                type="text"
                placeholder="title"
            />
            <MyInput
                onChange={(event) =>
                    setInput({ ...input, body: event.target.value })
                }
                value={input.body}
                type="text"
                placeholder="description"
            />
            <MyButton onClick={addNewPost}>Create post</MyButton>
        </form>
    );
}

export default PostForm;