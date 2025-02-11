# 中小学编程学习辅助平台

这是一个在线编程网站的前端项目，旨在为中小学生提供有趣且富有挑战的编程教程与实践环境，帮助他们培养计算思维和编程能力。

## 目录

- [简介](#简介)
- [项目特点](#项目特点)
- [技术栈](#技术栈)
- [安装与运行](#安装与运行)
- [目录结构](#目录结构)
- [贡献](#贡献)
- [许可](#许可)

## 简介

该平台提供以下核心功能：
- 在线编程教程与示例（例如：[课程管理页面](src/pages/manage/user_manage/AddUser.vue)）
- 用户信息和头像上传（例如：[个人中心页面](src/pages/personal_center/myinfo/TheProfile.vue)）
- 实时在线编程环境（集成 [vue-codemirror](src/main.js)）
- 问题讨论、提交记录和解决方案展示
- 丰富的文档资料（例如：[JavaScript 基本语法介绍](src/data/doc/grammar.md)）

## 项目特点

- **响应式设计**：适配不同设备，保证最佳用户体验。
- **模块化结构**：清晰的 [目录结构](#目录结构) 和组件划分，方便扩展与维护。
- **前后端分离**：前端基于 Vue 生态构建，后端接口调试简单明了，通过 [API模块](src/api/)进行通信。
- **文档完善**：内置语法与教程文档，帮助用户快速上手。

## 技术栈

- Vue 3
- Vue Router
- Pinia
- Vite
- Element Plus
- Tailwind CSS

## 安装与运行

确保你已安装 Node.js (推荐 v14 及以上版本)：

1. 安装依赖

   ```sh
   npm install
   ```

2. 运行开发服务器

   ```sh
   npm run dev
   ```

3. 构建生产版本

   ```sh
   npm run build
   ```

## 目录结构

```
program-education-platform/
├── index.html                # 项目入口页面
├── package.json              # 项目配置及脚本命令
├── vite.config.js            # Vite 配置文件
└── src/                      # 源代码目录
    ├── api/                 # API 接口调用相关模块（例如：[UserServices.js](src/api/UserServices.js)）
    ├── assets/              # 静态资源
    ├── components/          # 公共组件（例如：[FooterBanner.vue](src/components/layout/FooterBanner.vue)）
    ├── data/                # 项目数据和文档（例如：[grammar.md](src/data/doc/grammar.md)）
    ├── pages/               # 页面模块（如用户管理、讨论贴、个人中心等）
    ├── router/              # 路由配置
    ├── stores/              # 状态管理模块
    └── utils/               # 工具库（例如：[tools.js](src/utils/tools.js)）
```

## 贡献

欢迎提交 issue 与 pull request！在贡献前，请确保遵循项目的代码风格和提交规范。

## 许可

本项目使用 [MIT 许可证](LICENSE) 开源，详情请参阅 LICENSE 文件。