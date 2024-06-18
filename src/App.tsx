import { ConfigProvider, theme } from "antd"
import { useTranslation } from "react-i18next"
import { useDarkMode } from "@/global/useDarkMode"

import { RouterProvider, createBrowserRouter } from "react-router-dom"

import routes from "./routes"

export default function App() {
  const { isDark } = useDarkMode()
  const router = createBrowserRouter(routes)

  const { t } = useTranslation()

  const i18Dir: "rtl" | "ltr" = t("dir")

  return (
    <ConfigProvider
      theme={{
        algorithm: isDark ? theme.darkAlgorithm : theme.defaultAlgorithm,
      }}
      direction={i18Dir || "ltr"}
    >
      <div dir={i18Dir || "ltr"}>
        <RouterProvider router={router} />
      </div>
    </ConfigProvider>
  )
}
