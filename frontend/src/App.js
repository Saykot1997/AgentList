import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import CustomerService from './Pages/CustomerService';
import Admin from './Pages/Admin';
import SuperAgent from "./Pages/SuperAgent";
import OnlineMusterAgent from "./Pages/OnlineMusterAgent";
import Login from "./Pages/Login";
import { useEffect } from "react";
import { Host } from "./Data";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import CreateAgent from "./Pages/CreateAgent";
import { setAllUsers } from "./Redux/UserSlice";
import ManegeAgents from "./Pages/ManegeAgents";

function App() {

  const user = useSelector(state => state.User.User);
  const allUser = useSelector(state => state.User.allUsers);
  const dispatch = useDispatch();

  useEffect(() => {

    const getConnection = async () => {

      const res = await axios.get(`${Host}/api/user/getAllAgents`);
      dispatch(setAllUsers(res.data));
    }

    getConnection();

  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/customerService" element={<CustomerService />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/superAgent" element={<SuperAgent />} />
        <Route path="/onlineMasterAgent" element={<OnlineMusterAgent />} />
        <Route path="/manegeAgents" element={user ? <ManegeAgents /> : <Login />} />
        <Route path="/Login" element={user ? <Home /> : <Login />} />
        <Route path="/createAgent" element={user ? <CreateAgent /> : <Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
