import { useDispatch, useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import "./App.css";
import { logOutUser } from "./Redux/userDetails";
import Header from "./Pages/Header";
import Footer from "./Pages/Footer";

const App = () => {
  const user = useSelector((state) => state.userDetails.details[0]);
  console.log("user 1122 :", user);
  const dispatch = useDispatch();
  const { firstName, lastName } = user;

  return (
    <div className="App p-3 w-full ">
      <div>
        <Header />
      </div>
      <div className="flex justify-between">
        <h1 className="font-bold bg-red-400">
          Welcome {`${firstName} ${lastName}`}
        </h1>
        <p
          onClick={() => {
            dispatch(logOutUser());
          }}
        >
          <Link to={"/signin"}>
            {firstName === "Guest" ? "Signin" : "SignOut"}
          </Link>
        </p>
      </div>
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;
