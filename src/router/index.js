import {
  createBrowserRouter,
  Navigate,
  // redirect,
  // Outlet,
} from "react-router-dom";
import { BookTwoTone } from "@ant-design/icons";
// 全局守卫
import BeforeEach from "./BeforeEach";
import Resume from "./../pages/Resume/index";
import Page500 from "./../pages/NotPage/NotServer.js";
import Page403 from "./../pages/NotPage/NotAuth.js";
import Page404 from "./../pages/NotPage/NotFound.js";
import ViewPdf from "@/pages/Components/ViewPDF";
import Blog from "@/pages/Blog";
//
import ReatReduxNode from "@/pages/Cp/Note/ReatReduxNode/index.js";
import Often from "@/pages/Cp/Note/often/index.js";
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
        element: <Note />,
        children: [
          {
            path: "/blog/bj/1",
            icon: <BookTwoTone />,
            title: "常用笔记🖊",
            element: <Often />,
          },
          {
            path: "/blog/bj/2",
            icon: <BookTwoTone />,
            title: "React状态管理💪",
            element: <ReatReduxNode />,
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
