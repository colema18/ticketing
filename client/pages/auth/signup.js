import { useState } from 'react';
import axios from 'axios';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState([]);

    const onSubmit = async (event) => {
        event.preventDefault();

        try{
            const response = await axios.post('/api/users/signup', { email, password });

            console.log(response.data);
        }
        catch(err){
            setErrors(err.response.data.errors);
        }

    };

    return (
        <form onSubmit={onSubmit}>
            <h1>Sign Up</h1>
            <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input 
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    type="email" 
                    className="form-control" 
                    id="email" 
                    placeholder="Enter email" />
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    type="password" 
                    className="form-control" 
                    id="password" 
                    placeholder="Password" />
            </div>
            { errors.length > 0 &&
                <div className="alert alert-danger">
                    <h4>Oops....</h4>
                    <ul>
                        {errors.map(err => (
                            <li key={err.message}>{err.message}</li>
                        ))}
                    </ul>
                </div>
            }
            <button type="submit" className="btn btn-primary">Sign Up</button>
        </form>
    );
};
   
export default Signup;