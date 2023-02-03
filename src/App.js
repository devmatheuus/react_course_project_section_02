import './App.css';

import { Component } from 'react';

//stateful component
class App extends Component {
  state = {
    posts: [
      {
        id: 1,
        title: 'título 1',
        body: 'Corpo 1',
      },
      {
        id: 2,
        title: 'título 2',
        body: 'Corpo 2',
      },
      {
        id: 3,
        title: 'título 3',
        body: 'Corpo 3',
      },
    ],
  };

  componentDidMount() {
    this.loadPosts();
  }

  loadPosts = async () => {
    const postsResponse = fetch('https://jsonplaceholder.typicode.com/posts');
    const photosResponse = fetch('https://jsonplaceholder.typicode.com/photos');

    const [posts, photos] = await Promise.all([postsResponse, photosResponse]);

    const postsJson = await posts.json();
    const photosJson = await photos.json();

    const postsAndPhotos = postsJson.map((post, index) => {
      return { ...post, cover: photosJson[index].url };
    });

    this.setState({
      posts: postsAndPhotos,
    });
  };

  render() {
    const { posts } = this.state;

    return (
      <section className="container">
        <div className="posts">
          {posts.map((post) => (
            <div className="post" key={post.id}>
              <img src={post.cover} alt={post.title} />
              <div className="post-content">
                <h1>{post.title}</h1>
                <p>{post.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
}

export default App;
