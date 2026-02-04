import { lazy } from "react";
import { createBrowserRouter } from "react-router";
import RootLayout from "../../components/layout/RootLayout.jsx";

const MaintenancePage = lazy(
  async () => (await import("../../pages/MaintenancePage.jsx")).default,
);

const NotFoundPage = lazy(
  async () => (await import("../../pages/NotFound.jsx")).default,
);

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    HydrateFallback: () => (
      <div className="h-screen flex-center">Loading...</div>
    ),
    children: [
      {
        index: true,
        lazy: async () => ({
          Component: (await import("../../pages/Home.jsx")).default,
        }),
      },
      {
        path: "/about",
        lazy: async () => ({
          Component: (await import("../../pages/MaintenancePage.jsx")).default,
        }),
      },
      {
        path: "/services",
        lazy: async () => ({
          Component: (await import("../../pages/MaintenancePage.jsx")).default,
        }),
      },
      {
        path: "/page",
        lazy: async () => ({
          Component: (await import("../../pages/MaintenancePage.jsx")).default,
        }),
      },
      {
        path: "/support",
        lazy: async () => ({
          Component: (await import("../../pages/MaintenancePage.jsx")).default,
        }),
      },
    ],
  },
  {
    path: "*",
    lazy: async () => ({
      Component: (await import("../../pages/NotFound.jsx")).default,
    }),
  },
]);
