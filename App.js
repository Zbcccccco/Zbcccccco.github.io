
import React, { useState } from 'react';
import './App.css';

function App() {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = { id: Date.now(), title, content };
    setPosts([newPost, ...posts]);
    setTitle('');
    setContent('');
  };

  return (
    <div className="app">
      <header>
        <h1>Zcode</h1>
      </header>
      <div className="container">
        <form onSubmit={handleSubmit} className="post-form">
          <input
            type="text"
            placeholder="文章标题"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <textarea
            placeholder="文章内容"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
          <button type="submit">发布文章</button>
        </form>
        <div className="posts">
          {posts.map(post => (
            <div key={post.id} className="post">
              <h2>{post.title}</h2>
              <p>{post.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
