import "./App.css";
import "antd/dist/antd.css";
import Login from "./componets/Login";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import LogOut from "./componets/LogOut";

function App() {
  const user = useSelector(selectUser);

  return (
    <>
      <div className="App">{user ? <LogOut /> : <Login />}</div>
    </>
  );
}

export default App;
