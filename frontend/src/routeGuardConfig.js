// import { lazy } from "react-router-guard";
import CheckSession from "./guards/CheckSession";

export default [
  {
    path: "/coding/",
    canActivate: [CheckSession],
    redirect: "/dashboard"
  },
//   {
//     path: "/user",
//     component: lazy(() => import("./layouts/UserLayout")),
//     canActivate: [checkAuth],
//     routes: [
//       {
//         path: "/user",
//         redirect: "/user/profile"
//       },
//       {
//         path: "/user/profile",
//         canActivate: [checkResolve],
//         component: lazy(() => import("./pages/User/Profile"))
//       },
//       {
//         path: "/user/setting",
//         component: lazy(() => import("./pages/User/Setting"))
//       }
//     ]
//   },
//   {
//     path: "/",
//     component: lazy(() => import("./layouts/MainLayout")),
//     routes: [
//       {
//         path: "/",
//         exact: true,
//         component: lazy(() => import("./pages/Home"))
//       },
//       {
//         path: "/services",
//         redirect: "/services/1"
//       },
//       {
//         path: "/services/1",
//         component: lazy(() => import("./pages/Services/NewService1"))
//       },
//       {
//         path: "/services/2",
//         component: lazy(() => import("./pages/Services/NewService2"))
//       }
//     ]
//   }
];
