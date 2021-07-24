# React 页面开发模板

**中文文档 | [English](./README.md)**

🎉 react 页面开发模板，基于 CRA，支持 antd 按需加载 less，装饰器语法，webpack 别名。

😁 Happy coding

## 起步

1. 克隆模板

```bash
$ git clone https://github.com/Gu-Miao/react-template.git
```

2. 修改目录名和 `package.json` 里的配置项

将目录名 `react-template` 改为你的项目名，然后修改 `package.json` 里的配置项，例如 `name`，`description`，`repository` 等等。然后将你不需要的依赖或文件移除。

3. 安装依赖

```bash
$ npm install
```

4. 启动项目

```
$ npm start
```

稍等一会，你就能在 http://localhost:5000 看到你的页面了。

## 配置

### 在移动端使用

卸载 `antd` 安装 `antd-mobile`

```bash
$ yarn uninstall antd
$ yarn install antd-mobile -S
```

修改 `.cracorc.js`，将 `libraryName` 中的 `antd` 改为 `antd-mobile`

> 注：如果不使用 `antd-mobile`，就不安装，然后将 ['import', { libraryName: 'antd', style: true }], 这一行直接删除即可。

### 修改 `webpack` 别名

参考 `.cracorc.js` 和 `jsconfig.json` 文件，并对应修改即可。

### 修改开发环境启动端口

修改 `.env` 中的即可。

### 添加生产环境 `source map`

将 `.env` 中的 `GENERATE_SOURCEMAP` 改为 `true` 即可。

> 注：添加生产环境 source map，虽然可以方便调试打包后的代码，但可能导致代码被反编译，请勿更新到生产环境。

### 为开发环境配置代理

参考 `src/setupProxy.js`。


## 进阶使用

### 配置 webpack

我们使用 `craco` 来自定义 webpack 配置，如果你需要进阶用法，请阅读 `craco` 的官方文档。

### 配置式路由

模板路由配置文件置于 `src/router.js` 中。该文件导出一个路由数组，每一项是一个对象，上面的字段均为 `react-router-dom` 中的 `Route` 组件和 `react-router-cache-route` 中的 `CacheRoute` 的 `props`，但下列两个字段需要注意：

- 路由中的 `component` 的路径前缀是 `@pages/`，也就是说 `component` 配置为 `home` 会渲染 `@pages/home/indx.js` 组件。
- 新增 `title` 字段，用于修改页面标题。

详细的渲染方法请参考 `App.js`。

> 注：路由不支持嵌套。

### 为什么不使用状态管理的库？

React 自身可以处理大部分的状态，而且大部分业务场景不需要复杂的状态管理。如果有全局通用的数据，可以挂载到 `window` 上，这样面对`全局数据不关联页面渲染`或`只在初始化时渲染一次`的场景，已经绰绰有余了。但要面对更复杂的场景，就需要引入状态管理的库了。你可以根据个人喜好去使用 `redux/mobx/concent` 或其他状态管理的库。

### 特性

- [x] antd/antd-mobile 动态导入
- [x] less
- [x] 装饰器语法
- [x] webpack 别名（VSCode 支持智能补全）
- [x] 页面动态加载，基于路由的代码分割
- [x] 代码风格检测

## 许可证

MIT
