import { useTranslation } from "react-i18next"
import { DarkModeSwitch } from "react-toggle-dark-mode"
import { Navigate, Outlet, useLocation, useNavigate } from "react-router-dom"

import {
  UserOutlined,
  GlobalOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from "@ant-design/icons"

import {
  Menu,
  theme,
  Button,
  Avatar,
  Layout,
  Popover,
  Dropdown,
  MenuProps,
  Breadcrumb,
} from "antd"

import menuItems from "./MenuItems"

import { useUser } from "@/global/useUser"
import { useCollapse } from "@/global/useCollapse"
import { useDarkMode } from "@/global/useDarkMode"
import { GlobalLoading } from "@/components/GlobalLoading"

const { Header, Content, Footer, Sider } = Layout

const items: MenuProps["items"] = [
  {
    key: "en",
    label: "English",
  },
  {
    key: "ckb",
    label: "کوردی",
  },
  {
    key: "ar",
    label: "العربية",
  },
]

export default function AppLayout() {
  const { name, setUser } = useUser()
  const { isDark, toggleTheme } = useDarkMode()
  const { collapse, toggleCollapse } = useCollapse()

  const {
    t,
    i18n: { changeLanguage },
  } = useTranslation()

  const { pathname } = useLocation()
  const navigate = useNavigate()

  const {
    token: { colorBgContainer, borderRadiusLG, colorPrimary },
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
          <div className="flex flex-row-reverse items-center gap-8">
            <Popover
              title={t("welcome")}
              placement="bottomRight"
              content={
                <Button
                  type="link"
                  className="p-0"
                  onClick={() => setUser({ name: null })}
                >
                  {t("logout")}
                </Button>
              }
            >
              <Avatar size={"large"} icon={<UserOutlined />} />
            </Popover>
            <Dropdown
              arrow
              destroyPopupOnHide
              placement="bottom"
              menu={{
                items,
                selectable: true,
                selectedKeys: [t("name")],
                onSelect: ({ key }) => changeLanguage(key),
              }}
              overlayClassName="[&_ul]:flex text-center [&_ul]:flex-col [&_ul]:gap-1"
            >
              <div className="text-xl flex items-center cursor-pointer">
                <GlobalOutlined style={{ color: colorPrimary }} className="" />
              </div>
            </Dropdown>

            <DarkModeSwitch
              size={25}
              checked={!isDark}
              onChange={toggleTheme}
              sunColor={colorPrimary}
              moonColor={colorPrimary}
            />
          </div>
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
