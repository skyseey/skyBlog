import {
  createBrowserRouter,
  Navigate,
  // redirect,
  // Outlet,
} from "react-router-dom";
// 全局守卫
import BeforeEach from "./BeforeEach";
import Resume from "./../pages/Resume/index";
import Page500 from "./../pages/NotPage/NotServer.js";
import Page403 from "./../pages/NotPage/NotAuth.js";
import Page404 from "./../pages/NotPage/NotFound.js";
import ViewPdf from "@/pages/Components/ViewPDF";

// 路由表
export const routes = [
  {
    index: true,
    element: <Navigate to="/resume" />,
  },
  {
    path: "/resume",
    element: (
      <BeforeEach>
        <Resume />
      </BeforeEach>
    ),
  },
  // PDF预览
  {
    path: "/viewpdf",
    element: <ViewPdf />,
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

// 全局路由守卫
export const RouterBeforEach = (Cp) => {
  // useEffect(() => {
  //   NProgress.done();
  //   return () => NProgress.start();
  // });
  return <Cp />;
};

const router = createBrowserRouter(routes);

export default router;
