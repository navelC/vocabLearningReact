import {Home, NotFound } from "../pages";

// eslint-disable-next-line import/no-anonymous-default-export
export default [
  {
    path: ["/home", "/"],
    exact: true,
    component: () => {
      return (<Home />);
    },
  },
  {
    path: "/admin",
    component: Home,
    exact: true,
  },
  {
    path: ["*"],
    exact: true,
    component: NotFound,
  },
];