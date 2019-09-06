import React from 'react';
import { withRouter } from 'react-router-dom'; // In order to have the info of the routes in this component too

import './Post.css';

const post = (props) => (
    <article className="Post" onClick={props.clicked}>
        <h1>{props.title}</h1>
        <div className="Info">
            <div className="Author">Random Author</div>
        </div>
    </article>
);

export default withRouter(post);