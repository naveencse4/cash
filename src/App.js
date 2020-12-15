import "antd/dist/antd.css";
import { Layout } from "antd";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { useState } from "react";
import { BrowserRouter } from "react-router-dom";

import SideMenu from "./common/Menu";
import MainContent from "./common/Content";

const { Header, Sider, Content } = Layout;

function App() {
  const [toggle, setToggle] = useState(false);
  return (
    <Layout>
      <BrowserRouter>
        <Sider
          style={{ height: "100vh", backgroundColor: "#fefae0" }}
          collapsible
          collapsed={toggle}
        >
          <div className="brand"> {toggle ? "₹" : "CashLelo"}</div>
          <SideMenu />
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
            {toggle ? (
              <MenuUnfoldOutlined
                className="trigger"
                onClick={() => setToggle(false)}
              />
            ) : (
              <MenuFoldOutlined
                className="trigger"
                onClick={() => setToggle(true)}
              />
            )}
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 280,
            }}
          >
            <MainContent />
          </Content>
        </Layout>
      </BrowserRouter>
    </Layout>
  );
}

export default App;
