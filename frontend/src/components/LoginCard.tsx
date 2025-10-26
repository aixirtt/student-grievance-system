import React from 'react';

const LoginCard: React.FC = () => {
  return (
    <div className="login-card" aria-labelledby="login-heading">
      <h3 id="login-heading">Sign in</h3>

      <form onSubmit={(e) => e.preventDefault()}>
        <input className="input" type="email" placeholder="Email" aria-label="Email" />
        <input className="input" type="password" placeholder="Password" aria-label="Password" />
        <button className="btn" type="submit">Sign in</button>
      </form>

      <p style={{ fontSize: 12, color: '#666', marginTop: 10 }}>
        Don't have an account? Ask an admin to create one or register through the student portal.
      </p>
    </div>
  );
};

export default LoginCard;
