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

稍等一会，你就能在 http://localhost:3000 看到你的页面了。

## 配置

### 在移动端使用

卸载 `antd` 安装 `antd-mobile`

```bash
$ npm uninstall antd
$ npm install antd-mobile -S
```

修改 `craco.config.js`，将 `libraryName` 中的 `antd` 改为 `antd-mobile`

> 注：如果不使用 `antd-mobile`，就不安装，然后将 ['import', { libraryName: 'antd', style: true }], 这一行直接删除即可。

### 修改 `webpack` 别名

参考 `craco.config.js` 和 `jsconfig.json` 文件，并对应修改即可。

### 修改开发环境启动端口

修改 `package.json` 中的 `config`，如果你想将端口改为 4000，你可以像下面这样做：

```json
{
  "config": {
    "port": "."
  }
}
```

### 添加生产环境 `source map`

去掉 `package.json` 打包脚本中的 `cross-env GENERATE_SOURCEMAP=false` 即可。

> 注：添加生产环境 source map，虽然可以方便调试打包后的代码，但可能导致代码被反编译，请勿更新到生产环境。

### 为开发环境配置代理

参考 `src/setupProxy.js`。

### 配置 webpack

我们使用 `craco` 来自定义 webpack 配置，如果你需要进阶用法，请阅读 `craco` 的官方文档。

## 进阶使用

### 配置式路由

模板路由配置文件置于 `src/router.js` 中。该文件导出一个路由数组，每一项是一个对象，上面的字段均为 `react-router-dom` 中的 `Route` 组件和 `react-router-cache-route` 中的 `CacheRoute` 的 `props`，但下列两个字段需要注意：

- 路由中的 `component` 的路径前缀是 `@pages/`，也就是说 `component` 配置为 `home` 会渲染 `@pages/home/indx.js` 组件。
- 新增 `title` 字段，用于修改页面标题。

详细的渲染方法请参考 `App.js`。

> 注：路由不支持嵌套。

### 为什么不使用状态管理的库？

React 自身可以处理大部分的状态，而且大部分业务场景不需要复杂的状态管理。如果有全局通用的数据，可以挂载到 `window` 上，这样面对`全局数据不关联页面渲染`或`只在初始化时渲染一次`的场景，已经绰绰有余了。但要面对更复杂的场景，就需要引入状态管理的库了。你可以根据个人喜好去使用 `redux/mobx/concent` 或其他状态管理的库。

## 代码规范

### 公共组件编写规范

每个组件创建一个目录，使用大驼峰命名法，组件内需要使用 `prop-types` 定义 `props` 类型。

组件样式文件使用小驼峰命名法，放在组件目录内。组件最外层元素 `className` 以 `c-` 开头，样式文件用 `.c-` 块包裹所有样式代码以防止样式冲突。

> 注：因为模板没开启 css modules，所以请严格遵守此规则以防止不必要的样式冲突。

可参考模板提供的组件 `Logo`

### 页面组件规范

页面组件放在 `src/pages` 目录内，同样创建一个目录，使用小驼峰命名法，入口组件命名为 `index.js`，样式文件放在命名为 `style.less`。

页面组件最外层元素须添加 `id` 属性，值为页面组件名，如 `ChangePassword` 页面组件的 `id` 属性应设为 `change-passowrd`。同公共组件，样式文件最外层应用 `#name{}` 块包裹全部样式代码，以防止样式冲突。

页面私有组件请勿放在 `src/components` 目录下，直接放在页面组件目录下即可。例如，页面 `home` 中有一个 `Go` 组件，那么新建 `src/home/Go` 目录，然后新建 `src/home/Go/index.js` 和 `src/home/Go/style.less` 进行组件开发。

公共样式文件路径为 `src/style.less`，如需要添加公共样式，覆盖第三方样式，添加原子类等，修改此文件即可。

> 注：每个样式文件都可以添加公共样式，但极其不推荐这修改，因为之后样式会很难维护。

### 代码命名规范

`id`，`className` 请勿使用驼峰命名法，用 `-` 中划线连接两个单词，如： `<div id="change-password" className="text-red"></div>`。

页面组件，公共组件，类请使用大驼峰命名法。

工程化文件中的配置项请使用全大写，单词之间使用 `_` 下划线连接，如：

```js
const API = {
  SOME_API: '/path/to/api/address'
```

变量，函数请使用小驼峰命名法，如：`getUserInfo`。

> 注：命名时请避免使用拼音，尽量使用英文单词，这样语义更明确，也能避免拼音简写相同造成的理解错误。

> 本模板未添加代码风格强制校验，但也请规范自己的代码。

## 补充

### 常用开发组件/工具库推荐

- dayjs `已添加` 处理时间的工具库，API 简洁，gzip 后仅 2kb
- classnames `已添加` 动态修改 `className` 的工具库
- crypto-js `已添加` 一个包含了多种加密算法，摘要算法，转码方法的工具库
- antd `已添加` 阿里开源的组件库
- react-infinite-scroller 滚动加载列表组件库
- viewer/react-photo-view 图片预览组件
- uuid `已添加` 生成 uuid 的工具库

### 特性

- [x] antd/antd-mobile 动态导入
- [x] less
- [x] 装饰器语法
- [x] webpack 别名（VSCode 支持智能补全）
- [x] 页面动态加载，基于路由的代码分割
- [x] 代码风格检测，git hook 提交时代码审查

## 许可证

MIT
