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

export { toPathFn, copyTextFn, toZero, getPathRoutesFn, findCp };
