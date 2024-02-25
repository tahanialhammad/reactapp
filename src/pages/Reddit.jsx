import React, { useEffect, useState } from 'react';

export default function Reddit() {
  // Fetching Data from api
  const [posts, setPosts] = useState([]); //start with empty array
  const [isLoading, setIsLoading] = useState(true); // step 2
  const [errorMessage, setErrorMessage] = useState(null); // step 3 , error when fetch url is not correct 

  useEffect(() => {
    fetch('https://www.reddit.com/r/aww.json')
      .then(response => response.json())
      .then(results => {
        // console.log(results);
        setIsLoading(false);
        setPosts(results.data.children);
      })
      .catch(error => {
        setIsLoading(false);
        setErrorMessage('There was an error');
      });
  }, []);
  return (
    <div>
      <h1>Reddit API</h1>
      {isLoading && <div>Loading...</div>}
      {posts && (
        <ul>
          {posts.map(post => (
            <li key={post.data.id}>
              <a href={`https://reddit.com${post.data.permalink}`}>
                {post.data.title}
              </a>
            </li>
          ))}
        </ul>
      )}
      {errorMessage && <div>{errorMessage}</div>}
    </div>
  );
}
