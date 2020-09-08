import React from 'react';
import { useState } from 'react'; 
import {variant, Alert, idx} from 'react-bootstrap';

const HeadLine = () => {
    const [article, setArticle] = useState([])
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => setArticle(data))
    return (
        <div>
            <h2>Article Length: </h2>
            [
  'primary',
  'secondary',
  'success',
  'danger',
  'warning',
  'info',
  'light',
  'dark',
].map((variant, idx) => (
  <Alert key={idx} variant={variant}>
    This is a {variant} alert with{' '}
    <Alert.Link href="#">an example link</Alert.Link>. Give it a click if you
    like.
  </Alert>
));
        </div>
    );
};

export default HeadLine;