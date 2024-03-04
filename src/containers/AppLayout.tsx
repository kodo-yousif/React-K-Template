import { Navigate, Outlet, useLocation, useNavigate } from "react-router-dom"
import {
  UserOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from "@ant-design/icons"
import { Avatar, Breadcrumb, Button, Layout, Menu, Popover, theme } from "antd"

import { useUser } from "@/global/useUser"
import { useCollapse } from "@/global/useCollapse"
import { GlobalLoading } from "@/components/GlobalLoading"
import menuItems from "./MenuItems"

const { Header, Content, Footer, Sider } = Layout

export default function AppLayout() {
  const { name, setUser } = useUser()
  const { collapse, toggleCollapse } = useCollapse()

  const { pathname } = useLocation()
  const navigate = useNavigate()

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken()

  if (!name) return <Navigate to="/login" />
  return (
    <Layout className="h-screen overflow-hidden">
      <GlobalLoading />
      <Sider collapsible collapsed={collapse} onCollapse={toggleCollapse}>
        <div className="h-10 rounded bg-slate-400 m-4" />
        <Menu
          theme="dark"
          mode="inline"
          items={menuItems}
          selectedKeys={[pathname]}
          onClick={({ key }) => navigate(key)}
        />
      </Sider>
      <Layout>
        <Header
          style={{ background: colorBgContainer }}
          className="p-4 flex items-center justify-between"
        >
          <Button
            type="text"
            onClick={toggleCollapse}
            icon={collapse ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          />
          <Popover
            title="Welcome"
            placement="bottomRight"
            content={
              <Button
                type="link"
                className="p-0"
                onClick={() => setUser({ name: null })}
              >
                Logout
              </Button>
            }
          >
            <Avatar size={"large"} icon={<UserOutlined />} />
          </Popover>
        </Header>
        <Content className="mx-4 flex flex-col">
          <Breadcrumb
            className="my-4"
            items={[{ title: "User" }, { title: "Bill" }]}
          />
          <div
            className="p-6 overflow-auto "
            style={{
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <Outlet />
          </div>
        </Content>
        <Footer className="text-center">
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  )
}
