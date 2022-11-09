import React from 'react';
import useTitle from '../../hooks/useTitle';
import './Blog.css';

const Blog = () => {

    useTitle('Blog');

    return (
        <div>
            <h2 className='blog-title'>Read My Blog</h2>
            <div className='blog'>
                <div className='blog-que'>
                    <h2 className='question'>Difference between SQL and NoSQL?</h2>
                    <p><strong>Answer: </strong>
                        <strong>SQL: </strong> <br />
                        1. RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS) <br />
                        2. These databases have fixed or static or predefined schema <br />
                        3. These databases are not suited for hierarchical data storage. <br />
                        4. These databases are best suited for complex queries <br />
                        5. Vertically Scalable <br />
                        6. Follows ACID property <br />
                        <strong>NoSQL: </strong> <br />
                        1. Non-relational or distributed database system. <br />
                        2. They have dynamic schema <br />
                        3. These databases are best suited for hierarchical data storage. <br />
                        4. These databases are not so good for complex queries <br />
                        5. Horizontally scalable <br />
                        6. Follows CAP(consistency, availability, partition tolerance)

                    </p>
                </div>

                <div className='blog-que'>
                    <h2 className='question'>What is JWT, and how does it work?</h2>
                    <p><strong>Answer: </strong>JSON Web Token (JWT) is an open standard (RFC 7519) for securely transmitting information between parties as JSON object. It is compact, readable and digitally signed using a private key/ or a public key pair by the Identity Provider(IdP), Basically the identity provider(IdP) generates a JWT certifying user identity and Resource server decodes and verifies the authenticity of the token using secret salt / public key. User sign-in using username and password or google/facebook. Authentication server verifies the credentials and issues a jwt signed using either a secret salt or a private key. User's Client uses the JWT to access protected resources by passing the JWT in HTTP Authorization header. Resource server then verifies the authenticity of the token using the secret salt/ public key.</p>
                </div>

                <div className='blog-que'>
                    <h2 className='question'>What is the difference between javascript and NodeJS?</h2>
                    <p><strong>Answer: </strong>
                        <strong>Javascript: </strong> <br />
                        1. Javascript is a programming language that is used for writing scripts on the website. <br />
                        2. Javascript can only be run in the browsers. <br />
                        3. It is basically used on the client-side. <br />
                        4. Javascript is capable enough to add HTML and play with the DOM.  <br />
                        5. Javascript can run in any browser engine as like JS core in safari and Spidermonkey in Firefox. <br />
                        6. It is the upgraded version of ECMA script that uses Chrome’s V8 engine written in C++. <br />
                        <strong>NodeJS: </strong> <br />
                        1. NodeJS is a Javascript runtime environment. <br />
                        2. We can run Javascript outside the browser with the help of NodeJS. <br />
                        3. It is mostly used on the server-side. <br />
                        4. Nodejs does not have capability to add HTML tags. <br />
                        5. V8 is the Javascript engine inside of node.js that parses and runs Javascript. <br />
                        6. Nodejs is written in C, C++ and Javascript.
                    </p>
                </div>

                <div className='blog-que'>
                    <h2 className='question'>How does NodeJS handle multiple requests at the same time?</h2>
                    <p><strong>Answer: </strong>NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;