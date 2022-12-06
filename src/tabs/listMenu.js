import { UserOutlined ,MenuOutlined,TeamOutlined } from "@ant-design/icons";
// import Achieved from "./todos/achieved";
import Achieved from './todos/achieved'
import Unachieved from "./todos/unachieved";
import ActifUser from "./users/actifUser";
import InactifUser from "./users/actifUser";
import ActifAdmin from "./admins/actifAdmin";
import InactifAdmin from "./admins/inactifAdmin";



const listMenu = [
  {
    icon: <UserOutlined />,
    label: "actif users",
    path: "/first",
    component: ActifUser
  },
  {
    icon: <UserOutlined />,
    label: "actif users",
    path: "/first/actif-user",
    component: ActifUser
  },
  
  {
    icon: <UserOutlined />,
    label: "inactif users",
    path: "/first/inactif-user",
    component: InactifUser
  },

  {
    icon: <MenuOutlined />,
    label: "achieved todos",
    path: "/first/achieved-todo",
    component: Achieved
  },
  {
    icon: <MenuOutlined />,
    label: "unachieved todos",
    path: "/first/unachieved-todo",
    component: Unachieved
  },
  {
    icon: <TeamOutlined />,
    label: "actif admins",
    path: "/first/actif-admin",
    component: ActifAdmin
  },
  {
    icon: <TeamOutlined />,
    label: "inactif admins",
    path: "/first/inactif-admin",
    component: InactifAdmin
  }
];

export { listMenu };
