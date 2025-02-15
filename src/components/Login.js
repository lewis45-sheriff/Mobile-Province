import React, { useContext } from 'react';
import AuthContext from '../contexts/UserContext';

const LoginPage = () => {
    const { loginUser } = useContext(AuthContext);

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 shadow-lg rounded-lg w-full max-w-md">
                <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">Login</h2>
                <form className="space-y-4" onSubmit={loginUser}>
                    <div>
                        <input 
                            type="text" 
                            name="username" 
                            placeholder="Enter username" 
                            required 
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <input 
                            type="password" 
                            name="password" 
                            placeholder="Enter password" 
                            required 
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <button 
                            type="submit" 
                            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-lg transition duration-300"
                        >
                            Login
                        </button>
                    </div>
                </form>
                <p className="mt-4 text-center text-gray-600">
                    Don't have an account? <a href="/register" className="text-blue-500 hover:underline">Sign up</a>
                </p>
            </div>
        </div>
    );
};

export default LoginPage;
