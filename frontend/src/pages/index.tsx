import React from 'react';
import Hero from '../components/Hero';
import PostsList from '../components/PostsList';

const Home: React.FC = () => {
  return (
    <div className="page-wrapper">
      <div className="content container">
        <Hero />

        <main className="posts-area">
          <div className="posts-header">
            <h2>Community Posts</h2>
            <p className="posts-sub">Posts from students. Some posts may appear anonymous for privacy.</p>
          </div>

          <div className="posts-scroll">
            <PostsList />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Home;