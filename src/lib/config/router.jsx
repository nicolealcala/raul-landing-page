import { createBrowserRouter } from "react-router";
import RootLayout from "../../components/layout/RootLayout.jsx";

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
    HydrateFallback: () => (
      <div className="h-screen flex-center">Loading...</div>
    ),
    lazy: async () => ({
      Component: (await import("../../pages/NotFound.jsx")).default,
    }),
  },
]);
