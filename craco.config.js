/*
 * @Author: huangtian1_v 1246562955@qq.com
 * @Date: 2024-08-08 16:50:10
 * @LastEditors: huangtian1_v 1246562955@qq.com
 * @LastEditTime: 2024-08-18 13:40:37
 * @FilePath: \yellowsky-resume\craco.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const path = require("path");
module.exports = {
  webpack: {
    alias: {
      "@": path.join(__dirname, "src"),
    },
    module: {
      strictExportPresence: true,
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env", "@babel/preset-react"],
            },
          },
        },
        {
          oneOf: [
            {
              test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
              loader: [
                require.resolve("url-loader") +
                  "?limit=10000&name=static/media/[name].[hash:8].[ext]",
                "image-webpack-loader",
              ],
            },
          ],
        },
      ],
    },
    resolve: {
      extensions: [".js", ".jsx"],
    },
    plugins: [
      // ... 其他插件
    ],
    externals: [
      (context, request, callback) => {
        if (
          request.match(/^@\d+\.\d+\.\d+__/) ||
          request.match(/^@\d+\.\d+\.\d+/)
        ) {
          return callback();
        }
        try {
          // 尝试查找模块路径，如果抛出错误，则为node_modules外的模块
          require.resolve(request);
          callback();
        } catch (e) {
          callback(null, `commonjs ${request}`);
        }
      },
    ],
  },
};
