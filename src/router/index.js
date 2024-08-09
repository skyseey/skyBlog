import {
  createBrowserRouter,
  Navigate,
  // redirect,
  // Outlet,
} from "react-router-dom";
import Resume from "./../pages/Resume/index";
import Page500 from "./../pages/NotPage/NotServer.js";
import Page403 from "./../pages/NotPage/NotAuth.js";
import Page404 from "./../pages/NotPage/NotFound.js";

// 路由表
export const routes = [
  {
    index: true,
    element: <Navigate to="/resume" />,
  },
  {
    path: "/resume",
    element: <Resume />,
  },
  // 首页
  // {
  //   path: "/my",
  //   element: (
  //     <BeforeEach>
  //       <Home />
  //     </BeforeEach>
  //   ),
  //   meta: {
  //     menu: true,
  //     title: "考勤管理",
  //     icon: <AppstoreOutlined />,
  //     auth: true,
  //   },
  //   children: [
  //     // {
  //     //   path: "Sign",
  //     //   element: <Sign />,
  //     //   meta: {
  //     //     menu: true,
  //     //     title: "在线打卡签到",
  //     //     icon: <AppstoreOutlined />,
  //     //     auth: true,
  //     //   },
  //     // },
  //   ],
  // },
  // 错误处理
  {
    path: "/403",
    element: <Page403 />,
  },
  {
    path: "/404",
    element: <Page404 />,
  },
  {
    path: "/500",
    element: <Page500 />,
  },
  {
    path: "*",
    element: <Navigate to="/404" />,
  },
];

const router = createBrowserRouter(routes);

export default router;
