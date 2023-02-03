import './App.css';

import { Component } from 'react';

//stateful component
class App extends Component {
  state = {
    counter: 0,
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
    this.handleTimeOut();
  }

  componentDidUpdate() {
    //loop
    // this.handleTimeOut();
  }

  handleTimeOut = () => {
    const { posts, counter } = this.state;

    posts[0].title = 'Alterando título';

    setTimeout(() => {
      this.setState({ posts, counter: counter + 1 });
    }, 1000);
  };

  render() {
    const { posts, counter } = this.state;

    return (
      <div className="App">
        <h1>{counter}</h1>
        {posts.map((post) => (
          <div key={post.id}>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
