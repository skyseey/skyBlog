/*
 * @Author: huangtian1_v 1246562955@qq.com
 * @Date: 2024-08-09 17:06:33
 * @LastEditors: huangtian1_v 1246562955@qq.com
 * @LastEditTime: 2024-08-23 17:06:10
 * @FilePath: \yellowsky-blog\src\utils\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// 导航去其它站点
const toPathFn = (url) => {
  url && (window.location.href = url);
};
// 复制粘贴文本
const copyTextFn = (text) => {
  return new Promise((resolve, reject) => {
    try {
      let input = document.createElement("textarea");
      input.value = text;
      document.body.appendChild(input);
      input.select();
      document.execCommand("copy");
      document.body.removeChild(input);
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

const toZero = (n) => {
  if (n < 10) {
    return "0" + n;
  } else {
    return "" + n;
  }
};

// 找到对应path
const getPathRoutesFn = (router) => {
  let rootPath = {};
  router.forEach((element) => {
    if (element.path === "/blog") {
      rootPath = element;
      return;
    }
  });
  return rootPath;
};

/**
 *  查找数组中对应的项
 *  @param{list} 目标
 *  @param{key1} 目标依据key
 *  @param{key2} key
 *  @param{children} 递归依据
 */
const findCp = (list, key) => {
  for (let index = 0; index < list.length; index++) {
    const v = list[index];
    if (v.children && v.children.length > 0) {
      let res = findCp(v.children, key);
      return res;
    } else {
      if (v.key === key) {
        return v;
      }
    }
  }
  return null;
};

// 设置主题
const setTheme = (theme) => {
  const root = document.documentElement;
  if (!root) return;
  if (theme.payload) {
    root.style.setProperty("--BgColorLight", "#fff");
  } else {
    root.style.setProperty("--BgColorLight", "aliceblue");
  }
};

export { toPathFn, copyTextFn, toZero, getPathRoutesFn, findCp, setTheme };
