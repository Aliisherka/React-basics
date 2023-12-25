import MyInput from "../UI/input/MyInput";
import MySelect from "../UI/select/MySelect";

const PostFilter = ({filter, setFilter}) => {

    return (
        <>
            <MyInput
                placeholder="search..."
                value={filter.query}
                onChange={(e) => setFilter({...filter, query: e.target.value})}
            />
            <MySelect
                value={filter.sort}
                onChange={selectedSort => setFilter({...filter, sort: selectedSort })}
                defaultValue="sort by"
                options={[
                    { value: "title", name: "by title" },
                    { value: "body", name: "by description" },
                ]}
            />
        </>
    );
}

export default PostFilter;