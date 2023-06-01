import React, { Profiler } from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import HeaderComponent, { Title } from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Aboutus from "./components/Aboutus";
import Error from "./components/Error";
import Contact from "./components/Contact";
import ResturantDetails from "./components/ResturantDetails";
import Profile from "./components/Profile";
import Cart from "./components/Cart";
import { Provider } from "react-redux";
import store from "./Store";
const Applayout = () => {
  return (
    <>
      <Provider store={store}>
        <HeaderComponent />
        {/* <Aboutus/>
            <Body/>
            <Contact/> */}
        <Outlet />
        <Footer />
      </Provider>
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/aboutus",
        element: <Aboutus />,
        children: [
          {
            path: "profile",
            element: <Profile />,
          },
        ],
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/resturants/:id",
        element: <ResturantDetails />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
