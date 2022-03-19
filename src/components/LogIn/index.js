import {useState} from "react";
import {Link} from "react-router-dom";
import {auth} from "../../services/firebase";

export const LogIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handlePassChange = (e) => {
        setPassword(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        try {
            await auth.signInWithEmailAndPassword(email, password);
        } catch (error) {
            setError(error.message);
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="email" name="email" onChange={handleEmailChange} value={email} placeholder="Email" />
                <input type="password" name="password" onChange={handlePassChange} value={password} placeholder="Password" />
                <div>
                    {error && <p>{error}</p>}
                    <button type="submit">Login</button>
                </div>
                <hr/>
                <p>
                    Нет аккаунта? <Link to="/signup">Sign Up</Link>
                </p>
            </form>
        </div>
    );
}