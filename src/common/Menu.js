import { Menu } from "antd";
import { MoneyCollectOutlined, NotificationOutlined } from "@ant-design/icons";
import { NavLink } from "react-router-dom";

const SideMenu = () => {
  return (
    <Menu
      them="dark"
      mode="inline"
      defaultSelectedKeys={["1"]}
      style={{ margin: "38px 0px 15px 0px", backgroundColor: "#fefae0" }}
    >
      <Menu.Item key="1" icon={<MoneyCollectOutlined />}>
        <NavLink to="/">Transactions</NavLink>
      </Menu.Item>
      <Menu.Item key="2" icon={<NotificationOutlined />}>
        <NavLink to="/notifications">Notifications</NavLink>
      </Menu.Item>
    </Menu>
  );
};

export default SideMenu;
