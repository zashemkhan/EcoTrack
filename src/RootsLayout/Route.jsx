import { createBrowserRouter } from "react-router";
import Root from "./Root";
import Home from "../Pages/Home/Home";

import MyActivities from "../Pages/Home/MyActivities/MyActivities";
import AboutUs from "../Pages/AboutUs/AboutUs";
import Contact from "../Pages/Contact/Contact";
import ErrorPage from "../Components/404Page/ErrorPage";
import Challenges from "../Components/AllChallenges/Challenges";
import CreateChallenge from "../Components/CreateNewChallegne/CreateChallenge";
import ChallangeDetails from "../Components/AllChallenges/ChallangeDetails";
import UpdateChallenge from "../Components/UpdateChallenge/UpdateChallenge";
import Profile from "../Components/Profile/Profile";
import ForgetPass from "../Components/ForgetPass/ForgetPass";
import Register from "../Components/Register/Register";
import Login from "../Components/Login/Login";
import PrivateRoute from "../Contexts/PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        index: true,
        Component: Home,
      },
      // user
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/register",
        Component: Register,
      },
      {
        path: "/forgetPass",
        Component: ForgetPass,
      },
      {
        path: "/myprofile",
        element: (
          <PrivateRoute>
            <Profile></Profile>
          </PrivateRoute>
        ),
      },
      // pages
      {
        path: "/challenges",
        element: <Challenges></Challenges>,
      },
      {
        path: "/myactivities",
        element: (
          <PrivateRoute>
            <MyActivities></MyActivities>,
          </PrivateRoute>
        ),
      },
      // footer
      {
        path: "/aboutus",
        Component: AboutUs,
      },
      {
        path: "/contact",
        Component: Contact,
      },
      {
        path: "/add",
        element: (
          <PrivateRoute>
            <CreateChallenge />
          </PrivateRoute>
        ),
      },
      {
        path: "/challenges/:id",
        element: <ChallangeDetails />,
      },
      {
        path: "/UpdateChallenges/:id",
        element: (
          <PrivateRoute>
            <UpdateChallenge></UpdateChallenge>,
          </PrivateRoute>
        ),
      },
    ],
  },
  {
  },
  {
    path: "/*",
    Component: ErrorPage,
  },
]);
