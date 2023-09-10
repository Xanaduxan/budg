import React, { FC, useState } from 'react';

const Auth: FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogion] = useState(false);
  return (
    <div className="mt-40 flex flex-col items-center justify-center bg-slate-900 text-white">
      <h1 className="mb-10 text-center text-xl">
        {isLogin ? 'Login' : 'Registration'}
      </h1>
      <form className="mx-auto flex w-1/3 flex-col gap-5">
        <input
          className="input"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="input"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="btn btn-green mx-auto">Submit</button>
      </form>
      <div className="mt-5 flex justify-content">
        {isLogin ? (
          <button
            className="text-slate-300 hover:text-white"
            onClick={() => setIsLogion(!isLogin)}
          >
            You don`t have an account?
          </button>
        ) : (
          <button
            className="text-slate-300 hover:text-white"
            onClick={() => setIsLogion(!isLogin)}
          >
            Already have an account?
          </button>
        )}
      </div>
    </div>
  );
};

export default Auth;
