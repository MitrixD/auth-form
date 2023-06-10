import React, { FC } from 'react';

import { useAuthForm } from '../../shared/lib/useAuthForm';
import './AuthForm.styles.css';

export const AuthForm: FC = () => {
  const {
    email,
    password,
    emailFocused,
    passwordFocused,
    handleEmailChange,
    handlePasswordChange,
    handleEmailFocus,
    handleEmailBlur,
    handlePasswordFocus,
    handlePasswordBlur,
    handleSubmit,
  } = useAuthForm();

  return (
    <form className="auth-form" onSubmit={handleSubmit}>
      <h2 className="auth-form__header">Sign In</h2>

      <div
        className={`auth-form__input-container ${
          emailFocused ? 'auth-form__input-container--focused' : ''
        }`}
      >
        <input
          type="email"
          id="email"
          placeholder=" "
          value={email}
          onChange={handleEmailChange}
          onFocus={handleEmailFocus}
          onBlur={handleEmailBlur}
          required
          className="auth-form__input"
        />
        <label htmlFor="email" className="auth-form__input-label">
          Email<span className="auth-form__required">*</span>
        </label>
      </div>

      <div>
        <div
          className={`auth-form__input-container ${
            passwordFocused ? 'auth-form__input-container--focused' : ''
          }`}
        >
          <input
            type="password"
            id="password"
            placeholder=" "
            value={password}
            onChange={handlePasswordChange}
            onFocus={handlePasswordFocus}
            onBlur={handlePasswordBlur}
            required
            className="auth-form__input"
          />
          <label htmlFor="password" className="auth-form__input-label">
            Password<span className="auth-form__required">*</span>
          </label>
        </div>

        <div className="auth-form__remember-me">
          <input
            type="checkbox"
            id="remember-me"
            className="auth-form__checkbox"
            defaultChecked={true}
          />
          <label htmlFor="remember-me" className="auth-form__checkbox-label">
            Remember me
          </label>
        </div>
      </div>

      <div>
        <button type="submit" className="auth-form__button">
          Sign in
        </button>

        <div className="auth-form__forgot-password">
          <label>Forgot&nbsp;</label>
          <a
            href="https://example.com"
            className="auth-form__forgot-password-link"
          >
            password?
          </a>
        </div>
      </div>
    </form>
  );
};
