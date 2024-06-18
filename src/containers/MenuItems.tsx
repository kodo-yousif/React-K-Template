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
    label,
    children,
    i18n: label,
  } as MenuItem
}

const menuItems: MenuItem[] = [
  getItem("home", "/", <HomeFilled />),
  getItem("hello", "/hello", <WindowsFilled />),
  getItem("page 1", "/page1", <WindowsFilled />),
  getItem("list", "sub1", <DatabaseFilled />, [
    getItem("404", "/kodo"),
    getItem("page 2", "/page2", <AppleFilled />),
  ]),
]

export default menuItems
