import { Route, createRoutesFromChildren } from "react-router-dom"

import { lazyPageBuilder } from "./lib/route"

import Error from "@/pages/Error"
import Login from "@/pages/Login"
import AppLayout from "./containers/AppLayout"

const Home = lazyPageBuilder(() => import("@/pages/Home"))
const Page1 = lazyPageBuilder(() => import("@/pages/Page1"))
const Page2 = lazyPageBuilder(() => import("@/pages/Page2"))
const NotFound = lazyPageBuilder(() => import("@/pages/NotFound"))

const routes = createRoutesFromChildren(
  <Route id="root" ErrorBoundary={Error}>
    <Route path="/" Component={AppLayout}>
      <Route index lazy={Home} />
      <Route path="/page1" lazy={Page1} />
      <Route path="/page2" lazy={Page2} />
    </Route>
    <Route path="/login" Component={Login} />
    <Route path="*" lazy={NotFound} />
  </Route>
)

export default routes
