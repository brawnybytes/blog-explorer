import React, { useState } from 'react';
import PostList from './components/PostList';
import PostDetail from './components/PostDetail';
import './App.css'

function App() {
  const [selectedPostId, setSelectedPostId] = useState(null);

  return (
    <div className="App">
      <h1 style={{marginLeft: 20}}>Blog Explorer</h1>
      <div style={{ display: 'flex' }}>
        <div style={{ flex: 2 }}>
          <PostList onSelectPost={setSelectedPostId} />
        </div>
        <div style={{ flex: 2, marginTop: 70 }}>
          {selectedPostId && <PostDetail postId={selectedPostId} />}
        </div>
      </div>
    </div>
  );
}

export default App;