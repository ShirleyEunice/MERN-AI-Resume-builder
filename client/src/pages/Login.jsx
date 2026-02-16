import React from 'react'
import {Loader2, Lock, Mail, User2Icon} from "lucide-react"
import api from '../configs/api';
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';
import { login } from '../app/features/authSlice';

const Login = () => {
  //To access the query and redirect login and signup
  const query = new URLSearchParams(window.location.search);
  const dispatch = useDispatch();
  const urlState = query.get('state')
  const [state, setState] = React.useState(urlState || "login")
  const [loading, setLoading] = React.useState(false)

    const [formData, setFormData] = React.useState({
        name: '',
        email: '',
        password: ''
    })

    const handleSubmit = async (e) => {
      setLoading(true);
  e.preventDefault();
  try {
    const { data } = await api.post(`/api/users/${state}`, formData);

    dispatch(login({
      token: data.token,
      user: data.user,
    }));
    setLoading(false);
    localStorage.setItem('token', data.token);
    toast.success(data.message);

  } catch (error) {
    toast.error(error?.response?.data?.message || error.message);
  } finally {
    setLoading(false);
  }
};


    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <form
        onSubmit={handleSubmit}
        className="sm:w-[350px] w-full text-center border border-gray-300/60 rounded-2xl px-8 bg-white"
      >
        <h1 className="text-gray-900 text-3xl mt-10 font-medium">
          {state === "login" ? "Login" : "Sign up"}
        </h1>
        <p className="text-gray-500 text-sm mt-2">Please sign in to continue</p>
        {state !== "login" && (
          <div className="flex items-center mt-6 w-full bg-white border border-gray-300/80 h-12 rounded-full overflow-hidden pl-6 gap-2">
            <User2Icon size={16} className='#6B7280'/>
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="border-none outline-none ring-0"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
        )}
        <div className="flex items-center w-full mt-4 bg-white border border-gray-300/80 h-12 rounded-full overflow-hidden pl-6 gap-2">
          <Mail size={16} className='#6B7280'/>
          <input
            type="email"
            name="email"
            placeholder="Email id"
            className="border-none outline-none ring-0"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex items-center mt-4 w-full bg-white border border-gray-300/80 h-12 rounded-full overflow-hidden pl-6 gap-2">
          <Lock size={16} className='#6B7280'/>
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="border-none outline-none ring-0"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mt-4 text-left text-purple-500">
          <button className="text-sm" type="reset">
            Forget password?
          </button>
        </div>
        <button
          type="submit"
          className="mt-2 w-full h-11 rounded-full text-white bg-purple-500 hover:opacity-90 transition-opacity flex items-center justify-center"
        >{
          loading ? <Loader2 className='w-6 h-6 animate-spin'/> : (state === "login" ? "Login" : "Sign up")
        }
        </button>
        <p
          onClick={() =>
            setState((prev) => (prev === "login" ? "register" : "login"))
          }
          className="text-gray-500 text-sm mt-3 mb-11"
        >
          {state === "login"
            ? "Don't have an account?"
            : "Already have an account?"}{" "}
          <a href="#" className="text-purple-500 hover:underline">
            click here
          </a>
        </p>
      </form>
    </div>
  );
}

export default Login
