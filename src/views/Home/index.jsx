import "./styles.css";

import { useCallback, useEffect, useState } from "react";

import { Button } from "../../components/Button";
import { Posts } from "../../components/Posts";
import { TextInput } from "../../components/TextInput";
import { fetchPosts } from "../../utils/fetchPosts";

export const Home = () => {
    const [posts, setPosts] = useState([]);
    const [allPosts, setAllPosts] = useState([]);
    const [page, setPage] = useState(0);
    const [postsPerPage] = useState(10);
    const [searchValue, setSearchValue] = useState("");

    const loadPosts = useCallback(async (page, postsPerPage) => {
        const postsAndPhotos = await fetchPosts();

        setPosts(postsAndPhotos.slice(page, postsPerPage));
        setAllPosts(postsAndPhotos);
    }, []);

    useEffect(() => {
        loadPosts(0, postsPerPage);
    }, [loadPosts, postsPerPage]);

    const loadMorePosts = () => {
        const nextPage = page + postsPerPage;
        const nextPosts = allPosts.slice(nextPage + postsPerPage);

        posts.push(...nextPosts);

        setPosts(posts);
        setPage(nextPage);
    };

    const handleChange = (e) => {
        const { value } = e.target;

        setSearchValue(value);
    };

    const noMorePosts = page + postsPerPage >= allPosts.length;

    const filteredPosts = searchValue
        ? allPosts.filter((post) => {
              return post.title.toLowerCase().includes(searchValue.toLowerCase());
          })
        : posts;

    return (
        <section className="container">
            <div className="search-container">
                {!!searchValue && <h1>Search value: {searchValue}</h1>}

                <TextInput handleChange={handleChange} searchValue={searchValue} />
            </div>

            {filteredPosts.length > 0 ? <Posts posts={filteredPosts} /> : <p>No posts found</p>}

            {!searchValue && (
                <div className="button-container">
                    <Button disabled={noMorePosts} text="Load more" onClick={loadMorePosts} />
                </div>
            )}
        </section>
    );
};
