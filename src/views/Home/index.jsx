import './styles.css';

import { Component } from 'react';

import { Posts } from '../../components/Posts';
import { loadPosts } from '../../utils/loadPosts';

//stateful component
export class Home extends Component {
  state = {
    posts: [],
    allPosts: [],
  };

  async componentDidMount() {
    await this.loadPosts();
  }

  loadPosts = async () => {
    const postsAndPhotos = await loadPosts();

    this.setState({
      posts: postsAndPhotos.slice(0, 1),
      allPosts: postsAndPhotos,
    });
  };

  render() {
    const { posts } = this.state;

    return (
      <section className="container">
        <Posts posts={posts} />
      </section>
    );
  }
}
