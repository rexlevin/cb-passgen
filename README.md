# 密码生成器 (Password Generator)

![img](./public/logo_128x128.png)

# 项目描述

这是一个基于 Vue.js 的 canbox 平台的密码生成工具，用于快速生成符合用户需求的随机密码。支持自定义密码数量、长度范围以及字符集选择。

# 功能特性

- **自定义密码数量**：用户可以指定生成的密码数量。
- **密码长度范围**：支持设置密码的最小和最大长度。
- **字符集选择**：提供数字、小写字母、大写字母和特殊符号的灵活组合。
- **一键重置**：快速清空所有设置和生成的密码。

# 使用方法

1. **安装依赖**：

   ```bash
   npm install
   ```
2. **启动开发服务器**：

   ```bash
   npm run dev
   ```
3. **构建生产版本**：

   ```bash
   npm run build
   ```

# 项目结构

```
/depot/cargo/cb-passgen
├── src
│   ├── views
│   │   └── PasswordGenerator.vue  # 主界面组件
├── README.md                     # 项目说明文件
└── package.json                  # 项目依赖配置
```

# 技术栈

- **前端框架**：Vue.js
- **样式**：原生 CSS
- **构建工具**：Vite

# 贡献

欢迎提交 Issue 或 Pull Request 改进项目。

# 许可证

Apache 2.0
