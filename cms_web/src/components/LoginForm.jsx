// src/components/LoginForm.jsx
import React from 'react';

function LoginForm({ username, password, error, onUsernameChange, onPasswordChange, onSubmit }) {
  return (
    <div style={{ maxWidth: 400, margin: '0 auto', padding: 20 }}>
      <h2>Login</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}

      <form onSubmit={onSubmit}>
        <input
          type="text"
          value={username}
          onChange={onUsernameChange}
          placeholder="Username"
          required
          style={{ width: '100%', padding: 8, marginBottom: 10 }}
        />
        <input
          type="password"
          value={password}
          onChange={onPasswordChange}
          placeholder="Password"
          required
          style={{ width: '100%', padding: 8, marginBottom: 10 }}
        />
        <button type="submit" style={{ width: '100%', padding: 10 }}>Login</button>
      </form>
    </div>
  );
}

export default LoginForm;
