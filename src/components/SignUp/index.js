import {useState} from "react";
import {Link} from "react-router-dom";
import {auth} from "../../services/firebase";

export const SignUp = () => {
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
          await auth.createUserWithEmailAndPassword(email, password);
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
                  <button type="submit">Sign In</button>
              </div>
              <hr/>
              <p>
                  Уже есть аккаунт? <Link to="/login">Log In</Link>
              </p>
          </form>
      </div>
    );
}