import { ConfigProvider, theme } from "antd"
import { RouterProvider, createBrowserRouter } from "react-router-dom"

import routes from "./routes"
import { useTranslation } from "react-i18next"

export default function App() {
  const router = createBrowserRouter(routes)

  const { t } = useTranslation()

  const i18Dir: "rtl" | "ltr" = t("dir")

  return (
    <ConfigProvider
      theme={{ algorithm: theme.darkAlgorithm }}
      direction={i18Dir || "ltr"}
    >
      <RouterProvider router={router} />
    </ConfigProvider>
  )
}
