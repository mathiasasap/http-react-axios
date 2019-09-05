import React, { Component } from 'react';
import axios from 'axios';

// Component
import Post from '../../../components/Post/Post';

class Posts extends Component {

    state = {
        posts: [],
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                this.setState({posts: response.data.slice(0, 4)})
                //console.log(response);
            });
    }

    postSelectedHandler = (id) => {
        this.setState({selectedPostId: id});
    }

    render() {
        const posts = this.state.posts.map(post => {
            return <Post 
                key={post.id} 
                title={post.title}
                clicked={() => this.postSelectedHandler(post.id)} />
        })

        return (
            <section className="Posts">
                {posts}
            </section>
        );
    }
}

export default Posts;