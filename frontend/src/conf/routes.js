import Tweet from "../pages/Tweet";
import Login from "../pages/Login";
import Register from "../pages/Register";

const routes = [
    {path: "/", name: "home", component: Tweet},
    {path: "/register", name: "register", component: Register},
    {path: "/tweet", name: "tweet", component: Tweet},
    {path: "/login", name: "login", component: Login},
];

export default routes;