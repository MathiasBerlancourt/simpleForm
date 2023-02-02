import "./App.css";
import UserSumary from "./components/UserSumary";
import { useState } from "react";

const App = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const handleNameChange = (event) => {
    const value = event.target.value;
    setName(value);
  };
  const handleEmailChange = (event) => {
    const value = event.target.value;
    setEmail(value);
  };
  const handlePasswordChange = (event) => {
    const value = event.target.value;
    setPassword(value);
  };
  const handlePasswordConfirmChange = (event) => {
    const value = event.target.value;
    setPasswordConfirm(value);
  };
  const handleSubmit = (event) => {
    event.preventDefault(name, email, password, passwordConfirm);
  };

  const passwordCheck = (string1, string2) => {
    return string1 === string2;
  };
  const areTheSame = passwordCheck(password, passwordConfirm);

  return (
    <div className="App">
      <header>
        <h1>Create Account</h1>
      </header>
      <div className="body">
        <form onSubmit={handleSubmit}>
          <label>Name</label>
          <input
            placeholder="Jean Dupont"
            type="text"
            name="name"
            value={name}
            onChange={handleNameChange}
          />
          <label>Email</label>
          <input
            placeholder="jeandupont@lereacteur.io"
            type="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
          />
          <label>Password</label>
          <input
            placeholder="lErEaCtEuR2020"
            type="password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
          />
          <label>Confirm your password</label>
          <input
            placeholder="lErEaCtEuR2020"
            type="password"
            name="passwordConfirm"
            value={passwordConfirm}
            onChange={handlePasswordConfirmChange}
          />
          <div className="registerContainer">
            <input type="submit" value="Register" className="register" />
          </div>
          <div>
            areTheSame?{alert("Vos deux mots de passe ne sont pas identiques")}:
            <UserSumary />
          </div>
        </form>
      </div>
      <footer>
        <p>
          Made with <b>♡</b> & <b>⚛︎</b> at <b>Le Reacteur</b> by <b>Mathias</b>
        </p>
      </footer>
    </div>
  );
};

export default App;
