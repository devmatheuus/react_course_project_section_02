import './styles.css';

import P from 'prop-types';

import { PostCard } from '../PostCard';

export const Posts = ({ posts }) => {
    return (
        <div className="posts">
            {posts.map((post) => (
                <PostCard post={post} key={post.id} />
            ))}
        </div>
    );
};

Posts.propTypes = {
    posts: P.arrayOf(
        P.shape({
            id: P.number.isRequired,
            title: P.string.isRequired,
            body: P.string.isRequired,
            cover: P.string.isRequired,
        }),
    ),
};
