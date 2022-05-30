import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Pages/Shared/Navbar/Navbar";
import Home from "../src/Pages/Home/Home";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/Login/SignUp";
import Order from "./Pages/Home/Order";
import RequireAuth from "./Pages/Login/RequireAuth";
import NotFound from "./Pages/NotFound/NotFound";
import MyPortfolio from "./Pages/MyPortfolio/MyPortfolio";
import Dashboard from "./Pages/Dashboard/Dashboard";
import MyProfile from "./Pages/Dashboard/MyProfile";
import MyOrders from "./Pages/Dashboard/MyOrders";
import AddAReview from "./Pages/Dashboard/AddAReview";
import Blog from "./Pages/Blog/Blog";
import UpdateProfile from "./Pages/Dashboard/UpdateProfile";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/blog" element={<Blog></Blog>}></Route>
        <Route
          path="/myportfolio"
          element={<MyPortfolio></MyPortfolio>}
        ></Route>
        <Route
          path="/order/:id"
          element={
            <RequireAuth>
              <Order></Order>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard></Dashboard>
            </RequireAuth>
          }
        >
          <Route index element={<MyProfile></MyProfile>}></Route>
          <Route
            path="/dashboard/myorders/:email"
            element={<MyOrders></MyOrders>}
          ></Route>
          <Route
            path="/dashboard/addareview"
            element={<AddAReview></AddAReview>}
          ></Route>
          <Route
            path="/dashboard/updateprofile"
            element={<UpdateProfile></UpdateProfile>}
          ></Route>
        </Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
