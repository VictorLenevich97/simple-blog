import * as React from 'react';
import { Link } from 'gatsby';

const IndexPage = () => {
    return (
        <main>
            <title>Home Page</title>
            <h1>Simple blog</h1>
            <Link to="/first-post">Open first post</Link>
        </main>
    );
};

export default IndexPage;
