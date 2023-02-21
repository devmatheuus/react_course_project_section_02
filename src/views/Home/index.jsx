import { useCallback, useState } from "react";

import { useFetch } from "../../hooks/useFetch";

const POSTS_URL = "https://jsonplaceholder.typicode.com/posts";

export const Home = () => {
    const [postId, setPostId] = useState("");
    const [result, loading] = useFetch(`${POSTS_URL}${postId && "/" + postId}`, {
        headers: {
            abc: "1" + postId,
        },
    });

    const handlePostId = useCallback((id) => {
        setPostId(id);
    }, []);

    return (
        <>
            {loading && <p>Carregando...</p>}

            {result?.length > 0 &&
                !loading &&
                result.map((p) => (
                    <p key={p.id} onClick={() => handlePostId(p.id)}>
                        {p.title}
                    </p>
                ))}

            {result && !loading && !("length" in result) && (
                <p key={result?.id} onClick={() => handlePostId("")}>
                    {result?.title}
                </p>
            )}
        </>
    );
};
