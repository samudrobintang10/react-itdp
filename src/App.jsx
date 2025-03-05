import { useContext, useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import toast, { Toaster } from "react-hot-toast";
import "./App.css";
import Input from "./Input";
import logoBSI from "/Bank_Syariah_Indonesia.png";
import logoBJB from "/Bank_BJB_logo.png";
import { Link } from "react-router";
import { AuthContext } from "./context/AuthContext";

function App() {
  const authContext = useContext(AuthContext);
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    age: 0,
  });
  const { count, setCount } = useContext(AuthContext);

  console.log(authContext.isAuthenticated)

  function submit(user) {
    toast(
      `firstName: ${user.firstName}, lastName: ${user.lastName}, age: ${user.age}`
    );
  }

  // useEffect(() => {
  //   if (count != 0 && count % 10 === 0) {
  //     toast("Hallo");
  //   }
  // }, [user]);

  return (
    <div>
      <img src={logoBJB} alt="" width={500} />
      <br />
      <Input
        type="text"
        placeholder="firstName"
        onChange={(event) =>
          setUser({ ...user, firstName: event.target.value })
        }
        value={user.firstName}
      />
      <br />
      <Input
        type="text"
        placeholder="lastName"
        onChange={(event) => setUser({ ...user, lastName: event.target.value })}
        value={user.lastName}
      />
      <br />
      <Input
        type="number"
        placeholder="lastName"
        onChange={(event) => setUser({ ...user, age: event.target.value })}
        value={user.age}
      />
      <br />
      <button onClick={() => submit(user)}>Submit</button>
      <br />
      <Link to="/profile">Profile</Link>
      <br />
      <Link to="/study">Study</Link>
      <br />
      <Link to="/work">Work</Link>
      <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      <Toaster />
    </div>
  );
}

export default App;
