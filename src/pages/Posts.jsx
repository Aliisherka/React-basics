import { useEffect, useRef, useState } from "react";
import PostList from "../components/PostList/PostList";
import PostForm from "../components/PostForm/PostForm";
import PostFilter from "../components/PostFilter/PostFilter";
import MyModal from "../components/UI/modal/MyModal";
import MyButton from "../components/UI/button/MyButton";
import { usePosts } from "../hooks/usePosts";
import Loader from "../components/UI/loader/Loader";
import { useFetching } from "../hooks/useFetching";
import PostService from "../components/Api/PostService";
import { getPageCount } from "../components/utils/pages";
import Pagination from "../components/UI/pagination/Pagination";
import { useObserver } from "../hooks/useObserver";
import MySelect from "../components/UI/select/MySelect";

function Posts() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: '', query: '' })
  const [modal, setModal] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const lastElement = useRef();
  
  const [fetchPosts, isPostLoading, postError] = useFetching(async () => {
    const response = await PostService.getAll(limit, page);  
    setPosts([...posts, ...response.data]);

    const totalCount = response.headers['x-total-count']
    setTotalPages(getPageCount(totalCount, limit));
  })

  useObserver(lastElement, page < totalPages, isPostLoading, () => setPage(page + 1))

  useEffect(() => {
    fetchPosts()
  }, [page, limit])

  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query); 

  const createPosts = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  }

  const remove = (post) => {
    setPosts(posts.filter(p => p.id !== post. id))
  }

  const changePage = (page) => {
    setPage(page)
  }

  return (
      <div className="App">
          <MyButton style={{ marginTop: 30 }} onClick={() => setModal(true)}>
              Create post
          </MyButton>
          <MyModal visible={modal} setVisible={setModal}>
              <PostForm create={createPosts} />
          </MyModal>
          <hr style={{ margin: "15px 0" }} />
          <PostFilter filter={filter} setFilter={setFilter} />
          <MySelect 
            value={limit} 
            onChange={value => setLimit(value)}
            defaultValue={'pages number'}
            options={[
              {value: 5, name: '5'},
              {value: 10, name: '10'},
              {value: 25, name: '25'},
              {value: -1, name: 'show all'}
            ]}
          />
          {postError && <p className="noElement">Error {postError}</p>}
          <PostList
              remove={remove}
              posts={sortedAndSearchedPosts}
              title="Posts list"
          />
          <div ref={lastElement} style={{height: 20, background: 'lightgray'}}/>
          {isPostLoading &&
              <div style={{display: "flex", justifyContent: "center", marginTop: 50, }}>
                <Loader />
              </div>
          }
          <Pagination totalPages={totalPages} page={page} changePage={changePage}/>
      </div>
  );
}

export default Posts;