import type { RouteObject } from "react-router-dom"

type Module = RouteObject & { default: React.FC }

/**
 * Asynchronously builds a lazy-loaded page.
 *
 * @example
 * // Asynchronously build a lazy-loaded page for the index route
 * const indexPage = await lazyPageBuilder(() => import("~/pages/routes/_index"));
 *
 * // Invoke the returned function to get the page component and loader
 * const { Component, loader } = indexPage();
 */

export const lazyPageBuilder = (module: () => Promise<unknown>) => async () => {
  const {
    default: Page,
    loader,
    action,
    shouldRevalidate,
    ErrorBoundary,
  } = (await module()) as Module

  return {
    Component: Page,
    loader,
    action,
    shouldRevalidate,
    ErrorBoundary,
  }
}
