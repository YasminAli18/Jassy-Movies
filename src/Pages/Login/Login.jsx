import React from "react";
import './Login.css'
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

function Login(){
const nav=useNavigate()
    const {
         register,
         handleSubmit,
        formState:{errors}
        }=useForm()

    const onSubmit =(data)=>{
        console.log(data);
        nav('/Movies');
        
    }  
        
    return(
     <>
       <div className="d-flex justify-content-center align-items-center vh-100 bg-dark">
        <div className="card shadow-lg p-4" style={{width: '400px'}}>
            <h3 className="text-center mb-4">Login</h3>
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
                    {errors.email && <p className="text-danger">{errors.email.message} </p>}
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password"
                        className="form-control" 
                        id="password"
                        placeholder="Enter your password"
                        {...register("pass", {
                            required: "Password is required",
                            minLength: {
                            value: 8,
                            message: "Password must be at least 8 characters"
                            }
                        })}
                    />
                    {errors.pass && <p className="text-danger">{errors.pass.message} </p>}
                </div>
                <button type="submit" className="btn-custom">Login</button>

            </form>
            <p className="text-center mt-3">
                <a href="#">Forgot password?</a>
            </p>
        </div>
     </div>
 </>
    )
}
export default Login
