import {
  createBrowserRouter,
  Navigate,
  // redirect,
  // Outlet,
} from "react-router-dom";
import { UserOutlined } from "@ant-design/icons";
// 全局守卫
import BeforeEach from "./BeforeEach";
import Resume from "./../pages/Resume/index";
import Page500 from "./../pages/NotPage/NotServer.js";
import Page403 from "./../pages/NotPage/NotAuth.js";
import Page404 from "./../pages/NotPage/NotFound.js";
import ViewPdf from "@/pages/Components/ViewPDF";
import Blog from "@/pages/Blog";
//
import GitNode from "@/pages/Cp/Note/gitNode/index.js";
import LinuxPage from "@/pages/Cp/Note/linuxPage/index.js";
import Note from "@/pages/Cp/Note/index.js";
import MyDemo from "@/pages/Cp/MyDemo/index.js";
import Works from "@/pages/Cp/Works/index.js";

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
  {
    path: "/blog",
    element: (
      <BeforeEach>
        <Blog />
      </BeforeEach>
    ),
    children: [
      {
        path: "/blog/bj",
        meta: {
          title: "笔记",
        },
        // element: <Navigate to="/blog/bj/1" />,
        element: (
            <Note />
        ),
        children: [
          {
            path: "/blog/bj/1",
            icon: <UserOutlined />,
            title: "git笔记",
            element: <GitNode />,
          },
          {
            path: "/blog/bj/2",
            icon: <UserOutlined />,
            title: "linux指令",
            element: <LinuxPage />,
          },
        ],
      },
      {
        path: "/blog/zp",
        element: <Works />,
        meta: {
          title: "作品",
        },
      },
      {
        path: "/blog/demo",
        element: <MyDemo />,
        meta: {
          title: "MyDemo",
        },
      },
    ],
  },
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
