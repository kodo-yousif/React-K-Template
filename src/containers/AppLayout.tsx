import { useState } from "react"
import {
  FileOutlined,
  TeamOutlined,
  UserOutlined,
  DesktopOutlined,
  PieChartOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from "@ant-design/icons"
import type { MenuProps } from "antd"
import { Avatar, Breadcrumb, Button, Layout, Menu, Popover, theme } from "antd"

const { Header, Content, Footer, Sider } = Layout

type MenuItem = Required<MenuProps>["items"][number]

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem
}

const items: MenuItem[] = [
  getItem("Option 1", "1", <PieChartOutlined />),
  getItem("Option 2", "2", <DesktopOutlined />),
  getItem("User", "sub1", <UserOutlined />, [
    getItem("Tom", "3"),
    getItem("Bill", "4"),
    getItem("Alex", "5"),
  ]),
  getItem("Team", "sub2", <TeamOutlined />, [
    getItem("Team 1", "6"),
    getItem("Team 2", "8"),
  ]),
  getItem("Files", "9", <FileOutlined />),
]

export default function AppLayout() {
  const [collapsed, setCollapsed] = useState(false)
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken()

  return (
    <Layout className="h-screen overflow-hidden">
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className="h-10 rounded bg-slate-400 m-4" />
        <Menu
          theme="dark"
          mode="inline"
          items={items}
          defaultSelectedKeys={["1"]}
        />
      </Sider>
      <Layout>
        <Header
          style={{ background: colorBgContainer }}
          className="p-4 flex items-center justify-between"
        >
          <Button
            type="text"
            onClick={() => setCollapsed(!collapsed)}
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          />
          <Popover
            title="Welcome"
            placement="bottomRight"
            content={<a className="text-blue-400">Logout</a>}
          >
            <Avatar size={"large"} icon={<UserOutlined />} />
          </Popover>
        </Header>
        <Content className="mx-4 flex flex-col">
          <Breadcrumb className="my-4">
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          <div
            className="p-6 overflow-auto "
            style={{
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            Bill is a cat.
            <h1 className="underline">Hello your from there </h1>
            <h1 className="underline">Hello your from there </h1>
            <h1 className="underline">Hello your from there </h1>
            <h1 className="underline">Hello your from there </h1>
            <h1 className="underline">Hello your from there </h1>
            <h1 className="underline">Hello your from there </h1>
            <h1 className="underline">Hello your from there </h1>
            <h1 className="underline">Hello your from there </h1>
            <h1 className="underline">Hello your from there </h1>
            <h1 className="underline">Hello your from there </h1>
            <h1 className="underline">Hello your from there </h1>
            <h1 className="underline">Hello your from there </h1>
            <h1 className="underline">Hello your from there </h1>
            <h1 className="underline">Hello your from there </h1>
            <h1 className="underline">Hello your from there </h1>
            <h1 className="underline">Hello your from there </h1>
            <h1 className="underline">Hello your from there </h1>
            <h1 className="my-5">Im Kodo who are you ?</h1>
            <h1 className="my-5">Im Kodo who are you ?</h1>
            <h1 className="my-5">Im Kodo who are you ?</h1>
            <h1 className="my-5">Im Kodo who are you ?</h1>
            <h1 className="my-5">Im Kodo who are you ?</h1>
            <h1 className="my-5">Im Kodo who are you ?</h1>
            <h1 className="my-5">Im Kodo who are you ?</h1>
            <h1 className="my-5">Im Kodo who are you ?</h1>
            <h1 className="my-5">Im Kodo who are you ?</h1>
            <h1 className="my-5">Im Kodo who are you ?</h1>
            <h1 className="my-5">Im Kodo who are you ?</h1>
            <h1 className="my-5">Im Kodo who are you ?</h1>
            <h1 className="my-5">Im Kodo who are you ?</h1>
            <h1 className="my-5">Im Kodo who are you ?</h1>
            <h1 className="my-5">Im Kodo who are you ?</h1>
            <h1 className="my-5">Im Kodo who are you ?</h1>
          </div>
        </Content>
        <Footer className="text-center">
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  )
}
