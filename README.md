# react-cloud-music

> 参考 https://github.com/sanyuan0704/react-cloud-music，升级为 TypeScript 版本

## Scripts

```bash
# 启动项目
yarn start

# 编译
yarn build

# 生成依赖分析
yarn report

# 开发 storybook
yarn storybook

# 创建一个通用组件/页面/布局/容器
yarn new:component/page/layout/container

# git commit
yarn commit
```

## 项目目录结构

<details>
<summary>展开查看</summary>
<pre><code>
├── assets           图片字体等资源
│
├── components       公用组件
│
├── config           配置
│
├── constants        常量
│
├── containers       状态容器
│
├── events           事件 (通常用于 view 和 services/tools 的解耦)
│
├── layouts          布局
│
├── pages            页面
│
├── routes           路由
│
├── services         数据层 (网络数据/本地存储数据/mock 数据)
│
├── styles           样式
│
├── tools            工具
│
├── typings          类型定义
│
├── App.tsx          根组件
│
└── index.tsx        入口
</code></pre>
</details>

## 环境

### storybook

```bash
# init
npx -p @storybook/cli sb init
```

### hygen

```bash
# init
npm i -g hygen
cd project
hygen init self
hygen generator new component # 创建 component 命令
```
