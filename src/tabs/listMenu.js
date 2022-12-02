import { UserOutlined ,MenuOutlined,TeamOutlined } from "@ant-design/icons";
import user from "./User";

const listMenu = [
  {
    icon: <UserOutlined />,
    label: "user",
    path: "/user",
    component: user
  },
  
  {
    icon: <MenuOutlined />,
    label: "menu",
    path: "/menu",
    component: menu
  },
  {
    icon: <TeamOutlined />,
    label: "team",
    path: "/team",
    component: team
  }
];

export { listMenu };
