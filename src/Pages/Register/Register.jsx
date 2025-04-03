import React from "react";
import './Register.css';
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { userRegister } from "../../services/Auth";

function Register() {
    const nav = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();
     //day6
    const onSubmit = async (data) => {
        try {
            await userRegister(data.email, data.password);
            alert("Account created successfully! Please log in.");
            nav("/login"); 
        } catch (error) {
            alert("Sign up failed: " + error.message);  
        }
    };

    return (
        <>
            <div className="d-flex justify-content-center align-items-center vh-100 bg-dark">
                <div className="card shadow-lg p-4" style={{ width: '400px' }}>
                    <h3 className="text-center mb-4">Sign Up</h3>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email address</label>
                            <input type="email"
                                className="form-control"
                                id="email"
                                placeholder="Enter your email"
                                {...register("email", {
                                    required: "Email is required",
                                    pattern: {
                                        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.com$/,
                                        message: "Invalid email format"
                                    }
                                })}
                            />
                            {errors.email && <p className="text-danger">{errors.email.message}</p>}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input type="password"
                                className="form-control"
                                id="password"
                                placeholder="Enter your password"
                                {...register("password", {
                                    required: "Password is required",
                                    minLength: {
                                        value: 8,
                                        message: "Password must be at least 8 characters"
                                    }
                                })}
                            />
                            {errors.password && <p className="text-danger">{errors.password.message}</p>}
                        </div>
                        <button type="submit" className="btn-custom">Sign Up</button>
                    </form>
                    <p className="text-center mt-3">
                        Already have an account? <a href="/login">Login</a>
                    </p>
                </div>
            </div>
        </>
    );
}

export default Register;
