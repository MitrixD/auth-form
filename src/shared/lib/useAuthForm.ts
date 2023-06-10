import { ChangeEvent, FormEvent, useState } from 'react';

export const useAuthForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailFocused, setEmailFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleEmailFocus = () => {
    setEmailFocused(true);
  };

  const handleEmailBlur = () => {
    setEmailFocused(false);
  };

  const handlePasswordFocus = () => {
    setPasswordFocused(true);
  };

  const handlePasswordBlur = () => {
    setPasswordFocused(false);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log('Email:', email);
    console.log('Password:', password);
    setEmail('');
    setPassword('');

    alert(`${email}, you are logged in!`);
  };

  return {
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
  };
};
