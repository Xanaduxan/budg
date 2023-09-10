import React, { FC, useState } from 'react';
import { AuthService } from '../components/services/auth.service';
import { toast } from 'react-toastify';
import { setTokenToLocalStorage } from '../helpers/localstorage.helper';
import { useAppDispatch } from '../store/hooks';
import { login } from '../store/user/userSlice';
import { useNavigate } from 'react-router-dom';

const Auth: FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(false);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const loginHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      const data = await AuthService.login({ email, password });
      if (data) {
        setTokenToLocalStorage('token', data.token);
        dispatch(login(data));
        toast.success('You logged in');
        navigate('/');
      }
    } catch (err: any) {
      const error = err.response?.data.message;
      toast.error(error.toString());
    }
  };

  const registrationHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      const data = await AuthService.registration({ email, password });
      if (data) {
        toast.success('Account has been created');
        setIsLogin(!isLogin);
      }
    } catch (err: any) {
      const error = err.response?.data.message;
      toast.error(error.toString());
    }
  };
  return (
    <div className="mt-40 flex flex-col items-center justify-center bg-slate-900 text-white">
      <h1 className="mb-10 text-center text-xl">
        {isLogin ? 'Login' : 'Registration'}
      </h1>
      <form
        className="mx-auto flex w-1/3 flex-col gap-5"
        onSubmit={isLogin ? loginHandler : registrationHandler}
      >
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
            onClick={() => setIsLogin(!isLogin)}
          >
            You don`t have an account?
          </button>
        ) : (
          <button
            className="text-slate-300 hover:text-white"
            onClick={() => setIsLogin(!isLogin)}
          >
            Already have an account?
          </button>
        )}
      </div>
    </div>
  );
};

export default Auth;
