import {Home, Quizz } from "../pages";

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
    path: "/quizz",
    component: Quizz,
    exact: true,
  },
];