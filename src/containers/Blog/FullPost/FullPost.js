import React, { Component } from 'react';
import axios from 'axios';

import './FullPost.css';

class FullPost extends Component {

    state = {
        postLoaded: false,
    }

    componentDidUpdate() {
        if(this.props.postId) {
            // This if is in order to not send requests all the time
            if(!this.state.postLoaded || (this.state.postLoaded && this.state.postLoaded.id !== this.props.postId))
            axios.get('https://jsonplaceholder.typicode.com/posts/'+this.props.postId)
                .then(response => {
                    //console.log(response);
                    this.setState({postLoaded: response.data});
                });
        }
    }

    render () {
        let post = <p style={{textAlign: 'center'}}>Please select a Post!</p>;
        // We have a post selected but not the information yet
        if(this.props.postId) {
            post = <p style={{textAlign: 'center'}}>Loading...</p>;
        }
        // We now have the information
        if(this.state.postLoaded) {
            post = (
                <div className="FullPost">
                    <h1>{this.state.postLoaded.title}</h1>
                    <p>{this.state.postLoaded.body}</p>
                    <div className="Edit">
                        <button className="Delete">Delete</button>
                    </div>
                </div>
    
            );
        }
        return post;
    }
}

export default FullPost;