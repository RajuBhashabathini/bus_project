import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import App from "./App";
import { Provider } from "react-redux";
import store from "./Redux/store";
import "./index.css";
import Body from "./Pages/Body";

const Signup = lazy(() => import("./Pages/SignUpPage"));
const Signin = lazy(() => import("./Pages/Signin"));
const Dashboard = lazy(() => import("./Pages/Dashboard"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "signin",
        element: (
          <Suspense loading={" signin is about to come"}>
            <Signin />
          </Suspense>
        ),
      },
      {
        path: "signup",
        element: (
          <Suspense loading={"Sign Up is about to come"}>
            <Signup />
          </Suspense>
        ),
      },
      {
        path: "dashboard",
        element: (
          <Suspense loading={"Dashboard is about to come"}>
            <Dashboard />
          </Suspense>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
