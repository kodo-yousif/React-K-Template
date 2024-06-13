import type { MenuProps } from "antd"
import {
  HomeFilled,
  AppleFilled,
  DatabaseFilled,
  WindowsFilled,
} from "@ant-design/icons"

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

const menuItems: MenuItem[] = [
  getItem("Home", "/", <HomeFilled />),
  getItem("Hello", "/hello", <WindowsFilled />),
  getItem("Page 1", "/page1", <WindowsFilled />),
  getItem("Page 2", "/page2", <AppleFilled />),
  getItem("List", "sub1", <DatabaseFilled />, [
    getItem("Home", "/", <HomeFilled />),
    getItem("Page 1", "/page1", <WindowsFilled />),
    getItem("Page 2", "/page2", <AppleFilled />),
    getItem("Home", "/"),
    getItem("Page 1", "/page1"),
    getItem("Page 2", "/page2"),
  ]),
]

export default menuItems
