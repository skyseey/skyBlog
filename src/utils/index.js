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

export { toPathFn, copyTextFn };
