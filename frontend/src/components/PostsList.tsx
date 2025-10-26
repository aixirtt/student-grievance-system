import React from 'react';

type Post = {
  id: string;
  title: string;
  body: string;
  author: string;
  created_at?: string;
};

// Sample/static posts for the landing page. Replace with API data later.
const samplePosts: Post[] = [
  {
    id: '1',
    title: 'Broken projector in Lab 3',
    body: 'The projector in lab 3 has been malfunctioning for two weeks. Please check the connection and bulbs.',
    author: 'Juan dela Cruz',
    created_at: '2025-10-20'
  },
  {
    id: '2',
    title: 'Request for extended submission deadline',
    body: 'Many students request a one-week extension for the project due to overlapping exams.',
    author: 'Maria Santos',
    created_at: '2025-10-22'
  },
  {
    id: '3',
    title: 'Canteen hygiene',
    body: 'Canteen floors and trays need improvement. Several students reported food contamination.',
    author: 'Pedro Reyes',
    created_at: '2025-10-23'
  }
];

const PostsList: React.FC = () => {
  // For now use static posts. Later wire to API and make names optionally redacted server-side.
  const posts = samplePosts;

  return (
    <div>
      {posts.map((p, i) => (
        <article key={p.id} className="post-card">
          <div className="post-top">
            <div className="avatar" aria-hidden>
              <svg width="34" height="34" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="8" r="3.2" fill="#f0f0f0" stroke="#e0e0e0" />
                <path d="M4 20c0-4 4.5-6 8-6s8 2 8 6" stroke="#e0e0e0" strokeWidth="1" fill="none" />
              </svg>
            </div>

            <div className="post-meta">
              <div className="author-row">
                <strong className="author-name">{p.author}</strong>
                <span className="author-role">{i % 2 === 0 ? 'SCHOOL GUARD' : 'STUDENT'}</span>
              </div>
              <div className="post-title">{p.title}</div>
            </div>
          </div>

          <p className="post-body">{p.body}</p>

          <div className="post-footer">
            <span className="post-time">{p.created_at}</span>
          </div>

          <hr />
        </article>
      ))}
    </div>
  );
};

export default PostsList;
