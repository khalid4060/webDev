import ReactDOM from "react-dom/client";
import React, { Children } from "react";
import Header from "./component/Header";
import Body from "./component/Body";
import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./component/Error";
import About from "./component/About";
import Contact from "./component/Contact";
import { Outlet,RouterProvider } from "react-router-dom";
import Menu from "./component/Menu";
import { Provider } from "react-redux";
import appStore from "./utility/appStore";
import Cart from "./component/Cart";
import Progress from "./component/Progress";

const Applayout=()=>{
  return (
    <Provider store={appStore}>
      <div id="applayout">
        <Header />
        <Outlet />
      </div>
    </Provider>
  );
};

const approut = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,
    children: [
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/menu/:resid",
        element: <Menu />,
      },
      {
        path: "/Cart",
        element: <Cart />,
      },
      {
        path: "/progress",
        element: <Progress />,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={approut} />);